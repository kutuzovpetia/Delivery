import React, { Component } from "react";
import s from "./style.module.scss";
import * as actions from "../../action/action";
import { connect } from "react-redux";
import ProgressBar from "react-bootstrap/ProgressBar";
import { NavLink } from "react-router-dom";
import btnCross from "../../image/tb.svg";
import btnTriangle from "../../image/triangle-button.svg"

class Total extends Component {

  constructor(props){
    super(props);
    this.state = {
      openClose : false
    }
  }
 
  render() {

    const { total } = this.props;

    return (
      <div className={s.wrapper}>
        <img src={this.state.openClose ? btnTriangle : btnCross} alt="..." className={`${s.btnTriangle}`} onClick={()=>{this.setState({openClose: !this.state.openClose})}}/>
        {
          this.state.openClose ? null :
          <div>
                <div className={s.total}>
                  <span>Всего:</span>
                  <span>{total} &#8372;</span>
                </div>

                <ProgressBar className={s.progressBar}>
                  <ProgressBar animated striped variant="success" now={total/350*100} key={1} />
                </ProgressBar>

                <p className={`${ total >= 350 ? s.subTitleFree : s.subTitle} text-center mt-3 `}>{total >= 350 ? 'Бесплатная доставка!' : 'Бесплатная доставка при сумме от 350 грн'}</p>

                {
                  total ? 
                  <NavLink to="ordering" className={`${s.butt} nav-link btn btn-primary btn-success`}>Оформить заказ</NavLink> 
                  :
                  <NavLink to="ordering" className={`${s.butt} nav-link btn btn-warning btn-primary disabled`} >Оформить заказ</NavLink>
                }
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    total: state.total,
    order: state.order
  };
};

export default connect(mapStateToProps, actions)(Total);
