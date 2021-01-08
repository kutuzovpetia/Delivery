import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import s from "./App.scss";
import Header from "./components/header";
import Order from "./components/order";
import Content from "./components/content";
import TopMenu from "./components/top-menu";
import Register from "./components/register";
import MenuFoods from "./components/menu-foods";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/database";
import Contact from './components/contact';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      order: [], // Корзина
      sum: 0,
    };
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
              <Redirect from="/" to="Бургеры"></Redirect> {/* Стартуем! */}

              <Route path="/home">
              <Header className={s.header}/>
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
              <Header className={s.header}/>
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
              <MenuFoods></MenuFoods>
              {/* <Content addItem={this.addItem} data={Data}></Content> */}
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
