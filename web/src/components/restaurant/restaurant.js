import React, { Component } from 'react';
class Restaurant extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var { restaurant } = this.props;
        
        return (

            <div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
                <div className="destination">
                    <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/restaurant-1.jpg)' }}>
                        <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search2" />
                        </div>
                    </a>
                    <div className="text p-3">
                        <h3><a href="#">{restaurant.name}</a></h3>
                        <p className="rate">
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star" />
                            <i className="icon-star-o" />
                            <span>{restaurant.rating}</span>
                        </p>
                        <p>{restaurant.des}</p>
                        <hr />
                        <p className="bottom-area d-flex">
                            <span><i className="icon-map-o" /> {restaurant.map}</span>
                            <span className="ml-auto"><a href="#">Discover</a></span>
                        </p>
                    </div>
                </div>
            </div>
           
        );
    }
}

export default Restaurant;