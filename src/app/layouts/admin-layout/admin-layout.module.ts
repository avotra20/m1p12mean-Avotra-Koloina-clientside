import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateMecanicienComponent } from '../../pages/mecanicien/create-mecanicien.component';
import { MecanicienComponent } from 'src/app/pages/mecanicien/mecanicien.component';
import { CreateUserComponent } from 'src/app/pages/user/create-user.componenent';
import { UserListingComponent } from 'src/app/pages/user/user-listing.component.';
import { VehiculeListComponent } from 'src/app/pages/vehicule/vehicule-list.component';
import { CreateVehiculeComponent } from 'src/app/pages/vehicule/create-vehicule.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    CreateVehiculeComponent,
    VehiculeListComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    MecanicienComponent,
    CreateMecanicienComponent,
    CreateUserComponent,
    UserListingComponent
  ]
})

export class AdminLayoutModule {}
