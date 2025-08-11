/**
 * Type definitions for the Possinote SDK
 */

export interface APIResponse<T = any> {
  success: boolean;
  data: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page?: number;
  per_page?: number;
}

export interface HistoryParams extends PaginationParams {
  status?: string;
  date_filter?: string;
  start_date?: string;
  end_date?: string;
  api_key_id?: string;
  sender_id?: string;
  phone?: string;
  min_cost?: number;
  max_cost?: number;
}

// SMS Types
export interface SMSMessage {
  to: string;
  message: string;
  sender_id: string;
}

export interface BulkSMSMessage {
  sender_id: string;
  messages: Array<{
    to: string;
    message: string;
  }>;
}

export interface ScheduledSMS {
  recipient: string;
  message: string;
  sender_id: string;
  scheduled_at: string;
}

export interface BulkScheduledSMS {
  sender_id: string;
  messages: Array<{
    to: string;
    message: string;
    scheduled_at: string;
  }>;
}

// Email Types
export interface EmailMessage {
  recipient: string;
  subject: string;
  content: string;
  sender_name?: string;
}

export interface BulkEmailMessage {
  subject: string;
  content: string;
  recipients: string[];
  sender_name?: string;
}

export interface ScheduledEmail {
  recipient: string;
  subject: string;
  content: string;
  scheduled_at: string;
  sender_name?: string;
}

export interface BulkScheduledEmail {
  subject: string;
  content: string;
  recipients: string[];
  scheduled_at: string;
  sender_name?: string;
}

export interface MultipleEmailRequest {
  emails: Array<{
    recipient: string;
    subject: string;
    content: string;
    scheduled_at: string;
    sender_name?: string;
  }>;
}
