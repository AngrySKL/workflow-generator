// (c) Siemens Healthcare GmbH / Siemens Medical Solutions USA Inc. 2022. All rights reserved.
import { UserService } from '@app/shared/services/user.service';
import { userServiceMock } from '@app/shared/mocks/user-service';
import { TestBed } from '@angular/core/testing';
import { HttpHeaderInterceptor } from './http-header.interceptor';
import { of } from 'rxjs';
import { HttpRequest } from '@angular/common/http';

describe('HttpInterceptorService', () => {
  let service: HttpHeaderInterceptor;
  let interceptor: HttpHeaderInterceptor;
  const routerMock = {
    navigate: () => Promise.resolve(true),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpHeaderInterceptor, useClass: HttpHeaderInterceptor },
        { provide: UserService, useValue: userServiceMock },
      ],
    });
    service = TestBed.inject(HttpHeaderInterceptor);
    interceptor = new HttpHeaderInterceptor(userServiceMock as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(interceptor).toBeTruthy();
  });

  it('should intercept be called', () => {
    service = TestBed.inject(HttpHeaderInterceptor);
    expect(service.intercept).toBeTruthy();
  });

  it('HttpRequest test.json', () => {
    const nextMock: any = {
      handle: () => of(true),
    };
    const requestMock = new HttpRequest('GET', '/test.json');
    interceptor.intercept(requestMock, nextMock).subscribe((res) => {
      expect(res).toBeTrue();
    });
  });

  it('HttpRequest affiliations', () => {
    const nextMock: any = {
      handle: () => of(true),
    };
    const requestMock = new HttpRequest('GET', '/affiliations');
    interceptor.intercept(requestMock, nextMock).subscribe((res) => {
      expect(res).toBeTrue();
    });
  });

  it('HttpRequest test', () => {
    const nextMock: any = {
      handle: () => of(true),
    };
    const requestMock = new HttpRequest('GET', '/test');
    interceptor.intercept(requestMock, nextMock).subscribe((res) => {
      expect(res).toBeTrue();
    });
  });
});
