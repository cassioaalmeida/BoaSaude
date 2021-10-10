import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorreioService {

  constructor(
    private readonly http: HttpClient,
    private readonly handler: HttpBackend
  ) {
    this.http = new HttpClient(handler);
  }

  getCEP(cep: string): Observable<any> {
    return this.http.get('https://viacep.com.br/ws/' + cep.replace('-', '') + '/json').pipe();
  }
}
