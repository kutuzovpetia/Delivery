import React, { Component } from "react";
import s from "./style.module.scss";
import MenuFoods from "../menu-foods/menu";
import ItemFood from "../item-food/item-food";

export default class Content extends Component {
  render() {
    const { addItem } = this.props;
    return (
      <div className={s.content}>
        <h3 className={s.title}>Сделай свой выбор</h3>
        <MenuFoods></MenuFoods>
        <div className={s.item}>
          <ItemFood addItem={addItem}></ItemFood>
        </div>
      </div>
    );
  }
}
