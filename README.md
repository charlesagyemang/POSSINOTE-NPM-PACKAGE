# Possinote JavaScript/TypeScript SDK

Official JavaScript/TypeScript SDK for the PossiNote API - Send SMS, emails, and schedule messages with ease.

## Installation

### From npm

```bash
npm install possinote
```

### From Source

```bash
git clone https://github.com/charlesagyemang/POSSINOTE-NPM-PACKAGE
cd possinote-js
npm install
npm run build
```

## Quick Start

### JavaScript

```javascript
const { Possinote } = require('possinote');

// Initialize the client with your API key
const client = new Possinote('your_api_key_here');

// Send a single SMS
const response = await client.sms.send(
  '+233244123456',
  'Hello from Possinote!',
  'YourSenderID'
);

// Send a single email
const emailResponse = await client.email.send(
  'user@example.com',
  'Welcome to Possinote',
  '<h1>Hello!</h1><p>Welcome to our platform.</p>',
  'Your Company'
);
```

### TypeScript

```typescript
import { Possinote } from 'possinote';

// Initialize the client with your API key
const client = new Possinote('your_api_key_here');

// Send a single SMS
const response = await client.sms.send(
  '+233244123456',
  'Hello from Possinote!',
  'YourSenderID'
);

// Send a single email
const emailResponse = await client.email.send(
  'user@example.com',
  'Welcome to Possinote',
  '<h1>Hello!</h1><p>Welcome to our platform.</p>',
  'Your Company'
);
```

## API Reference

### Authentication

All API requests require authentication using your API key:

```javascript
const client = new Possinote('your_api_key_here');
```

### SMS Operations

#### Send Single SMS

```javascript
const response = await client.sms.send(
  '+233244123456',
  'Your message here',
  'YourSenderID'
);

// Response
{
  success: true,
  data: {
    message_id: "msg_123456789",
    to: "+233244123456",
    status: "queued",
    cost: 1.0,
    created_at: "2025-08-11T11:30:00Z"
  }
}
```

#### Send Bulk SMS

```javascript
const response = await client.sms.sendBulk(
  'YourSenderID',
  [
    { to: '+233244123456', message: 'Message 1' },
    { to: '+233244123457', message: 'Message 2' }
  ]
);

// Response
{
  success: true,
  data: {
    batch_id: "batch_123456789",
    total_messages: 2,
    successful: 2,
    failed: 0,
    total_cost: 2.0,
    messages: [
      { message_id: "msg_1", to: "+233244123456", status: "queued" },
      { message_id: "msg_2", to: "+233244123457", status: "queued" }
    ]
  }
}
```

#### Schedule Single SMS

```javascript
const response = await client.sms.schedule(
  '+233244123456',
  'Scheduled message',
  'YourSenderID',
  '2025-08-11T12:00:00Z'
);

// Response
{
  success: true,
  data: {
    id: "schedule_123456789",
    recipient: "+233244123456",
    message: "Scheduled message",
    scheduled_at: "2025-08-11T12:00:00Z",
    status: "pending",
    cost: "1.0"
  }
}
```

#### Schedule Bulk SMS

```javascript
const response = await client.sms.scheduleBulk(
  'YourSenderID',
  [
    { recipient: '+233244123456', message: 'Scheduled message 1' },
    { recipient: '+233244123457', message: 'Scheduled message 2' }
  ],
  '2025-08-11T12:00:00Z'
);

// Response
{
  success: true,
  data: {
    batch_id: "batch_123456789",
    scheduled_count: 2,
    total_cost: 2.0,
    scheduled_at: "2025-08-11T12:00:00Z",
    messages: [
      { id: "schedule_1", recipient: "+233244123456", status: "pending" },
      { id: "schedule_2", recipient: "+233244123457", status: "pending" }
    ]
  }
}
```

### Email Operations

#### Send Single Email

```javascript
const response = await client.email.send(
  'user@example.com',
  'Welcome Email',
  '<h1>Welcome!</h1><p>Thank you for joining us.</p>',
  'Your Company'
);

// Response
{
  success: true,
  message: "Email queued for delivery",
  recipient: "user@example.com",
  message_id: "email_123456789"
}
```

#### Send Bulk Email

```javascript
const response = await client.email.sendBulk(
  'Newsletter',
  '<h1>Newsletter</h1><p>This is our monthly newsletter.</p>',
  ['user1@example.com', 'user2@example.com'],
  'Your Company'
);

// Response
{
  success: true,
  message: "Bulk emails queued for delivery",
  queued_count: 2,
  total_count: 2,
  batch_id: "batch_123456789",
  emails: [
    { message_id: "email_1", recipient: "user1@example.com", status: "queued" },
    { message_id: "email_2", recipient: "user2@example.com", status: "queued" }
  ]
}
```

### Scheduling Operations

#### Schedule Single Email

```javascript
const response = await client.scheduling.scheduleEmail(
  'user@example.com',
  'Scheduled Email',
  '<h1>Scheduled Content</h1>',
  '2025-08-11T12:00:00Z',
  'Your Company'
);

// Response
{
  success: true,
  data: {
    id: "email_schedule_123456789",
    recipient: "user@example.com",
    subject: "Scheduled Email",
    scheduled_at: "2025-08-11T12:00:00Z",
    status: "pending",
    cost: "1.0"
  }
}
```

#### Schedule Bulk Individual Emails

```javascript
const response = await client.scheduling.scheduleMultipleEmails([
  {
    recipient: 'user1@example.com',
    subject: 'Personalized Email 1',
    content: '<h1>Hello User 1!</h1>',
    scheduled_at: '2025-08-11T12:00:00Z',
    sender_name: 'Your Company'
  },
  {
    recipient: 'user2@example.com',
    subject: 'Personalized Email 2',
    content: '<h1>Hello User 2!</h1>',
    scheduled_at: '2025-08-11T12:00:00Z',
    sender_name: 'Your Company'
  }
]);

// Response
{
  success: true,
  data: {
    batch_id: "batch_123456789",
    total_scheduled: 2,
    total_cost: 2.0,
    scheduled_emails: [
      { id: "email_1", recipient: "user1@example.com", status: "pending" },
      { id: "email_2", recipient: "user2@example.com", status: "pending" }
    ]
  }
}
```

## Framework Integration

### Node.js Integration

#### 1. Install the Package
```bash
npm install possinote
```

#### 2. Configure in Application
```javascript
// config/possinote.js
const { Possinote } = require('possinote');

const possinoteClient = new Possinote(process.env.POSSINOTE_API_KEY);

module.exports = possinoteClient;
```

#### 3. Use in Express Routes
```javascript
// routes/notifications.js
const express = require('express');
const router = express.Router();
const possinoteClient = require('../config/possinote');
const {
  AuthenticationError,
  PaymentRequiredError,
  RateLimitError,
  ValidationError,
  APIError
} = require('possinote');

// Send SMS
router.post('/send-sms', async (req, res) => {
  try {
    const { phone_number, message } = req.body;
    
    const response = await possinoteClient.sms.send(
      phone_number,
      message,
      'YourBrand'
    );
    
    if (response.success) {
      res.json({
        message: 'SMS sent successfully',
        data: response.data
      });
    } else {
      res.status(400).json({
        error: 'Failed to send SMS'
      });
    }
  } catch (error) {
    if (error instanceof AuthenticationError) {
      res.status(401).json({ error: 'Authentication failed' });
    } else if (error instanceof PaymentRequiredError) {
      res.status(402).json({ error: 'Insufficient credits' });
    } else if (error instanceof RateLimitError) {
      res.status(429).json({ error: 'Rate limit exceeded' });
    } else if (error instanceof ValidationError) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An error occurred' });
    }
  }
});

// Send Bulk SMS
router.post('/send-bulk-sms', async (req, res) => {
  try {
    const { messages } = req.body;
    
    const response = await possinoteClient.sms.sendBulk(
      'YourBrand',
      messages // Array of { to: phone, message: text }
    );
    
    res.json({
      message: 'Bulk SMS sent',
      data: response.data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Send Email
router.post('/send-email', async (req, res) => {
  try {
    const { email, subject, content } = req.body;
    
    const response = await possinoteClient.email.send(
      email,
      subject,
      content,
      'Your Company'
    );
    
    res.json({
      message: 'Email sent successfully',
      data: response
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
```

#### 4. Use in Services
```javascript
// services/NotificationService.js
const possinoteClient = require('../config/possinote');
const logger = require('../utils/logger');

class NotificationService {
  async sendWelcomeSMS(user) {
    try {
      const response = await possinoteClient.sms.send(
        user.phone_number,
        `Welcome ${user.name}! Your account has been created successfully.`,
        'YourBrand'
      );
      
      logger.info(`Welcome SMS sent to ${user.email}:`, response);
      return response;
    } catch (error) {
      logger.error(`Failed to send welcome SMS to ${user.email}:`, error);
      throw error;
    }
  }

  async sendPasswordResetEmail(user, resetToken) {
    try {
      const resetUrl = `https://yourdomain.com/reset-password?token=${resetToken}`;
      
      const htmlContent = `
        <h1>Password Reset Request</h1>
        <p>Hello ${user.name},</p>
        <p>You requested a password reset. Click the link below to reset your password:</p>
        <a href="${resetUrl}">Reset Password</a>
        <p>This link will expire in 1 hour.</p>
      `;
      
      const response = await possinoteClient.email.send(
        user.email,
        'Password Reset Request',
        htmlContent,
        'Your Company'
      );
      
      logger.info(`Password reset email sent to ${user.email}`);
      return response;
    } catch (error) {
      logger.error(`Failed to send password reset email to ${user.email}:`, error);
      throw error;
    }
  }

  async sendBulkNewsletter(users, newsletterContent) {
    try {
      const messages = users.map(user => ({
        to: user.phone_number,
        message: `Newsletter: ${newsletterContent.title}`
      }));
      
      const response = await possinoteClient.sms.sendBulk(
        'YourBrand',
        messages
      );
      
      logger.info(`Bulk newsletter sent to ${users.length} users`);
      return response;
    } catch (error) {
      logger.error('Failed to send bulk newsletter:', error);
      throw error;
    }
  }

  async scheduleReminderEmail(user, appointment) {
    try {
      const htmlContent = `
        <h1>Appointment Reminder</h1>
        <p>Hello ${user.name},</p>
        <p>This is a reminder for your appointment:</p>
        <ul>
          <li><strong>Date:</strong> ${appointment.datetime.toLocaleDateString()}</li>
          <li><strong>Time:</strong> ${appointment.datetime.toLocaleTimeString()}</li>
          <li><strong>Location:</strong> ${appointment.location}</li>
        </ul>
      `;
      
      const response = await possinoteClient.scheduling.scheduleEmail(
        user.email,
        'Appointment Reminder',
        htmlContent,
        appointment.datetime.toISOString(),
        'Your Company'
      );
      
      logger.info(`Appointment reminder scheduled for ${user.email}`);
      return response;
    } catch (error) {
      logger.error('Failed to schedule appointment reminder:', error);
      throw error;
    }
  }
}

module.exports = new NotificationService();
```

#### 5. Use with Bull Queue (Background Jobs)
```javascript
// jobs/notificationJobs.js
const Queue = require('bull');
const NotificationService = require('../services/NotificationService');
const User = require('../models/User');
const Appointment = require('../models/Appointment');

// Create queues
const notificationQueue = new Queue('notifications');

// Welcome SMS job
notificationQueue.process('welcome-sms', async (job) => {
  try {
    const { userId } = job.data;
    const user = await User.findById(userId);
    
    if (!user) {
      throw new Error(`User with id ${userId} not found`);
    }
    
    await NotificationService.sendWelcomeSMS(user);
  } catch (error) {
    console.error('Failed to send welcome SMS:', error);
    throw error;
  }
});

// Password reset email job
notificationQueue.process('password-reset-email', async (job) => {
  try {
    const { userId, resetToken } = job.data;
    const user = await User.findById(userId);
    
    if (!user) {
      throw new Error(`User with id ${userId} not found`);
    }
    
    await NotificationService.sendPasswordResetEmail(user, resetToken);
  } catch (error) {
    console.error('Failed to send password reset email:', error);
    throw error;
  }
});

// Bulk newsletter job
notificationQueue.process('bulk-newsletter', async (job) => {
  try {
    const { userIds, newsletterContent } = job.data;
    const users = await User.find({ _id: { $in: userIds } });
    
    await NotificationService.sendBulkNewsletter(users, newsletterContent);
  } catch (error) {
    console.error('Failed to send bulk newsletter:', error);
    throw error;
  }
});

// Schedule appointment reminder job
notificationQueue.process('schedule-appointment-reminder', async (job) => {
  try {
    const { appointmentId } = job.data;
    const appointment = await Appointment.findById(appointmentId).populate('user');
    
    if (!appointment) {
      throw new Error(`Appointment with id ${appointmentId} not found`);
    }
    
    await NotificationService.scheduleReminderEmail(appointment.user, appointment);
  } catch (error) {
    console.error('Failed to schedule appointment reminder:', error);
    throw error;
  }
});

module.exports = notificationQueue;
```

### Next.js Integration

#### 1. Install the Package
```bash
npm install possinote
```

#### 2. Configure Environment Variables
```bash
# .env.local
POSSINOTE_API_KEY=your_api_key_here
```

#### 3. Create API Routes
```typescript
// pages/api/notifications/send-sms.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Possinote } from 'possinote';
import {
  AuthenticationError,
  PaymentRequiredError,
  RateLimitError,
  ValidationError,
  APIError
} from 'possinote';

const possinoteClient = new Possinote(process.env.POSSINOTE_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { phone_number, message } = req.body;
    
    const response = await possinoteClient.sms.send(
      phone_number,
      message,
      'YourBrand'
    );
    
    if (response.success) {
      res.status(200).json({
        message: 'SMS sent successfully',
        data: response.data
      });
    } else {
      res.status(400).json({
        error: 'Failed to send SMS'
      });
    }
  } catch (error) {
    if (error instanceof AuthenticationError) {
      res.status(401).json({ error: 'Authentication failed' });
    } else if (error instanceof PaymentRequiredError) {
      res.status(402).json({ error: 'Insufficient credits' });
    } else if (error instanceof RateLimitError) {
      res.status(429).json({ error: 'Rate limit exceeded' });
    } else if (error instanceof ValidationError) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An error occurred' });
    }
  }
}
```

```typescript
// pages/api/notifications/send-email.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Possinote } from 'possinote';

const possinoteClient = new Possinote(process.env.POSSINOTE_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, subject, content } = req.body;
    
    const response = await possinoteClient.email.send(
      email,
      subject,
      content,
      'Your Company'
    );
    
    res.status(200).json({
      message: 'Email sent successfully',
      data: response
    });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}
```

#### 4. Use in React Components
```typescript
// components/NotificationForm.tsx
import { useState } from 'react';
import { Possinote } from 'possinote';

const possinoteClient = new Possinote(process.env.NEXT_PUBLIC_POSSINOTE_API_KEY!);

export default function NotificationForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSendSMS = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await possinoteClient.sms.send(
        phoneNumber,
        message,
        'YourBrand'
      );
      
      setResult({ success: true, data: response });
    } catch (error) {
      setResult({ success: false, error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSendSMS} className="space-y-4">
      <div>
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          rows={3}
          required
        />
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send SMS'}
      </button>
      
      {result && (
        <div className={`p-4 rounded-md ${result.success ? 'bg-green-100' : 'bg-red-100'}`}>
          {result.success ? (
            <p className="text-green-800">SMS sent successfully!</p>
          ) : (
            <p className="text-red-800">Error: {result.error}</p>
          )}
        </div>
      )}
    </form>
  );
}
```

#### 5. Use in Server-Side Functions
```typescript
// lib/notifications.ts
import { Possinote } from 'possinote';

const possinoteClient = new Possinote(process.env.POSSINOTE_API_KEY!);

export async function sendWelcomeSMS(user: any) {
  try {
    const response = await possinoteClient.sms.send(
      user.phone_number,
      `Welcome ${user.name}! Your account has been created successfully.`,
      'YourBrand'
    );
    
    console.log(`Welcome SMS sent to ${user.email}:`, response);
    return response;
  } catch (error) {
    console.error(`Failed to send welcome SMS to ${user.email}:`, error);
    throw error;
  }
}

export async function sendPasswordResetEmail(user: any, resetToken: string) {
  try {
    const resetUrl = `https://yourdomain.com/reset-password?token=${resetToken}`;
    
    const htmlContent = `
      <h1>Password Reset Request</h1>
      <p>Hello ${user.name},</p>
      <p>You requested a password reset. Click the link below to reset your password:</p>
      <a href="${resetUrl}">Reset Password</a>
      <p>This link will expire in 1 hour.</p>
    `;
    
    const response = await possinoteClient.email.send(
      user.email,
      'Password Reset Request',
      htmlContent,
      'Your Company'
    );
    
    console.log(`Password reset email sent to ${user.email}`);
    return response;
  } catch (error) {
    console.error(`Failed to send password reset email to ${user.email}:`, error);
    throw error;
  }
}
```

#### 6. Use with Vercel Cron Jobs
```typescript
// pages/api/cron/send-newsletter.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Possinote } from 'possinote';

const possinoteClient = new Possinote(process.env.POSSINOTE_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Verify it's a cron job
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Get users from your database
    const users = await getUsers(); // Your database query
    
    const messages = users.map(user => ({
      to: user.phone_number,
      message: 'Weekly Newsletter: Check out our latest updates!'
    }));
    
    const response = await possinoteClient.sms.sendBulk(
      'YourBrand',
      messages
    );
    
    res.status(200).json({
      message: 'Newsletter sent successfully',
      data: response
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send newsletter' });
  }
}

// vercel.json
{
  "crons": [
    {
      "path": "/api/cron/send-newsletter",
      "schedule": "0 9 * * 1"
    }
  ]
}
```

## Error Handling

The SDK provides specific exception classes for different error types:

```javascript
import {
  PossinoteError,
  AuthenticationError,
  PaymentRequiredError,
  RateLimitError,
  ValidationError,
  APIError
} from 'possinote';

try {
  const response = await client.sms.send(
    '+233244123456',
    'Hello',
    'SenderID'
  );
} catch (error) {
  if (error instanceof AuthenticationError) {
    console.log(`Authentication failed: ${error.message}`);
  } else if (error instanceof PaymentRequiredError) {
    console.log(`Payment required: ${error.message}`);
  } else if (error instanceof RateLimitError) {
    console.log(`Rate limit exceeded: ${error.message}`);
  } else if (error instanceof ValidationError) {
    console.log(`Validation error: ${error.message}`);
  } else if (error instanceof APIError) {
    console.log(`API error: ${error.message}`);
  }
}
```

### Error Types

- `AuthenticationError` - Invalid API key (401)
- `PaymentRequiredError` - Insufficient credits (402)
- `RateLimitError` - Rate limit exceeded (429)
- `ValidationError` - Invalid request data (400)
- `APIError` - Other API errors

## Configuration

### Base URL

The SDK uses the production API by default. For testing, you can modify the base URL:

```javascript
// In src/client.ts
private static readonly BASE_URL = 'https://notifyapi.possitech.net/api/v1';
```

### Timeout Settings

HTTP requests use default timeout settings. You can customize them in the client:

```javascript
// The SDK uses axios defaults
// You can modify timeout settings in src/client.ts
```

## Requirements

- Node.js >= 14.0.0
- npm or yarn
- axios library

## Development

### Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/possitech/possinote-js.git
cd possinote-js

# Install dependencies
npm install

# Build the package
npm run build

# Run tests
npm test

# Run linting
npm run lint

# Format code
npm run format
```

### Running Tests

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test file
npm test -- --testPathPattern=sms.test.ts
```

### Code Quality

```bash
# Format code
npm run format

# Lint code
npm run lint

# Type checking
npm run type-check
```

### Building and Publishing

```bash
# Build package
npm run build

# Test the build
npm pack

# Publish to npm
npm publish
```

## TypeScript Support

The SDK is written in TypeScript and provides full type definitions:

```typescript
import { Possinote, APIResponse, SMSMessage } from 'possinote';

const client = new Possinote('your_api_key');

// TypeScript will provide full intellisense
const response: APIResponse = await client.sms.send(
  '+233244123456',
  'Hello',
  'SenderID'
);
```

## Browser Support

The SDK works in both Node.js and browser environments:

```html
<!-- Browser usage -->
<script src="https://unpkg.com/possinote@1.0.0/dist/index.js"></script>
<script>
  const client = new Possinote('your_api_key');
  
  client.sms.send('+233244123456', 'Hello', 'SenderID')
    .then(response => console.log(response))
    .catch(error => console.error(error));
</script>
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/possitech/possinote-js. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/possitech/possinote-js/blob/main/CODE_OF_CONDUCT.md).

## License

The package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Support

For support, email support@possitech.net or visit our [documentation](https://docs.possitech.net).

## Changelog

### 1.0.0
- Initial release
- SMS sending and scheduling
- Email sending and scheduling
- Comprehensive error handling
- Full API coverage
- TypeScript support
