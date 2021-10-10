import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/_core/authentication.service';
import { SideMenuApiService } from './side-menu-api.service';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  constructor(
    private sideMenuApiService: SideMenuApiService,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  isLogged() {
    return this.authenticationService.isLogged();
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['']);
  }

  goToRoute(route: string){
    this.router.navigate([route]);
  }

  getMenuItems(){
    const menu = new Subject<any>();
    this.sideMenuApiService.getMenuItems().subscribe((data: any) => {
      menu.next(data);
    });
    return menu.asObservable();
  }

}
