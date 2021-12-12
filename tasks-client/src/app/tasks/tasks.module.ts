import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { TasksRepositoryService } from './_services';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks',
    component: TasksListComponent,
  },
  {
    path: 'new',
    component: CreateTaskComponent,
  },
  {
    path: ':id',
    component: TaskEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }

@NgModule({
  declarations: [
    TasksListComponent,
    CreateTaskComponent,
    TaskEditComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    TasksRepositoryService,
  ],
})
export class TasksModule { }
