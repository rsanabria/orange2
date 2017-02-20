import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Layout
import { NavBarComponent } from './layout/navbar/navbar.component';
//Services
import { ServiceModule } from './services/services.module';
//Stores
import { StoresModule } from './stores/stores.module';
@NgModule({
    imports: [CommonModule, RouterModule, ServiceModule, StoresModule],
    exports: [NavBarComponent],
    declarations: [NavBarComponent],
    providers: [],
})
export class MyCommonModule { }
