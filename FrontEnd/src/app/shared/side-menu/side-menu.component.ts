import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/_core/authentication.service';
import { UtilsService } from 'src/app/_core/Utils/utils.service';
import { LoginService } from '../login/login.service';
import { SideMenuService } from './side-menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  menu: any;

  constructor(
    private sideMenuService: SideMenuService,
    private translateService: TranslateService,
    private utilsService: UtilsService,
    private authenticationService: AuthenticationService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loadMenu();
    this.events();
  }
  
  events(){
    this.loginService.loginEvent.subscribe(() => {
      this.loadMenu();
    });

    this.authenticationService.logoutEvent.subscribe(() => {
      this.loadMenu();
    });
    
    //   this.accountSettingsService.accountChangeEvent.subscribe(() => {
    //     this.loadMenu();
    //   })
      
    //   this.companyService.alterCertificateEvent.subscribe(() => {
    //     this.loadMenu();
    //   })
  }
  
  loadMenu(){
    this.sideMenuService.getMenuItems().subscribe((data) => { 
      this.menu = data;
    }); 
  }
  
  isLogged() {
    return this.sideMenuService.isLogged();
  }

  logout(){
    this.sideMenuService.logout();
    this.loadMenu();
  }

  goToRoute(route: string){
    this.sideMenuService.goToRoute(route);
  }

  translateName(name: string) {
    const key = `menu.${name}`;
    const title = this.translateService.instant(key);

    return title === key ? name : title;
  }

  toggleMenu(isOpen: boolean) {
    document.body.style['overflow-y'] = isOpen ? 'hidden' : 'visible';
  }
}
