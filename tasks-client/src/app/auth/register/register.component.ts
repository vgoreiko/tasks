import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthFormBuilderService, AuthRepositoryService, AuthService } from '../_services';
import { Router } from '@angular/router';
import { TokenDto } from '../_models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  signInFormGroup: FormGroup = this._authFormBuilderService.createRegisterForm();

  constructor(
    private readonly _authRepositoryService: AuthRepositoryService,
    private readonly _authFormBuilderService: AuthFormBuilderService,
    private readonly _router: Router,
    private readonly _authService: AuthService
  ) {
  }

  submit() {
    if (this.signInFormGroup.valid) {
      const raw = this.signInFormGroup.getRawValue();
      this._authRepositoryService.createUser(raw)
        .subscribe((response: TokenDto) => {
          this._authService.saveTokenToStorage(response.accessToken);
          return this._router.navigate(['/tasks']);
        });
    }
  }
}
