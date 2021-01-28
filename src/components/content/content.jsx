import React, { Component } from "react";
import s from "./style.module.scss";
import MenuFoods from "../menu-foods/menu";
import ItemFood from "../item-food/item-food";
import {connect} from 'react-redux';
import * as actions from '../../action/action';


class Content extends Component {
  
  constructor(props){
    super(props)
    this.getItem = this.getItem.bind(this);
  }

  getItem(Id, Title, Price, Img) { // Получение id , добавление в корзину
    const newItem = { id: Id, title: Title, price: Price, img: Img, count: 1 }; // новий об’экт
    const{ totalUpdate, total, addItemToOrder, order } = this.props;
    let check = false; 
    order.forEach(el=> { if (el.id === Id) { check = true;} });
    if (check) { return; }  // Если элемент есть в корзине, выходим
    else { 
      addItemToOrder(newItem);
      const s = total + parseFloat(Price); // Обновляєм ціну
      totalUpdate(s);
    }
  }

  
  render() {
    const { data } = this.props;
    const elements = data.map((item) => {
      return (
          <ItemFood 
          key={item.id} 
          id={item.id} 
          getItem={this.getItem} 
          foodImg={item.img} 
          title={item.title} 
          price={item.price}
          desc={item.desc}
          >
          </ItemFood>
      );
    });

    return (
      <div className={s.content}>
        <h3 className={`${s.title} ml-3 my-3`}>Сделай свой выбор</h3>
        <MenuFoods></MenuFoods>
        <div className={s.item}>
          {elements}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
 
  return{
       order: state.order,
       total: state.total,
  }
}

export default connect(mapStateToProps, actions)(Content);
