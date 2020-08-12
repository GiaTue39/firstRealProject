import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token) {

      let headers = new HttpHeaders().set(
        "Authorization",
        `Bearer ${token}`,
      );

      const newRequest = req.clone({ headers });

      return next.handle(newRequest).pipe(
        tap((response) => {
          console.log('response', response)
        })
      );
    }

    return next.handle(req);
  }
}
