import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { LogInComponent } from './login/login.component';

const routes: Routes = [ 
   { path: '', component:  LandingComponent },
   { path: 'login', component: LogInComponent  },
    {
  path: '*',
  redirectTo: '/',
  pathMatch: 'full'
} 
];

export const routing: ModuleWithProviders =
  RouterModule.forRoot(routes)
;