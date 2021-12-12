import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { CreateTaskDto, UpdateTaskDto } from './dto';
import { Task } from './task.entity';
import { DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private readonly _tasksRepository: TasksRepository,
  ) {}

  async getAllTasks(): Promise<Task[]> {
    return this._tasksRepository.find();
  }

  async getTaskById(id: string): Promise<Task> {
    const task = await this._tasksRepository.findOne({ id });
    if (!task) {
      throw new NotFoundError(`Task with ID "${id}" not found`);
    }
    return task;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this._tasksRepository.createTask(createTaskDto);
  }

  async updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this._tasksRepository.findOne({ id });
    if (!task) {
      throw new NotFoundError(`Task with ID "${id}" not found`);
    }
    const { name, description, status } = updateTaskDto;
    task.name = name;
    task.description = description;
    task.status = status;

    return this._tasksRepository.save(task);
  }

  async deleteTask(id: string): Promise<DeleteResult> {
    return this._tasksRepository.delete({ id });
  }
}
