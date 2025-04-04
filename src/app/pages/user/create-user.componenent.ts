import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { userUrl } from 'src/app/api/api';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  nomUtilisateur: string = '';
  motdepasse: string = '';
  nom:  string ="";
  prenom: string= '';
  role: string = '';
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
  
    if (!this.role) {
      this.creationMessage = 'Veuillez sélectionner un rôle.';
      return;
    }
  
    const endpoint = `${userUrl}/${this.role}`;
  
    const payload = {
      nomUtilisateur: this.nomUtilisateur,
      motdepasse: this.motdepasse,
      nom: this.nom,
      prenom: this.prenom
    };
  
    this.http.post(endpoint, payload, { headers }).subscribe({
      next: () => {
        this.creationMessage = 'Utilisateur créé avec succès.';
      },
      error: (err) => {
        console.error('Erreur lors de la création:', err);
        if (err.status === 401) {
          this.creationMessage = 'Non autorisé. Veuillez vous reconnecter.';
        } else {
          const msg = err.error?.message || err.message || 'Erreur lors de la création.';
          this.creationMessage = `Erreur: ${msg}`;
        }
      }
    });
  }
  }
