import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class tour extends Component {
    constructor(props) {
        super(props);
    }
    
    showRating = (rating) => {
        var result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<i className="icon-star" />);
        }
        for (var j = 1; j <= 5 - rating; j++) {
            result.push(<i className="icon-star-o" />);
        }
        return result;
    }
    render() {
        var { tour } =this.props;
        var image = "url(images/"+tour.image+")";
        return (
                <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
                    <div className="destination">

                        <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ background: image }}>
                            <div className="icon d-flex justify-content-center align-items-center">
                                <span className="icon-search2" />
                            </div>
                        </a>
                        <div className="text p-3">
                            <div className="d-flex">
                                <div className="one">
                                    <h3><a href="#">{tour.name}</a></h3>
                                    <p className="rate">
                                        {this.showRating(tour.rating)}
                                        <span>{tour.rating}</span>
                                    </p>
                                </div>
                                <div className="two">
                                    <span className="price">${tour.price}</span>
                                </div>
                            </div>
                            <p>{tour.des}</p>
                            <p className="days"><span>{tour.day}</span></p>
                            <hr />
                            <p className="bottom-area d-flex">
                                <span><i className="icon-map-o" /> {tour.map}</span>
                                <span className="ml-auto"><Link to={"/tour/"+ tour.id}>View Tour</Link></span>
                            </p>
                        </div>
                    </div>
                </div>
        )
    }
}
