import { NgModule } from '@angular/core';
//Reducers
import { authReducer } from './reducers/auth.reducer';
import { counterReducer } from './reducers/counter.reducer';
import { routerReducer } from './reducers/router.reducer';
//Effects
import { AuthEffects } from './effects/auth.effect';
//@ngrx
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {  useLogMonitor } from '@ngrx/store-log-monitor';

@NgModule({
    imports: [
        EffectsModule.runAfterBootstrap(AuthEffects),
        StoreModule.provideStore({ counter: counterReducer, auth : authReducer, router: routerReducer },{router: '/'}),
        StoreDevtoolsModule.instrumentStore({
          monitor: useLogMonitor({
            visible: true,
            position: 'right'
            })
        })
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class StoresModule { }
