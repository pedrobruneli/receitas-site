import { IValid } from './../models/validToken.model';
import { IResponse } from './../models/response.model';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = 'http://localhost:3000/users/';

  constructor(private httpClient: HttpClient) {}

  loginUser(user: string, pass: string): Observable<IResponse> {
    return this.httpClient.post<IResponse>(this.url + 'token', {
      user: user,
      pass: pass,
    });
  }

  verifyToken(): Observable<IValid> {
    let params = new HttpParams().set(
      'token',
      localStorage.getItem('token') ?? ''
    );
    return this.httpClient
      .get<IValid>(this.url + 'check', { params: params });
  }
}
