import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class RouterService {
  public rutaActual:Observable<String>;

  constructor (private store:Store<String>) {
    this.rutaActual = store.select<String>('router'); 
  }

  public actualizarRuta(ruta: String) {
    this.store.dispatch({type:'UPDATE_ROUTE', payload : ruta});
  }
}