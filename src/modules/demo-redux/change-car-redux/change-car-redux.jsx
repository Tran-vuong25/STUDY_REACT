import React, { Component } from "react";

import { connect } from "react-redux";

const getSrcImg = (color) => {
  return `/images/cars/${color}-car.jpg`;
};

class ChangeCarRedux extends Component {
  render() {
    return (
      <div className="container">
        <img style={{ width: "100%" }} src={this.props.srcImage} alt />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
            gap: "1rem",
          }}
        >
          <button
            onClick={()=> {this.props.handelChangeCar(getSrcImg("black"))}}
            className="btn btn-dark"
          >
            Black
          </button>
          <button
            onClick={()=> {this.props.handelChangeCar(getSrcImg("red"))}}
            className="btn btn-danger"
          >
            Red
          </button>
          <button
            onClick={()=> {this.props.handelChangeCar(getSrcImg("silver"))}}
            className="btn btn-secondary"
          >
            Silver
          </button>
          <button
            onClick={()=> {this.props.handelChangeCar(getSrcImg("steel"))}}
            className="btn btn-warning"
          >
            Steel
          </button>
        </div>
      </div>
    );
  }
}
// Lấy state từ redux về component
const mapStateToProps = (rootReducer) => {
  return {
    // truyền vào component 1 props tên là srcImage
    srcImage: rootReducer.carReducer,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    handelChangeCar: (src) => {
      dispatch({
        type: "change-img",
        payload: src,
      });
    },
  };
};

// Kết nối redux với component
export default connect(mapStateToProps, mapDispatchToProp)(ChangeCarRedux);
