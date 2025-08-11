# JavaScript/TypeScript SDK Deployment Guide

This guide will help you deploy the Possinote JavaScript/TypeScript SDK to npm.

## Prerequisites

1. **npm Account**: Create an account at [npmjs.com](https://npmjs.com)
2. **API Token**: Get your npm API token from your account settings
3. **GitHub Account**: For hosting the source code

## Step 1: Prepare the Repository

### 1.1 Create GitHub Repository

Create a new repository on GitHub:
- Repository name: `possinote-js`
- Description: "Official JavaScript/TypeScript SDK for PossiNote API"
- Make it public
- Add MIT License
- Add README.md

### 1.2 Clone and Setup

```bash
git clone https://github.com/yourusername/possinote-js.git
cd possinote-js
```

### 1.3 Copy SDK Files

Copy all files from `sdk/js-ts/` to the repository root:

```bash
# Copy all SDK files
cp -r /path/to/possi_notify_ui/sdk/js-ts/* .
```

### 1.4 Update Repository URLs

Edit `package.json` to update repository URLs:

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/possinote-js.git"
  },
  "bugs": {
    "url": "https://github.com/yourusername/possinote-js/issues"
  },
  "homepage": "https://github.com/yourusername/possinote-js#readme"
}
```

## Step 2: Test the Package Locally

### 2.1 Build the Package

```bash
# Install dependencies
npm install

# Build the package
npm run build
```

This will create the `dist/` folder with compiled JavaScript files.

### 2.2 Test Locally

```bash
# Test the build
npm pack

# This creates possinote-1.0.0.tgz
# Install it locally to test
npm install ./possinote-1.0.0.tgz
```

### 2.3 Test Installation

```bash
node
```

```javascript
const { Possinote } = require('possinote');
const client = new Possinote('test_key');
console.log('SDK loaded successfully!');
```

## Step 3: Deploy to npm

### 3.1 Login to npm

```bash
npm login
# Enter your npm username, password, and email
```

### 3.2 Publish the Package

```bash
npm publish
```

### 3.3 Verify Deployment

Visit [https://www.npmjs.com/package/possinote](https://www.npmjs.com/package/possinote) to verify the package is published.

## Step 4: Update Documentation

### 4.1 Update README.md

Ensure the README.md contains:
- Installation instructions
- Quick start guide
- API reference
- Error handling examples
- Development setup
- TypeScript support
- Browser support
- Support information

### 4.2 Create CHANGELOG.md

```markdown
# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2025-08-11

### Added
- Initial release
- SMS sending and scheduling
- Email sending and scheduling
- Comprehensive error handling
- Full API coverage
- TypeScript support
```

## Step 5: Continuous Integration (Optional)

### 5.1 GitHub Actions

Create `.github/workflows/release.yml`:

```yaml
name: Release

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '16'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build
      - run: npm test
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### 5.2 Set Repository Secret

Add `NPM_TOKEN` secret in your GitHub repository settings.

## Step 6: Version Management

### 6.1 Update Version

To release a new version:

1. Update version in `package.json`:
   ```json
   {
     "version": "1.0.1"
   }
   ```

2. Create git tag:
   ```bash
   git tag v1.0.1
   git push origin v1.0.1
   ```

### 6.2 Release Process

```bash
# Update version in package.json
# Build package
npm run build

# Test locally
npm pack
npm install ./possinote-1.0.1.tgz

# Publish to npm
npm publish

# Push to GitHub
git add .
git commit -m "Release v1.0.1"
git tag v1.0.1
git push origin main
git push origin v1.0.1
```

## Step 7: Package Configuration

### 7.1 package.json Configuration

Ensure your `package.json` is properly configured:

```json
{
  "name": "possinote",
  "version": "1.0.0",
  "description": "Official JavaScript/TypeScript SDK for PossiNote API",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "test": "jest",
    "lint": "eslint src/**/*.ts",
    "format": "prettier --write src/**/*.ts",
    "prepare": "npm run build"
  },
  "keywords": [
    "possinote",
    "sms",
    "email",
    "scheduling",
    "api",
    "typescript",
    "javascript"
  ],
  "author": "PossiNote Team <support@possitech.net>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/possitech/possinote-js.git"
  },
  "bugs": {
    "url": "https://github.com/possitech/possinote-js/issues"
  },
  "homepage": "https://github.com/possitech/possinote-js#readme",
  "dependencies": {
    "axios": "^1.6.0"
  },
  "devDependencies": {
    "@types/jest": "^29.5.0",
    "@types/node": "^20.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "eslint": "^8.0.0",
    "jest": "^29.5.0",
    "prettier": "^3.0.0",
    "ts-jest": "^29.1.0",
    "typescript": "^5.0.0"
  },
  "engines": {
    "node": ">=14.0.0"
  },
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ]
}
```

### 7.2 TypeScript Configuration

Ensure your `tsconfig.json` is properly configured:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "removeComments": false,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noUncheckedIndexedAccess": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
```

## Step 8: Testing Configuration

### 8.1 Jest Configuration

Ensure your `jest.config.js` is properly configured:

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
};
```

### 8.2 ESLint Configuration

Ensure your `.eslintrc.js` is properly configured:

```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
```

## Troubleshooting

### Common Issues

1. **Authentication Error**: Ensure your npm token is correct
2. **Version Conflict**: Check if the version already exists on npm
3. **Build Error**: Verify TypeScript compilation succeeds
4. **Import Error**: Check that all exports are properly defined in index.ts

### Support

For deployment issues:
- Check npm documentation: https://docs.npmjs.com/
- Contact support: support@possitech.net

## Next Steps

After successful deployment:

1. **Announce Release**: Share on social media and developer communities
2. **Monitor Usage**: Track downloads and issues on npm
3. **Gather Feedback**: Encourage users to report issues and request features
4. **Plan Updates**: Schedule regular maintenance and feature updates
