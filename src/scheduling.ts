/**
 * Scheduling functionality for the Possinote SDK
 */

import { Client } from './client';
import { APIResponse, HistoryParams } from './types';

export class Scheduling {
  constructor(private client: Client) {}

  /**
   * Schedule a single email
   */
  async scheduleEmail(
    recipient: string,
    subject: string,
    content: string,
    scheduled_at: string,
    sender_name?: string
  ): Promise<APIResponse> {
    const data = {
      scheduled_email: {
        recipient,
        subject,
        content,
        scheduled_at,
        sender_name,
      },
    };

    return this.client.post('/emails/schedule', data);
  }

  /**
   * Schedule bulk emails
   */
  async scheduleBulkEmails(
    subject: string,
    content: string,
    recipients: string[],
    scheduled_at: string,
    sender_name?: string
  ): Promise<APIResponse> {
    const data = {
      bulk_scheduled_email: {
        subject,
        content,
        recipients,
        scheduled_at,
        sender_name,
      },
    };

    return this.client.post('/emails/schedule-bulk', data);
  }

  /**
   * Schedule multiple individual emails
   */
  async scheduleMultipleEmails(emails: Array<{
    recipient: string;
    subject: string;
    content: string;
    scheduled_at: string;
    sender_name?: string;
  }>): Promise<APIResponse> {
    const data = {
      emails,
    };

    return this.client.post('/emails/schedule-bulk-individual', data);
  }

  /**
   * Get scheduled emails
   */
  async scheduledEmails(params?: HistoryParams): Promise<APIResponse> {
    return this.client.get('/emails/scheduled', params);
  }

  /**
   * Cancel a scheduled email
   */
  async cancelScheduledEmail(emailId: string): Promise<APIResponse> {
    return this.client.delete(`/emails/scheduled/${emailId}`);
  }
}
