import { FETCH_USER_DATA, HIDE_SPINNER, ISAUTHORIZATION, SHOW_SPINNER, SHOW_ALERT, HIDE_ALERT, USER_LOGIN, TOKEN } from './types';

export function isAuthorization(auth: boolean) {
    return {
        type: ISAUTHORIZATION,
        payload: auth
    }
}

export function getToken(token: string) {
    return {
        type: TOKEN,
        payload: token
    }
}

export function userLogin(login: string) {
    return {
        type: USER_LOGIN,
        payload: login
    }
}

export function showSpinner() {
    return {
        type: SHOW_SPINNER
    }
}

export function hideSpinner() {
    return {
        type: HIDE_SPINNER
    }
}

export function showAlert(text: string) {
    return (dispatch: any) => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })
        setTimeout(() => {
            dispatch(hideAlert());
        }, 3000)
    }
    // return{
    //     type: SHOW_ALERT,
    //     payload: text
    // }
}
export function hideAlert() {
    return {
        type: HIDE_ALERT,
    }
}
export function fetchUserData() {
    return async (dispatch: any) => {
        try {
            dispatch(showSpinner());
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            dispatch({ type: FETCH_USER_DATA, payload: data });
            dispatch(hideSpinner());
        } catch (error) {
            dispatch(hideSpinner());
            dispatch(showAlert('Ошибка загрузки данных'));
        }
    }
}

export function logoutClearState() {
    return (dispatch: any) => {
        dispatch({ type: FETCH_USER_DATA, payload: [] });
        dispatch({ type: TOKEN, payload: null });
        dispatch({ type: ISAUTHORIZATION, payload: false });
    }
}
