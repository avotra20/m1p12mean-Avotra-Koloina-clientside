import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { userUrl } from 'src/app/api/api';  // Update to your API endpoint for listing users

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {
  users: any[] = [];
  errorMessage: string = '';
  showToast: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.errorMessage = 'Vous devez être connecté.';
      this.showToast = true;
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<any[]>(userUrl, { headers }).subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        if (err.status === 403) {
          this.errorMessage = 'Non autorisé.';
        } else if (err.status === 401) {
          this.errorMessage = 'Token expiré. Veuillez vous reconnecter.';
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        } else {
          this.errorMessage = 'Erreur lors de la récupération des utilisateurs.';
        }
        this.showToast = true;
      }
    });
  }

  onCreateUser() {
    this.router.navigate(['/create-user']);
  }
}
