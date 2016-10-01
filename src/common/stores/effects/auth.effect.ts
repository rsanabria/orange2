import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects'





@Injectable() 
export class AuthEffects {
 private usuarios = [
   {usuario : 'test',
    password: 'test@',
    ruta: ''
  }
 ];
  constructor(private actions$ : Actions, private router: Router) {}

  
  private findUser (u: string) {
  return this.usuarios.find(usuario => { 
    return usuario.usuario === u });
} 

  @Effect() login$ = this.actions$
    .ofType('LOG_IN')
      .map(info => {
        var u = this.findUser(info.payload.usuario);
        if (u) {
          if (u.password === info.payload.password) {
            console.log(u);
            return ({type: 'LOG_IN_SUCCESS', payload : { usuario : u.usuario, isLogged: true, ruta : u.ruta }});
          }
        }
        return ({type: 'LOG_IN_FAILED', payload : { usuario : '', isLogged: false }});
      });
      /*En espera que funcione el router desde aqui*/
      
  @Effect() login_success$ = this.actions$
    .ofType('LOG_IN_SUCCESS')
      .map(info => {
        if (info.payload.isLogged) {
          console.log("prueba");
           this.router.navigateByUrl(info.payload.ruta);  
           return ({type:""});
        }
      } );

}
