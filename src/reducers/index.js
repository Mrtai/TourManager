import { combineReducers } from 'redux';
import tours from './tours/tours';
import rating from './tours/rating';
import searchTour from './tours/searchTour';
import users from './login/login';

const myReducer = combineReducers({
    tours,
    rating,
    searchTour,
    users
});

export default myReducer;