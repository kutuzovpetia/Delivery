import React from "react";
import { Component } from "react";
import s from "./style.module.scss";
import { connect } from "react-redux";
import * as actions from "../../action/action.js";

class Comments extends Component {


  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // Создаем ссылку
  }

  componentDidMount() {
    window.scrollTo(0, 0); // Прокрутка вверх
  }

  render() {

   const elements = this.props.comments.map((item)=>{
      return (
        <div key={item.id} className={s.wrapper}>
          <div className={`d-flex `}>
            <h5 className="mr-2">{item.name}</h5>
            <p className={`${s.date}`}>{` - ${item.date}`}</p>
          </div>
          <p>{item.comment}</p>
        </div>
      );
    })
    
    return(
      <div className={s.border} ref={this.myRef}>
        <h4>Всего {this.props.comments.length} коментариев</h4>
        {elements}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

export default connect(mapStateToProps, actions)(Comments);