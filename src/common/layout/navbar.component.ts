import { Component } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';

@Component({
    selector: 'my-nav',
    template:`<nav >
    <div class="nav-wrapper orange darken-2">
      <a [routerLink]="['/']" class="brand-logo">Ora<strong>ng</strong>e <strong>2.0</strong></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">

      </ul>
    </div>
                </nav>`
})

export class NavBarComponent {
       ngOnInit() {
       console.log("prueba2");
   }

}