import React from "react";
import { Component } from "react";
import s from "./style.module.scss";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { connect } from "react-redux";
import Modal from 'react-bootstrap/Modal';

const botToken = "1596428981:AAG5zWC68zFnxFXiCe1veYKrFks8vdQ7QEI";
const chatId = "-1001471493860";

class Ordering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      street: "",
      home: "",
      apart: "",
      cashType: false,
      peopleCount: '',
      zdacha: '',
      eco: false,
      comments: '',
      error: false,
    };

    this.reset = this.reset.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onStreetChange = this.onStreetChange.bind(this);
    this.onHomeChange = this.onHomeChange.bind(this);
    this.onApartChange = this.onApartChange.bind(this);
    this.checkedChange = this.checkedChange.bind(this);
    this.sendMsg = this.sendMsg.bind(this);
  }

  reset() {
    this.setState({ name: "", phone: "", street: "", home: "", apart: "", comments: "", peopleCount: "", zdacha: ""});
  }

  onNameChange(e) {
    const val = e.target.value;
    val.length > 20
      ? this.setState({ name: val.slice(0, val.length - 1) })
      : this.setState({ name: val });
  }

  onPhoneChange(e) {
    const val = e.target.value;
    if (Number.isInteger(+val) && val.length <= 10) {
      console.log(val);
      this.setState({ phone: val });
    }
  }

  onStreetChange(e) {
    const val = e.target.value;
    val.length > 20
      ? this.setState({ street: val.slice(0, val.length - 1) })
      : this.setState({ street: val });
  }

  onHomeChange(e) {
    const val = e.target.value;
    val.length > 20
      ? this.setState({ home: val.slice(0, val.length - 1) })
      : this.setState({ home: val });
  }

  onApartChange(e) {
    const val = e.target.value;
    val.length > 20
      ? this.setState({ apart: val.slice(0, val.length - 1) })
      : this.setState({ apart: val });
  }

  sendMsg() {
    const { name, phone, street, home, apart, cashType, peopleCount, zdacha, eco, comments } = this.state;

    if (!name || !phone || !street || !home || !apart) {

      this.setState({error: true,});
      setTimeout(() => {
        this.setState({
          error: false,
        });
      }, 2000);
      return;
    }


    let menu = '';

    this.props.order.forEach((item,i) => {
      menu += `  ${i+1}) ${item.title} ${item.count} шт%0A`;
    });

    console.log(this.props.order);
    const message =
  `Имя: ${name}%0A%0A
  ☎ Телефон: ${phone}%0A%0A
  🌁 Улица: ${street}%0A%0A
  🏠 Дом: ${home}%0A%0A
  🏢 Квартира: ${apart}%0A%0A
  💰 ${!cashType ? 'Оплата наличными': 'Оплата картой'}%0A%0A
  🙎 Количество человек: ${peopleCount ? peopleCount : 'не указано'}%0A%0A
  💵 Нужна сдача c ${zdacha ? zdacha : 'не указано'}%0A%0A
  📦 Эко-упаковка: ${eco ? 'нужна' : 'не нужна'}%0A%0A
  📝 Коментарий: ${comments ? comments : 'нет'}%0A%0A
   Меню:%0A
  ************************************%0A
  ${menu}%0A
  💸 Сума: ${this.props.total} грн.
  `;

    fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${message}`
    );

    alert('Заказ успешно принят!');
    this.reset();
  }

  checkedChange() {
    const { cashType } = this.state;
    this.setState({ cashType: !cashType });
    console.log(cashType);
  }


  render() {
    
    return (
      <form id="telegram" className={`${s.wrapper}`}>
        {
          this.state.error ? <Alert className={s.alert} variant="success">Не все поля заполнены!</Alert> : null
        }
        
        <h3>Оформление заказа</h3>
        <button
          className={`${s.reset} btn btn-warning mr-3`}
          type="reset"
          onClick={this.reset}
        >
          Очистить поля
        </button>
        <div className="d-flex flex-wrap justify-content-between mt-5">
          <div>
            <input
              className={`${s.name} form-control`}
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={this.state.name}
              onChange={this.onNameChange}
            />
            <input
              className={`${s.street} form-control`}
              type="text"
              name="street"
              placeholder="Улица"
              value={this.state.street}
              onChange={this.onStreetChange}
            />
          </div>
          <div>
            <input
              className={`${s.phone} form-control`}
              type="text"
              name="phone"
              placeholder="Номер телефона"
              value={this.state.phone}
              onChange={this.onPhoneChange}
            />
            <div className="d-flex">
              <input
                className={`${s.home} form-control`}
                type="text"
                name="home"
                placeholder="Дом"
                value={this.state.home}
                onChange={this.onHomeChange}
              />
              <input
                className={`${s.apart} form-control`}
                type="text"
                name="apart"
                placeholder="Квартира"
                value={this.state.apart}
                onChange={this.onApartChange}
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between mt-5 flex-wrap">
          <div>
            <div>
              <input
                id="nal"
                type="radio"
                name="cash"
                defaultChecked
                onChange={this.checkedChange}
              />
              <label className="ml-2" htmlFor="nal">
                Оплата наличными
              </label>
            </div>
            <div>
              <input
                id="card"
                type="radio"
                name="cash"
                onChange={this.checkedChange}
              />
              <label className="ml-2" htmlFor="card">
                Картой курьеру
              </label>
            </div>
          </div>

          <div>
            <div className="d-flex">
              <label htmlFor="peopleCount">Количество человек</label>
              <input className="form-control" id="peopleCount" type="text" value={this.state.peopleCount} onChange={(e)=>{this.setState({peopleCount: e.target.value})}}/>
            </div>
            <div className="d-flex">
              <label htmlFor="change">Нужна сдача с </label>
              <input className="form-control" id="change" type="text" value={this.state.zdacha} onChange={(e)=>{this.setState({zdacha: e.target.value})}}/>
            </div>
          </div>
        </div>

        <div className="d-flex mt-5 justify-content-between mb-5 flex-wrap">
          <div>
            <input id="eco" type="checkbox" value={this.state.eco} onChange={(e)=>{this.setState({eco: !this.state.eco}); console.log(e.target.value)}}/>
            <label className="ml-2 eco" htmlFor="eco">
              Эко-упаковка
            </label>
          </div>

          <input
            className={`${s.promocode} form-control`}
            type="text"
            placeholder="Промокод"
          />
        </div>

        <input
          className="form-control"
          type="text"
          placeholder="Коментарии к заказу"
          value={this.state.comments}
          onChange={(e)=>{this.setState({comments: e.target.value})}}
        />

        <div className="d-flex justify-content-center mt-4 mb-3">
          <Button
            type="button"
            className={s.ok}
            variant="warning"
            onClick={this.sendMsg}
          >
            СДЕЛАТЬ ЗАКАЗ
          </Button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.order,
    total: state.total,
  };
};

export default connect(mapStateToProps)(Ordering);
