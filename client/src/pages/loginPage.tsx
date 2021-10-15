import React, { useState } from 'react';
import { Card, CardHeader, FormGroup, Input, InputLabel, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { getToken, isAuthorization, userLogin } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { ABOUT_ROUTE } from '../utils/consts';
import { useFetch } from '../hook/fetchHook';
import jwt_decode from 'jwt-decode';

function LoginPage() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const requestFetch = useFetch();
    const history = useHistory();
    const dispatch = useDispatch();
    // const userData = useSelector((state: any) => state.data.login);
    const changeInputHandler = (e: any, setState: React.Dispatch<React.SetStateAction<string>>) => {
        setState(e.target.value);
    }
    const sumbitHandler = async (e: any) => {
        e.preventDefault();
        try {
            const body = { login, password };
            const data = await requestFetch('http://localhost:5000/api/user/login', 'POST', JSON.stringify(body));
            if (data.token) {
                dispatch(getToken(data.token));
                dispatch(isAuthorization(true));
                const decode: any = jwt_decode(data.token, { header: false });
                console.log(decode, typeof decode);
                console.log(decode.login);
                dispatch(userLogin(decode.login));
                history.push(`${ABOUT_ROUTE}`);
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Card className="login">
            <CardHeader title="Авторизация" className="registerCardHeader"></CardHeader>
            <form className="loginForm" onSubmit={sumbitHandler}>
                <FormGroup>
                    <InputLabel>Логин*</InputLabel>
                    <Input
                        type="text"
                        name='login'
                        placeholder="Введите логин или email"
                        value={login}
                        onChange={(e) => changeInputHandler(e, setLogin)}
                        required />
                    {/* {(loginWrong && loginError) && <div className="regErrors">{loginError}</div>} */}
                </FormGroup>
                <br />
                <FormGroup>
                    <InputLabel>Пароль* (окно с правилами ввода)</InputLabel>
                    <Input type="password"
                        placeholder="Введите пароль"
                        name="password"
                        value={password}
                        onChange={(e) => changeInputHandler(e, setPassword)}
                        required />
                </FormGroup>
                <br />
                <div className="formBtn">
                    <Button color="primary" variant="contained" type='submit'>Войти</Button>
                    <div><span>Нет аккаунта?</span>
                        <NavLink to="/registration"> Зарегестрируйтесь!</NavLink>
                    </div>
                </div>
                <br />
            </form>
        </Card>
    );
}

export default (LoginPage);