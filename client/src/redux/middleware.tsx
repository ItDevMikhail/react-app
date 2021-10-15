import { hideAlert, showAlert } from "./actions"
import { USER_LOGIN } from './types';

// const forbidden = ['fuck', 'php'];

export function validateMiddleware({ dispatch }: any) {
    return function (next: any) {
        return function (action: any) {
            if (action.type === USER_LOGIN) {
                console.log(action);
                // const found = forbidden.filter(v => action.payload.includes(v));
                if (action.payload.length < 6) {
                    dispatch(showAlert('middleware на валидацию значения стейта user_login'));
                } else {
                    dispatch(hideAlert());
                }
            }
            // dispatch(hideAlert());
            return next(action);
        }
    }
}