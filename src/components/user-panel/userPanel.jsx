import React from "react";
import { Component } from "react";
import s from "./style.module.scss";
import firebase from "firebase/app";
import "firebase/database";
import { connect } from "react-redux";
import * as actions from "../../action/action";

class UserPanel extends Component {
  

  constructor(props){
    super(props);
    
    this.state = {
      name: '',
      comment: '',
    }
    this.addComment = this.addComment.bind(this);
  }


  addComment(){
    const db = firebase.database();
    const obj = { 
      id: this.props.comments.length+1,
      name: this.state.name, 
      comment: this.state.comment, 
      date: new Date().toLocaleDateString(),
    }
    obj.name && obj.comment ? 
    db.ref('Comments').push(obj)
    : alert('Не все поля заполнены!');
    this.setState({name:'',comment:'',}) // очистка полей
  }

  render() {

    return (
      <div className={s.sideOrder}>
        <h5>{this.props.userMail}</h5>
        <p>{this.props.promocode ? this.props.promocode : 'Получить скидку в 10%'}</p>
        <button className={`${s.close} btn btn-danger`} onClick={() => { firebase.auth().signOut();}}>Выход</button>
        <button className={`${s.btnPromo} btn btn-warning`} onClick={() => { firebase.auth().onAuthStateChanged((user) => { this.props.SetPromo(user ? user.uid : null);});}}>
          Получить промокод
        </button>
        <hr/>
        <p>Оставить коментарий на сайте</p>
        <input className={s.inputName} 
        type="text" 
        placeholder="Ваше имя"
        onChange={(e)=>{this.setState({name: e.target.value})}}
        value={this.state.name}
        />

        <textarea className={s.textArea}
         value={this.state.comment}
         cols="30" 
         rows="10" 
         placeholder={'Напишите коментарий'}
         onChange={(e)=>{ this.setState({comment: e.target.value})}}
         ></textarea>
        <button onClick={()=>{this.addComment()}} className={`${s.btnComment} btn btn-warning`}>Отправить коментарий</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    promocode: state.promocode,
    userMail: state.user,
    comments: state.comments
  };
};

export default connect(mapStateToProps, actions)(UserPanel);
