import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskFormService, TasksRepositoryService } from '../_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent {
  taskFormGroup: FormGroup = this._taskFormService.getTaskForm();
  constructor(private readonly _taskFormService: TaskFormService,
              private readonly _taskRepositoryService: TasksRepositoryService,
              private readonly _router: Router,
              ) {
  }

  submit() {
    if(this.taskFormGroup.valid) {
      const body = this.taskFormGroup.getRawValue();
      this._taskRepositoryService.createTask(body).subscribe(_res => this._router.navigate(['/tasks']));
    }
  }
}
