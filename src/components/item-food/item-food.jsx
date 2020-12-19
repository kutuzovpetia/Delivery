import React, { Component } from "react";
import s from "./style.module.scss";
import image from "../../image/f1.png";
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
    const{id,title,price,addItem} = this.props;
    const {like} = this.state;
    return (
      <div className={s.container}>
        <div className={s.img}>
            {/* <img src={image} alt="..."></img> */}
            <img className={s.img} src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" alt="..."></img>
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
          <img className={s.basket} src={basket} alt="..." onClick={()=>{addItem(id,title,price)}}></img>
        </div>
      </div>
    );
  }
}
