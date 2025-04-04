import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { MecanicienComponent } from 'src/app/pages/mecanicien/mecanicien.component';
import { CreateMecanicienComponent } from 'src/app/pages/mecanicien/create-mecanicien.component';
import { CreateUserComponent } from 'src/app/pages/user/create-user.componenent';
import { UserListingComponent } from 'src/app/pages/user/user-listing.component.';
import { CreateVehiculeComponent } from 'src/app/pages/vehicule/create-vehicule.component';
import { VehiculeListComponent } from 'src/app/pages/vehicule/vehicule-list.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    {path : 'mecanicien' ,  component: MecanicienComponent},
    {path: 'create-mecanicien' , component: CreateMecanicienComponent},
    {path: 'create-user' ,  component:  CreateUserComponent},
    {path: 'userList' , component: UserListingComponent},
    {path: 'vehicule', component: VehiculeListComponent},
    {path: "create-vehicule" , component: CreateVehiculeComponent}
    
];
