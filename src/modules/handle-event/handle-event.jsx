import React, { Component } from "react";

export default class HandleEvent extends Component {
  // Không phải thuần method, thuộc tính có một giá trị là một function

  // !1. function không có tham số truyền vào
  fn1 = () => {
    console.log("click me 1");
  };

  currying = () => {
    return () => {
      console.log("click me 3");
    };
  };

  fn4 = (title) => {
    console.log(title);
  };

  fn5 = (title) => {
    // closure
    // Sử dụng giá trị bên ngoài của nó
    return () => {
      console.log(title);
    };
  };
  render() {
    const fn2 = () => {
      console.log("Click me 2");
    };
    return (
      <div>
        {/* onClick yêu cầu nhận vào một function */}
        <button onClick={this.fn1}>Click Me</button>

        <button onClick={fn2}>Click Me 2</button>

        {/* Thực thi ngay lập tức method currying */}
        <button onClick={this.currying()}>Click Me 3</button>

        <button
          onClick={() => {
            // inline function
            this.fn4("haha");
          }}
        >
          Click Me 4
        </button>

        {/* // !Error: declaration function từ khóa this bị undefined */}
        <button
          onClick={function () {
            console.log(this); // Undefinded
            // this.fn4('Click me 5')
          }}
        >
          Click Me 5
        </button>

        <button
          onClick={() => {
            console.log(this);
            this.fn4("Click me 6");
          }}
        >
          Click Me 6
        </button>

        <button onClick={this.fn5("Click Me 7")}>Click Me 7</button>

        <button onClick={this.fn4.bind(this, "Click Me 8")}>Click Me 8</button>
      </div>
    );
  }
}
