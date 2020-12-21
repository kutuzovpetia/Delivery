import React, { Component } from "react";
import s from './style.module.scss';
import ItemOrder from '../item-order/item-order';
import Total from '../total';

export default class Order extends Component {


  render() {

    const {data, deleteItem, sum, addPlus, addMinus} = this.props;
    const elements = data.map((item) => {
      return (
          <ItemOrder 
          key={item.id} 
          id={item.id} 
          title={item.title} 
          price={item.price} 
          deleteItem={deleteItem} 
          addPlus={addPlus} 
          addMinus={addMinus}
          foodImg={item.img}
          >
          </ItemOrder>
      );
    });

    return(
     <div id="mySideOrder" className={s.sideOrder}>
         <h2 className={s.title}>Корзина</h2>
         {elements}

         <div className={s.total}>
         <Total  total={sum}></Total>
         </div>

      </div>
    );
  }
}
