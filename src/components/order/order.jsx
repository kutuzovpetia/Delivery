import React, { Component } from "react";
import s from './style.module.css';
import ItemOrder from '../item-order/item-order';

export default class Order extends Component {


  render() {

    const {data, deleteItem} = this.props;
    const elements = data.map((item) => {
      return (
          <ItemOrder key={item.id} id={item.id} title={item.title} price={item.price} deleteItem={deleteItem}></ItemOrder>
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
