import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const fakeToken = 'demo-token-123';

    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${fakeToken}`
      }
    });

    console.log('Interceptor added Authorization header');

    return next.handle(authReq);
  }
}