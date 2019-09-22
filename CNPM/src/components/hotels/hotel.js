import React, { Component } from 'react';
//sau nay minh do state xong .map no ra la n co cả mo
class hotel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var { hotel } = this.props;
        return (

            <div className="col-sm col-md-6 col-lg ftco-animate fadeInUp ftco-animated" >
                <div className="destination">
                    <a href="#" className="img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/hotel-1.jpg)' }}>
                        <div className="icon d-flex justify-content-center align-items-center">
                            <span className="icon-search2" />
                        </div>
                    </a>
                    <div className="text p-3">
                        <div className="d-flex">
                            <div className="one">
                                <h3><a href="#">{ hotel.name }</a></h3>
                                <p className="rate">
                                    <i className="icon-star" />
                                    <i className="icon-star" />
                                    <i className="icon-star" />
                                    <i className="icon-star" />
                                    <i className="icon-star-o" />
                                    <span>{ hotel.rating}</span>
                                </p>
                            </div>
                            <div className="two">
                                <span className="price per-price">${ hotel.price }<br /><small>/night</small></span>
                            </div>
                        </div>
                        <p>{ hotel.des }</p>
                        <hr />
                        <p className="bottom-area d-flex">
                            <span><i className="icon-map-o" />{ hotel.map }</span>
                            <span className="ml-auto"><a href="#">Book Now</a></span>
                        </p>
                    </div>
                </div>
            </div>

        );
    }
}

export default hotel;