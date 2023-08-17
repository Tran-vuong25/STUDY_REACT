import { createStore } from "redux";
import { combineReducers } from "redux";

// @reduxjs/toolkit

// { count: 52, isLogin: false }: set up state mặc định
// * ---- reducer
// 1. Xử lý logic
// 2. Lưu trữ state
const countStateDefault = 0;

const carStateDefault = "/images/cars/black-car.jpg";

const rootReducer = combineReducers({
    numberReducer: (state = { count: 52, isLogin: false, gioHang: [], sanPham: {} }, action) => {
        // Đẩy logic lên trên này xử lý
        return state;
    },

    countReducer: (state = countStateDefault, action) => {
        console.log(action)
        // if (action.type === "tang-count") {
        //     state.count += 1
        //     //* cơ chế re-render của redux nó sẽ so sánh giá trị cũ và giá trị mới.
        //     //  - khác nhau sẽ re-render
        //     //  - giống nhau không re-render

        //     // đối với object hay array khi return phải clone ra địa chỉ mới 

        //     return {...state} //giá cũ === giá trị mới. 2 thằng đang có địa chỉ giống nhau => không re-render
        // }

        switch (action.type) {
            case "tang-count": {
                state.count += 1
                return { ...state }
            };

            case "giam-count": {
                state.count += -1
                return { ...state }
            }

            default:
                return state;
        }
        // return state
    },
    // !Chú ý: nên tạo một biến lưu trữ state default bên ngoài.
    carReducer: (state = carStateDefault, action) => {
        switch (action.type) {
            case "change-img": {
                state = action.payload;
                return state;
            }
            default:
                return state;
        }
    }
});

// reduxStore. Taaoj trung tất cả state của ứng dụng.
export const store = createStore(
    rootReducer,
    // extension cho redux
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);