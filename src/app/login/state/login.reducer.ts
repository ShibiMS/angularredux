const initialState = {
    loginuser: [{}]
};
export function loginReducer(state = initialState, action) {
   switch (action.type) {
    case 'LOGIN': {
        console.log('data log in', action.loginData);
        return {
            ...state
        };
    }
    default: {
        return state;
    }
   }
}