import { Injectable, EventEmitter, Output } from '@angular/core';
import { IValid } from './../models/validToken.model';
import { IResponse } from './../models/response.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  private url = 'http://localhost:3000/users/';
  @Output() refreshHeader: EventEmitter<boolean> = new EventEmitter<boolean>;
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
