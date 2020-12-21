import React, { Component } from 'react';
import s from './style.module.scss';


export default class Total extends Component{

    render(){

        const {total}= this.props;
        return(
        <div className={s.wrapper}>
           <div className={s.total}>
                <span>Всего:</span>
                <span>{total}</span>
           </div>

          <p>Бесплатная доставка при сумме от 250 грн</p>
          
        <button type="button" className={"btn btn-dark btnOrder"}>Оформить заказ</button>

        </div>

        )
    }
}