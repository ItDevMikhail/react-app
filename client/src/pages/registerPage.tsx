import React, { useState } from 'react';
import { Card, CardHeader, FormGroup, Input, InputLabel, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { getToken } from '../redux/actions';
import { isAuthorization } from './../redux/actions';
import { useLocation } from 'react-router';

function RegisterPage() {
    const [login, setLogin] = useState('');
    const [name, setName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const location = useLocation();

    const changeInputHandler = (e: any, setState: React.Dispatch<React.SetStateAction<string>>) => {
        setState(e.target.value);
    }
    const sumbitHandler = async (e: any) => {
        e.preventDefault();
        try {
            const body = { login, name, email, lName, password };
            const response = await fetch('http://localhost:5000/api/user/registration', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: { 
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json();
            if (!response.ok) {
                console.log('что-то пошло не так');
            }
            if(data.token){
                dispatch(getToken(data.token));
                dispatch(isAuthorization(true));
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Card className="register">
            <CardHeader title="Регистрация" className="registerCardHeader"></CardHeader>
            <form className="registerForm" onSubmit={sumbitHandler}>
                <FormGroup>
                    <InputLabel>Логин*</InputLabel>
                    <Input
                        type="text"
                        name='login'
                        placeholder="Введите логин"
                        value={login}
                        onChange={(e) => changeInputHandler(e, setLogin)}
                        required />
                    {/* {(loginWrong && loginError) && <div className="regErrors">{loginError}</div>} */}
                </FormGroup>
                <br />
                <FormGroup>
                    <InputLabel>Имя*</InputLabel>
                    <Input type="text"
                        placeholder="Введите имя"
                        name="name"
                        value={name}
                        onChange={(e) => changeInputHandler(e, setName)}
                        required />
                </FormGroup>
                <br />
                <FormGroup>
                    <InputLabel>Фамилия*</InputLabel>
                    <Input type="text"
                        placeholder="Введите фамилию"
                        name="lastName"
                        value={lName}
                        onChange={(e) => changeInputHandler(e, setLName)}
                        required />
                </FormGroup>
                <br />
                <FormGroup>
                    <InputLabel>E-mail*</InputLabel>
                    <Input type="text"
                        placeholder="Введите e-mail"
                        name="email"
                        value={email}
                        onChange={(e) => changeInputHandler(e, setEmail)}
                        required />
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
                <FormGroup>
                    <InputLabel>Подтвердите пароль*</InputLabel>
                    <Input type="password"
                        placeholder="Подтвердите пароль"
                        name="confPassword"
                        required />
                </FormGroup>
                <br />
                <div className="formBtn">
                    <Button color="primary" variant="contained" type='submit' >Отправить</Button>
                    <div><span>Уже зарегистрированы?</span>
                        <NavLink to="/login"> Войдите!</NavLink>
                    </div>
                </div>
                <br />
            </form>
        </Card>
    );
}

export default RegisterPage;