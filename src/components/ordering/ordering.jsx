import React from "react";
import { Component } from "react";
import s from "./style.module.scss";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { connect } from "react-redux";
import * as actions from '../../action/action';
import Modal from "../modal-order";
import Mod from "react-bootstrap/Modal";

const botToken = "1596428981:AAG5zWC68zFnxFXiCe1veYKrFks8vdQ7QEI"; // Токен бота
const chatId = "-1001471493860";                                   // Id групового чата

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
      peopleCount: "",
      zdacha: "",
      eco: false,
      comments: "",
      error: false,    
      discount: false,
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

  checkInput(){  // Проверка на пустоту
    const { name, phone, street, home, apart} = this.state;
    if (!name || !phone || !street || !home || !apart) {
      return true;
    }
    else{
      return false;
    }
  }

  showAlert(){ // Функция для показа Alert
    this.setState({ error: true });
      setTimeout(() => {
        this.setState({
          error: false,
        });
      }, 2000);

      return;
  }


  reset() { // Функция очищения полей
    this.setState({ name: "", phone: "", street: "", home: "", apart: "", comments: "", peopleCount: "", zdacha: "",});
  }

  onNameChange(e) { // Имя не больше 20-ти символов
    const val = e.target.value;
    val.length > 20
      ? this.setState({ name: val.slice(0, val.length - 1) })
      : this.setState({ name: val });
  }

  onPhoneChange(e) { // Телефон не больше 10-ти символов, только цифры
    const val = e.target.value;
    if (Number.isInteger(+val) && val.length <= 10) {
      this.setState({ phone: val });
    }
  }

  onStreetChange(e) { // Улица не больше 20-ти символов
    const val = e.target.value;
    val.length > 20
      ? this.setState({ street: val.slice(0, val.length - 1) })
      : this.setState({ street: val });
  }

  onHomeChange(e) { // Дом не больше 20-ти символов
    const val = e.target.value;
    val.length > 20
      ? this.setState({ home: val.slice(0, val.length - 1) })
      : this.setState({ home: val });
  }

  onApartChange(e) { // Квартира не больше 20-ти символов
    const val = e.target.value;
    val.length > 20
      ? this.setState({ apart: val.slice(0, val.length - 1) })
      : this.setState({ apart: val });
  }

  sendMsg() { // Функция отправки заказа в телеграм
    const { name, phone, street, home, apart, cashType,peopleCount,zdacha,eco,comments, } = this.state;

    let menu = "";

    this.props.order.forEach((item, i) => { // Заполняем меню
      menu += `  ${i + 1}) ${item.title} ${item.count} шт%0A`;
    });

    const message = `Имя: ${name}%0A%0A
  ☎ Телефон: ${phone}%0A%0A
  🌁 Улица: ${street}%0A%0A
  🏠 Дом: ${home}%0A%0A
  🏢 Квартира: ${apart}%0A%0A
  💰 ${!cashType ? "Оплата наличными" : "Оплата картой"}%0A%0A
  🙎 Количество человек: ${peopleCount ? peopleCount : "не указано"}%0A%0A
  💵 Нужна сдача c ${zdacha ? zdacha : "не указано"}%0A%0A
  📦 Эко-упаковка: ${eco ? "нужна" : "не нужна"}%0A%0A
  📝 Коментарий: ${comments ? comments : "нет"}%0A%0A
  💲 Скидка: ${this.state.discount ? "-10%" : "нет"}%0A%0A
   Меню:%0A
  ************************************%0A
  ${menu}%0A
  💸 Сума: ${
    this.state.discount
      ? Math.round(this.props.total * (1 - 10 / 100))
      : this.props.total
  } грн.
  `;

    fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${message}`
    );

    alert("Заказ успешно принят!");
    this.props.showMod();     // Скрываю модально окно
    this.reset();             // Очищаю поля
    this.props.clearOrder();  // Очищаю корзину
    this.props.totalUpdate(0);// Зануляю
  }

  checkedChange() { // Функция переключения оплаты (карта/наличка)

    const { cashType } = this.state;
    this.setState({ cashType: !cashType });

  }

  render() {

    const { name,phone,street,home,apart,cashType,peopleCount,zdacha,eco,comments,discount} = this.state;
    return (
      <form id="telegram" className={`${s.wrapper}`}>
        {this.state.error ? (
          <Alert className={s.alert} variant="success">
            Не все поля заполнены!
          </Alert>
        ) : null}

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
              <input
                className="form-control"
                id="peopleCount"
                type="text"
                value={this.state.peopleCount}
                onChange={(e) => {
                  this.setState({ peopleCount: e.target.value });
                }}
              />
            </div>
            <div className="d-flex">
              <label htmlFor="change">Нужна сдача с </label>
              <input
                className="form-control"
                id="change"
                type="text"
                value={this.state.zdacha}
                onChange={(e) => {
                  this.setState({ zdacha: e.target.value });
                }}
              />
            </div>
          </div>
        </div>

        <div className="d-flex mt-5 justify-content-between mb-5 flex-wrap">
          <div>
            <input
              id="eco"
              type="checkbox"
              value={this.state.eco}
              onChange={(e) => {
                this.setState({ eco: !this.state.eco });
              }}
            />
            <label className="ml-2 eco" htmlFor="eco">
              Эко-упаковка
            </label>
          </div>

          <input
            className={`${s.promocode} form-control`}
            type="text"
            placeholder="Промокод"
            onChange={(e) => {
              this.props.promocode === e.target.value
                ? this.setState({ discount: true })
                : this.setState({ discount: false });
            }}
          />
        </div>

        <input
          className="form-control"
          type="text"
          placeholder="Коментарии к заказу"
          value={this.state.comments}
          onChange={(e) => {
            this.setState({ comments: e.target.value });
          }}
        />

        <div className="d-flex justify-content-center mt-4 mb-3">
          <Button
            type="button"
            className={s.ok}
            variant="warning"
            onClick={()=>{!this.checkInput() ? this.props.showMod() : this.showAlert()}}
          >
            СДЕЛАТЬ ЗАКАЗ
          </Button>
        </div>

        <Mod show={this.props.show}>  
          <Modal
            name={name}
            phone={phone}
            street={street}
            home={home}
            apart={apart}
            cashType={cashType}
            peopleCount={peopleCount}
            zdacha={zdacha}
            eco={eco}
            comments={comments}
            sendMsg={this.sendMsg}
            discount={discount}
          />
        </Mod>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.order,
    total: state.total,
    promocode: state.promocode,
    show: state.showModal,
  };
};

export default connect(mapStateToProps, actions)(Ordering);
