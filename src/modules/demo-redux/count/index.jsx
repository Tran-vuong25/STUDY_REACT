import React, { Component } from "react";

// Kết nối component với redux
import { connect } from "react-redux";

class CountRedux extends Component {
  render() {
    console.log(this.props); // {tenProps: giaTriStateLayTuRedux}
    return (
      <div className="container">
        <h1>{this.props.count}</h1>
        <div>
          <button
            onClick={this.props.tangCount}
            className="btn btn-success m-2"
          >
            +
          </button>
          <button onClick={this.props.giamCount} className="btn btn-danger">
            -
          </button>
        </div>
      </div>
    );
  }
}

// Chuyển state từ redux về Component
const mapStateToProps = (rootReducer) => {
  return {
    // tenProps: giaTriStateLayTuRedux
    count: rootReducer.countReducer.count,
  };
};

// 2. setState
const mapDispatchToProp = (dispatch) => {
  return {
    // tenProps: giaTri
    tangCount: () => {
      console.log("tangCount");
      // đưa thông điệp lên redux

      //* 1. action
      const action = {
        type: "tang-count",
        payload: 1,
      };

      //* 2. dispatch để gửi action lên reducer của redux
      // - tất cả reducer trên redux đều nhận được thông điệp gửi lên.
      //   - mong muốn setState tại reducer nào thì vào reducer đó xử lý
      dispatch(action);
    },
    giamCount: () => {
      console.log("giamCount");

      dispatch({
        type: "giam-count",
      });
    },
  };
};

// lên redux lấy state về.
// cách kết nối redux với component
export default connect(mapStateToProps, mapDispatchToProp)(CountRedux); //High Order component (HOC)
// trả về 1 component + redux

// * 1. set up reducer => state default ===== default params
// * 2. Lấy sate từ trên redux về
//      - connect redux với component của mình. import connect từ react-redux
//      - Khai báo function mapStateToProps nhiệm vụ để Chuyển state từ redux về Component. Truyền vào hàm conect. Vị trí tham số thứ nhất
//      - mapstatetoprops : chuyen state tu redux den component
//          - khi thay đổi trong redux thì cập nhật lại cho component đó
// * 3. set state, cập nhật lại state cho redux
//      - connect redux với component của mình. import connect từ react-redux
//      - Khai báo function mapDispatchToProp : nhiệm vụ gửi một thông điệp (dispatch action) tới redux để update state. Vị trí tham số thử 2

// ! vs component CHỈ có setState KHÔNG có getState
// conect(null, mapDispatchToProp)([--COMPONENT--])

// ! vs component KHÔNG có setState CHỈ có getState
// conect(mapStateToProps, [--Không truyền | null--])([COMPONENT])([--COMPONENT--])
