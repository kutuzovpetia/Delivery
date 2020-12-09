import React, { Component } from "react";
import s from "./style.module.css";
import MenuFoods from "../menu-foods/menu";
import ItemFood from "../item-food/item-food";

export default class Content extends Component {
  render() {
    return (
      <div className={s.content}>
        <h3 className={s.title}>Сделай свой выбор</h3>
        <MenuFoods></MenuFoods>
        <div className={`d-flex justify-content-between flex-wrap`}>
          <ItemFood></ItemFood>
          <ItemFood></ItemFood>
          <ItemFood></ItemFood>
          <ItemFood></ItemFood>
          <ItemFood></ItemFood>
          <ItemFood></ItemFood>
          <ItemFood></ItemFood>
          <ItemFood></ItemFood>
        </div>
      </div>
    );
  }
}
