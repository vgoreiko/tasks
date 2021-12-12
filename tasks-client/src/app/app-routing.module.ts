import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent, TaskEditComponent, TasksListComponent } from './tasks';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tasks',
  },
  {
    path: 'new',
    component: CreateTaskComponent,
  },
  {
    path: 'tasks',
    component: TasksListComponent,
  },
  {
    path: ':id',
    component: TaskEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
