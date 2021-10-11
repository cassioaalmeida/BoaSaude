import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string, refreshToken?: string) {
    const httpHeaders = new HttpHeaders({ grant_type: 'password' });
    return this.http.post(`${environment.urlApi}/login`, {
      Email: email,
      Password: password
    }, { headers: httpHeaders });
  }

  refreshToken(email: string, refreshToken: string) {
    const httpHeaders = new HttpHeaders({ grant_type: 'refresh_token' });
    return this.http.post(`${environment.urlApi}/login`, {
      Email: email,
      RefreshToken: refreshToken
    }, { headers: httpHeaders });
  }
}
