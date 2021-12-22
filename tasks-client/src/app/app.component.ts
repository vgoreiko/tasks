import { Component } from '@angular/core';
import { AuthService } from './auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tasksClient';
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router,
  ) {
  }

  logout(): Promise<boolean> {
    this._authService.removeToken();
    return this._router.navigate(["/"]);
  }

  get isAuthenticated(): boolean {
    return this._authService.isAuthenticated;
  }
}
