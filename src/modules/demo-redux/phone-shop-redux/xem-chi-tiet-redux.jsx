import React, { Component } from 'react'

export default class XemChiTietRedux extends Component {
  render() {
    const {sanPham} = this.props;

    console.log(sanPham);

    return (
      <div className='row'>
        <div className='col-6'>
            <h2>Tên sản phẩm: {sanPham.tenSP}
                </h2>
            <img style={{width: '100%'}}
            src={sanPham.hinhAnh}
            />
        </div>
        <div className='col-6'>
            <h2>Thông số kỹ thuật</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <td>Màn hình: </td>
                        <td>{sanPham.manHinh}</td>
                    </tr>
                    <tr>
                        <td>Hệ Điều Hành: </td>
                        <td>{sanPham.heDieuHanh}</td>
                    </tr>
                    <tr>
                        <td>Camera trước: </td>
                        <td>{sanPham.cameraTruoc}</td>
                    </tr>
                    <tr>
                        <td>Camera sau: </td>
                        <td>{sanPham.cameraSau}</td>
                    </tr>
                    <tr>
                        <td>Ram: </td>
                        <td>{sanPham.ram}</td>
                    </tr>
                    <tr>
                        <td>Rom: </td>
                        <td>{sanPham.rom}</td>
                    </tr>
                    <tr>
                        <td>Giá bán: </td>
                        <td>{sanPham.giaBan}</td>
                    </tr>
                </thead>
            </table>
        </div>
      </div>
    )
  }
}
