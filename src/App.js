import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import s from "./App.scss";
import Header from "./components/header";
import Order from "./components/order";
import Content from "./components/content";
import TopMenu from "./components/top-menu";
import Register from "./components/register";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/database";
import Contact from './components/contact';
import Config from './Config'; // Ключ до бази


firebase.initializeApp(Config);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      order: [], // Корзина
      sum: 0,
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addPlus = this.addPlus.bind(this);
    this.addMinus = this.addMinus.bind(this);
  }
/*****************************************************************/ 
  componentDidMount(){
    const db = firebase.database();
    const name = db.ref('Burgers');
    name.on('value', (elem)=>{
      this.setState({
        data : elem.val()
      });
    });
  }

/*****************************************************************/ 
  deleteItem(id, minus) {// Функція видалення елемента з корзини
    const { sum } = this.state;
    const temp = sum - minus; // Віднімаю від сумми кількість * ціну
    this.setState({     
      sum : temp
    });

    this.setState(({ order }) => {
      const index = order.findIndex((elem) => elem.id === id);
      const before = order.slice(0, index);
      const after = order.slice(index + 1);
      const newArr = [...before, ...after];
      return {
        order: newArr,
      };
    });
  }

  addItem(i, t, b, img) { //id, title, price, img
    // Функція додавання елементу в корзину
    let check = false; // тимчасова для перевірки
    this.state.order.forEach(el=> {
      if (el.id === i) { check = true;}
    });
    if (check) { alert('Уже есть в корзине!'); return; }

    const newItem = { id: i, title: t, price: b, img: img, }; // новий об’экт
    this.setState(({ order }) => {
      const newArr = [...order, newItem];
      return {
        order: newArr,
      };
    });

    const s = this.state.sum + parseFloat(b); // Додаєм ціни
    this.setState({
      sum: s,
    });
  }

  addPlus(data) {
    const s = this.state.sum + parseFloat(data);
    this.setState({
      sum: s,
    });
  }

  addMinus(data) {
    const s = this.state.sum - parseFloat(data);
    this.setState({
      sum: s,
    });
  }

  render() {
    const { data, order, sum } = this.state;
    const Data = [];
    Object.keys(data).forEach(elem => {
       Data.push(data[elem]);
    });

    return (
      <BrowserRouter>
        <div className={"App"}>
          <div className="container">
            <div className="col-12">
              <TopMenu></TopMenu>
              <Redirect from="/" to="home"></Redirect> {/* Стартуем! */}

              <Route path="/home">
              <Header className={s.header}></Header>
              <Content addItem={this.addItem} data={Data}></Content>
              </Route>

              <Route path="/about">

              </Route>

              <Route path="/contact">
                   <Contact></Contact>
              </Route>

              <Route path="/register">
                <Register
                type={"reg"}
                title={"Регистрация"}
                btnLabel={"Подтвердить"}
                />
              </Route>

              <Route path="/enter">
                <Register
                type={"enter"}
                title={"Вход"}
                btnLabel={"Войти"}
                />
              </Route>

              <Route path="/Все">
              <Header className={s.header}></Header>
              <Content addItem={this.addItem} data={Data}></Content>
              </Route>

              <Route path={'/Бургеры'}>
              <Content addItem={this.addItem} data={Data}></Content>
              </Route>

              <Route path={'/Рыба'}>
              <Content addItem={this.addItem} data={Data}></Content>
              </Route>

              <Route path={'/Мясо'}>
              <Content addItem={this.addItem} data={Data}></Content>
              </Route>

              <Route path={'/Паста'}>
              <Content addItem={this.addItem} data={Data}></Content>
              </Route>

              <Route path={'/Пицца'}>
              <Content addItem={this.addItem} data={Data}></Content>
              </Route>

              <Route path={'/Суши'}>
              <Content addItem={this.addItem} data={Data}></Content>
              </Route>
            </div>

            <Order
              className="order"
              data={order}
              deleteItem={this.deleteItem}
              sum={sum}
              addPlus={this.addPlus}
              addMinus={this.addMinus}
            ></Order>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
