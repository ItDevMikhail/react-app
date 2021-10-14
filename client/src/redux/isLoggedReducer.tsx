import { ISAUTHORIZATION, TOKEN } from './types';

const initialState = {
    isLogged: false,
    isAdmin: false,
    token: null
}

export const isLoggedReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ISAUTHORIZATION: return {...state, isLogged: action.payload};
        case TOKEN: return {...state, token: action.payload};
        default: return state;
    }

}