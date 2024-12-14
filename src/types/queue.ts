export interface QueueData {
  id: number;
  name: string;
  priority: 'low' | 'medium' | 'high';
  maxRetries: number;
  timeout: number;
  concurrency: number;
  maxPerJob: number;
}

export interface NewWorkerFormData extends Omit<QueueData, 'id'> {}