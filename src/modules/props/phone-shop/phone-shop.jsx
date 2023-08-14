import React, { Component } from "react";

// https://drive.google.com/drive/folders/1g15gVNroRB6e2vOJBkuMwgCg9byVcbzt?fbclid=IwAR1e8yMq9g4ivYYQvHn9tn-5mr6oNvgrMi8IdjL441ZKyLfiLFzbC5hdJX4

const listPhone = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: "5.700.000",
    hinhAnh: "./images/phones/sp_blackberry.png",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: "7.600.000",
    hinhAnh: "./images/phones/sp_iphoneX.png",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: "27.000.000",
    hinhAnh: "./images/phones/sp_note7.png",
  },
  {
    maSP: 4,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: "27.000.000",
    hinhAnh: "./images/phones/sp_vivo850.png",
  },
  {
    maSP: 5,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: "27.000.000",
    hinhAnh: "./images/phones/vsphone.jpg",
  },
];

export default class PhoneShop extends Component {
  state = {
    count: 0,
  };
  // state muốn xét lại đặt ở đâu thì gọi method this.setState ở tại component đó.

  // binding lên giao diện, và xử lý xét lại state

  countUp = () => {
    this.setState({ count: this.state.count + 1 });
  };
  countDown = () => {
    this.setState({ count: this.state.count - 1 });
  };

  changeCount = (value) => {
    this.setState({ count: this.state.count + value });
  };

  render() {
    //   console.log(item.hinhAnh)
    return (
      <>
        <div className="container d-flex gap-2">
          {listPhone.map((item) => {
            return (
              <ComponentPhone
                //   img={item.hinhAnh}
                //   tenSPham={item.tenSP}
                //   gia={item.giaBan}
                phone={item}
                key={item.maSP}
              />
            );
          })}

          {/* <H1>[children]</H1> */}
          {/* <H1>Trung tâm Cyber Soft</H1> */}
          {/* eslint- */}

          {/* <Item title="Cyber Soft" /> */}
        </div>
        {/* Mỗi component Counter được sử dụng nó sẽ có sate riêng biệt */}
        <Counter
          changeCount={this.changeCount}
          countUp={this.countUp}
          countDown={this.countDown}
          count={this.state.count}
        />
        <br />
        {/* <Counter/> */}
        <Show
          changeCount={this.changeCount}
          countUp={this.countUp}
          countDown={this.countDown}
          count={this.state.count}
        />
      </>
    );
  }
}

/**
 * * props & state
 * state: là trạng thái của một Component
 *        [TRONG COMPONENT] Có thể set lại giá trị. (this.state)
 * props: giá trị truyền từ component cha -> con, giúp giao tiếp giữa 2 component với nhau.
 *        [TRONG COMPONENT] Không thể set lại giá trị. giá trị props được truyền từ bên ngoài vào.
 * 00:26:27
 */

class Show extends Component {
  render() {
    return (
      <>
        <H1>{this.props.count}</H1>
      </>
    );
  }
}

class Counter extends Component {
  // countUp = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };
  // countDown = () => {
  //   this.setState({ count: this.state.count - 1 });
  // };
  render() {
    return (
      <>
        <h1>{this.props.count}</h1>
        <button
          onClick={
            this.props.countUp
            // this.props.changeCount(1)
          }
          className="btn btn-success"
        >
          +
        </button>
        <button
          onClick={
            this.props.countDown
            // this.props.changeCount(-1)
          }
          className="btn btn-danger"
        >
          -
        </button>
      </>
    );
  }
}

class H1 extends Component {
  render() {
    // props children là một props đặt biệt nằm giữa thẻ đóng/mở của component
    return (
      <h1
        style={{
          fontSize: "50px",
          color: "red",
        }}
      >
        {this.props.children}
      </h1>
    );
  }
}

class Item extends Component {
  render() {
    console.log(this.props.title);
    return (
      <div>
        <h1>
          item
          <br />
          {this.props.title}
        </h1>
      </div>
    );
  }
}

class ComponentPhone extends Component {
  render() {
    const item = this.props.phone;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={item.hinhAnh} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.tenSP}</h5>
          <p className="card-text">{item.giaBan}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
