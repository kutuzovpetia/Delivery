import React, { Component } from "react";
import s from "./style.module.scss";


export default class ItemFood extends Component {

 
  render() {
    const { id, title, price, getItem, foodImg, desc } = this.props;

    return (

      <div className={s.container}>
        <div className={s.imgWrapper}>
          <img className={s.img} src={foodImg} alt="..."></img>
        </div>
        <h3 className={s.title}>{title}</h3>

        <div className={s.description}>
           <p>{desc}</p>
        </div>

        <div className={`${s.buy}`} onClick={() => { getItem(id, title, price, foodImg) }}>
          <p>{price} &#8372;</p>
          <span>Добавить к заказу</span>
        </div>
      </div>
    );
  }
}
