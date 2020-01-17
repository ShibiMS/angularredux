import * as stepActions from './steps.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

const initialState = {
    stepuser: [
                {
                  loggedInData: '',
                  welcome: 'welcome'
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
    case stepActions.StepActionTypes.STEP2_GENDER_SELECTION_SUCCESS: {
        console.log('GENDER SELECTION SUCCESS', action.payload);
        return {
            ...state,
            loggedInData: action.payload,
            errorMessage: null
        };

    }
    case stepActions.StepActionTypes.STEP2_GENDER_SELECTION_FAIL: {
        console.log('GENDER SELECTION FAILURE', action.payload);
        return {
            ...state,
            loggedInData: action.payload,
            errorMessage: null
        };
    }
    case stepActions.StepActionTypes.STEP8_Profile_Upload_SUCCESS: {
        console.log('Profile Upload Success', action.payload);
        return {
            ...state,
            loggedInData: action.payload,
            errorMessage: null
        };

    }
    case stepActions.StepActionTypes.STEP8_Profile_Upload_FAIL: {
        console.log('Profile Upload Failure', action.payload);
        return {
            ...state,
            loggedInData: action.payload,
            errorMessage: null
        };
    }
    default: {
        return state;
    }
   }
}
