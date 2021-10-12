import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TextMaskModule } from 'angular2-text-mask';
import { SharedModule } from 'src/app/shared/shared.module';
import { RedefinePasswordComponent } from './redefine-password/redefine-password.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserComponent,
    RedefinePasswordComponent,
    UserComponent
  ],
  imports: [
    UserRoutingModule,
    SharedModule,
    MatExpansionModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    TextMaskModule,
    MatDatepickerModule,
    MatChipsModule,
    MatAutocompleteModule,
  ]
})
export class UserModule { }
