import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SideMenuApiService {

  constructor(
    private http: HttpClient
  ) { }

  getMenuItems(){
    return this.http.get(`${environment.urlCloudApi}/GetMenu`);
  }
}
