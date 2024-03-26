import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthenticationService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
        headers: new HttpHeaders({
            'Content-type':'application/json'
        })
    });
    console.log(this.auth.getToken())
    if(this.auth.getToken()) {
        request = request.clone({
        headers: request.headers.append('Authorization', `Bearer ${this.auth.getToken()}`)
        });
    }
    return next.handle(request);
  }
}