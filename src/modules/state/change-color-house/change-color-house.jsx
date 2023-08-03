import React, { Component } from "react";

export default class ChangeColorHouse extends Component {
  state = { houseColor: "RED" };

  changeColor = (color) => {
    this.setSate({ houseColor: color, });
  };

  render() {
    return (
      <div>
        <i
          style={{
            color: this.state.houseColor,
            fontSize: "150px",
            padding: "20px",
          }}
          className="fa-solid fa-house"
        />
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <button
            onClick={() => {
              //   this.setState({ houseColor: "red" });
              this.changeColor("red");
            }}
            className="btn btn-danger"
          >
            RED
          </button>
          <button
            onClick={() => {
              //   this.setState({ houseColor: "blue" });
              this.changeColor("blue");
            }}
            className="btn btn-secondary"
          >
            BLUE
          </button>
          <button
            onClick={() => {
              //   this.setState({ houseColor: "green" });
              this.changeColor("green");
            }}
            className="btn btn-success"
          >
            GREEN
          </button>
          <button
            onClick={() => {
              //   this.setState({ houseColor: "yellow" });
              this.changeColor("yellow");
            }}
            className="btn btn-warning"
          >
            YELLOW
          </button>
        </div>
      </div>
    );
  }
}
