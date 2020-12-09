import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.css';
// import bell from '../../image/bell.png';


export default class ItemMenuFoods extends Component{

  constructor(props){
      super(props);
  }


    render(){

        return(
            <NavLink to={this.props.text} activeClassName={s.active} className={`${s.item} d-flex align-items-end`}>
                <img src={this.props.menuImg} alt='...'></img>
                <p className={s.text}>{this.props.text}</p>
            </NavLink>
        )
    }
}