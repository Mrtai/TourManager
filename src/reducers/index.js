import { combineReducers } from 'redux';
import tours from './tours/tours';
import rating from './tours/rating';
import searchTour from './tours/searchTour';
import users from './login/login';
import usersignup from './signup/signup'

const myReducer = combineReducers({
    tours,
    rating,
    searchTour,
    users,
    usersignup
});

export default myReducer;