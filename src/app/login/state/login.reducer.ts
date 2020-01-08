import * as loginActions from "./login.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

const initialState = {
    loginuser: [
                {
                  loggedInData: ''
                }
              ]
};
export function loginReducer(state = initialState, action: loginActions.Action) {
   switch (action.type) {
    case loginActions.LoginActionTypes.LOGIN_USERS_SUCCESS: {
        console.log('data log in Success', action.payload);
        return {
            ...state,
            loggedInData: action.payload,
            errorMessage: null
        };
    }
    case loginActions.LoginActionTypes.LOGIN_USERS_FAIL: {
        console.log('data log in Failure', action.payload);
        return {
            ...state,
            errorMessage: 'Invalid Credentials'
        };
    }
    default: {
        return state;
    }
   }
}