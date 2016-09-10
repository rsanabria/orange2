import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Store, StoreModule } from '@ngrx/store';
import { AuthEffects } from './common/stores/effects/auth.effect';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { routing } from './app.routes';

import { AuthService } from './common/services/auth.service';
import { RouteService } from './common/services/route.service';

import { NavBarComponent } from './common/layout/navbar.component';
import { AppComponent }   from './app.component';

import { ToastService } from './common/toast.service';

import { LandingComponent } from './landing/landing.component';
import { LogInComponent } from './login/login.component';

import { authReducer } from './common/stores/reducers/auth.reducer';
import { routerReducer } from './common/stores/reducers/router.reducer';

import { MaterializeDirective } from 'angular2-materialize';

@NgModule({
    declarations: [AppComponent, NavBarComponent, LandingComponent, LogInComponent, MaterializeDirective ],
    imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    EffectsModule.runAfterBootstrap(AuthEffects),
    StoreModule.provideStore({ router: routerReducer, auth: authReducer }, { router: '' }),

     ],
     providers : [ AuthService, RouteService, ToastService],
    bootstrap:    [AppComponent]
})
export class AppModule {}

