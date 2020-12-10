import React, { Component } from "react";
import s from "./style.module.css";
import image from "../../image/f1.png";
import clock from "../../image/clock.png";
import basket from "../../image/basket.png";

export default class ItemFood extends Component {
  
  constructor(props){
    super(props);
    this.www = 'Заїбавсі!';
    this.p = '333';
  }

  render() {

    return (
      <div className={s.container}>
        <div className={s.img}>
            <img src={image} alt="..."></img>
        </div>
        <h3 className={s.title}>Double-бургер</h3>

        <div className={`${s.price}`}>
          <div className={`${s.time}`}>
            <img src={clock} alt="..."></img>
            <span>15 мин.</span>
          </div>
          <p>$34.99</p>
        </div>

        <div className={`${s.buy}`}>
          <div className={`${s.like}`}>
            <div><span className={`${s.heart} fa fa-heart`}></span></div>
            <span>like</span>
          </div>
          <img className={s.basket} src={basket} alt="..." onClick={()=>{this.props.addItem(this.www, this.p)}}></img>
        </div>
      </div>
    );
  }
}
