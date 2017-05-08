import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Services
import { ServiceModule } from './services/services.module';
//Stores
import { StoresModule } from './stores/stores.module';
@NgModule({
    imports: [CommonModule, RouterModule, ServiceModule, StoresModule],
    exports: [],
    declarations: [],
    providers: [],
})
export class SharedModule { }
