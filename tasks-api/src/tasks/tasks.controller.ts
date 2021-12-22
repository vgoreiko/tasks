import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreateTaskDto, UpdateTaskDto } from './dto';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private readonly _tasksService: TasksService) {}

  @Get()
  getAllTasks(): Promise<Task[]> {
    return this._tasksService.getAllTasks();
  }

  @Post()
  @HttpCode(201)
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this._tasksService.createTask(createTaskDto);
  }

  @Patch(':id')
  updateTask(
    @Body() updateTaskDto: UpdateTaskDto,
    @Param('id') id: string,
  ): Promise<Task> {
    return this._tasksService.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): Promise<DeleteResult> {
    return this._tasksService.deleteTask(id);
  }
}
