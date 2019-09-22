import React from 'react';
import Home from './components/home/home';
import About from './components/about/about';
import Tours from './components/tour/tours';
import Book from './components/booknow/book';
import DetailTour from './components/tour/detailTour';

const routes=[
    {
        path :'/',
        exact : true,
        main :() => <Home/>
    },
    {
        path :'/about',
        exact : false,
        main :() => <About/>
    },
    {
        path :'/tours',
        exact : false,
        main :({match}) => <Tours match={match}/>
    },
    {
        path :'/tour/:id/book',
        exact : false,
        main :({match}) => <Book match={match}/>
    },
    {
        path :'/tour/:id',
        exact : false,
        main :({match}) => <DetailTour match={match}/>
    },
]
export default routes;