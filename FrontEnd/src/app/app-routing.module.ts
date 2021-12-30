import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { HomeComponent } from './pages/home/home.component';
import { InsuranceComponent } from './pages/insurance/insurance.component';
import { SearchPartnerComponent } from './pages/search-partner/search-partner.component';
import { UserInsuranceComponent } from './pages/user-insurance/user-insurance.component';
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
  {
    path: 'insurance',
    component: InsuranceComponent
  },
  {
    path: 'user-insurance',
    component: UserInsuranceComponent
  },
  {
    path: 'search-partner',
    component: SearchPartnerComponent
  },
  {
    path: 'attendance',
    component: AttendanceComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy',
  scrollPositionRestoration: 'enabled' },
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }