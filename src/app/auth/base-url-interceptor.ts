import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let baseAPIUrl = 'http://localhost:3000/api/';

    if(req.url.includes('/assets/i18n/')) {
      baseAPIUrl = 'http://localhost:4200'
    }

    if (!req.url.includes('http://localhost')) {

      const newRequest = req.clone({
        url: `${baseAPIUrl}${req.url}`
      });
      return next.handle(newRequest);
    }

    return next.handle(req);
  }
}
