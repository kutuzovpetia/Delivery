import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.scss";
import basket_ from "../../image/basket_.png";
import basket from "../../image/basket.png";
import {connect} from 'react-redux';
import firebase from "firebase/app";
import * as actions from "../../action/action";

class TopMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userLoggedIn: false,
    };
  }

  closeNav = () => {
    document.querySelector('#navbarNavAltMarkup').classList.remove('show');
  }

 componentDidMount(){
  firebase.auth().onAuthStateChanged((user)=>{
    user ? this.setState({userLoggedIn: true}) : this.setState({userLoggedIn: false});
  })
 }


  render() {

    return (
      <nav className={"navbar navbar-expand-lg navbar-dark fixed-top " + s.menu}>
        
        <div className={s.containerMy}>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <img
            className={`${s.bask} navbar-toggler`}
            src={this.props.order.length === 0 ? basket : basket_}
            alt="..."
            onClick={()=>{this.props.showOrder(); this.closeNav()}}
          />
          

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <NavLink onClick={()=>{this.closeNav()}} to="burgers" className={"nav-link"}>
                Главная
              </NavLink>
              <NavLink onClick={()=>{this.closeNav()}} to="contact" className={"nav-link"}>
                Контакты
              </NavLink>
              <NavLink onClick={()=>{this.closeNav()}} to="comments" className={"nav-link"}>
                Отзывы
              </NavLink>
              <NavLink onClick={()=>{this.closeNav()}} to="about" className={"nav-link"}>
                О нас
              </NavLink>
            </div>

            <div className="d-flex navbar-nav align-items-center">

              {
                !this.state.userLoggedIn ? 
                <div className={`${s.signOut}`}>
                    <NavLink onClick={this.closeNav} to="/enter" className={"nav-link activ" + s.menuItem}>Вход</NavLink>
                    <NavLink onClick={this.closeNav} to="/register" className={"nav-link activ" + s.menuItem}>Регистрация</NavLink>
                </div>
                :
                <button className={`btn btn-danger`} onClick={()=>{firebase.auth().signOut()}}>Выйти</button>
              }
              
              <div className={`${s.style} d-flex align-items-center`}>
                <div className={`${s.topI}`}>
                  <img src={this.props.order.length === 0 ? basket : basket_} alt="..." onClick={()=>{this.props.showOrder()}} />
                </div>
                <span> {this.props.total} &#8372;</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return{
      order: state.order,
      total: state.total,
      logining: state.accountLogin,
      openOrder: state.openOrder,
  }
}

export default connect(mapStateToProps, actions)(TopMenu);
