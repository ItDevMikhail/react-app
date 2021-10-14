import React from 'react';
import { Tooltip, Zoom } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { ABOUT_ROUTE, LOGIN_ROUTE, USER_ROUTE } from '../utils/consts';
import { HOMEPAGE_ROUTE } from './../utils/consts';
import logo from '../static/logo.svg';
import { connect, useSelector } from 'react-redux';
import { getToken, isAuthorization } from './../redux/actions';

function Header({ isLogged, isAuthorization }: any) {
  const alert = useSelector((state: any) => state.app.alert)

  const logoutHandler = () =>{
    isAuthorization(false);
    getToken('');
  }
  console.log(isLogged);
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="headerTopInner">
          <div className="container">
            <div className="headerTopLeft">
              <nav className="headerTopMenu">
                <ul className="headerTopMenuList">
                  <li><NavLink to='/'>Для жизни</NavLink></li>
                  <li><NavLink to='/'>Бизнеса</NavLink></li>
                  <li><NavLink to='/'>Инвестии</NavLink></li>
                  <li><NavLink to='/'>Акции</NavLink></li>
                  <li><NavLink to='/'>Другое</NavLink></li>
                </ul>
              </nav>
            </div>
            <div className="headerTopRight">
              <NavLink to='/'>Отделения и банкоматы</NavLink>
              <NavLink to='/'>Позвонить</NavLink>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="headerMain">
            <div className="headerMainLeft">
              <img src={logo} alt="logo" />
            </div>
            {isLogged && <nav className="navMenu"><div className="navMenuleft">
              <Tooltip title='Home' placement="bottom-start" TransitionComponent={Zoom}><NavLink activeClassName="selected" to={HOMEPAGE_ROUTE} exact={true}><span className="material-icons">
                home
              </span></NavLink></Tooltip>
              <NavLink activeClassName="selected" to={ABOUT_ROUTE} exact={true}>About</NavLink>
              <NavLink activeClassName="selected" to={USER_ROUTE + '/:id'} exact={true}>User page </NavLink>
            </div>
              <div className="navMenuRight"><Tooltip title='logout' placement="bottom-start" TransitionComponent={Zoom}><NavLink activeClassName="selected" to={LOGIN_ROUTE}><span className="material-icons" onClick={logoutHandler}>
                logout
              </span></NavLink></Tooltip></div></nav>}
            {!isLogged && <nav className="navMenu"><div></div><div className="navMenuRight"><Tooltip title='login' placement="bottom-start" TransitionComponent={Zoom}><NavLink activeClassName="selected" to='/login'><span className="material-icons">
              login
            </span></NavLink></Tooltip>
              <Tooltip title='Registration' placement="bottom-start" TransitionComponent={Zoom}>
                <NavLink activeClassName="selected" to='/registration'><span className="material-icons">
                  person_add_alt
                </span></NavLink></Tooltip></div></nav>}
            <div className="headerMainRight">

            </div>
          </div>
        </div>
      </div>
      {alert && <div className="alertMessage">{alert}</div>}
    </div>
  );
}

function mapStateToProps(state: any): any {
  return {
    isLogged: state.isLogged.isLogged
  }
}

const mapDispatchToProps = {
  isAuthorization
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);