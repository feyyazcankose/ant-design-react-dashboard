import { QueueData } from '../types/queue';

export const getPriorityColor = (priority: QueueData['priority']): string => {
  const colors = {
    high: '#ff4d4f',
    medium: '#faad14',
    low: '#52c41a'
  };
  return colors[priority];
};

export const mockQueueData: QueueData[] = [
  { id: 1, name: 'emailQueue', priority: 'high', maxRetries: 3, timeout: 300, concurrency: 5, maxPerJob: 10 },
  { id: 2, name: 'imageProcessingQueue', priority: 'medium', maxRetries: 5, timeout: 600, concurrency: 3, maxPerJob: 7 },
  { id: 3, name: 'dataExportQueue', priority: 'low', maxRetries: 2, timeout: 1200, concurrency: 2, maxPerJob: 4 },
  { id: 4, name: 'pushNotificationQueue', priority: 'high', maxRetries: 4, timeout: 200, concurrency: 4, maxPerJob: 8 },
  { id: 5, name: 'pdfGenerationQueue', priority: 'medium', maxRetries: 3, timeout: 900, concurrency: 3, maxPerJob: 6 },
  { id: 6, name: 'reportingQueue', priority: 'low', maxRetries: 1, timeout: 1500, concurrency: 1, maxPerJob: 3 },
  { id: 7, name: 'backupQueue', priority: 'low', maxRetries: 2, timeout: 1800, concurrency: 1, maxPerJob: 5 },
];