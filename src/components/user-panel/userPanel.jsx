import React from "react";
import { Component } from "react";
import s from "./style.module.scss";
import firebase from "firebase/app";
import "firebase/database";
import { connect } from "react-redux";
import * as actions from "../../action/action";

class UserPanel extends Component {
  
  render() {
    return (
      <div className={s.sideOrder}>
        <h5>{this.props.userMail}</h5>
        <p>{this.props.promocode ? this.props.promocode : 'Получить скидку в 10%'}</p>
        <button className={`${s.close} btn btn-danger`} onClick={() => { firebase.auth().signOut();}}>Выход</button>
        <button className={`${s.btnPromo} btn btn-warning`} onClick={() => { firebase.auth().onAuthStateChanged((user) => { this.props.SetPromo(user ? user.uid : null);});}}>
          Получить промокод
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    promocode: state.promocode,
    userMail: state.user,
  };
};

export default connect(mapStateToProps, actions)(UserPanel);
