import { ActionReducer, Action } from '@ngrx/store';


export const routerReducer: ActionReducer<string> = (state: string = '', action: Action) => {
    switch (action.type) {
        case 'UPDATE_ROUTE':
            return action.payload;
        default:
            return state;
    }
}