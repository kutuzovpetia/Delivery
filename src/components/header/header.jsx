import React, {Component} from 'react';
import s from './style.module.scss';

export default class Header extends Component{

    render(){

        return(
            <header className={s.header}>
                   <h1>Header</h1>
            </header>
        )
    }
}