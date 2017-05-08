import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [NavBarComponent],
    declarations: [NavBarComponent],
    providers: [],
})
export class LayOutModule { }
