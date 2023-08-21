const carStateDefault = "/images/cars/black-car.jpg";

export const carReducer = (state = carStateDefault, action) => {
    switch (action.type) {
        case "change-img": {
            state = action.payload;
            return state;
        }
        default:
            return state;
    }
};
