import { Injectable } from '@angular/core';

export type Token = string | null;
const tokenKeyName = "authToken";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _token: Token = sessionStorage.getItem(tokenKeyName);

  saveTokenToStorage(token: Token): void {
    if(typeof token === 'string') {
      return sessionStorage.setItem(tokenKeyName, token);
    }
    return sessionStorage.removeItem(tokenKeyName);
  }

  removeToken(): void {
    this._token = null;
    return sessionStorage.removeItem(tokenKeyName);
  }

  get isAuthenticated(): boolean {
    const token = this.token;
    return !!token;
  }

  get token(): Token {
    return this._token;
  }

  set token(token: Token) {
    this._token = token;
    this.saveTokenToStorage(token);
  }
}
