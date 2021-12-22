import { Component } from '@angular/core';
import { AuthService } from './auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tasksClient';
  constructor(private readonly _authService: AuthService) {
  }

  get isAuthenticated(): boolean {
    return this._authService.isAuthenticated;
  }
}
