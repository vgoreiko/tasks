import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../_models/task.model';
import { TasksRepositoryService } from '../_services';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasks$: Observable<Task[]> = of([])
  constructor(
    private readonly _http: HttpClient,
    private readonly _tasksRepositoryService: TasksRepositoryService,
    ) { }

  ngOnInit(): void {
    this.tasks$ = this._tasksRepositoryService.getAll()
  }
}
