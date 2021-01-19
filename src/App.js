import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import s from "./App.scss";
import Header from "./components/header";
import Order from "./components/order";
import Content from "./components/content";
import TopMenu from "./components/top-menu";
import Register from "./components/register";
import MenuFoods from "./components/menu-foods";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
// import firebase from "firebase/app";
import firebase from "firebase";
// import "firebase/database";
import Contact from './components/contact';
import Ordering from './components/ordering';
import UserPanel from './components/user-panel';
import { connect } from "react-redux";
import * as actions from "./action/action.js";
import Comments from "./components/comments";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],  // Массив с обьектами
      order: [], // Корзина
      sum: 0,    // общая сумма
      userState: false, // вошел ли пользователь
    };
  }

/*****************************************************************/ 
 componentDidMount(){
    const db = firebase.database();
    const name = db.ref('Burgers');
    name.on('value', (elem)=>{
      
      const Data = [];  // Временный массив
      const tempObj = elem.val(); // Получаем обьект с обьектами
      Object.keys(tempObj).forEach(elem => { Data.push(tempObj[elem]); }); // Пушим обьекты в массив
      this.setState({ data : Data}); // Обновляем состояние
    });

    firebase.auth().onAuthStateChanged((user)=>{
      user ? this.setState({userState: true}) : this.setState({userState: false});
      user ? this.props.SetUser(user.email) : this.props.SetUser(null);
    })
  }
/*****************************************************************/ 

  render() {
    const { data, order, sum } = this.state;
    
    return (
      <BrowserRouter>
        <div className={"App"}>
          <div className="container">
            <div className="col-12">
              <TopMenu></TopMenu>

              <Redirect from="/" to="Бургеры"></Redirect> {/*Start!*/}

              <Route path="/home">
              <Header className={s.header}/>
              <Content addItem={this.addItem} data={data}></Content>
              </Route>

              <Route path="/ordering">
              <Ordering></Ordering>
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
              <Content addItem={this.addItem} data={data}></Content>
              </Route>

              <Route path={'/Бургеры'}>
              <Header className={s.header}/>
              <Content addItem={this.addItem} data={data}></Content>
              </Route>

              <Route path={'/Рыба'}>
              <Content addItem={this.addItem} data={data}></Content>
              </Route>

              <Route path={'/Мясо'}>
              <Content addItem={this.addItem} data={data}></Content>
              </Route>

              <Route path={'/Паста'}>
              <Content addItem={this.addItem} data={data}></Content>
              </Route>

              <Route path={'/Пицца'}>
              <Content addItem={this.addItem} data={data}></Content>
              </Route>

              <Route path={'/Суши'}>
              <MenuFoods></MenuFoods>
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

            <Route path={'/comments'}>
              <Comments></Comments>
            </Route>

            {
              this.state.userState ? <UserPanel></UserPanel> : null
            }

          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logining: state.accountLogin,
    user: state.user
  };
};

export default connect(mapStateToProps, actions)(App);
