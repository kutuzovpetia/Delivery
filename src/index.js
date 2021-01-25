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

/*****************************************************************/ 
// function componentDidMount(){
//   const db = firebase.database();
//   const name = db.ref('Burgers');
//   name.on('value', (elem)=>{
//     this.setState({
//       data : elem.val()
//     });
//   });
// }
/*****************************************************************/ 

const store = createStore(reducer);

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
