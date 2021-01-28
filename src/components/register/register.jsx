import React, { Component } from "react";
import s from "./style.module.scss";
import firebase from 'firebase';
import email from '../../image/email.png';
import lock from '../../image/lock.png';
import { connect } from "react-redux";
import * as actions from "../../action/action";

class Register extends Component {
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
        await firebase.auth().createUserWithEmailAndPassword(email, pass)
        .catch((error) => alert(error.message))
    }
    else if(type === 'enter'){
      await firebase.auth().signInWithEmailAndPassword(email, pass)
      .catch((error) => alert(error.message));
    }
  };

  render() {
    const { title, btnLabel} = this.props;
    
    return (
      <div className={s.wrapperReg}>
        <div className={s.form}>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logining: state.accountLogin
  };
};

export default connect(mapStateToProps, actions)(Register);
