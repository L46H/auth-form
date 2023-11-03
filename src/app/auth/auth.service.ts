import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SignupCredentials } from './interface/SignupCredentials.interface';
import { SignupResponse } from './interface/SignupResponse.interface';
import { CurrentUser } from './interface/CurrentUser.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private url = 'https://api.realworld.io/api';

  signup(credentials: SignupCredentials): Observable<CurrentUser> {
    return this.http
      .post<SignupResponse>(`${this.url}/users`, credentials)
      .pipe(map(response => response.user));
  }
}
