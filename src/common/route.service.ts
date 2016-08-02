import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class RouteService {
  public rutaActual:Observable<string>;
  constructor (private store:Store<string>) {
    this.rutaActual = store.select<string>('router'); 
  }

  public actualizarRuta(ruta: string) {
    this.store.dispatch({type:'UPDATE_ROUTE', payload : ruta});
  }
}

