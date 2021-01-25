import React from "react";
import { Component } from "react";
import s from "./style.module.scss";
import beef from "../../image/beff.png";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // Создаем ссылку
  }

  componentDidMount() {
    window.scrollTo(0, 0); // Прокрутка вверх
  }

  render() {
    return (
      <div className={s.wrapper} ref={this.myRef}>
        <h1 className="text-center mt-2">О нас</h1>

        <div className="d-flex flex-wrap align-items-center justify-content-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/delivery-5fd13.appspot.com/o/burgers%2F%D0%91%D0%BE%D0%BD%D0%B0%D0%BF%D0%B0%D1%80%D1%82.png?alt=media&token=34460a7f-e2a7-48a3-a215-ed802229bb73"
            alt="..."
          />
          <h2>Bon appetit вместе из Good food</h2>
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          <p>
            <strong>Good Food Burger</strong> – народный ресторан, создающий
            продукт премиального качества по доступной цене. Уникальная
            авторская рецептура, специальная система прожарки котлет и выпекания
            булочек, позволяет добиться неповторимого вкуса. На данный момент
            открыто больше 50 ресторанов на территории страны, и более 15 за ее
            пределами. Мы продолжаем активно масштабироваться и делится своей
            вкусной философией. Соччный! Мощщный!
          </p>
          <img src={beef} alt="" />
        </div>
      </div>
    );
  }
}
