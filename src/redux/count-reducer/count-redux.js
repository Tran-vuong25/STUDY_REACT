const countStateDefault = {count: 0};

export const countReducer= (state = countStateDefault, action) => {
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
};