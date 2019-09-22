import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class tour extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var { tour } = this.props;
        //console.log(tour);
        return (
            <div className="col-sm col-md-6 col-lg ftco-animate fadeInUp ftco-animated">
                <div className="destination">
                    <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/destination-2.jpg)' }}>
                        <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search2" />
                        </div>
                    </a>
                    <div className="text p-3">
                        <div className="d-flex">
                            <div className="one">
                                <h3><a href="#">{tour.name}</a></h3>
                                <p className="rate">
                                    <i className="icon-star" />
                                    <i className="icon-star" />
                                    <i className="icon-star" />
                                    <i className="icon-star" />
                                    <i className="icon-star-o" />
                                    <span>{tour.rating}</span>
                                </p>
                            </div>
                            <div className="two">
                                <span className="price">{tour.price}</span>
                            </div>
                        </div>
                        <p>{tour.des}</p>
                        <p className="days"><span>{tour.time}</span></p>
                        <hr />
                        <p className="bottom-area d-flex">
                            <span><i className="icon-map-o" /> {tour.map}</span>
                            <span className="ml-auto"><Link to={"/tour/"+ tour.id}>View Tour</Link></span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default tour;