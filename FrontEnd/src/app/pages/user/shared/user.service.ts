import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Pageable } from 'src/app/shared/model/pageable.model';
import { MessageService } from 'src/app/shared/services/message.service';
import { UserApiService } from './user-api.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private userApiService: UserApiService,
    private router: Router,
    private messageService: MessageService,
    private location: Location
  ) { }

  getLoggedUser(){
    const user = new Subject<any>()
    this.userApiService.getLoggedUser().subscribe((data: any) => user.next(data));
    return user.asObservable();
  }

  upsert(user: any): void{
    this.userApiService.upsert(user).subscribe((res) => {
      if(!!user.id) {
        this.messageService.success('message.success-user-update');
      }
      else {
        this.messageService.success('message.success-user-insert');
      }
      this.location.back();
    });
  }

  cancel(): void{
    this.location.back();
  }

  getListPaged(pageNumber: number, pageSize: number): any {
    const usersPageable = new Subject<Pageable>();
    this.userApiService.getUserListPaged(pageNumber, pageSize).subscribe((data: any) => {
      const pagination = JSON.parse(data.headers.get('X-Pagination'));
      const pageable = new Pageable();
      pageable.elements = data.body;
      pageable.totalCount = pagination.TotalCount;
      pageable.pageSize = pagination.PageSize;
      pageable.currentPage = pagination.CurrentPage;
      pageable.totalPages = pagination.TotalPages;
      pageable.hasNext = pagination.HasNext;
      pageable.hasPrevious = pagination.HasPrevious;
      usersPageable.next(pageable);
    });
    return usersPageable.asObservable();
  }

  goToUser(id: number): void {
    this.router.navigate([`user/edit/${id}`]);
  }

  getUser(id: number): any {
    const user = new Subject<any>();
    this.userApiService.getUser(id).subscribe((data: any) => user.next(data));
    return user.asObservable();
  }

  comparePasswords(password: string, confirmPassword: string){
    if (password != confirmPassword){
      return false;
    }

    return true;
  }
}
