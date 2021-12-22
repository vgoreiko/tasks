import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class AuthFormBuilderService {
  constructor(private readonly _fb: FormBuilder) { }

  createRegisterForm(): FormGroup {
    return this._fb.group({
      username: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
      ]]
    })
  }

  createLoginForm(): FormGroup {
    return this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
}
