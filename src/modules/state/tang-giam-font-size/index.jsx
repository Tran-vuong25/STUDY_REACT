import React, { Component } from "react";

export default class TangGiamFontSize extends Component {
  state = {
    fSize: 20,
  };
  render() {
    return (
      <div>
        <p style={{ fontSize: `${this.state.fSize}px` }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          asperiores magni veritatis repellendus perspiciatis cum nisi ea hic
          cupiditate tempore.
        </p>
        <button
          onClick={() => {
            const newState = { fSize: this.state.fSize + 5 };
            // Là một cơ chế bất đồng bộ
            // xem xét coi thử có bao nhiêu state thay đổi, chỉ render lại một lần duy nhất

            //? Vì sao setSate không phải là cơ chế đồng bộ?
            this.setState(newState);
          }}
          className="btn btn-warning mx-2"
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({ fSize: this.state.fSize - 5 });
          }}
          className="btn btn-success"
        >
          -
        </button>
      </div>
    );
  }
}
