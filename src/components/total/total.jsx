import React, { Component } from "react";
import s from "./style.module.scss";
import * as actions from "../../action/action";
import { connect } from "react-redux";
import ProgressBar from "react-bootstrap/ProgressBar";

class Total extends Component {

  
  render() {

    const { total } = this.props;

    return (
      <div className={s.wrapper}>
        <div className={s.total}>
          <span>Всего:</span>
          <span>{total} &#8372;</span>
        </div>

        <ProgressBar className={s.progressBar}>
          <ProgressBar animated striped variant="success" now={total/350*100} key={1} />
        </ProgressBar>

        <p className={`${ total >= 350 ? s.subTitleFree : s.subTitle} text-center mt-3 `}>{total >= 350 ? 'Бесплатная доставка!' : 'Бесплатная доставка при сумме от 350 грн'}</p>

        {
          total ? <button className={`btn btn-primary btn-success ${s.btnOrder}`}>Оформить заказ</button> 
          : <button className={`btn btn-warning btn-primary ${s.btnOrder}`} disabled>Оформить заказ</button> 
        }
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    total: state.total,
  };
};

export default connect(mapStateToProps, actions)(Total);
