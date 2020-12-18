import React, { Component } from "react";
import s from "./style.module.scss";
import MenuFoods from "../menu-foods/menu";
import ItemFood from "../item-food/item-food";

export default class Content extends Component {
  render() {

    const { addItem, data } = this.props;

    const elements = data.map((item) => {
      return (
          <ItemFood key={item.id} id={item.id} addItem={addItem} title={item.title} price={item.price}></ItemFood>
      );
    });

    return (
      <div className={s.content}>
        <h3 className={s.title}>Сделай свой выбор</h3>
        <MenuFoods></MenuFoods>
        <div className={s.item}>
          {elements}
        </div>
      </div>
    );
  }
}
