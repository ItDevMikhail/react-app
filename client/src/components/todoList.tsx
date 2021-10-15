import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../redux/actions';
// import { FETCH_USER_DATA } from '../redux/types';

function TodoList() {
    const dispatch = useDispatch();
    const userData = useSelector((state: any) => state.data.data);
    const loading = useSelector((state: any) => state.app.loading)
    const alert = useSelector((state: any) => state.app.alert)
    useEffect(() => {
        if(!userData.length){
        dispatch(fetchUserData());
        }
        // return () => {
        //     dispatch({ type: FETCH_USER_DATA, payload: '' });
        // }
    }, [dispatch])
    if (loading) {
        return <div>здесь должен быть спиннер</div>
    }
    if (alert) {
        return <div>{alert} <button onClick={() => dispatch(fetchUserData())}>Загрузить</button></div>
    }
    if (userData.length) {
        return (
            <div>
                <ul> {userData.map((item: any) =>
                    <li key={item.name}>
                        <Link to='/'>{item.name}</Link>
                    </li>)}
                </ul>
            </div >
        );
    }
    return (
        <></>
    )
}

export default TodoList;

