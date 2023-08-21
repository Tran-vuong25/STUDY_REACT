import React, { Children, Component } from "react";
import GioHangRedux from "./gio-hang-redux";
import XemChiTietRedux from "./xem-chi-tiet-redux";
import ComponentPhoneRedux from "./phone-item-redux";
import { connect } from "react-redux";
import { phoneShopReducer } from "../../../redux/phone-shop-redux/phone-shop.reducer";
import { PHONE_SHOP_TYPE } from "../../../redux/phone-shop-redux/phone-shop.constanst";
import {
  changeSanPhamChiTietCreator,
  themSanPhamCreator,
} from "../../../redux/phone-shop-redux/phone-shop.action";
import Modal from "./component/modal";

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

// component: logic + UI (Không nên)

// component chỉ để show UI
// redux thì xử lý logic

class PhoneShopRedux extends Component {
  //? nếu như function có từ 2 -> 3 tham số trở lên thì nên truyền dưới dạng Object
  handleChangeQuality = ({ quality, maSP }) => {
    console.log(quality, maSP);

    // * 1. Tìm sản phẩm có maSP trong giỏ hàng
    // Nếu có thì tăng giảm
    // Nếu không thì thoát khỏi function => return
    // * 2.Nếu như số lượng của sản phẩm đang là 1 và người dùng nhất button (-)
    // Thì xóa sản phẩm ra khỏi giỏ hàng
    // Giữ nguyên

    const sanPham = this.state.gioHang.find((item) => item.maSP === maSP);

    if (!sanPham) {
      return;
    }

    if (sanPham.soLuong === 1 && quality === -1) {
      this.handleDeleteSp(maSP); // Thực hiện xong
      // Thoát khỏi function không thực hiện những dòng lệnh phía dưới nữa
      return;
    }
    sanPham.soLuong += quality;

    console.log("Giỏ hàng sau khi đã thay đổi: ", this.state.gioHang);

    this.setState({
      gioHang: this.state.gioHang,
    });

    // if (sanPham) {
    //   sanPham.soLuong += quality;
    // } else {
    //   return;
    // }

    // if (quality === 1) {
    //   //Tăng
    //   {sp.soLuong}+1;
    // }

    // if (quality === -1) {
    //   // Giảm
    //   {sp.soLuong}-1;
    // }
  };

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div>
          {this.props.modal ? (
            <Modal
              // title={this.props.modal.title}
              // content={this.props.modal.content}
              modal={this.props.modal}
            />
          ) : null}
          ;
        </div>
        <div>
          <GioHangRedux />
        </div>
        <div className="row">
          {listPhone.map((item) => {
            return (
              <div className="col-4">
                <ComponentPhoneRedux
                  onChangeSanPham={this.props.handleChangeSanPhamChiTiet}
                  onAddSanPham={this.props.handleAddSanPham}
                  //   img={item.hinhAnh}
                  //   tenSPham={item.tenSP}
                  //   gia={item.giaBan}
                  phone={item}
                  key={item.maSP}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-2">
          <XemChiTietRedux
            // name={item.tenSP}
            // img={item.img}
            // screen={item.manHinh}
            // heDieuHanh={item.heDieuHanh}
            // cameraTruoc={item.cameraTruoc}
            // cameraSau={item.cameraSau}
            // ram={item.ram}
            // rom={item.rom}
            // price={item.giaBan}
            sanPham={this.props.sanPhamChiTiet}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    sanPhamChiTiet: rootReducer.phoneShopReducer.spChiTiet,
    gioHang: rootReducer.phoneShopReducer.gioHang,
    modal: rootReducer.phoneShopReducer.modal,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    // handleChangeSanPhamChiTiet: (...rest) => {
    //   console.log(rest)
    // },
    handleChangeSanPhamChiTiet: (sanPham) => {
      // const action = ChangeSanPhamChiTietCreator(sanPham);
      // console.log("----------");
      // console.log(action);
      // console.log("----------");
      // dispatch(action);

      dispatch(changeSanPhamChiTietCreator(sanPham));

      //   dispatch({
      //     type: PHONE_SHOP_TYPE.ChangeSanPhamChiTiet,
      //     payload: sanPham
      //   })
    },
    handleAddSanPham: (sanPham) => {
      dispatch(themSanPhamCreator(sanPham));
      // console.log("handleAddSanPham");
    },
  };
};

// !PhoneShopRedux không phải là một component dùng để tái sử dụng
// setSate tại đây:
export default connect(mapStateToProps, mapDispatchToProp)(PhoneShopRedux);
