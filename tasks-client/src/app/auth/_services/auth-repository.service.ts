import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorizeDto, CreateUserDto, LoginUserDto } from '../_models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthRepositoryService {
  constructor(private readonly _httpClient: HttpClient) { }

  createUser(dto: CreateUserDto): Observable<AuthorizeDto> {
    return this._httpClient.post<AuthorizeDto>('api/auth/signup', dto)
  }

  login(dto: LoginUserDto): Observable<AuthorizeDto> {
    return this._httpClient.post<AuthorizeDto>('api/auth/signin', dto)
  }
}
