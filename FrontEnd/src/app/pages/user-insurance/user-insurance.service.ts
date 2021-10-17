import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserInsuranceService {

  constructor(
    private http: HttpClient
  ) { }

  getUserInsurance(id: number) {
    return this.http.get(`${environment.urlApi}/UserInsurance?userId=${id}`);
  }
  save(obj) {
    return this.http.post(`${environment.urlApi}/UserInsurance`, obj);
  }
}
