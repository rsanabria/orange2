
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LogInComponent } from './login/login.component';

import { LogInGuard } from './shared/services/login.guard';

const routes: Routes = [ 
   { path: '', component:  LandingComponent,  canActivate : [LogInGuard] },
   { path: 'login', component: LogInComponent,  canActivate : [LogInGuard]  },
    {
  path: '*',
  redirectTo: '/',
  pathMatch: 'full'
} 
];

export const routing: ModuleWithProviders =
  RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })
;