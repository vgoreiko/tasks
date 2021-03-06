import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskFormService, TasksRepositoryService } from './_services';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [
    TasksListComponent,
    TaskCreateComponent,
    TaskEditComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    TasksRepositoryService,
    TaskFormService,
  ],
  exports: [TasksRoutingModule],
})
export class TasksModule { }
