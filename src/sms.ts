/**
 * SMS functionality for the Possinote SDK
 */

import { Client } from './client';
import { APIResponse, HistoryParams } from './types';

export class SMS {
  constructor(private client: Client) {}

  /**
   * Send a single SMS message
   */
  async send(to: string, message: string, sender_id: string): Promise<APIResponse> {
    const data = {
      sms: {
        to,
        message,
        sender_id,
      },
    };

    return this.client.post('/sms/send', data);
  }

  /**
   * Send bulk SMS messages
   */
  async sendBulk(sender_id: string, messages: Array<{ recipient: string; message: string }>): Promise<APIResponse> {
    const data = {
      bulk_sms: {
        sender_id,
        messages,
      },
    };

    return this.client.post('/sms/bulk', data);
  }

  /**
   * Schedule a single SMS message
   */
  async schedule(recipient: string, message: string, sender_id: string, scheduled_at: string): Promise<APIResponse> {
    const data = {
      scheduled_sms: {
        recipient,
        message,
        sender_id,
        scheduled_at,
      },
    };

    return this.client.post('/sms/schedule', data);
  }

  /**
   * Schedule bulk SMS messages
   */
  async scheduleBulk(sender_id: string, messages: Array<{ recipient: string; message: string }>, scheduled_at: string): Promise<APIResponse> {
    const data = {
      bulk_scheduled_sms: {
        sender_id,
        messages,
        scheduled_at,
      },
    };

    return this.client.post('/sms/schedule-bulk', data);
  }

  /**
   * Get SMS history
   */
  async history(params?: HistoryParams): Promise<APIResponse> {
    return this.client.get('/sms/history', params);
  }

  /**
   * Get scheduled SMS messages
   */
  async scheduled(params?: HistoryParams): Promise<APIResponse> {
    return this.client.get('/sms/scheduled', params);
  }

  /**
   * Cancel a scheduled SMS message
   */
  async cancelScheduled(smsId: string): Promise<APIResponse> {
    return this.client.delete(`/sms/scheduled/${smsId}`);
  }
}
