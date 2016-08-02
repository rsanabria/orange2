import { provideRouter, RouterConfig }  from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LogInComponent } from './login/login.component';

const routes: RouterConfig = [  
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LogInComponent
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