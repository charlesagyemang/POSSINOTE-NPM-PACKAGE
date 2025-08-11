/**
 * Possinote JavaScript/TypeScript SDK
 * 
 * Official JavaScript/TypeScript SDK for the PossiNote API - Send SMS, emails, and schedule messages with ease.
 */

import { Client } from './client';
import { SMS } from './sms';
import { Email } from './email';
import { Scheduling } from './scheduling';

export { Client } from './client';
export { SMS } from './sms';
export { Email } from './email';
export { Scheduling } from './scheduling';

/**
 * Main Possinote client class
 */
export class Possinote {
  public readonly sms: SMS;
  public readonly email: Email;
  public readonly scheduling: Scheduling;

  constructor(apiKey: string) {
    const client = new Client(apiKey);
    this.sms = client.sms;
    this.email = client.email;
    this.scheduling = client.scheduling;
  }
}
export {
  PossinoteError,
  AuthenticationError,
  PaymentRequiredError,
  RateLimitError,
  ValidationError,
  APIError,
} from './exceptions';

export type {
  SMSMessage,
  BulkSMSMessage,
  ScheduledSMS,
  BulkScheduledSMS,
  EmailMessage,
  BulkEmailMessage,
  ScheduledEmail,
  BulkScheduledEmail,
  MultipleEmailRequest,
  APIResponse,
  PaginationParams,
  HistoryParams,
} from './types';

export const VERSION = '1.0.0';
