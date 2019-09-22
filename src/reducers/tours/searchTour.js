import * as types from './../../constants/ActionTypes';


var initialState = {
    price_min : 0,
    price_max : 0,
}

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.SEARCH_TOUR:
            return {
                price_min : action.price_min,
                price_max : action.price_max
            }
        default:
            return state;
    }
};

export default myReducer;