import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { authUrl } from 'src/app/api/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginMessage: string = ''; 


  constructor(private http: HttpClient, private router: Router) {} 

  onLogin() {
    const loginData = {
      nomUtilisateur: this.email,
      motdepasse: this.password
    };

    this.http.post<any>(authUrl, loginData).subscribe(
      response => {
        const token = response.token;
        const nomUtilisateur = response.nomUtilisateur;
        localStorage.setItem('token', token);
        localStorage.setItem('nomUtilisateur', nomUtilisateur);
        localStorage.setItem('token', token);
        console.log(token)
        console.log('connexion reussi');
        this.loginMessage = 'Connexion réussie'; 
        setTimeout(() => {
          this.router.navigate(['/user-profile']);
        }, 1500); 

      },
      error => {
        if (error.error && error.error.message) {
          this.loginMessage = error.error.message; 
        } else {
          this.loginMessage = 'Une erreur est survenue.';
        }
      }
    );
  }
}
