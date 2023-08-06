import React, { Component } from "react";

export default class ChangeBackGroundCar extends Component {
  state = {
    srcImg: "/images/cars/black-car.jpg",
  };

  changeSrcImg = (src) => {
    this.setState({ srcImg: src });
  };

  curyingSrcImg = (src) => {
    return () => {
      this.setState({ srcImg: src });
    };
  };

  render() {
    return (
      <div className="container">
        <img style={{ width: "100%" }} src={this.state.srcImg} alt />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
            gap: "1rem",
          }}
        >
          <button
            onClick={() => {
              //! Cách 1:
              this.changeSrcImg("/images/cars/black-car.jpg");
            }}
            className="btn btn-dark"
          >
            Black
          </button>
          <button
            onClick={
              // () => {
              //     this.changeSrcImg('/images/cars/red-car.jpg')
              // }
              //! Cách 2:
              this.curyingSrcImg("/images/cars/red-car.jpg")
            }
            className="btn btn-danger"
          >
            Red
          </button>
          <button
            onClick={() => {
              this.changeSrcImg("/images/cars/silver-car.jpg");
            }}
            className="btn btn-secondary"
          >
            Silver
          </button>
          <button
            onClick={() => {
              this.changeSrcImg("/images/cars/steel-car.jpg");
            }}
            className="btn btn-warning"
          >
            Steel
          </button>
        </div>
      </div>
    );
  }
}
