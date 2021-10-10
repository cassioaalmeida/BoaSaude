import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TermOfUseApiService {
  constructor(
    private http: HttpClient
  ) { }
  
  saveFiles(files: FormData){
    return this.http.post(`${environment.urlApi}/termofuse`, files, {
      headers: { 
        'X-Skip-Interceptor' : ''
      },
      observe: 'events',
    });
  }
  getLastTerm(){
    return this.http.get(`${environment.urlApi}/termofuse`);
  }
  checkCompanyAcceptedTerm(id){
    return this.http.get(`${environment.urlApi}/termofuse/check/${id}`);
  }
  download(){
    return this.http.get(`${environment.urlApi}/termofuse/file`, {
      observe: 'response',
      responseType: 'blob' as 'json'
    });
  }
  
  acceptTerm(id){
    return this.http.post(`${environment.urlApi}/termofuse/accept`, {
      id: id
    });
  }
}
