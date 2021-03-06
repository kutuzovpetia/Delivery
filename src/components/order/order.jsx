import React, { Component } from "react";
import s from "./style.module.scss";
import ItemOrder from "../item-order/item-order";
import Total from "../total";
import { connect } from "react-redux";
import * as actions from "../../action/action";

class Order extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(id, minus) {
    // Функція видалення елемента з корзини
    const { total, order, deleteItemFromOrder, totalUpdate } = this.props;
    const temp = total - minus; // Віднімаю від сумми кількість * ціну
    const newOrder = order.filter((elem) => elem.id !== id);
    deleteItemFromOrder(newOrder);
    totalUpdate(temp);
  }

  render() {
    const { order } = this.props;
    const elements = order.map((item) => {
      return (
        <ItemOrder
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          deleteItem={this.deleteItem}
          foodImg={item.img}
          count={item.count}
        ></ItemOrder>
      );
    });

    return (
      <div id="mySideOrder" className={this.props.openOrder ? s.sideOrder_show : s.sideOrder}>
        <div className={` ${s.wrappTitle} d-flex align-items-center justify-content-between w-100`}>
          <h2 className={s.title}>Корзина</h2>
          <button onClick={()=>{this.props.clearOrder(); this.props.totalUpdate(0);}} className={`btn btn-warning`}>Очистить</button>
        </div>

        <div className={s.wrapper}>{elements}</div>
        <div className={s.total}>
          <Total></Total>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.order,
    total: state.total,
    openOrder: state.openOrder,
  };
};

export default connect(mapStateToProps, actions)(Order);
