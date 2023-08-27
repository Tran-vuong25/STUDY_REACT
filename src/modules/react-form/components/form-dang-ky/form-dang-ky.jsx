import React, { Component } from "react";

export class FormDangKy extends Component {
  /**
   * 1. Lấy giá trị input người dùng nhập vào
   * 2. Validate
   * 3. Send dữ liệu đi.
   */

  state = {
    value: {
      id: "",
      name: "",
      price: "",
      image: "",
      productType: "",
      desc: "",
    },
    touch: {
      id: false,
      name: false,
      price: false,
      image: false,
      productType: false,
      desc: false,
    },
    error: {
      id: "ID Không được bỏ trông",
      name: "",
      price: "",
      image: "",
      productType: "",
      desc: "",
    },
  };

  handleChange = (event, property) => {
    //! Chú ý: onChange trong react đã custom lại: keydown + keypress != onChange js
    // hàm sẽ gọi khi người dùng thay đổi giá trị nhập vào input
    // console.log("Change", event);

    // event.target: chính là input <===> document.getID("id")
    // <=> document.getID("id").value

    const { value, id, name, className } = event.target;
    // const value = event.target.value
    // const id = event.target.id
    console.log({ id });

    // Giữ lại giá trị cũ | xét lại giá trị mới
    this.setState({
      value: {
        ...this.state.value,
        [id]: value,
      },
    });

    // console.log({ value, id, name, className });
  };

  handleFocus = (event) => {
    const { id } = event.target;

    this.setState({
      touch: {
        ...this.state.touch,
        [id]: true,
      },
    });
  };

  render() {
    // console.log(this.state.value);
    console.log(this.state.touch);

    return (
      // * htmlFor = for
      <form className="g-3">
        <div className="row">
          <div className="col-6">
            <div className="mt-3">
              <label htmlFor="id" className="col-form-label">
                ID
              </label>
              <input
                onFocus={this.handleFocus}
                value={this.state.value.id}
                onChange={
                  //   (event) => {
                  //   this.handleChange(event, "id");
                  //   this.handleChange(event);
                  // }
                  this.handleChange
                }
                type="text"
                id="id"
                className="form-control"
              />
              {this.state.touch.id && this.state.error.id && (
                <p className=" text-red-500">{this.state.error.id}</p>
              )}
            </div>

            <div className="mt-3">
              <label htmlFor="name" className="col-form-label">
                Name
              </label>
              <input
                onFocus={this.handleFocus}
                value={this.state.value.name}
                onChange={this.handleChange}
                type="text"
                id="name"
                className="form-control"
              />
            </div>

            <div className="mt-3">
              <label htmlFor="price" className="col-form-label">
                Price
              </label>
              <input
                onFocus={this.handleFocus}
                value={this.state.value.price}
                onChange={this.handleChange}
                type="text"
                id="price"
                className="form-control"
              />
            </div>
          </div>

          <div className="col-6">
            <div className="mt-3">
              <label htmlFor="image" className="col-form-label">
                Image
              </label>
              <input
                onFocus={this.handleFocus}
                value={this.state.value.image}
                onChange={this.handleChange}
                type="text"
                id="image"
                className="form-control"
              />
            </div>

            <div className="mt-3">
              <label>Product Type</label>
              <br />
              <select className="form-select w-[100%]">
                <option selected>Select</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>

            <div className="mt-3">
              <label htmlFor="desc" className="col-form-label">
                Description
              </label>
              <input
                onFocus={this.handleFocus}
                value={this.state.value.desc}
                onChange={this.handleChange}
                type="text"
                id="desc"
                className="form-control"
              />
            </div>
          </div>
          <div className="mt-4">
            <button className="btn btn-success mx-4">Đăng Ký</button>
            <button className="btn btn-success mx-4">Cập Nhật</button>
          </div>
        </div>
      </form>
    );
  }
}
