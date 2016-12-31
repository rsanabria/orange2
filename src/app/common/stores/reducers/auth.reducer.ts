import { ActionReducer, Action } from '@ngrx/store';

export const authReducer = (state = {user : '', isLogged: false } , action:Action) => {
  switch(action.type) {
    case 'LOG_IN': {
      return Object.assign({},state,action.payload);
    }
    case 'LOG_OUT': {
      return {user : '', isLogged: false };
    }
    case 'LOG_IN_SUCCESS': {
      return { user: action.payload.user, isLogged: true, ruta: action.payload.ruta }
    }
    case 'LOG_IN_FAILED': {
      return { user: '', isLogged: false };
    }
    default: {
            return state;
    }

  }
}