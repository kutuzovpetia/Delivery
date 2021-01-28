import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Config from './Config'; // Ключ до бази
import "firebase/database";
import firebase from "firebase/app";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reduser/reduser';

firebase.initializeApp(Config);

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
