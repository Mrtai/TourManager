import * as types from './../constants/ActionTypes';

// tours =============================================
export const listTours = () => {
    return {
        type : types.LIST_ALL
    }
};
export const checkStar = (rating) => {
    return {
        type : types.CHECK_RATING,
        rating
    }
};
export const searchTour = (price_min, price_max) => {
    return {
        type : types.SEARCH_TOUR,
        price_min,
        price_max
    }
};
// login ==============================================
export const login = (username, password) => {
    return {
        type : types.LOGIN,
        username, 
        password
    }
};