import * as types from './../../constants/ActionTypes';

var initialState={
    username:'',
    password : ''
};
var data = JSON.parse(localStorage.getItem('user'));
if (data) {
    var initialState = {
        username: data[0].username,
        password: data[0].password
    };
}

//console.log(initialState);

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                username: action.username,
                password: action.password
            };
        default:
            return state;
    }
};

export default myReducer;