import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_core/authentication.service';
import { UtilsService } from 'src/app/_core/Utils/utils.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() menu = new EventEmitter();
  @Output() notification = new EventEmitter();

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  home(){
    this.router.navigate(['']);
  }

  toggleMenu(){
    this.menu.emit();
  }

  toggleNotification(){
    this.notification.emit();
  }

  isLogged() {
    return this.authenticationService.isLogged();
  }

  logout() {
    this.authenticationService.logout();
  }

}
