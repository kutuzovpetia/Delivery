import React, { Component } from "react";
import s from "./style.module.css";
import ItemMenuFoods from "../menu-foods-item/menu-item";

const data = [
  { menuImg: './image/bell.png', text: 'Все', id: 1},
  { menuImg: './image/burger.png', text: 'Бургер', id: 2},
  { menuImg: './image/pizza.png', text: 'Пицца', id: 3},
  { menuImg: './image/pasta.png', text: 'Паста', id: 4},
  { menuImg: './image/rol.png', text: 'Суши', id: 5},
  { menuImg: './image/meat.png', text: 'Мясо', id: 6},
  {menuImg: './image/fish.png', text: 'Рыба', id: 7},
]

export default class MenuFoods extends Component {
  render() {

    const elements = data.map((item) => {
      return (
        <li key={item.id}>
          <ItemMenuFoods menuImg={item.menuImg} text={item.text}></ItemMenuFoods>
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
