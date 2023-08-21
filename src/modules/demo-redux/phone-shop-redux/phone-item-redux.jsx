import {Component} from "react";

//! component tái sử dụng
// không nên connect trực tiếp, lấy state trực tiếp

export default class ComponentPhoneRedux extends Component {
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
  
