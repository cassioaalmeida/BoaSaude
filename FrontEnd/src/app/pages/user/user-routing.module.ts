import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedefinePasswordComponent } from './redefine-password/redefine-password.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  { 
    path: 'edit/:id',
    component: UserComponent 
  },
  { 
    path: 'redefine-password',
    component: RedefinePasswordComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
