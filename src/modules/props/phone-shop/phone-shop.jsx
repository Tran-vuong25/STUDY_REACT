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
    giaBan: 5700000,
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
    giaBan: 7600000,
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
    giaBan: 27000000,
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
    giaBan: 27000000,
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
    giaBan: 27000000,
    hinhAnh: "./images/phones/vsphone.jpg",
  },
];

export default class PhoneShop extends Component {
  render() {
    //   console.log(item.hinhAnh)
    return (
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
