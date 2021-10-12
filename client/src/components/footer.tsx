import React from 'react';
import logo from '../static/logo.svg'
import { Link } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerMain">
          <div className="footerMainLeft">
            <img src={logo} alt="logo" />
          </div>
          <div className="footerMainCenter">
            <div className="footerMainTop">
              <div className="footerMainContacts">
                <div className="footerContatsIndividual">
                  <p>Физ лицам</p>
                  <Link href="tel:+375295099999">+375 29 509 99 99</Link>
                  <Link href="tel:+375295099999">+375 29 509 99 99</Link>
                </div>
                <div className="footerContatsBusiness">
                  <p>Юр лицам</p>
                  <Link href="tel:+375295099999">+375 29 509 99 99</Link>
                </div>
              </div>
              <button className="footerMainRight">
                Кнопка
              </button>
            </div>
            <div className="footerNav">
              <div className="footerNavMenu">
                <p className="footerNavHeader">Физ лицам</p>
                <nav>
                  <ul>
                    <li><NavLink to="/" exact>Карты</NavLink></li>
                    <li><NavLink to="/" exact>Кредиты</NavLink></li>
                    <li><NavLink to="/" exact>Вклады</NavLink></li>
                    <li><NavLink to="/" exact>Страхование</NavLink></li>
                    <li><NavLink to="/" exact>Курсы валют</NavLink></li>
                  </ul>
                </nav>
              </div>
              <div className="footerNavMenu">
                <p className="footerNavHeader">Юр лицам</p>
                <nav>
                  <ul>
                    <li><NavLink to="/" exact>Тарифные планы</NavLink></li>
                    <li><NavLink to="/" exact>Регстрация бизнеса</NavLink></li>
                    <li><NavLink to="/" exact>Кредиты</NavLink></li>
                    <li><NavLink to="/" exact>Овердрафт</NavLink></li>
                    <li><NavLink to="/" exact>Страхование</NavLink></li>
                    <li><NavLink to="/" exact>Лизинг</NavLink></li>
                  </ul>
                </nav>
              </div>
              <div className="footerNavMenu">
                <p className="footerNavHeader">О Банке</p>
                <nav>
                  <ul>
                    <li><NavLink to="/" exact>О нас</NavLink></li>
                    <li><NavLink to="/" exact>Контакты</NavLink></li>
                    <li><NavLink to="/" exact>Отделения и банкоматы</NavLink></li>
                    <li><NavLink to="/" exact>Тарифы</NavLink></li>
                    <li><NavLink to="/" exact>Новости</NavLink></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="copyright">
      © 2021 «Какой-то банк» ОАО
      </div>
    </footer >
  );
}

export default Footer;