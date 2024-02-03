import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { SignupCredentials } from './interface/SignupCredentials.interface';
import { SignupResponse } from './interface/SignupResponse.interface';
import { SigninResponse } from './interface/SigninResponse.interface';
import { SigninCredentials } from './interface/SigninCredentials.interface';
import { SignoutResponse } from './interface/SignoutResponse.interface';
import { SigenedinResponse } from './interface/SignedinResponse.interface';

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

  signin(credentials: SigninCredentials): Observable<SigninResponse> {
    return this.http
      .post<SigninResponse>(`${this.url}/auth/signin`, credentials)
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }

  checkAuth(): Observable<SigenedinResponse> {
    return this.http.get<SigenedinResponse>(`${this.url}/auth/signedin`).pipe(
      tap(({ authenticated }) => {
        this.signedin$.next(authenticated);
      })
    );
  }

  signout(): Observable<SignoutResponse> {
    return this.http.post<SignoutResponse>(`${this.url}/auth/signout`, {}).pipe(
      tap(() => {
        this.signedin$.next(false);
      })
    );
  }
}
