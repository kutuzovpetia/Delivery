import React from "react";
import { Component } from "react";
import s from "./style.module.scss";
import Radio from "@material-ui/core/Radio";

export default class Comments extends Component {
  constructor(props) {
    super(props);

    //    this.getDate = this.getDate.bind(this);
  }

  getDate() {
    const now = new Date().toLocaleDateString();
    return now;
  }

  render() {
    return (
      <div className={s.wrapper}>
        <div className={`d-flex `}>
          <h5 className="mr-2">Кристина</h5>
          <p>{` - ${this.getDate()}`}</p>
        </div>
        <p>Великолепная еда! заказывали легкие блюда — шашлык из курицы, картошку и грибы на мангале. Все изумительное, мягкое, в меру соленое, сочное! при этом цены очень демократичные, доставка аккуратная и быстрая. Обязательно будем заказывать и пробовать еще. Приятно, что в нашем районе есть такое хорошее место!)</p>
      </div>
    );
  }
}
