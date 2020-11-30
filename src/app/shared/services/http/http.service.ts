import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Services
import { TokenService } from '../../../core/services/token.service';

const AUTH_API = 'http://localhost:3977/api';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private token: TokenService) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.token.getToken(),
    }),
  };

  get(path: string): Observable<any> {
    return this.http.get(AUTH_API + path, this.httpOptions);
  }

  post(path: string, data: any): Observable<any> {
    return this.http.post(
      AUTH_API + path,
      JSON.stringify(data),
      this.httpOptions
    );
  }

  update(path: string, data: any): Observable<any> {
    return this.http.put(
      AUTH_API + path,
      JSON.stringify(data),
      this.httpOptions
    );
  }

  delete(path: string): Observable<any> {
    return this.http.delete(AUTH_API + path, this.httpOptions);
  }
}
