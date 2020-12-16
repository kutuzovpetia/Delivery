import React, { Component } from "react";
import s from "./style.module.scss";
import firebase from 'firebase';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      hasError: false,
    };
  }

  

  handleChange = ({ target: { value, id } }) => {
    this.setState({
      [id]: value,
    });
  };

  createAcc = async () => {
    const { email, pass} = this.state;
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, pass)
    } catch (error) {
        alert(error.message);
    }


  };

  

  render() {

    return (
      <div className={s.reg}>
        <input
          id="email"
          type="text"
          placeholder="email"
          onChange={this.handleChange}
        />
        <input
          id="pass"
          type="text"
          placeholder="password"
          onChange={this.handleChange}
        />
        <button onClick={this.createAcc}>Регистрация</button>
      </div>
    );
  }
}
