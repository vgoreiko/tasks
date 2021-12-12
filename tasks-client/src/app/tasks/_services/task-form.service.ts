import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class TaskFormService {

  constructor(private readonly _fb: FormBuilder) { }

  getTaskForm(): FormGroup {
    return this._fb.group({
      name: ['', Validators.required],
      description: [''],
    })
  }
}
