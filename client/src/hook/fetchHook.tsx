import { useState, useCallback } from "react";
import { useDispatch } from 'react-redux';
import { showAlert } from "../redux/actions";

export const useFetch = () => {
    const dispatch = useDispatch();
    const requestFetch = async (url: string = '/api/users/auth', method: string = 'GET', body = '', headers = { credentials: 'include', 'Content-Type': 'application/json' }) => {
        try {
            const response = await fetch(url, { method, body, headers });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Ошибка, запрос не был выполнен');
            }
            return data;
        } catch (error: any) {
            dispatch(showAlert(error.message));
            console.log(error.message);
        }
    };
    return requestFetch;
}