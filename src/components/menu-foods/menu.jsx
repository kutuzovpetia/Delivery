import React, { Component } from "react";
import s from "./style.module.scss";
import ItemMenuFoods from "../menu-foods-item/menu-item";
import firebase from 'firebase/app';

// const data = [
//   { menuImg: './image/bell.png', text: 'Все', id: 1},
//   { menuImg: './image/burger.png', text: 'Бургер', id: 2},
//   { menuImg: './image/pizza.png', text: 'Пицца', id: 3},
//   { menuImg: './image/pasta.png', text: 'Паста', id: 4},
//   { menuImg: './image/rol.png', text: 'Суши', id: 5},
//   { menuImg: './image/meat.png', text: 'Мясо', id: 6},
//   {menuImg: './image/fish.png', text: 'Рыба', id: 7},
// ]




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

    // const elements = data.map((item) => {
    //   return (
    //     <li key={item.id}>
    //       <ItemMenuFoods menuImg={item.menuImg} text={item.text}></ItemMenuFoods>
    //     </li>
    //   );
    // });

    return (
        <ul className={`${s.menu}`}>
        {elements}
        </ul>
    );
  }
}
