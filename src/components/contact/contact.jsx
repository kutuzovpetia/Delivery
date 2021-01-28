import React, { Component } from 'react';
import s from './style.module.scss';
import vkIcon from '../../image/vk.svg';
import faceIcon from '../../image/facebook.svg';
import instaIcon from '../../image/instagram.svg';

export default class Contact extends Component{
    render(){

        return(

            <div className={s.contactWrapper + ' container-fluid'}>
                <h1 className='mb-5'>Контакты</h1>
                <div className={'d-flex justify-content-between mb-5 flex-wrap'}>
                    <ul>
                        <li><h6>Адрес:</h6></li>
                        <li>город Черновцы</li>
                        <li>ул. Бла-бла-бла</li>
                    </ul>

                    <ul>
                        <li><h6>График работы:</h6></li>
                        <li>пн-чт: 09:00-23:00</li>
                        <li>пт-вс: 11:00-23:45</li>
                    </ul>

                    <ul>
                        <li><h6>Номера телефонов:</h6></li>
                        <li><a href="tel:+380959993366">+38(095)-999-33-66</a></li>
                        <li><a href="tel:+380977773311">+38(097)-777-33-11</a></li>
                    </ul>

                    <div className={s.social}>
                        <h6>Мы в соцсетях</h6>
                        <div>
                        <img src={vkIcon} alt="VK"/>
                        <img src={instaIcon} alt="Instagram"/>
                        <img src={faceIcon} alt="Facebook"/>
                        </div>
                    </div>
                </div>
                <iframe title='map' className={s.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2654.431507270409!2d25.93504301588871!3d48.29455184819338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734089af4326a39%3A0x8fc4f98ed92ebc0!2z0YPQu9C40YbQsCDQqNC60L7Qu9GM0L3QsNGPLCAxLCDQp9C10YDQvdC-0LLRhtGLLCDQp9C10YDQvdC-0LLQuNGG0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA1ODAwMA!5e0!3m2!1sru!2sua!4v1608647694895!5m2!1sru!2sua"></iframe>
            </div>
        )
    }
}