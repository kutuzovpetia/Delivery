import React, { Component } from "react";
import s from './style.module.css';
import ItemOrder from '../item-order/item-order';

export default class Order extends Component {

 constructor(props){
   super(props);
   
 }

  render() {

    return (
      <div id="order" className={s.order}>
        <h2 className={s.title}>Мой заказ</h2>
        <ItemOrder></ItemOrder>
        <ItemOrder></ItemOrder>
        <ItemOrder></ItemOrder>
      </div>
    );
  }
}
