import { TaskStatus } from './task-state.enum';

export class UpdateTaskDto {
  name: string;
  description: string;
  status: TaskStatus;
}
