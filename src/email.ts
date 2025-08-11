/**
 * Email functionality for the Possinote SDK
 */

import { Client } from './client';
import { APIResponse, HistoryParams } from './types';

export class Email {
  constructor(private client: Client) {}

  /**
   * Send a single email
   */
  async send(recipient: string, subject: string, content: string, sender_name?: string): Promise<APIResponse> {
    const data: any = {
      recipient,
      subject,
      content,
    };

    // Add sender_name only if provided
    if (sender_name) {
      data.sender_name = sender_name;
    }

    return this.client.post('/emails/send', data);
  }

  /**
   * Send bulk emails
   */
  async sendBulk(subject: string, content: string, recipients: string[], sender_name?: string): Promise<APIResponse> {
    const data: any = {
      subject,
      content,
      recipients,
    };

    // Add sender_name only if provided
    if (sender_name) {
      data.sender_name = sender_name;
    }

    return this.client.post('/emails/bulk', data);
  }

  /**
   * Get email history
   */
  async history(params?: HistoryParams): Promise<APIResponse> {
    return this.client.get('/emails/history', params);
  }
}
