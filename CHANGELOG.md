# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-08-11

### Added
- Initial release of Possinote JavaScript/TypeScript SDK
- **SMS Operations**:
  - Send single SMS messages
  - Send bulk SMS messages
  - Schedule single SMS messages
  - Schedule bulk SMS messages
  - Get SMS history
  - Get scheduled SMS messages
  - Cancel scheduled SMS messages
- **Email Operations**:
  - Send single emails
  - Send bulk emails
  - Get email history
- **Scheduling Operations**:
  - Schedule single emails
  - Schedule bulk emails
  - Schedule multiple individual emails
  - Get scheduled emails
  - Cancel scheduled emails
- **Error Handling**:
  - AuthenticationError for invalid API keys
  - PaymentRequiredError for insufficient credits
  - RateLimitError for rate limit exceeded
  - ValidationError for invalid request data
  - APIError for other API errors
- **Features**:
  - Comprehensive API coverage
  - Full TypeScript support with type definitions
  - Automatic error handling
  - Response parsing
  - Axios integration
  - JSON serialization/deserialization
  - Browser and Node.js support
  - ES2020 target with CommonJS modules

### Technical Details
- Built with TypeScript 5.0+
- Uses axios for HTTP requests
- Full type definitions for all methods
- Comprehensive test coverage with Jest
- ESLint and Prettier for code quality
- Full API documentation
- MIT License

### Breaking Changes
- None (initial release)

### Migration Guide
- N/A (initial release)

## [Unreleased]

### Planned Features
- Webhook support
- Rate limiting utilities
- Retry mechanisms
- Logging improvements
- Performance optimizations
- ESM module support
- Deno support
