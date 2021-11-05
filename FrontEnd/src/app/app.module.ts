import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { SpinnerLoadingInterceptor } from './_core/spinner-loading.interceptor';
import { AuthGuardService } from './_core/auth-guard.service';
import { AuthenticationInterceptor } from './_core/authentication.interceptor';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TextMaskModule } from 'angular2-text-mask';
import { ToastrModule } from 'ngx-toastr';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ExceptionHandlerInterceptor } from './_core/exception-handler.interceptor';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import ptBr from '@angular/common/locales/pt';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatTooltipModule } from '@angular/material/tooltip';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { LoginComponent } from './shared/login/login.component';
import { InputErrorMessageComponent } from './shared/input-error-message/input-error-message.component';
import { UserComponent } from './pages/user/user/user.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { InsuranceComponent } from './pages/insurance/insurance.component';
import { UserInsuranceComponent } from './pages/user-insurance/user-insurance.component';
import { SearchPartnerComponent } from './pages/search-partner/search-partner.component';

registerLocaleData(ptBr);

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideMenuComponent,
    NavBarComponent,
    LoginComponent,
    InputErrorMessageComponent,
    UserComponent,
    UserListComponent,
    InsuranceComponent,
    UserInsuranceComponent,
    SearchPartnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
    }),
    ToastrModule.forRoot(),
    TextMaskModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,  
    MatMenuModule,   
    MatSlideToggleModule,
    MatDialogModule,
    NgxDatatableModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    MatPaginatorModule,
    MatListModule,
    MatTabsModule,
    NgxMaterialTimepickerModule,
    DragDropModule,
    MatTooltipModule
  ],
  providers: [
    AuthGuardService,
    { 
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerLoadingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ExceptionHandlerInterceptor,
      multi: true
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL' 
    },
    { 
      provide: MAT_DATE_LOCALE, 
      useValue: 'pt-BR' 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }