import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MaterializeDirective } from 'angular2-materialize';

@Component({
    selector: 'my-nav',
    directives: [MaterializeDirective, ROUTER_DIRECTIVES],
    template:`<nav >
    <div class="nav-wrapper orange darken-2">
      <a [routerLink]="['/']" class="brand-logo">Ora<strong>ng</strong>e <strong>2.0</strong></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">

      </ul>
    </div>
                </nav>`
})

export class OrangeNavBar {
       ngOnInit() {
       console.log("prueba2");
   }

}