import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ExceptionHandlerInterceptor implements HttpInterceptor {

  constructor(
    private translateService: TranslateService,
    private toastrService: ToastrService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      if (error.status === 500) {
        this.translateService.get('exception.SERVER-ERROR').subscribe((label: string) => {
          this.toastrService.error(label)
        });
      }
      if (error.status == 400 && error.error instanceof Blob) {
        this.translateService.get(`exception.FILENOTFOUND`).subscribe((label: string) => {
          this.toastrService.error(label)
        });
      }
      else if (error.status === 400) {
        this.translateService.get(`exception.${error.error}`).subscribe((label: string) => {
          this.toastrService.error(label)
        });
      }
      if (error.status === 401) {
        this.translateService.get(`exception.UNAUTHORIZED`).subscribe((label: string) => {
          this.toastrService.error(label)
        });
      }
      return throwError(error);
    }));
  }

  
}
