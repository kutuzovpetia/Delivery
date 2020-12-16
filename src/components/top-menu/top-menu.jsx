import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.scss";

export default class TopMenu extends Component {
  render() {
    return (
      <div className={s.menu}>
        <ul>
          <NavLink to="/Главная" className={s.menuItem}>Главная</NavLink>
          <NavLink to="/contact" className={s.menuItem}>Контакты</NavLink>
          <NavLink to="/about" className={s.menuItem}>О нас</NavLink>
        </ul>

        <ul>
          <NavLink to="/enter" className={s.menuItem}>Вход</NavLink>
          <NavLink to="/register" className={s.menuItem}>Регистрация</NavLink>
          <div>
            <img src="" alt="..." />
            <img src="" alt="..." />
          </div>
        </ul>
      </div>
    );
  }
}
