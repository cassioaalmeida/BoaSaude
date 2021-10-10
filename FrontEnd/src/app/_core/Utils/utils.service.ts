import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../local-storage.service';
import { UtilsApiService } from './utils-api.service';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private _logoutEvent = new EventEmitter();

  get logoutEvent(){
    return this._logoutEvent;
  }

  constructor(
    private utilsApiService: UtilsApiService,
    private router: Router,
    private localStorageService: LocalStorageService
    ) { }

  
  goToUrl(urlRedirect: string) {
    //this.router.navigateByUrl('/', { skipLocationChange: skip }).then(() => {
      this.router.navigate([urlRedirect]);
    //});
  }

  reloadComponent(){
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/dummy', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

  getAccessToken() {
    return this.localStorageService.get('access_token');
  }

  getExpiration() {
    return new Date(this.localStorageService.get('expiration'));
  }

  isLogged() : any {
    return !!this.getAccessToken() && this.getExpiration() > new Date();
  }

  logout() {
    this.localStorageService.reset();
    this._logoutEvent.emit();
    this.router.navigate(['']);
  }

  getRole() : any {
    const role = new Subject();
    this.utilsApiService.getRole().subscribe((data) => role.next(data));
    return role.asObservable();
  }

  getCompanyStatus() : any {
    const status = new Subject();
    this.utilsApiService.getCompanyStatus().subscribe((data) => status.next(data));
    return status.asObservable();
  }
}
