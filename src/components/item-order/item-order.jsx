import React, { Component } from "react";
import s from "./style.module.scss";
import trash from "../../image/trash.png";
import img from "../../image/f1.png";
import * as actions from '../../action/action';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/Button'

class ItemOrder extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1,};
    this.onPlus = this.onPlus.bind(this);
    this.onMinus = this.onMinus.bind(this);
    this.addPlus = this.addPlus.bind(this);
    this.addMinus = this.addMinus.bind(this);
  }

  addPlus() {
    const { total, totalUpdate, price } = this.props;
    const s = total + parseFloat(price);
    totalUpdate(s);
  }

  addMinus() {
    const { total, totalUpdate, price } = this.props;
    const s = total - parseFloat(price);
    totalUpdate(s);
  }

  // onPlus() {
  //  const{Pluse, id}= this.props;
  //  let {count} = this.props;
  //  Pluse(id,++count);
  //  this.addPlus();
  // }

  // onMinus() {
  //   const{Minus, id} = this.props;
  //   let {count} = this.props;
  //   if(count === 1){return;}
  //   Minus(id,--count);
  //   this.addMinus();
  // }

  onPlus() {
    let {count} = this.state;
    this.setState({
      count: ++count
    })
    this.addPlus();
  }
  
  onMinus() {
    let {count} = this.state;
    if(count === 1){return;}
    this.setState({
      count: --count
    })
    this.addMinus();
  }

  render() {
    const {title, deleteItem, id, price, foodImg} = this.props;
    const{count} = this.state;
    const sum = count * price;
    return (
      <div className={`${s.item}`}>
        <div>
          <img className={s.image} src={foodImg} alt="..."></img>
        </div>

        <div className={s.center}>
          <h5>{title.length > 12 ? title.slice(0, 6) + ' ...' : title }</h5>
          <div className={s.control}>
            <div onClick={this.onMinus}>
              <span>-</span>
            </div>
            <div>
              <span>{count}</span>
            </div>
            <div onClick={this.onPlus}>
              <span>+</span>
            </div>
          </div>
        </div>

        <div className={s.center}>
             <span>{price} &#8372;</span>
          <img className={s.trash} src={trash} alt="..." onClick={()=> {deleteItem(id,sum)}}></img>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
 
  return{
       total: state.total,
       order: state.order,
  }
}

export default connect(mapStateToProps, actions)(ItemOrder);
