    import { NgModule } from '@angular/core';
    import { BrowserModule }  from '@angular/platform-browser';
    import { ReactiveFormsModule } from '@angular/forms';
//Components
    import { AppComponent } from './app.component';
    import { LandingComponent } from './landing/landing.component';
    import { LogInComponent } from './login/login.component';
    import { routing } from './app.routes';
//Own Modules
    import { MyCommonModule } from './common/common.module';

//3rd parties
    import { MaterializeDirective } from "angular2-materialize";
    import { StoreLogMonitorModule } from '@ngrx/store-log-monitor';
    import { Ng2Webstorage } from 'ng2-webstorage';

    @NgModule({
      imports: [
        BrowserModule, 
        ReactiveFormsModule,
        routing,
        MyCommonModule,
        StoreLogMonitorModule,
        Ng2Webstorage
      ],
      declarations: [
        AppComponent,
        LandingComponent,
        LogInComponent,
        MaterializeDirective
      ],
      providers : [],
      bootstrap: [ AppComponent ]
    })
    export class AppModule { }