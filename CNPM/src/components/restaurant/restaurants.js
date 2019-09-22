import React, { Component } from 'react';
import Restaurant from './restaurant';
class Restaurants extends Component {
    constructor(props) {
        super(props);
        this.state = [
            {
                id: 1,
                name: 'Luxury Restaurant',
                image: '',
                rating: 5,
                des: 'Far far away, behind the word mountains, far from the countries',
                map: ' San Franciso, CA',
            },
            {
                id: 2,
                name: 'Luxury Restaurant',
                image: '',
                rating: 5,
                des: 'Far far away, behind the word mountains, far from the countries',
                map: ' San Franciso, CA',
            },
            {
                id: 3,
                name: 'Luxury Restaurant',
                image: '',
                rating: 5,
                des: 'Far far away, behind the word mountains, far from the countries',
                map: ' San Franciso, CA',
            },
            {
                id: 4,
                name: 'Luxury Restaurant',
                image: '',
                rating: 5,
                des: 'Far far away, behind the word mountains, far from the countries',
                map: ' San Franciso, CA',
            },
            {
                id: 5,
                name: 'Luxury Restaurant',
                image: '',
                rating: 5,
                des: 'Far far away, behind the word mountains, far from the countries',
                map: ' San Franciso, CA',
            },
            {
                id: 6,
                name: 'Luxury Restaurant',
                image: '',
                rating: 5,
                des: 'Far far away, behind the word mountains, far from the countries',
                map: ' San Franciso, CA',
            },
            {
                id: 7,
                name: 'Luxury Restaurant',
                image: '',
                rating: 5,
                des: 'Far far away, behind the word mountains, far from the countries',
                map: ' San Franciso, CA',
            },
            {
                id: 8,
                name: 'Luxury Restaurant',
                image: '',
                rating: 5,
                des: 'Far far away, behind the word mountains, far from the countries',
                map: ' San Franciso, CA',
            }
        ];
    }
    render() {
        var restaurants = this.state.map((restaurant, index) => {
            return (
                <Restaurant
                    restaurant={restaurant}
                    key={index}
                />
            );
        });
        return (
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-start mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate fadeInUp ftco-animated">
                            <span className="subheading">Special Offers</span>
                            <h2 className="mb-4"><strong>Popular</strong> Restaurants</h2>
                        </div>
                    </div>
                    <div className="row">
                        {restaurants}
                    </div>
                </div>
            </section>
        );
    }
}

export default Restaurants;