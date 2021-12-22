import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthFormBuilderService, AuthRepositoryService, AuthService } from '../_services';
import { Router } from '@angular/router';
import { AuthorizeDto } from '../_models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginFormGroup: FormGroup = this._authFormBuilderService.createLoginForm();

  constructor(
    private readonly _authRepositoryService: AuthRepositoryService,
    private readonly _authFormBuilderService: AuthFormBuilderService,
    private readonly _router: Router,
    private readonly _authService: AuthService
  ) {
  }

  submit() {
    if (this.loginFormGroup.valid) {
      const raw = this.loginFormGroup.getRawValue();
      this._authRepositoryService.login(raw)
        .subscribe((response: AuthorizeDto) => {
          this._authService.saveTokenToStorage(response?.token);
          return this._router.navigate(['/tasks']);
        });
    }
  }
}
