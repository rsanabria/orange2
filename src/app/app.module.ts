    import { NgModule } from '@angular/core';
    import { BrowserModule }  from '@angular/platform-browser';
    import { ReactiveFormsModule } from '@angular/forms';
//Components
    import { AppComponent } from './app.component';
    import { LandingComponent } from './landing/landing.component';
    import { LogInComponent } from './login/login.component';
    import { NgrxDashBoardComponent } from './ngrx/dashboard.component';
    import { routing } from './app.routes';
//Own Modules
    import { SharedModule } from './shared/shared.module';
    import { LayOutModule } from './layout/layout.component';
//3rd parties
    import { MaterializeDirective } from "angular2-materialize";
    import { Ng2Webstorage } from 'ng2-webstorage';

    @NgModule({
      imports: [
        BrowserModule, 
        ReactiveFormsModule,
        routing,
        SharedModule,
        LayOutModule,
        Ng2Webstorage
      ],
      declarations: [
        AppComponent,
        LandingComponent,
        LogInComponent,
        NgrxDashBoardComponent,
        MaterializeDirective
      ],
      providers : [],
      bootstrap: [ AppComponent ]
    })
    export class AppModule { }