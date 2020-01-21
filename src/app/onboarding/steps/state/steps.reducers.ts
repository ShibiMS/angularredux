import * as stepActions from './steps.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

const initialState = {
                        firstName:      '',
                        gender:         '',
                        age:            '',
                        height:         '',
                        heightMeasure:  '',
                        errorMessage:   ''
                    };
export function stepReducer(state = initialState, action: stepActions.Action) {
   switch (action.type) {
    case stepActions.StepActionTypes.STEP1_WELCOME_SUCCESS: {
        console.log('data log in Success', action.payload);
        return {
            ...state,
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
    case stepActions.StepActionTypes.STEP1_GETWELCOME_SUCCESS: {
        console.log('Get Welcome Success', action.payload.data.firstName);
        return {
            ...state,
            firstName: action.payload.data.firstName,
            errorMessage: null
        };
    }
    case stepActions.StepActionTypes.STEP1_GETWELCOME_FAIL: {
        console.log('Get Welcome Failure', action.payload);
        return {
            ...state,
            firstName: '',
            errorMessage: 'Error occured'
        };
    }
    case stepActions.StepActionTypes.STEP2_GENDER_SELECTION_SUCCESS: {
        console.log('GENDER SELECTION SUCCESS', action.payload);
        return {
            ...state,
            gender: action.payload,
            errorMessage: null
        };

    }
    case stepActions.StepActionTypes.STEP2_GENDER_SELECTION_FAIL: {
        console.log('GENDER SELECTION FAILURE', action.payload);
        return {
            ...state,
            gender: '',
            errorMessage: 'Error Occured'
        };
    }

    case stepActions.StepActionTypes.STEP2_GET_GENDER_SELECTION_SUCCESS: {
        console.log('GET GENDER SELECTION SUCCESS', action.payload);
        return {
            ...state,
            gender: action.payload.data.gender,
            errorMessage: null
        };
    }
    case stepActions.StepActionTypes.STEP2_GET_GENDER_SELECTION_FAIL: {
        console.log('GET GENDER SELECTION FAILURE', action.payload);
        return {
            ...state,
            gender: '',
            errorMessage: 'Error Occured'
        };

    }
    case stepActions.StepActionTypes.STEP3_GET_AGE_SELECTION_SUCCESS: {
        console.log('GET AGE SELECTION SUCCESS', action.payload);
        return {
            ...state,
            age: action.payload.data.yearOfBirth,
            errorMessage: null
        };
    }
    case stepActions.StepActionTypes.STEP3_GET_AGE_SELECTION_FAIL: {
        console.log('GET AGE SELECTION FAILURE', action.payload);
        return {
            ...state,
            age: '',
            errorMessage: 'Error Occured'
        };

    }
    case stepActions.StepActionTypes.STEP4_GET_Height_SELECTION_SUCCESS: {
        console.log('GET HEIGHT SELECTION SUCCESS', action.payload);
        return {
            ...state,
            height: action.payload.data.height.height,
            heightMeasure: action.payload.data.height.heightMeasure,
            errorMessage: null
        };
    }
    case stepActions.StepActionTypes.STEP4_GET_Height_SELECTION_FAIL: {
        console.log('GET HEIGHT SELECTION FAILURE', action.payload);
        return {
            ...state,
            age: '',
            errorMessage: 'Error Occured'
        };

    }
    case stepActions.StepActionTypes.STEP5_GET_Weight_SELECTION_SUCCESS: {
        console.log('GET WEIGHT SELECTION SUCCESS', action.payload);
        return {
            ...state,
            weight: action.payload.data.height.weight,
            weightMeasure: action.payload.data.height.weightMeasure,
            errorMessage: null
        };
    }
    case stepActions.StepActionTypes.STEP5_GET_Weight_SELECTION_FAIL: {
        console.log('GET WEIGHT SELECTION FAILURE', action.payload);
        return {
            ...state,
            age: '',
            errorMessage: 'Error Occured'
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

const getOnboardingFeatureState = createFeatureSelector<any>('stepReducer');

export const getFirstName = createSelector(
    getOnboardingFeatureState,
    (state: any) => state
);

export const getGender = createSelector(
    getOnboardingFeatureState,
    (state: any) => state
);

export const getAge = createSelector(
    getOnboardingFeatureState,
    (state: any) => state
);

export const getHeight = createSelector(
    getOnboardingFeatureState,
    (state: any) => state
);
