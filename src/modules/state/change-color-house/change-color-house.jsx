import React, { Component } from "react";

export default class ChangeColorHouse extends Component {
  state = { houseColor: "RED" };

  // !Cách 2
  changeColor = (color) => {
    this.setSate({ houseColor: color });
  };

  // !Cách 3
  curyingChangeColor = (color) => {
    // *Không có return => Undefind
    return () => {
      this.setState({ houseColor: color });
    };
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
              this.setState({ houseColor: "red" });
              // this.changeColor("red");
            }}
            className="btn btn-danger"
          >
            RED
          </button>
          <button
            onClick={() => {
              // !Cách 1:
              this.setState({ houseColor: "blue" });
              // this.changeColor("blue");
            }}
            className="btn btn-primary"
          >
            BLUE
          </button>
          <button
            onClick={() => {
              // this.setState({ houseColor: "green" });
              // !Cách 2:
              this.changeColor("green");
            }}
            className="btn btn-success"
          >
            GREEN
          </button>
          <button
            onClick={
              //! Cách 3:
              this.curyingChangeColor("yellow")
            }
            className="btn btn-warning"
          >
            YELLOW
          </button>
        </div>
      </div>
    );
  }
}
