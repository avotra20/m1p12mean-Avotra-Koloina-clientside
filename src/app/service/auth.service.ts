import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { authUrl } from '../api/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${authUrl}`, { email, password }).pipe(
      catchError((error) => {
        return of({ success: false, message: 'Login failed. Please try again.' });
      })
    );
  }
}
