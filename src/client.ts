/**
 * Main client for the Possinote SDK
 */

import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { SMS } from './sms';
import { Email } from './email';
import { Scheduling } from './scheduling';
import {
  PossinoteError,
  AuthenticationError,
  PaymentRequiredError,
  RateLimitError,
  ValidationError,
  APIError,
} from './exceptions';
import { APIResponse } from './types';

export class Client {
  private readonly apiKey: string;
  private readonly httpClient: AxiosInstance;
  public readonly sms: SMS;
  public readonly email: Email;
  public readonly scheduling: Scheduling;

  private static readonly BASE_URL = 'https://notifyapi.possitech.net/api/v1';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    
    this.httpClient = axios.create({
      baseURL: Client.BASE_URL,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    // Initialize service modules
    this.sms = new SMS(this);
    this.email = new Email(this);
    this.scheduling = new Scheduling(this);
  }

  /**
   * Make an HTTP request to the API
   */
  public async request<T = any>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    endpoint: string,
    data?: any,
    params?: any
  ): Promise<APIResponse<T>> {
    try {
      const response: AxiosResponse<APIResponse<T>> = await this.httpClient.request({
        method,
        url: endpoint,
        data,
        params,
      });

      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  /**
   * Make a GET request
   */
  public async get<T = any>(endpoint: string, params?: any): Promise<APIResponse<T>> {
    return this.request<T>('GET', endpoint, undefined, params);
  }

  /**
   * Make a POST request
   */
  public async post<T = any>(endpoint: string, data?: any): Promise<APIResponse<T>> {
    return this.request<T>('POST', endpoint, data);
  }

  /**
   * Make a PUT request
   */
  public async put<T = any>(endpoint: string, data?: any): Promise<APIResponse<T>> {
    return this.request<T>('PUT', endpoint, data);
  }

  /**
   * Make a DELETE request
   */
  public async delete<T = any>(endpoint: string): Promise<APIResponse<T>> {
    return this.request<T>('DELETE', endpoint);
  }

  /**
   * Handle API errors and throw appropriate exceptions
   */
  private handleError(error: any): PossinoteError {
    if (error.response) {
      const { status, data } = error.response;
      const errorMessage = data?.error || data?.message || 'Unknown error';

      switch (status) {
        case 401:
          return new AuthenticationError();
        case 402:
          return new PaymentRequiredError(errorMessage);
        case 429:
          return new RateLimitError();
        case 400:
          return new ValidationError(errorMessage);
        default:
          return new APIError(`API request failed with status ${status}: ${errorMessage}`, status);
      }
    }

    if (error.request) {
      return new APIError('Network error: No response received');
    }

    return new APIError(`Request failed: ${error.message}`);
  }
}
