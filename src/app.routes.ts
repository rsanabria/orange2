import { provideRouter, RouterConfig }  from '@angular/router';
import {LandingComponent } from './landing/landing.component';

const routes: RouterConfig = [  
  {
    path: '',
    component: LandingComponent
  }/*, 
  {
  path: '',
  redirectTo: '',
  patchMatch: 'full'
}*/
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];