import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../_services';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this._authService.isAuthenticated) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this._authService.token}`
        }
      });
    }
    return next.handle(request);
  }
}
