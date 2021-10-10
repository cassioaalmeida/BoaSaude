import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class SpinnerLoadingInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(private spinner: NgxSpinnerService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.totalRequests++;
    this.spinner.show();
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        this.totalRequests--;
        if (this.totalRequests === 0) {
          this.spinner.hide();
        }
        return throwError(err);
      })
    ).pipe(
      map<HttpEvent<any>, any>((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.totalRequests--;
          if (this.totalRequests === 0) {
            this.spinner.hide();
          }
        }
        return event;
      }
    ));
  }
}
