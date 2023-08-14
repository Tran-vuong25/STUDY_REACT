import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    const { gioHang, onDeleteSp, onChangeQuality } = this.props;
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
                        onChangeQuality({
                          quality: 1,
                          maSP: sp.maSP,
                        });
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
                        onChangeQuality({
                          quality: -1,
                          maSP: sp.maSP,
                        });
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
                        onDeleteSp(sp.maSP);
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
