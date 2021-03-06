import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.css';


export default class ItemMenuFoods extends Component{

    render(){

        return(
            <NavLink to={this.props.text} activeClassName={s.active} className={`${s.item} d-flex align-items-end`}>
                <img src={this.props.menuImg} alt='...'></img>
                <p className={s.text}>{this.props.title}</p>
            </NavLink>
        )
    }
}