import React, { Component } from "react";

import "./style.css";

import Style from "./style.module.css";
/**
 * 1. inline style
 * 2. File Css: ảnh hưởng đến toàn bộ dự án
 * 3. css module:
 */
export default class StyleInReact extends Component {
  render() {
    // !1. inlineStyle: Nhận giá trị là một Object
    // a. chuyển font-size => fontSize
    // background-color => backgroundColor
    // b. truyền giá trị thuộc tính của css là string
    const inlineObject = {
      color: "blue",
      // font-size = 40px; !Error
      fontSize: "40px",
    };

    console.log(Style);

    return (
      <>
        <p className={Style.TextBold}>PascalCase</p>

        <p className={Style["text-bold"]}>CSS module: text-bold</p>
        {/* <p className="text-heading"> ERROR </p> */}
        <p className={Style["text-heading"]}> CSS module: text-heading</p>
        <div
          style={{
            // {}1. biding data
            // {}2. là object
            color: "blue",
            fontSize: "40px",
            backgroundColor: "pink",
            fontWeight: 700,
          }}
        >
          StyleInReact
        </div>

        <p className="heading h1">File CSS</p>
      </>
    );
  }
}
