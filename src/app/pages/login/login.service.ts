import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:5000/auth';  

  constructor(private http: HttpClient) {}

  login(nomUtilisateur: string, motdepasse: string): Observable<any> {
    return this.http.post(this.apiUrl, { nomUtilisateur, motdepasse });
  }
}
