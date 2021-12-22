import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateTaskDto, Task, UpdateTaskDto } from '../_models';

@Injectable()
export class TasksRepositoryService {
  constructor(private readonly _http: HttpClient,) { }

  getAll(): Observable<Task[]> {
    return this._http.get<Task[]>('api/tasks')
  }

  createTask(createTaskDto: CreateTaskDto): Observable<Task> {
    return this._http.post<Task>('api/tasks', createTaskDto)
  }

  deleteTask(id: string) {
    return this._http.delete(`api/tasks/${id}`);
  }

  updateTask(updateTaskDto: UpdateTaskDto): Observable<Task> {
    return this._http.patch<Task>('api/tasks', updateTaskDto);
  }
}
