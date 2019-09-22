import * as types from './../../constants/ActionTypes';


var initialState = {
    rating : 0,
};
var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.CHECK_RATING:
            return {
                rating : action.rating,
            };
        default:
            return state;
    }
};

export default myReducer;