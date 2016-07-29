import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { StateUpdates, Effect } from '@ngrx/effects'



@Injectable() 
export class AuthEffects {
 private usuarios = [
   {usuario : 'test',
    password: 'test@',
    ruta: '/'
  }
 ];
  constructor(private updates$ : StateUpdates<any>) {
  }
  private findUser (u: string) {
  return this.usuarios.find(usuario => { 
    return usuario.usuario === u });
} 

  @Effect() login$ =this.updates$
    .whenAction('LOG_IN')
      .map(info => {
        var u = this.findUser(info.action.payload.usuario);
        if (u) {
          if (u.password === info.action.payload.password)
            return ({type: 'LOG_IN_SUCCESS', payload : { usuario : u.usuario, isLogged: true, ruta : u.ruta }});
        }
        return ({type: 'LOG_IN_FAILED', payload : { usuario : '', isLogged: false }});
      });
      /*En espera que funcione el router desde aqui*/
      
/*  @Effect() login_success$ = this.updates$
    .whenAction('LOG_IN_SUCCESS')
      .map(info => {
        if (info.action.payload.isLogged) {
          //this.router.navigateByUrl(info.action.payload.ruta);
        }
      } );*/
}

     


