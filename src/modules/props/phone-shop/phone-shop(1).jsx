import React, { Component } from "react";
import XemChiTiet from "./xem-chi-tiet";
import GioHang from "./gio-hang";

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
    hinhAnh: "/images/phones/sp_blackberry.png",
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
    hinhAnh: "/images/phones/sp_iphoneX.png",
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
    hinhAnh: "/images/phones/sp_note7.png",
  },
];
export default class PhoneShopV1 extends Component {
  state = {
    spChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "/images/phones/sp_blackberry.png",
    },

    gioHang: [],
  };

  handleChangeSanPhamChiTiet = (sp) => {
    this.setState({
      spChiTiet: sp,
    });
  };

  handleAddSanPham = (sp) => {
    const indexSp = this.state.gioHang.findIndex(
      (item) => sp.maSP === item.maSP
    );

    let newGioHang = [];
    // -1: chưa có trong giỏ hàng
    if (indexSp === -1) {
      sp.soLuong = 1;
      newGioHang = [...this.state.gioHang, sp];
    } else {
      sp.soLuong += 1;

      // 2 | 1 | 3
      // xóa đi '1' phần tử | có 'indexSp' | và thêm 'sp' vào tại vị trí đó
      this.state.gioHang.splice(indexSp, 1, sp); //splice thay đổi mảng gốc
      // toSplice => không thay đổi bên bảng gốc.

      // *firefox: chưa support
      // newGioHang = this.state.gioHang.toSplice(indexSp, 1, sp);

      newGioHang = this.state.gioHang;
    }

    this.setState({
      gioHang: newGioHang,
    });
  };

  handleDeleteSp = (maSP) => {
    // Lọc ra lấy những phần tử mà chúng không muốn xóa
    // Xóa đi phần từ có maSP === newGioHang

    // window.confirm => return về true/false
    if (window.confirm("Bạn muốn xóa sản phẩm này?")) {
      const newGioHang = this.state.gioHang.filter(
        (item) => item.maSP !== maSP
      );

      this.setState({ gioHang: newGioHang });
    }
  };

  //? nếu như function có từ 2 -> 3 tham số trở lên thì nên truyền dưới dạng Object
  handleChangeQuality = ({ quality, maSP }) => {
    console.log(quality, maSP)

    if (quality === 1) {
      //Tăng
      {sp.soLuong} + 1
    }

    if (quality === -1) {
      // Giảm
      {sp.soLuong} - 1
    }
  };

  render() {
    return (
      <div className="container">
        <div>
          <GioHang
            onDeleteSp={this.handleDeleteSp}
            gioHang={this.state.gioHang}
            onChangeQuality={this.handleChangeQuality}
          />
        </div>
        <div className="d-flex gap-2">
          {listPhone.map((item) => {
            return (
              <ComponentPhone
                onChangeSanPham={this.handleChangeSanPhamChiTiet}
                onAddSanPham={this.handleAddSanPham}
                //   img={item.hinhAnh}
                //   tenSPham={item.tenSP}
                //   gia={item.giaBan}
                phone={item}
                key={item.maSP}
              />
            );
          })}
        </div>
        <div className="mt-2">
          <XemChiTiet
            // name={item.tenSP}
            // img={item.img}
            // screen={item.manHinh}
            // heDieuHanh={item.heDieuHanh}
            // cameraTruoc={item.cameraTruoc}
            // cameraSau={item.cameraSau}
            // ram={item.ram}
            // rom={item.rom}
            // price={item.giaBan}
            sanPham={this.state.spChiTiet}
          />
        </div>
      </div>
    );
  }
}

class ComponentPhone extends Component {
  render() {
    // const {onChangeSanPham, item} = this.props;
    const item = this.props.phone;
    const { onChangeSanPham, onAddSanPham } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={item.hinhAnh}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{item.tenSP}</h5>
          <p className="card-text">{item.giaBan}</p>
          <div className="d-flex gap-1">
            <button
              onClick={() => {
                // 1. chạy hàm này
                onChangeSanPham(item); //2. gọi onChangeSanPham

                // 3. onChangeSanPham gọi thì sẽ gọi handleChangeSanPhamChiTiet
              }}
              type="button"
              className="btn btn-primary"
            >
              Xem chi tiết
            </button>
            <button
              onClick={() => {
                onAddSanPham(item);
              }}
              type="button"
              className="btn btn-primary"
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
