// (c) Siemens Healthcare GmbH / Siemens Medical Solutions USA Inc. 2022. All rights reserved.
import { TestBed } from '@angular/core/testing';
import { ErrorInterceptor } from './error.interceptor';
import { throwError } from 'rxjs';
import { HttpRequest } from '@angular/common/http';

describe('HttpInterceptorService', () => {
  let service: ErrorInterceptor;
  let interceptor: ErrorInterceptor;
  const nextMock: any = {
    handle: () => throwError(() => new Error('test')),
  };
  const requestMock = new HttpRequest('GET', '/test');

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ErrorInterceptor, useClass: ErrorInterceptor }],
    });
    service = TestBed.inject(ErrorInterceptor);
    interceptor = new ErrorInterceptor();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(interceptor).toBeTruthy();
  });

  it('should intercept be called', () => {
    expect(service.intercept).toBeTruthy();
    interceptor.intercept(requestMock, nextMock).subscribe({
      error: (err) => {
        expect(err.message).toBe('test');
      },
    });
  });
});
