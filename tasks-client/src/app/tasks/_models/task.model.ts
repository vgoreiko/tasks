// TODO: remove when swagger client will be ready

export enum TaskStatus {
  COMPLETED = 'COMPLETED',
  IN_PROGRESS = 'IN_PROGRESS',
  CREATED = 'CREATED',
}

export interface Task {
  id: string;
  name: string;
  status: TaskStatus;
  description: string;
}
