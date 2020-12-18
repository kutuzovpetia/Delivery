import React, { Component } from "react";
import s from "./style.module.scss";
import image from "../../image/f1.png";
import clock from "../../image/clock.png";
import basket from "../../image/basket.png";

export default class ItemFood extends Component {
  
  render() {
    const{id,title,price,addItem} = this.props;
    return (
      <div className={s.container}>
        <div className={s.img}>
            <img src={image} alt="..."></img>
        </div>
        <h3 className={s.title}>{title}</h3>

        <div className={`${s.price}`}>
          <div className={`${s.time}`}>
            <img src={clock} alt="..."></img>
            <span>15 мин.</span>
          </div>
          <p>{price}</p>
        </div>

        <div className={`${s.buy}`}>
          <div className={`${s.like}`}>
            <div><span className={`${s.heart} fa fa-heart`}></span></div>
            <span>like</span>
          </div>
          <img className={s.basket} src={basket} alt="..." onClick={()=>{addItem(id,title,price)}}></img>
        </div>
      </div>
    );
  }
}
