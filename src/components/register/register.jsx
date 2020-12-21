import React, { Component } from "react";
import s from "./style.module.scss";
import firebase from 'firebase';
import email from '../../image/email.png';
import lock from '../../image/lock.png';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      hasError: false,
      hasAccount: false,
    };
  }

  handleChange = ({ target: { value, id } }) => {
    this.setState({
      [id]: value,
    });
  };

  createAcc = async () => {
    const { email, pass} = this.state;
    const {type} = this.props;

    if (type === "reg") {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, pass);
      } catch (error) {
        alert(error.message);
      }
    }
    else if(type === 'enter'){
      await firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then((response) => {
         this.setState({ hasAccount: true });
         alert('Успешно вошли в систему');

        /******Доробити********/
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            alert(user.email)
          } else {
            // No user is signed in.
          }
        });
        /***************/

      })
      .catch((error) => console.log(error));
    }
    
    
    
  };

  render() {
    const { title, btnLabel } = this.props;
    return (
      <div className={s.wrapperReg}>
        <h2>{title}</h2>
        <div>
          <img src={email} alt="User" />
          <input
            id="email"
            type="text"
            placeholder="email"
            onChange={this.handleChange}
          />
        </div>

        <div>
          <img src={lock} alt="User" />
          <input
            id="pass"
            type="password"
            placeholder="password"
            onChange={this.handleChange}
          />
        </div>

        <button className={"btn btn-dark ml-4 mt-3"} onClick={this.createAcc}>
          {btnLabel}
        </button>
      </div>
    );
  }
}
