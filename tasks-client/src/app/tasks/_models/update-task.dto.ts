import { TaskStatus } from './task.model';

export interface UpdateTaskDto {
  name: string;
  description?: string;
  status: TaskStatus;
}
