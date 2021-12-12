import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../_models/task.model';
import { TasksRepositoryService } from '../_services';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasks$: Observable<Task[]> = of([])
  dataSource = new MatTableDataSource<Task>();
  displayedColumns: string[] = ['name', 'status', 'description'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private readonly _http: HttpClient,
    private readonly _tasksRepositoryService: TasksRepositoryService,
    ) { }

  ngOnInit(): void {
    this._tasksRepositoryService.getAll().subscribe( data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    })
  }
}
