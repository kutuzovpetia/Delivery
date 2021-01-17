import React from 'react';
import { Component } from 'react';
import s from './style.module.scss';
import firebase from "firebase/app";
import "firebase/database";
import { connect } from "react-redux";
import * as actions from "../../action/action";

class UserPanel extends Component{
    
    render(){
        return(
            <div className={s.sideOrder}>
                <button onClick={()=>{firebase.auth().signOut()}}>Close</button>
                <button onClick={()=>{firebase.auth().onAuthStateChanged((user)=>{this.props.SetPromo(user ? user.uid: null)});}}>
                Получить промокод
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      promocode: state.promocode
    };
  };
  
  export default connect(mapStateToProps, actions)(UserPanel);