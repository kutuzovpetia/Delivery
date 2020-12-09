import React, { Component, createElement } from "react";
import s from "./style.module.css";
import image from "../../image/f1.png";
import clock from "../../image/clock.png";
import basket from "../../image/basket.png";
import ItemOrder from "../item-order/item-order";
import Order from "../order/order";

export default class ItemFood extends Component {
  
  constructor(props){
    super(props);
    this.Add = this.Add.bind(this);
  }

  Add() {

  }
  
  render() {

    return (
      <div className={s.container}>
        <div className={s.img}>
            <img src={image} alt="..."></img>
        </div>
        <h3 className={s.title}>Double-бургер</h3>

        <div className={`${s.price} d-flex justify-content-between`}>
          <div className={`${s.time} d-flex align-items-center justify-content-between`}>
            <img src={clock} alt="..."></img>
            <span>15 мин.</span>
          </div>
          <p>$34.99</p>
        </div>

        <div className={`${s.buy} d-flex justify-content-between`}>
          <div className={`${s.like} d-flex justify-content-between align-items-center`}>
            <div><span className={`${s.heart} fa fa-heart`}></span></div>
            <span>like</span>
          </div>
          <img className={s.basket} src={basket} alt="..." onClick={this.Add}></img>
        </div>
      </div>
    );
  }
}
