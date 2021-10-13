import React from 'react';
import { Card, CardHeader, FormGroup, Input, InputLabel, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

function RegisterPage() {

    return (
        <Card className="register">
            <CardHeader title="Регистрация" className="registerCardHeader"></CardHeader>
            <form className="registerForm">
                <FormGroup>
                    <InputLabel>Логин*</InputLabel>
                    <Input
                        type="text"
                        name='login'
                        placeholder="Введите логин"
                        required />
                    {/* {(loginWrong && loginError) && <div className="regErrors">{loginError}</div>} */}
                </FormGroup>
                <br />
                <FormGroup>
                    <InputLabel>Имя*</InputLabel>
                    <Input type="text"
                        placeholder="Введите имя"
                        name="name"
                        required />
                </FormGroup>
                <br />
                <FormGroup>
                    <InputLabel>Фамилия*</InputLabel>
                    <Input type="text"
                        placeholder="Введите фамилию"
                        name="lastName"
                        required />
                </FormGroup>
                <br />
                <FormGroup>
                    <InputLabel>E-mail*</InputLabel>
                    <Input type="text"
                        placeholder="Введите e-mail"
                        name="email"
                        required />
                </FormGroup>
                <br />
                <FormGroup>
                    <InputLabel>Пароль* (окно с правилами ввода)</InputLabel>
                    <Input type="password"
                        placeholder="Введите пароль"
                        name="password"
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