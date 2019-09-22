import * as types from './../../constants/ActionTypes';

var initialState={
    username:'',
    password : '',
    name : ''
};
var data = JSON.parse(localStorage.getItem('user'));
if (data) {
    var initialState = {
        username: data[0].username,
        password: data[0].password,
        name : data[0].name
    };
}

//console.log(initialState);

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                username: action.username,
                password: action.password,
                name : action.name
            };
        default:
            return state;
    }
};

export default myReducer;