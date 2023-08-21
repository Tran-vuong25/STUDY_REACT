import React, { Component } from "react";
import { connect } from "react-redux";
import {
  confirmXoaSPCreator,
  resetModalCreator,
  thayDoiSoLuongSPCreator,
  xoaSanPhamCreator,
} from "../../../redux/phone-shop-redux/phone-shop.action";

class GioHangRedux extends Component {
  render() {
    const { gioHang, onDeleteSp, onChangeQuality } = this.props;

    console.log("Giỏ hàng redux: ", this.props);
    return (
      <div>
        <h1>Giỏ hàng</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Giá</th>
              <th>Hình ảnh</th>
              <th>Số lượng</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {gioHang.map((sp) => {
              return (
                <tr>
                  <td>{sp.maSP}</td>
                  <td>{sp.giaBan}</td>
                  <td>
                    <img style={{ width: 100 }} src={sp.hinhAnh} alt="" />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.dispatch(
                          thayDoiSoLuongSPCreator({
                            quality: 1,
                            maSP: sp.maSP,
                          })
                        );
                        // onChangeQuality({
                        //   quality: 1,
                        //   maSP: sp.maSP,
                        // });
                      }}
                      className="btn btn-success"
                    >
                      +
                    </button>
                    <span
                      style={{ fontSize: 30, fontWeight: "bold", padding: 10 }}
                    >
                      {sp.soLuong}
                    </span>
                    <button
                      onClick={() => {
                        this.props.dispatch(
                          thayDoiSoLuongSPCreator({
                            quality: -1,
                            maSP: sp.maSP,
                          })
                        );

                        this.props.dispatch(
                          confirmXoaSPCreator({
                            status: "",
                            tiltle: "Xóa sản phẩm",
                            content:
                              "Bạn có chắc chắn muốn xóa sản phẩm hay không?",
                            onOK: () => {
                              this.props.dispatch(xoaSanPhamCreator(sp.maSP));
                              this.props.dispatch(resetModalCreator());
                            },
                            onCancle: () => {
                              // đóng modal => xét lại state của modal về null
                              this.props.dispatch(resetModalCreator());
                            },
                          })
                        );

                        // onChangeQuality({
                        //   quality: -1,
                        //   maSP: sp.maSP,
                        // });
                      }}
                      className="btn btn-danger"
                    >
                      -
                    </button>
                  </td>
                  <td>{sp.soLuong * sp.giaBan}</td>
                  <td>
                    <button
                      onClick={() => {
                        // dispatch trục tiếp.

                        // this.props.dispatch(xoaSanPhamCreator(sp.maSP));

                        this.props.dispatch(
                          confirmXoaSPCreator({
                            status: "",
                            tiltle: "Xóa sản phẩm",
                            content:
                              "Bạn có chắc chắn muốn xóa sản phẩm hay không?",
                            onOK: () => {
                              this.props.dispatch(xoaSanPhamCreator(sp.maSP));
                              this.props.dispatch(resetModalCreator());
                            },
                            onCancle: () => {
                              // đóng modal => xét lại state của modal về null
                              this.props.dispatch(resetModalCreator());
                            },
                          })
                        );

                        // onDeleteSp(sp.maSP);
                      }}
                      className="btn btn-warning"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapSateToProps = (rootReducer) => {
  return {
    gioHang: rootReducer.phoneShopReducer.gioHang,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return{
//   }
// }

export default connect(mapSateToProps)(GioHangRedux);
