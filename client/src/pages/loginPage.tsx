import React from 'react';
import { Card, CardHeader, FormGroup, Input, InputLabel, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { showAlert, userLogin } from '../redux/actions';
// import { useDispatch, useSelector } from 'react-redux';

function LoginPage({alert, login, userLogin}: any) {
    // const dispatch = useDispatch();
    // const userData = useSelector((state: any) => state.data.login);
    const changeInputHandler = (e: any) => {
        userLogin(e.target.value);
    }

    return (
        <Card className="login">
            <div>{alert}</div>
            <CardHeader title="Авторизация" className="registerCardHeader"></CardHeader>
            <form className="loginForm">
                <FormGroup>
                    <InputLabel>Логин*</InputLabel>
                    <Input
                        type="text"
                        name='login'
                        placeholder="Введите логин или email"
                        value={login}
                        onChange={(e) => changeInputHandler(e)}
                        required />
                    {/* {(loginWrong && loginError) && <div className="regErrors">{loginError}</div>} */}
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

const mapDispatchToProps = {
    showAlert, userLogin
}

const mapStateToProps = (state: any) => {
    return {
        login: state.data.login,
        alert: state.app.alert
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);