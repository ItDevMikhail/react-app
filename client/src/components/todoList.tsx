import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { fetchUserData } from '../redux/actions';


function TodoList() {
    const dispatch = useDispatch();
    const userData = useSelector((state: any) => state.data.data);
    const loading = useSelector((state: any) => state.app.loading)
    useEffect(()=>{
        dispatch(fetchUserData());
    },[dispatch])
    if(loading){
        <div>здесь должен быть спиннер</div>
    }
    if(!userData.length){
        return <div>Не загрузилось <button onClick={()=> dispatch(fetchUserData())}>Загрузить</button></div>
    }
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

export default TodoList;

