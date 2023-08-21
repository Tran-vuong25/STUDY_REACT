import { PHONE_SHOP_TYPE } from "./phone-shop.constanst"

const STATE_DEFAULT = {
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

    //* modal null | object
    // null thì không hiển thị modal
    // object thì mới show modal lên
    modal: null,
    // {
    //     status: '',
    //     tiltle: 'Xóa sản phẩm',
    //     content: 'Bạn có chắc chắn muốn xóa sản phẩm hay không?',
    // onOK: () => { },
    // onCancel: () => {},
    // }
};

export const phoneShopReducer = (state = STATE_DEFAULT, action) => {
    switch (action.type) {
        case PHONE_SHOP_TYPE.ChangeSanPhamChiTiet:
            state.spChiTiet = action.payload;
            return { ...state };


        case PHONE_SHOP_TYPE.AddSanPham:
            {
                // TODO
                const sp = action.payload;

                // TODO
                const indexSp = state.gioHang.findIndex(
                    (item) => sp.maSP === item.maSP
                );

                let newGioHang = [];
                // -1: chưa có trong giỏ hàng
                if (indexSp === -1) {
                    sp.soLuong = 1;

                    // TODO
                    newGioHang = [...state.gioHang, sp];
                } else {
                    sp.soLuong += 1;

                    // TODO
                    state.gioHang.splice(indexSp, 1, sp); //splice thay đổi mảng gốc

                    // TODO
                    newGioHang = [...state.gioHang];
                }


                state.gioHang = newGioHang;
                // gioHang cùng địa chỉ, cùng giá trị
                // cùng giá trị thì redux sẽ không render lại
                return { ...state };
            }

        case PHONE_SHOP_TYPE.XoaSanPham: {
            {
                // Lọc ra lấy những phần tử mà chúng không muốn xóa
                // Xóa đi phần từ có maSP === newGioHang

                // window.confirm => return về true/false
                // if (window.confirm("Bạn muốn xóa sản phẩm này?")) {
                //     // TODO
                //     const newGioHang = state.gioHang.filter(
                //         // TODO
                //         (item) => item.maSP !== action.payload
                //     );

                //     // TODO
                //     state.gioHang = newGioHang;
                // }

                const newGioHang = state.gioHang.filter(
                    (item) => item.maSP !== action.payload
                );

                // TODO
                state.gioHang = newGioHang;

                return { ...state };
            }
        }

        case PHONE_SHOP_TYPE.ThayDoiSoLuongSP: {
            {
                const { quality, maSP } = action.payload;
                const sanPham = state.gioHang.find((item) => item.maSP === maSP);

                if (!sanPham) {
                    return state;
                }

                // Xóa sản phẩm
                if (sanPham.soLuong === 1 && quality === -1) {
                    const newGioHang = state.gioHang.filter((i) => i.maSP !== maSP)

                    state.gioHang = newGioHang

                    return { ...state };
                }
                // Tăng sản phẩm
                sanPham.soLuong += quality;
                // tại dòng này. thì gioHang đang cùng địa chỉ => không render lại

                // Tạo ra newGioHang clone state.giaHang
                const newGioHang = [...state.gioHang];

                // Sau khi clone xong thì gắn lại cho state.gioHang
                state.gioHang = newGioHang

                // Cách 2:
                // state.gioHang = [...state.gioHang]

                return { ...state };
            }

        };
        case PHONE_SHOP_TYPE.ConfirmXoaSP: {
            state.modal = action.payload;
            return { ...state }
        };

        case PHONE_SHOP_TYPE.ResetModal: {
            state.modal = null;
            return { ...state } // redux phân biệt được state cũ và state mới để cập nhật lại state => state được dùng chỗ nào thì react sẽ tự động render để cập nhật state mới nhất 
        }

        default:
            return state;
    }
};