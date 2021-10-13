import { combineReducers } from 'redux';
import { isLoggedReducer } from './isLoggedReducer';
import { userDataReducer } from './userDataReducer';
import { appReducer } from './appReducer';


export const rootReducer = combineReducers({
    isLogged: isLoggedReducer,
    data: userDataReducer,
    app: appReducer,
})