import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService,
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authenticationService.isLogged()) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${this.authenticationService.getAccessToken()}`
        }
      });
    }

    if (!request.headers.has('Content-Type') && !request.headers.has('X-Skip-Interceptor')) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json'
        }
      });
    }

    const reqparams = this.removeNullValuesFromQueryParams(request.params)

    request = request.clone({
      params: reqparams
    });

    return next.handle(request)
      .pipe(catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.authenticationService.logout();
        }
        return throwError(error);
      }));
  }
  
  removeNullValuesFromQueryParams(params: HttpParams) {
    const paramsKeysAux = params.keys();
    paramsKeysAux.forEach((key) => {
      const value = params.get(key);
      if (value === null || value === undefined || value === '') {
        params['map'].delete(key);
      }
    });

    return params;
  }
}
