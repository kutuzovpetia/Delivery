import React, { Component } from "react";
import s from './style.module.css';
import ItemOrder from '../item-order/item-order';

export default class Order extends Component {


  render() {

    const elements = this.props.data.map((item) => {
      const {id} = item;
      return (
          <ItemOrder key={parseInt((Math.random() * 100000))} title={item.title} price={item.price} deleteItem={()=> this.props.deleteItem(id)}></ItemOrder>
      );
    });

    return (
      <div id="order" className={s.order}>
        <h2 className={s.title}>Мой заказ</h2>
        {elements}
      </div>
    );
  }
}
