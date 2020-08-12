import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const baseAPIUrl = 'http://localhost:3000/api/';
    if (!req.url.includes('http://localhost')) {

      const newRequest = req.clone({
        url: `${baseAPIUrl}${req.url}`
      });
      return next.handle(newRequest);
    }

    return next.handle(req);
  }
}
