import { IReceita } from '../models/receita.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReceitaService {
  private url = 'http://localhost:3000/receitas';
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<IReceita[]> {
    return this.httpClient.get<IReceita[]>(this.url);
  }
  getById(id: string): Observable<IReceita> | string {
    return this.httpClient.get<IReceita>(this.url + '/' + id);
  }

  postReceita(formData: FormData): Observable<IReceita> {
    return this.httpClient.post<IReceita>(this.url, formData);
  }
}
