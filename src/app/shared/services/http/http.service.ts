import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url = 'http://localhost:3977/api';

  constructor(private http: HttpClient) {}

  get(params, token): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this.http.get(this.url + params, { headers }).pipe(
      catchError((err) => {
        return throwError(err.error.message);
      })
    );
  }

  post(params, data): Observable<any> {
    const body = JSON.stringify(data);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.url + params, body, { headers }).pipe(
      catchError((err) => {
        return throwError(err.error.message);
      })
    );
  }

  update(params, data, token): Observable<any> {
    const body = JSON.stringify(data);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this.http.put(this.url + params, body, { headers }).pipe(
      catchError((err) => {
        return throwError(err.error.message);
      })
    );
  }

  delete(params, token): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this.http.delete(this.url + params, { headers }).pipe(
      catchError((err) => {
        return throwError(err.error.message);
      })
    );
  }
}
