import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto, TaskStatus } from './dto';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.create(createTaskDto);
    task.status = TaskStatus.CREATED;
    return this.save(task);
  }
}
