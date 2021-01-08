import React, { Component } from 'react';
import s from './style.module.scss';
import * as actions from '../../action/action';
import { connect } from 'react-redux';

class Total extends Component {

    render() {

        const { total } = this.props;
        return (
            <div className={s.wrapper}>
                <div className={s.total}>
                    <span>Всего:</span>
                    <span>{total} &#8372;</span>
                </div>

                <p className={s.subTitle}>Бесплатная доставка при сумме от 250 грн</p>

                <button type="button" className={`btn btn-dark ${s.btnOrder}`}>Оформить заказ</button>

            </div>

        )
    }
}

const mapStateToProps = (state) => {

    return {
        total: state.total,
    }
}

export default connect(mapStateToProps, actions)(Total);