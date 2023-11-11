import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, BehaviorSubject, tap } from 'rxjs';
import { SignupCredentials } from './interface/SignupCredentials.interface';
import { SignupResponse } from './interface/SignupResponse.interface';
import { CurrentUser } from './interface/CurrentUser.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://api.realworld.io/api';
  signedin$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  signup(credentials: SignupCredentials): Observable<CurrentUser> {
    return this.http
      .post<SignupResponse>(`${this.url}/users`, credentials)
      .pipe(
        map(response => response.user),
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }
}
