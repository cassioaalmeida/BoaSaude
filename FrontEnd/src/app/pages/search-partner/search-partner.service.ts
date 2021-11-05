import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchPartnerService {

  constructor(
    private http: HttpClient
    ) { }
    
  getPartners(lat, lng) {
    return this.http.get(`${environment.urlApi}/partner/search?lat=${lat}&lng=${lng}`);
  }
}
