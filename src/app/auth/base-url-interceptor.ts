import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('/assets/i18n/')) {
      return next.handle(req);
    }

    if (!req.url.includes('http')) {
      const newRequest = req.clone({
        url: `${environment.baseAPIUrl}${req.url}`,
      });
      return next.handle(newRequest);
    }

    return next.handle(req);
  }
}
