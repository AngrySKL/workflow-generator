// (c) Siemens Healthcare GmbH / Siemens Medical Solutions USA Inc. 2022. All rights reserved.
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { log } from '@shared/utilities/log';

@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) =>
        throwError(() => {
          log(ErrorInterceptor.name, `error ${err.status} happened in http calls`);
          return err;
        })
      )
    );
  }
}
