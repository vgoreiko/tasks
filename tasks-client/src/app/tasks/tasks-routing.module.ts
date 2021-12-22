import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../auth';

const routes: Routes = [
  {
    path: 'tasks',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: TasksListComponent,
      },
      {
        path: 'new',
        component: TaskCreateComponent,
      },
      {
        path: ':id',
        component: TaskEditComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
