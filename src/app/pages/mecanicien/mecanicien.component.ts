import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { mecanicienUrl } from 'src/app/api/api';

@Component({
  selector: 'app-mecanicien',
  templateUrl: './mecanicien.component.html',
  styleUrls: ['./mecanicien.component.scss']
})
export class MecanicienComponent implements OnInit {
  mecaniciens: any[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchMecaniciens();
  }

  fetchMecaniciens(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      this.errorMessage = 'Token manquant. Veuillez vous connecter.';
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<any[]>(mecanicienUrl, { headers }).subscribe({
      next: (data) => {
        this.mecaniciens = data;
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Erreur lors de la récupération.';
      }
    });
  }
}
