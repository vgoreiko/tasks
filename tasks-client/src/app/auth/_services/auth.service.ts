import { Injectable } from '@angular/core';

export type Token = string | null;
const tokenKeyName = "authToken";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #token: Token = null

  constructor() {
    const token = sessionStorage.getItem(tokenKeyName);
    if(token) this.token = token;
  }

  saveTokenToStorage(token: Token): void {
    if(typeof token === 'string') {
      return sessionStorage.setItem(tokenKeyName, token);
    }
    return sessionStorage.removeItem(tokenKeyName);
  }

  removeToken(): void {
    return sessionStorage.removeItem(tokenKeyName);
  }

  get isAuthenticated(): boolean {
    const token = this.token;
    return !!token;
  }

  get token(): Token {
    return this.#token;
  }

  set token(token: Token) {
    this.#token = token;
    this.saveTokenToStorage(token);
  }
}
