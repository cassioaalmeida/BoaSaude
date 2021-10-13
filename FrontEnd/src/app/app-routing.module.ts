import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserComponent } from './pages/user/user/user.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'user/edit/:id',
    component: UserComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy',
  scrollPositionRestoration: 'enabled' },
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }