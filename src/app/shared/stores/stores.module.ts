import { NgModule } from '@angular/core';
//Reducers
import { authReducer } from './reducers/auth.reducer';
import { counterReducer } from './reducers/counter.reducer';
import { routerReducer } from './reducers/router.reducer';
//Effects
import { AuthEffects } from './effects/auth.effect';
import { RouterEffects } from './effects/router.effect';
//@ngrx
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    imports: [
        EffectsModule.runAfterBootstrap(AuthEffects),
        EffectsModule.run(RouterEffects),
        StoreModule.provideStore({ counter: counterReducer, auth : authReducer, router: routerReducer },{router: '/'}),
        StoreDevtoolsModule.instrumentOnlyWithExtension({
            maxAge: 5
        })
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class StoresModule { }
