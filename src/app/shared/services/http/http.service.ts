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

  get(params: string): Observable<any> {
    return this.http.get(AUTH_API + params, this.httpOptions);
  }

  post(params: string, data: any): Observable<any> {
    return this.http.post(
      AUTH_API + params,
      JSON.stringify(data),
      this.httpOptions
    );
  }

  update(params: string, data: any): Observable<any> {
    return this.http.put(
      AUTH_API + params,
      JSON.stringify(data),
      this.httpOptions
    );
  }

  delete(params: string): Observable<any> {
    return this.http.delete(AUTH_API + params, this.httpOptions);
  }
}
