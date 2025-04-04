import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { vehiculeUrl } from 'src/app/api/api';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.scss']
})
export class VehiculeListComponent implements OnInit {
  vehicules: any[] = [];
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.errorMessage = 'Non autorisé. Veuillez vous connecter.';
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<any[]>(vehiculeUrl, { headers }).subscribe({
      next: (data) => {
        this.vehicules = data;
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Erreur lors du chargement des véhicules.';
      }
    });
  }

  onCreateVehicule() {
    this.router.navigate(['/create-vehicule']);
  }
}
