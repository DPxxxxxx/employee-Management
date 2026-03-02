import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { AuthGuard } from './auth-guard';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  // Protect search page
  { 
    path: 'search', 
    component: SearchComponent,
    canActivate: [AuthGuard]
  },

  //  UPDATED: Lazy Loaded Employee List
  {
    path: 'employees',
    loadComponent: () =>
      import('./employee-list/employee-list.component')
        .then(m => m.EmployeeList),
    canActivate: [AuthGuard]
  },

  // Protect employee profile
  {
    path: 'employees/:id',
    component: EmployeeProfileComponent,
    canActivate: [AuthGuard]
  },
  
  { path: '**', redirectTo: 'login' }
];