import React, { Component } from "react";
import { FormDangKy } from "./components/form-dang-ky/form-dang-ky";
import { ListProduct } from "./components/list-product/list-product";

export class ReactForm extends Component {
  render() {
    return (
      <div className="container">
        {/* <h1 className='bg-red-600 text-[blue]'>Lorem ipsum dolor sit amet.</h1>
        <h2 className='bg-red-600 text-white'>Lorem ipsum dolor sit amet.</h2>
        <h3 className='bg-red-600'>Lorem ipsum dolor sit amet.</h3> */}

        <div className="form-dang-ky">
          <FormDangKy />
        </div>
        <div className="list-product">
          <ListProduct />
        </div>
      </div>
    );
  }
}
