import * as stepActions from './steps.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

const initialState = {
    stepuser: [
                {
                  loggedInData: ''
                }
              ]
};
export function stepReducer(state = initialState, action: stepActions.Action) {
   switch (action.type) {
    case stepActions.StepActionTypes.STEP1_WELCOME_SUCCESS: {
        console.log('data log in Success', action.payload);
        return {
            ...state,
            loggedInData: action.payload,
            errorMessage: null
        };
    }
    case stepActions.StepActionTypes.STEP1_WELCOME_FAIL: {
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
