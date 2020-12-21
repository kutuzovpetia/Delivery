import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.scss";
import heart from '../../image/heart.png';
import basket from '../../image/basket.png';


export default class TopMenu extends Component {


constructor(props){
      super(props);

      this.state = {
        openNav : false,
      }
}

openNav = () => {
  const {openNav} = this.state;
  this.setState({
    openNav : !openNav
  });

  const Order = document.getElementById("mySideOrder");
  openNav ? Order.style.width = "0" : Order.style.width = "380px";
}

  render() {

    return (

    <nav className={"navbar navbar-expand-lg navbar-dark fixed-top " + s.menu}>
    <div className={s.containerMy}>
    {/* <NavLink className="navbar-brand" to="/Главная">Navbar</NavLink> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink to="/главная" className={'nav-link'}>Главная</NavLink>
        <NavLink to="/contact" className={'nav-link'}>Контакты</NavLink>
        <NavLink to="/about" className={'nav-link'}>О нас</NavLink>
      </div>
      
      <div className="d-flex navbar-nav align-items-center">
           <NavLink to="/enter" className={'nav-link activ' + s.menuItem}>Вход</NavLink>
           <NavLink to="/register" className={'nav-link activ' + s.menuItem}>Регистрация</NavLink>
           <div className="d-flex">
             <div className={s.topI}>
                <img src={heart} alt="..." />
             </div>
             <div className={s.topI}>
                <img src={basket} alt="..." onClick={this.openNav}/>
             </div>
          </div>
      </div>
    </div>
  </div>
</nav>

      /*****************************************************/
    );
  }
}
