import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(
    private http: HttpClient
  ) { }

  save(obj) {
    return this.http.post(`${environment.urlAttendanceApi}/attendance`, obj);
  }
}
