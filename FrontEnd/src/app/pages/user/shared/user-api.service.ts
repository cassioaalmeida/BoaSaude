import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  constructor(
    private http: HttpClient
  ) { }

  getUser(id: number): any {
    return this.http.get(`${environment.urlApi}/User/${id}`);
  }

  upsert(user: any): any{
    return this.http.post(`${environment.urlApi}/User`, user);
  }

  getUserByDocument(document: string) {
    return this.http.get(`${environment.urlApi}/UserByDocument?document=${document}`);
  }

  getUserListPaged(pageNumber: number, pageSize: number): any {
    let params = new HttpParams();
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    
    return this.http.get(`${environment.urlApi}/User`,
    {
      observe: 'response',
      params
    });
  }
}
