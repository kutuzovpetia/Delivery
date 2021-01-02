import React, { Component } from "react";
import s from "./style.module.scss";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from '../carousel-item';
import {connect} from 'react-redux';


class Header extends Component {
  render() {
      const{arr} = this.props;
    return (
      <header className={s.header}>
        <Carousel controls={true} indicators={false} >
          <Carousel.Item interval={5000}>
            <CarouselItem 
            title={arr[0].title}
            description={arr[0].desc}
            img={arr[0].img}
            />
          </Carousel.Item>
          
          <Carousel.Item interval={5000}>
            <CarouselItem 
            title={arr[1].title}
            description={arr[1].desc}
            img={arr[1].img}
            />
          </Carousel.Item>

          <Carousel.Item interval={5000}>
            <CarouselItem 
            title={arr[2].title}
            description={arr[2].desc}
            img={arr[2].img}
            />
          </Carousel.Item>
        </Carousel>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
 
    return{
         arr: state.carouselItem,
    }
}
  
export default connect(mapStateToProps)(Header);
