// (c) Siemens Healthcare GmbH / Siemens Medical Solutions USA Inc. 2022. All rights reserved.
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpHeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest = this.modifyHeaders(req);
    return next.handle(modifiedRequest);
  }

  modifyHeaders(request: HttpRequest<any>) {
    let headers = request.headers;
    headers = headers.set('Content-Type', 'application/json');
    return request.clone({ headers });
  }
}
