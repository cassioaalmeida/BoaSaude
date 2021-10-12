import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pageable } from 'src/app/shared/model/pageable.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  pageable = new Pageable();
  label = "Buscar por nome  ou email..."
  companyId: number;

  searchPathName = 'GetUsersByCompany/';

  constructor(
    private userService: UserService,
    private ativatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.companyId = parseInt(this.ativatedRoute.snapshot.paramMap.get('id'), 10);
    this.searchPathName += !Number.isNaN(this.companyId) ? this.companyId : 0;
    this.setPage({ offset: 0 });
  }

  setPage(pageInfo: any): void {
    this.userService.getListPaged(pageInfo.offset + 1, 10).subscribe((data: Pageable) => {
      this.pageable = data;
    });
  }

  openUser(id: number) {
    this.userService.goToUser(id);
  }

  newUser(){
    this.userService.goToUser(0);
  }

  updateDatatable(pageable: any) {
    this.pageable = pageable;
  }
}
