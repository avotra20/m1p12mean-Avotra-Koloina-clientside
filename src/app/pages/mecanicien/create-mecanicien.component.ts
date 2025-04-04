import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { mecanicienUrl } from 'src/app/api/api';

@Component({
  selector: 'app-create-mecanicien',
  templateUrl: './create-mecanicien.component.html',
  styleUrls: ['./create-mecanicien.component.scss']
})
export class CreateMecanicienComponent {
  nomUtilisateur: string = '';
  motdepasse: string = '';
  nom: string = '';
  prenom: string = '';
  creationMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.creationMessage = 'Vous devez être connecté.';
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const payload = {
      nomUtilisateur: this.nomUtilisateur,
      motdepasse: this.motdepasse,
      nom: this.nom,
      prenom: this.prenom
    };

    this.http.post(mecanicienUrl, payload, { headers }).subscribe({
      next: () => {
        this.creationMessage = 'Mécanicien créé avec succès.';
    
      },
      error: (err) => {
        this.creationMessage = err.error?.message || 'Erreur lors de la création.';
      }
    });
  }
}
