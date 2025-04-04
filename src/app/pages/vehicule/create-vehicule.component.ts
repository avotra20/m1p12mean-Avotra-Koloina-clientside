import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { vehiculeUrl, clientUrl } from 'src/app/api/api'; // Ensure this is correct
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-vehicule',
  templateUrl: './create-vehicule.component.html',
  styleUrls: ['./create-vehicule.component.scss']
})
export class CreateVehiculeComponent implements OnInit {
  immatriculation: string = '';
  marque: string = '';
  modele: string = '';
  annee: number = 0;
  clientId: string = '';  
  clients: any[] = []; 
  filteredClients: any[] = [];  
  creationMessage: string = ''; 

  constructor(private http: HttpClient, private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.fetchClients(); 
  }

  fetchClients() {
    this.http.get<any[]>(clientUrl).subscribe({
      next: (response) => {
        this.clients = response;
        this.filteredClients = response; 
      },
      error: (err) => {
        console.error(err);
        this.creationMessage = 'Erreur lors du chargement des clients';
      }
    });
  }

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
      immatriculation: this.immatriculation,
      marque: this.marque,
      modele: this.modele,
      annee: this.annee,
      clientId: this.clientId
    };

    this.http.post(vehiculeUrl, payload, { headers }).subscribe({
      next: () => {
        this.creationMessage = 'Véhicule créé avec succès.';
        setTimeout(() => {
          this.router.navigate(['/vehicule-list']); // Redirect after success
        }, 2000); // Redirect after 2 seconds
      },
      error: (err) => {
        this.creationMessage = err.error?.message || 'Erreur lors de la création du véhicule.';
      }
    });
  }
}
