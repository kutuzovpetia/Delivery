import React, { Component } from "react";
import s from "./style.module.scss";
import clock from "../../image/clock.png";
import basket from "../../image/basket.png";

export default class ItemFood extends Component {
  
 constructor(){
   super();

   this.state = {
     like : false,
   }

   this.onLike = this.onLike.bind(this);
 }


 onLike(){
   const {like} = this.state;
   this.setState({
     like : !like
   })
 }

  render() {
    const{id,title,price,addItem, foodImg} = this.props;
    const {like} = this.state;
    return (
      <div className={s.container}>
        <div className={s.imgWrapper}>
            <img className={s.img} src={foodImg} alt="..."></img>
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
            <div onClick={this.onLike}><span className={like ? `${s.liked} fa fa-heart` : `${s.heart} fa fa-heart` }></span></div>
            <span>like</span>
          </div>
          <img className={s.basket} src={basket} alt="..." onClick={()=>{addItem(id,title,price,foodImg)}}></img>
        </div>
      </div>
    );
  }
}
