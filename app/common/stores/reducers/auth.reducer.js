"use strict";
exports.authReducer = function (state, action) {
    if (state === void 0) { state = { usuario: '', isLogged: false }; }
    switch (action.type) {
        case 'LOG_IN': {
            return Object.assign({}, state, action.payload);
        }
        case 'LOG_OUT': {
            return { usuario: '', isLogged: false }; /* Object.assign(state,{});*/
        }
        case 'LOG_IN_SUCCESS': {
            return { usuario: action.payload.usuario, isLogged: true, ruta: action.payload.ruta };
        }
        case 'LOG_IN_FAILED': {
            return { usuario: '', isLogged: false };
        }
        default: {
            return state;
        }
    }
};
//# sourceMappingURL=auth.reducer.js.map