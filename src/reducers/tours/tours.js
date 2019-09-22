import * as types from './../../constants/ActionTypes'
//var data = JSON.parse(localStorage.getItem('tours'));
var initialState = [
    {
        id : 1,
        image : 'destination-1.jpg',
        name : 'Paris, Italy1',
        rating : 1,
        price : 100,
        des : 'Far far away, behind the word mountains, far from the countries',
        day : '2 days 3 nights',
        map :'San Franciso, CA',
        match : '/tour/1',
    },
    {
        id : 2,
        image : 'destination-2.jpg',
        name : 'Paris, Italy2',
        rating : 2,
        price : 200,
        des : 'Far far away, behind the word mountains, far from the countries',
        day : '2 days 3 nights',
        map :'San Franciso, CA',
        match : '/tour/2',
    },
    {
        id : 3,
        image : 'destination-3.jpg',
        name : 'Paris, Italy3',
        rating : 3,
        price : 300,
        des : 'Far far away, behind the word mountains, far from the countries',
        day : '2 days 3 nights',
        map :'San Franciso, CA',
        match : '/tour/3',
    },
    {
        id : 4,
        image : 'destination-4.jpg',
        name : 'Paris, Italy4',
        rating : 4,
        price : 400,
        des : 'Far far away, behind the word mountains, far from the countries',
        day : '2 days 3 nights',
        map :'San Franciso, CA',
        match : '/tour/4',
    },
    {
        id : 5,
        image : 'destination-5.jpg',
        name : 'Paris, Italy5',
        rating : 4,
        price : 500,
        des : 'Far far away, behind the word mountains, far from the countries',
        day : '2 days 3 nights',
        map :'San Franciso, CA',
        match : '/tour/5',
    },
    {
        id : 6,
        image : 'destination-6.jpg',
        name : 'Paris, Italy6',
        rating : 5,
        price : 200,
        des : 'Far far away, behind the word mountains, far from the countries',
        day : '2 days 3 nights',
        map :'San Franciso, CA',
        match : '/tour/6',
    },
    {
        id: 7,
        name: 'Paris, Italy 7',
        image: 'destination-4.jpg',
        rating: '4',
        price: '$200',
        des: 'Far far away, behind the word mountains, far from the countries',
        time: '2 days 3 nights',
        map: 'San Franciso, CA',
        type: 'Discover',
      },
      {
        id: 8,
        name: 'Paris, Italy 8',
        image: 'destination-4.jpg',
        rating: '4',
        price: '$200',
        des: 'Far far away, behind the word mountains, far from the countries',
        time: '2 days 3 nights',
        map: 'San Franciso, CA',
        type: 'Discover',
      },
      {
        id: 9,
        name: 'Paris, Italy 9',
        image: 'destination-4.jpg',
        rating: '4',
        price: '$200',
        des: 'Far far away, behind the word mountains, far from the countries',
        time: '2 days 3 nights',
        map: 'San Franciso, CA',
        type: 'Discover',
      },
      {
        id: 10,
        name: 'Paris, Italy 10',
        image: 'destination-4.jpg',
        rating: '4',
        price: '$200',
        des: 'Far far away, behind the word mountains, far from the countries',
        time: '2 days 3 nights',
        map: 'San Franciso, CA',
        type: 'Discover',
      },
];
//var initialState = data ? data :[];

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.LIST_ALL:
            return state;
        default:
            return state;
    }
};

export default myReducer;