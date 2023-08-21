import { createStore } from "redux";
import { combineReducers } from "redux";
import { numberReducer } from "./number-reducer/number-redux";
import { countReducer } from "./count-reducer/count-redux";
import { carReducer } from "./car-reducer/car-reducer";
import { phoneShopReducer } from "./phone-shop-redux/phone-shop.reducer"

// @reduxjs/toolkit

// { count: 52, isLogin: false }: set up state mặc định
// * ---- reducer
// 1. Xử lý logic
// 2. Lưu trữ state
const rootReducer = combineReducers({
    numberReducer: numberReducer,

    countReducer: countReducer,
    // !Chú ý: nên tạo một biến lưu trữ state default bên ngoài.
    carReducer: carReducer,

    phoneShopReducer,
});

// reduxStore. Taaoj trung tất cả state của ứng dụng.
export const store = createStore(
    rootReducer,
    // extension cho redux
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);