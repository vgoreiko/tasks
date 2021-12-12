import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskFormService, TasksRepositoryService } from '../_services';

@Component({
  selector: 'app-create-task',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {
  taskFormGroup: FormGroup = this._taskFormService.getTaskForm();
  constructor(private readonly _taskFormService: TaskFormService,
              private readonly _taskRepositoryService: TasksRepositoryService,
              ) {
  }

  ngOnInit(): void {
  }

  submit() {
    if(this.taskFormGroup.valid) {
      const body = this.taskFormGroup.getRawValue();
      this._taskRepositoryService.createTask(body).subscribe();
    }
  }
}
