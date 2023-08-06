import React, { Component } from "react";

export default class CardCar extends Component {
  render() {
    // console.log(this.props); //!Show tất cả các giá trị component truyền thống cho component con
    // !Chú ý: không dùng tên key làm props của component.
    // *this.props.name: để lấy giá trị từ ListCard truyền qua

    return (
      <div>
        <div className="card" style={{ width: "15rem" }}>
          <img src={this.props.hinhAnh} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">{this.props.gia}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
