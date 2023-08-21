import { PHONE_SHOP_TYPE } from "./phone-shop.constanst";

// action creator
// F2: rename nơi nào có sử dụng.
export const changeSanPhamChiTietCreator = (payload) => {
    return {
        type: PHONE_SHOP_TYPE.ChangeSanPhamChiTiet,
        payload,
    };
};

export const themSanPhamCreator = (payload) => {
    return {
        type: PHONE_SHOP_TYPE.AddSanPham,
        payload,
    }
}

export const xoaSanPhamCreator = (payload) => {
    return {
        type: PHONE_SHOP_TYPE.XoaSanPham,
        payload,
    }
}

export const thayDoiSoLuongSPCreator = (payload) => {
    return {
        type: PHONE_SHOP_TYPE.ThayDoiSoLuongSP,
        payload,
    }
}

export const confirmXoaSPCreator = (payload) => {
    return {
        type: PHONE_SHOP_TYPE.ConfirmXoaSP,
        payload,
    }
}

export const resetModalCreator = (payload) => {
    return {
        type: PHONE_SHOP_TYPE.ResetModal,
        payload,
    }
}