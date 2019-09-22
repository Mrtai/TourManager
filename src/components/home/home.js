import React, { Component } from 'react';

import Banner from '../banner';
import Banner2 from '../banner2';
import Banner3 from '../banner3';

import Tours from '../toptour/tours';
import Content4 from '../hotels/hotels';
import Restaurants from '../restaurant/restaurants';

export default class home extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Tours/>
                <Banner2/>
                <Content4/>
                <Banner3/>
                <Restaurants/>
            </div>
        )
    }
}
