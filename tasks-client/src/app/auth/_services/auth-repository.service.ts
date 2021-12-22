import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUserDto, LoginUserDto, TokenDto } from '../_models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthRepositoryService {
  constructor(private readonly _httpClient: HttpClient) { }

  createUser(dto: CreateUserDto): Observable<TokenDto> {
    return this._httpClient.post<TokenDto>('api/auth/register', dto)
  }

  login(dto: LoginUserDto): Observable<TokenDto> {
    return this._httpClient.post<TokenDto>('api/auth/login', dto)
  }
}
