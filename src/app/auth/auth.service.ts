import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { SignupCredentials } from './interface/SignupCredentials.interface';
import { SignupResponse } from './interface/SignupResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  signup(credentials: SignupCredentials): Observable<SignupResponse> {
    return this.http
      .post<SignupResponse>(`${this.url}/auth/signup`, credentials)
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }

  checkAuth() {
    return this.http
      .get(`${this.url}/auth/signedin`)
      .pipe(
        tap(response => {
          console.log(response);
        })
      );
  }
}
