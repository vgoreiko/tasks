import { Injectable } from '@angular/core';

export type Token = string | null;
const tokenKeyName = "authToken";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #token: Token = null

  saveTokenToStorage(token: Token): void {
    if(typeof token === 'string') {
      return sessionStorage.setItem(tokenKeyName, token);
    }
    return sessionStorage.removeItem(tokenKeyName);
  }

  removeToken(): void {
    return sessionStorage.removeItem(tokenKeyName);
  }

  get token(): Token {
    return this.#token;
  }

  set token(token: Token) {
    this.#token = token;
  }
}
