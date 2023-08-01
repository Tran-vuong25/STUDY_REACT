import React, { Component } from "react";

export default class TangGiamFontSize extends Component {
    state = {
        fSize: 16,
    };
    render() {
    return (
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          asperiores magni veritatis repellendus perspiciatis cum nisi ea hic
          cupiditate tempore.
        </p>
        <button className="btn btn-warning mx-2">+</button>
        <button className="btn btn-success">-</button>
      </div>
    );
  }
}
