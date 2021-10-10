import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import jwt_decode from 'jwt-decode';
import { UtilsService } from './Utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _logoutEvent = new EventEmitter();

  get logoutEvent(){
    return this._logoutEvent;
  }
  
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private utilsService: UtilsService,
  ) { }

  storeTokenData(access_token: string, expiration_token: string) {
    this.localStorageService.set('access_token', access_token);
    this.localStorageService.set('expiration', expiration_token);
  }

  getAccessToken() {
    // return 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluQGhvdG1haWwuY29tIiwiSWQiOiJkYjlhYTc4Ny03ZTFjLTQ0YmQtOThiOS01MDlmMTk0OGNiOWQiLCJOYW1lIjoiYWRtaW4iLCJFbWFpbCI6ImFkbWluQGhvdG1haWwuY29tIiwicm9sZSI6WyJGdWxsQWRtaW4iLCJQQ0hBZG1pbiJdLCJuYmYiOjE2MzA0MjI5ODIsImV4cCI6MTYzMDUwOTM4MiwiaWF0IjoxNjMwNDIyOTgyLCJpc3MiOiJ0b2RvIiwiYXVkIjoidG9kbyJ9.rfRrKPOAPjQDQJdq9yLvb2qYiOC-zmMrIC5vLOVbM7U_HIAKvJ5LhwYre54K3L0gtemupRRS-_PmK0mQydcqBw'
    return this.localStorageService.get('access_token');
  }

  getExpiration() {
    return new Date(this.localStorageService.get('expiration'));
  }

  isLogged() {
    // return true;
    return !!this.getAccessToken() && this.getExpiration() > new Date();
  }

  logout() {
    this.localStorageService.reset();
    this._logoutEvent.emit();
    this.router.navigate(['']);
  }
}
