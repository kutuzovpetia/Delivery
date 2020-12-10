import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import Order from "./components/order";
import Content from "./components/content";
import { BrowserRouter, Route } from "react-router-dom";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ title: "WWw", price : '556', id: 1 }],
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }


  deleteItem(id){
    this.setState(({data}) =>{
      const index = data.findIndex(elem => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after];
      return{
        data: newArr
      }
    })
  }

  addItem(t,b) {

    const newItem = {
      title: t,
      price: b
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="row">
            <div className="col-8">
              <Header></Header>
              <div className="row">
                <Route>
                  <Content addItem={this.addItem}></Content>
                </Route>
              </div>
            </div>
            <div className="col-4">
              <Order data={this.state.data} deleteItem={this.deleteItem}></Order>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
