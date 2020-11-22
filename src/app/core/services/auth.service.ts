import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3977/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  register(data): Observable<any> {
    return this.http.post(AUTH_API + '/register', data, this.httpOptions);
  }

  login(data): Observable<any> {
    return this.http.post(AUTH_API + '/login', data, this.httpOptions);
  }
}
