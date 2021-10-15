import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { id } from '@swimlane/ngx-datatable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(
    private http: HttpClient) { }

  getInsurances() {
    return this.http.get(`${environment.urlApi}/Insurance`);
  }
  saveInsurance(value: any) {
    return this.http.post(`${environment.urlApi}/Insurance`, value);
  }
}
