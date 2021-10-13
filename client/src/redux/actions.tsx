import { FETCH_USER_DATA, HIDE_SPINNER, ISAUTHORIZATION, SHOW_SPINNER, SHOW_ALERT, HIDE_ALERT, USER_LOGIN } from './types';

export function isAuthorization(auth: boolean) {
    return {
        type: ISAUTHORIZATION,
        payload: auth
    }
}

export function userLogin(login: string){
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
    // return (dispatch: any) => {
    //     dispatch({
    //         type: SHOW_ALERT,
    //         payload: text
    //     })
    //     setTimeout(()=>{
    //         dispatch(hideAlert());
    //     }, 3000)
    // }
    return{
        type: SHOW_ALERT,
        payload: text
    }
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
            console.log(data)
            dispatch({ type: FETCH_USER_DATA, payload: data });
            dispatch(hideSpinner());
        } catch (error) {
            dispatch(hideSpinner());
            console.log(error);
        }

    }
}