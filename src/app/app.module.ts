    import { NgModule } from '@angular/core';
    import { BrowserModule }  from '@angular/platform-browser';
    import { ReactiveFormsModule } from '@angular/forms';

//Components
    import { AppComponent } from './app.component';
    import { LandingComponent } from './landing/landing.component';
    import { LogInComponent } from './login/login.component';
    import { routing } from './app.routes';
    import { NavBarComponent } from './common/layout/navbar/navbar.component';
//Own 
    import { AuthService } from './common/services/auth.service';
    import { ToastService } from './common/services/toast.service';
    import { RouterService } from './common/services/router.service';
    import { LogInGuard } from './common/login.guard';

    import { counterReducer } from './common/stores/reducers/counter.reducer';
    import { authReducer } from './common/stores/reducers/auth.reducer';
    import { routerReducer } from './common/stores/reducers/router.reducer';
//3rd parties
  import { MaterializeDirective } from "angular2-materialize";
  import { Store, StoreModule } from '@ngrx/store';
  import { AuthEffects } from './common/stores/effects/auth.effect';
  import { EffectsModule } from '@ngrx/effects';
  import { StoreDevtoolsModule } from '@ngrx/store-devtools';
  import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
  import { Ng2Webstorage } from 'ng2-webstorage';

    @NgModule({
      imports: [
        BrowserModule, ReactiveFormsModule, routing,
        EffectsModule.runAfterBootstrap(AuthEffects),
        StoreModule.provideStore({ counter: counterReducer, auth : authReducer, router: routerReducer },{router: '/'}),
        StoreDevtoolsModule.instrumentStore({
          monitor: useLogMonitor({
          visible: true,
          position: 'right'
      })
    }),
    StoreLogMonitorModule,
    Ng2Webstorage
      ],
      declarations: [
        AppComponent,
        LandingComponent,
        LogInComponent,
        NavBarComponent,
        MaterializeDirective
      ],
      providers : [AuthService,ToastService, RouterService, LogInGuard],
      bootstrap: [ AppComponent ]
    })
    export class AppModule { }