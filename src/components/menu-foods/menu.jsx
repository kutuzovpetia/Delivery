import React, { Component } from "react";
import s from "./style.module.scss";
import ItemMenuFoods from "../menu-foods-item/menu-item";
import firebase from 'firebase/app';

export default class MenuFoods extends Component {

constructor(props){
  super(props);

  this.state = {
    d: {},
    menuItem: [],
  }
}

componentDidMount(){
  const db = firebase.database();
  const name = db.ref('Menu');
  name.on('value', (elem)=>{
   this.setState({
     d : elem.val()
   }); 
  });
}

  render() {
    const {d} = this.state;
    const tempArr = [];
    Object.keys(d).forEach(prop => {
      tempArr.push(d[prop]);
    });

    const elements = tempArr.map((item) => {
      return (
        <li key={item.id}>
          <ItemMenuFoods menuImg={item.img} text={item.text}></ItemMenuFoods>
        </li>
      );
    });

    return (
        <ul className={`${s.menu}`}>
        {elements}
        </ul>
    );
  }
}
