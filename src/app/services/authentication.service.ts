import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  // modify the return type to properly use the full response
  login(email: string, password: string) {
    let postData = {email : email ,password :password};
    return this.http.post(`${environment.API_URL}/login`, postData);
    }

    getUserData() {
        return this.http.get(`${environment.API_URL}/users`);  
    }

    getToken() {
        return localStorage.getItem('token');
    }
}
