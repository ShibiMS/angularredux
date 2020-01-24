import * as stepActions from './steps.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

const initialState = {
                        firstName:      '',
                        gender:         '',
                        age:            '',
                        height:         '',
                        heightMeasure:  '',
                        weight:         '',
                        weightMeasure:  '',
                        bodyMeasurementBy: '',
                        Measure: {},
                        weightExtra: {},
                        physicalgoal: '',
                        activitylevel: '',
                        workoutPerWeek: '',
                        fitnessGoal: '',
                        toolkit: '',
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
            height: '',
            heightMeasure: '',
            errorMessage: 'Error Occured'
        };

    }
    case stepActions.StepActionTypes.STEP5_GET_Weight_SELECTION_SUCCESS: {
        console.log('GET WEIGHT SELECTION SUCCESS', action.payload);
        return {
            ...state,
            weight: action.payload.data.weight.weight,
            weightMeasure: action.payload.data.weight.weightMeasure,
            errorMessage: null
        };
    }
    case stepActions.StepActionTypes.STEP5_GET_Weight_SELECTION_FAIL: {
        console.log('GET WEIGHT SELECTION FAILURE', action.payload);
        return {
            ...state,
            weight: '',
            weightMeasure: '',
            errorMessage: 'Error Occured'
        };

    }
    case stepActions.StepActionTypes.STEP7_GET_Progress_SELECTION_SUCCESS: {
        console.log('GET Progress SELECTION SUCCESS', action.payload.data.bodyMeasurementBy);
        return {
            ...state,
            bodyMeasurementBy: action.payload.data.bodyMeasurementBy,
            errorMessage: null
        };
    }
    case stepActions.StepActionTypes.STEP7_GET_Progress_SELECTION_FAIL: {
        console.log('GET PROGRESS SELECTION FAILURE', action.payload);
        return {
            ...state,
            bodyMeasurementBy: '',
            errorMessage: 'Error Occured'
        };

    }
    case stepActions.StepActionTypes.STEP7_GET_Progress_SELECTION_SUCCESS: {
        console.log('GET Progress SELECTION SUCCESS', action.payload.data.bodyMeasurementBy);
        return {
            ...state,
            bodyMeasurementBy: action.payload.data.bodyMeasurementBy,
            errorMessage: null
        };
    }
    case stepActions.StepActionTypes.STEP7_GET_Progress_SELECTION_FAIL: {
        console.log('GET PROGRESS SELECTION FAILURE', action.payload);
        return {
            ...state,
            bodyMeasurementBy: '',
            errorMessage: 'Error Occured'
        };
    }
    case stepActions.StepActionTypes.STEP8_Profile_Upload_SUCCESS: {
        console.log('Profile Upload Success', action.payload);
        return {
            ...state,
            profileData: action.payload,
            errorMessage: null
        };

    }
    case stepActions.StepActionTypes.STEP8_Profile_Upload_FAIL: {
        console.log('Profile Upload Failure', action.payload);
        return {
            ...state,
            profileData: '',
            errorMessage: null
        };
    }
    case stepActions.StepActionTypes.STEP9_GET_BodyMeasure_SUCCESS: {
        console.log('GET Body Measure SUCCESS', action.payload.data.bodyMeasurementObj.Measure);
        return {
            ...state,
            Measure: action.payload.data.bodyMeasurementObj.Measure,
            errorMessage: null
        };
    }
    case stepActions.StepActionTypes.STEP9_GET_BodyMeasure_FAIL: {
        console.log('GET Body Measure FAILURE', action.payload);
        return {
            ...state,
            Measure: '',
            errorMessage: 'Error Occured'
        };
    }
    case stepActions.StepActionTypes.STEP10_GET_WeightExtra_SUCCESS: {
        console.log('GET WEIGHT SUCCESS', action.payload);
        return {
            ...state,
            weightExtra: action.payload.data.bodyType.id,
            errorMessage: null
        };
    }
    case stepActions.StepActionTypes.STEP10_GET_WeightExtra_FAIL: {
        console.log('GET WEIGHT FAILURE', action.payload);
        return {
            ...state,
            weightExtra: '',
            errorMessage: 'Error Occured'
        };
    }
    case stepActions.StepActionTypes.STEP11_GET_PhysiqueGoal_SUCCESS: {
        console.log('GET PHYSICAL SUCCESS', action.payload);
        return {
            ...state,
            physicalgoal: action.payload.data,
            errorMessage: null
        };
    }
    case stepActions.StepActionTypes.STEP11_GET_PhysiqueGoal_FAIL: {
        console.log('GET PHYSICAL FAILURE', action.payload);
        return {
            ...state,
            physicalgoal: '',
            errorMessage: 'Error Occured'
        };
    }
    case stepActions.StepActionTypes.STEP12_GET_ActivityLevel_SUCCESS: {
        console.log('GET ActivityLevel SUCCESS', action.payload);
        return {
            ...state,
            activitylevel: action.payload.data.activityLevel,
            errorMessage: null
        };
    }
    case stepActions.StepActionTypes.STEP12_GET_ActivityLevel_FAIL: {
        console.log('GET ActivityLevel FAILURE', action.payload);
        return {
            ...state,
            activitylevel: '',
            errorMessage: 'Error Occured'
        };
    }
    case stepActions.StepActionTypes.STEP13_GET_WorkOuts_SUCCESS: {
        console.log('GET ActivityLevel SUCCESS', action.payload);
        return {
            ...state,
            workoutPerWeek: action.payload.data.workoutPerWeek,
            errorMessage: null
        };
    }
    case stepActions.StepActionTypes.STEP13_GET_WorkOuts_FAIL: {
        console.log('GET ActivityLevel FAILURE', action.payload);
        return {
            ...state,
            workoutPerWeek: '',
            errorMessage: 'Error Occured'
        };
    }
    case stepActions.StepActionTypes.STEP14_GET_FitnessGoal_SUCCESS: {
        console.log('GET fitness goal SUCCESS', action.payload);
        return {
            ...state,
            fitnessGoal: action.payload.data,
            errorMessage: null
        };
    }
    case stepActions.StepActionTypes.STEP14_GET_FitnessGoal_FAIL: {
        console.log('GET Fitness goal FAILURE', action.payload);
        return {
            ...state,
            fitnessGoal: '',
            errorMessage: 'Error Occured'
        };
    }
    case stepActions.StepActionTypes.STEP15_GET_ToolKit_SUCCESS: {
        console.log('GET toolkit SUCCESS', action.payload);
        return {
            ...state,
            toolkit: action.payload.data,
            errorMessage: null
        };
    }
    case stepActions.StepActionTypes.STEP15_GET_ToolKit_FAIL: {
        console.log('GET toolkit FAILURE', action.payload);
        return {
            ...state,
            toolkit: '',
            errorMessage: 'Error Occured'
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
export const getWeight = createSelector(
    getOnboardingFeatureState,
    (state: any) => state
);
export const getProgressSelection = createSelector(
    getOnboardingFeatureState,
    (state: any) => state
);
export const getBodyMeasurements = createSelector(
    getOnboardingFeatureState,
    (state: any) => state
);
export const getWeightExtra = createSelector(
    getOnboardingFeatureState,
    (state: any) => state
);
export const getPhysiquegoal = createSelector(
    getOnboardingFeatureState,
    (state: any) => state
);
export const getactivitylevel = createSelector(
    getOnboardingFeatureState,
    (state: any) => state
);
export const getworkoutData = createSelector(
    getOnboardingFeatureState,
    (state: any) => state
);
export const getFitnessgoalData = createSelector(
    getOnboardingFeatureState,
    (state: any) => state
);
export const getToolkitData = createSelector(
    getOnboardingFeatureState,
    (state: any) => state
);
