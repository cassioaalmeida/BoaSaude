import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsApiService {

  constructor(
    private router: Router,
    private http: HttpClient
    ) { }

  getRole() {
    return  this.http.get(`${environment.urlApi}/account/myrole`);
  }

  getCompanyStatus(){
    return this.http.get(`${environment.urlApi}/account/companyenabled`);
  }
}
