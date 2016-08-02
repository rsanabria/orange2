"use strict";
exports.routerReducer = function (state, action) {
    if (state === void 0) { state = ''; }
    switch (action.type) {
        case 'UPDATE_ROUTE':
            return action.payload;
        default:
            return state;
    }
};

//# sourceMappingURL=router.reducer.js.map
