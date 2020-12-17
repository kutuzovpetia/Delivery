import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './App.scss';
import Header from "./components/header";
import Order from "./components/order";
import Content from "./components/content";
import TopMenu from './components/top-menu';
import Register from './components/register';
import { BrowserRouter, Route } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCvDZefVwrGuNQYJ7YaSoDdZvNp2zBFWt4",
  authDomain: "delivery-5fd13.firebaseapp.com",
  databaseURL: "https://delivery-5fd13-default-rtdb.firebaseio.com",
  projectId: "delivery-5fd13",
  storageBucket: "delivery-5fd13.appspot.com",
  messagingSenderId: "466120418847",
  appId: "1:466120418847:web:40f0c0daf289e6fb94972a",
  measurementId: "G-ZJSVZZZZ6N"
};

firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { title: "Бургер", price : '$1', id: 1 },
        { title: "Дабл-Бургер", price : '$12', id: 2 },
        { title: "Фиш-Бургер", price : '$13', id: 3 },
        { title: "Чиз-Бургер", price : '$120', id: 4 },
        { title: "WWW", price : '556', id: 5 },
        { title: "WWW", price : '556', id: 6 },
        { title: "WWW", price : '556', id: 7 },
        { title: "WWW", price : '556', id: 8 },
      ],
      order: [], // Корзина
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }


  deleteItem(id){    // Функція видалення елемента з корзини
    console.log(id);
    this.setState(({order}) =>{
      const index = order.findIndex(elem => elem.id === id);
      const before = order.slice(0, index);
      const after = order.slice(index + 1);
      const newArr = [...before, ...after];
      return{
        order: newArr
      }
    })
  }

  addItem(i,t,b) {    // Функція додавання елементу в корзину     

    let check = false;
    if(i){            // Перевірка корзини, чи є вже елемент
      this.state.order.map((item) => {
        if (item.id === i) { check = true; }
      });
    }
    if (check) {
      return;
    }
   
    const newItem = { id: i, title: t, price: b,};

    this.setState(({ order }) => {
      const newArr = [...order, newItem];
      return {
        order: newArr,
      };
    });
  }

  render() {

    const {data, order} = this.state;
    return (
      // <BrowserRouter>
      //   <div className={"App"}>
      //     <div className="row">
      //       <div className="col-8">
      //         <TopMenu></TopMenu>
      //         <Header className={s.header}></Header>
      //         <Route path="/register">
      //               <Register></Register>
      //         </Route>

      //         <div className="row">
      //           <Route path="/Главная">
      //             <Content addItem={this.addItem} data={data}></Content>
      //           </Route>

      //         </div>
      //       </div>
      //       <div className="col-4">
      //         <Order data={order} deleteItem={this.deleteItem}></Order>
      //       </div>
      //     </div>
      //   </div>
      // </BrowserRouter>

      <BrowserRouter>
        <div className={"App"}>
          <div className="container">
            <div className="col-12">
              <TopMenu></TopMenu>
              <Header className={s.header}></Header>
              <Route path="/register">
                <Register></Register>
              </Route>
            </div>

            <Route path="/Главная">
              <Content addItem={this.addItem} data={data}></Content>
            </Route>

            <Order
              className="order"
              data={order}
              deleteItem={this.deleteItem}
            ></Order>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
