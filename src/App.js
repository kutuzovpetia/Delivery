import React from "react";
import "./App.css";
import Header from "./components/header";
import Order from "./components/order";
import Content from "./components/content";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="row">
          <div className="col-8">
            <Header></Header>
            <div className="row">
              <Route component={Content}></Route>
            </div>
          </div>
          <div className="col-4">
            <Order></Order>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
