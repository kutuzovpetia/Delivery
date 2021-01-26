import React from "react";
import { Component } from "react";
import s from "./style.module.scss";
import { connect } from "react-redux";
import * as actions from "../../action/action";

class Modal extends Component {
  
  render() {
    const { name, phone, street, home, apart, cashType, peopleCount, zdacha, eco, comments, discount} = this.props;

    return (
      <div className={`${s.wrapper}`}>
        <h2 className="text-center">Ваш заказ</h2>
        <div className="d-flex justify-content-between flex-wrap">
          <div className="w-100">
            <div className={s.item}>
              <p>Имя:</p>
              <p>{name}</p>
            </div>
            <div className={s.item}>
              <p>Телефон:</p>
              <p>{phone}</p>
            </div>
            <div className={s.item}>
              <p>Улица:</p>
              <p>{street}</p>
            </div>
            <div className={s.item}>
              <p>Дом:</p>
              <p>{home}</p>
            </div>
            <div className={s.item}>
              <p>Квартира:</p>
              <p>{apart}</p>
            </div>
            <div className={s.item}>
              <p>Оплата:</p>
              <p>{cashType ? 'картой' : 'наличными'}</p>
            </div>
            <div className={s.item}>
              <p>Количество человек:</p>
              <p>{peopleCount ? peopleCount : 1}</p>
            </div>
            <div className={s.item}>
              <p>Нужна сдача с:</p>
              <p>{zdacha ? zdacha : 'не указано'}</p>
            </div>
            <div className={s.item}>
              <p>Эко-упаковка:</p>
              <p>{eco ? 'нужна' : 'не нужна'}</p>
            </div>
            <div className={s.item}>
              <p>Коментарий:</p>
              <p>{comments ? comments : 'нет'}</p>
            </div>

            <div className={s.item}>
              {
                  discount? 
                  <div className={s.item}>
                    <p>Скидка:</p>
                    <p>-10%</p>
                  </div>
                  :
                  <div className={s.item}>
                    <p>Скидка:</p>
                    <p>нет</p>
                  </div>
              }
            </div>

            <h2 className="text-center my-3">Меню</h2>
            {this.props.order.map((item) => {
              return (
                <div key={item.id} className={s.item}>
                  <p>{item.title}</p>
                  <p>{item.count} шт</p>
                </div>
              );
            })}

            {
              discount ?
              <h3 className="text-center my-3">
              Всего к оплате: {Math.round(this.props.total * (1 - 10 / 100))} &#8372;
            </h3>:
            <h3 className="text-center my-3">
              Всего к оплате: {this.props.total} &#8372;
            </h3>
            }
           
          </div>
        </div>
        <div className={`d-flex justify-content-between`}>
          <button onClick={()=>{this.props.showMod()}} className="btn btn-warning">Назад</button>
          <button onClick={()=>{this.props.sendMsg()}} className="btn btn-success">Заказать</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.order,
    total: state.total,
  };
};

export default connect(mapStateToProps, actions)(Modal);
