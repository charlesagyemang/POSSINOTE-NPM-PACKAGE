/**
 * Custom exceptions for the Possinote SDK
 */

export class PossinoteError extends Error {
  public code?: number;
  public response?: any;

  constructor(message: string, code?: number, response?: any) {
    super(message);
    this.name = 'PossinoteError';
    this.code = code || 0;
    this.response = response;
  }
}

export class AuthenticationError extends PossinoteError {
  constructor(message = 'Invalid API key') {
    super(message, 401);
    this.name = 'AuthenticationError';
  }
}

export class PaymentRequiredError extends PossinoteError {
  constructor(message = 'Payment required') {
    super(message, 402);
    this.name = 'PaymentRequiredError';
  }
}

export class RateLimitError extends PossinoteError {
  constructor(message = 'Rate limit exceeded') {
    super(message, 429);
    this.name = 'RateLimitError';
  }
}

export class ValidationError extends PossinoteError {
  constructor(message = 'Validation error') {
    super(message, 400);
    this.name = 'ValidationError';
  }
}

export class APIError extends PossinoteError {
  constructor(message = 'API error', code?: number) {
    super(message, code);
    this.name = 'APIError';
  }
}
