import { ISAUTHORIZATION } from './types';

const initialState = {
    isLogged: false,
    isAdmin: false
}

export const isLoggedReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ISAUTHORIZATION: return {...state, isLogged: action.payload};
        default: return state;
    }

}