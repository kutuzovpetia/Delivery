import React from 'react';
import { Component } from 'react';
import s from './style.module.scss';

export default class CarouselItem extends Component{

    render(){
        const{title, description, img} = this.props;

        return(
            <div className={'wrapper ' + s.wrapper}>
                <div className={'text'}>
                   <h2>{title}</h2>
                   <p className={'description'}>{description}</p>
                </div>
                <img src={img} alt="Food"/>
            </div>
        )
    }
}



