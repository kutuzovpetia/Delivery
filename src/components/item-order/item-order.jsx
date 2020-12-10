import React, { Component } from "react";
import s from "./style.module.css";
import trash from "../../image/trash.png";
import img from "../../image/f1.png";

export default class ItemOrder extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
    this.onPlus = this.onPlus.bind(this);
    this.onMinus = this.onMinus.bind(this);
  }

  onPlus() {
    let res = this.state.num;
    res++;
    this.setState({
      num: res,
    });
  }

  onMinus() {
    let res = this.state.num;
    if(res === 1){return;}
    res--;
    this.setState({
      num: res,
    });
  }

  render() {

    return (
      <div className={`${s.item}`}>
        <div>
          <img className={s.image} src={img} alt="..."></img>
        </div>

        <div className={s.center}>
          <h5>{this.props.title}</h5>
          <div className={s.control}>
            <div onClick={this.onMinus}>
              <span>-</span>
            </div>
            <div>
              <span>{this.state.num}</span>
            </div>
            <div onClick={this.onPlus}>
              <span>+</span>
            </div>
          </div>
        </div>

        <div className={s.center}>
             <span>{this.props.price}</span>
          <img className={s.trash} src={trash} alt="..." onClick={()=> {this.props.deleteItem()}}></img>
        </div>
      </div>
    );
  }
}