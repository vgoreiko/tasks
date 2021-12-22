import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthFormBuilderService, AuthRepositoryService, AuthService } from '../_services';
import { TokenDto } from '../_models';
import { ToastrService } from 'ngx-toastr';

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
    private readonly _authService: AuthService,
    private readonly _toastr: ToastrService
  ) {
  }

  submit() {
    if (this.loginFormGroup.valid) {
      const raw = this.loginFormGroup.getRawValue();
      this._authRepositoryService.login(raw).pipe(
          catchError((e: any) => {
            this._toastr.error(e)
            return throwError(e)
          })
        ).subscribe((response: TokenDto) => {
          this._authService.saveTokenToStorage(response.accessToken);
          return this._router.navigate(['/tasks']);
        });
    }
  }
}
