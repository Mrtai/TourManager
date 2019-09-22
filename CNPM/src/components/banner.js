import React, { Component } from 'react';

class Banner extends Component {

    render() {
        return (
            <section className="ftco-section services-section bg-light">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                            <div className="media block-6 services d-block text-center">
                                <div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-guarantee" /></div></div>
                                <div className="media-body p-2 mt-2">
                                    <h3 className="heading mb-3">Best Price Guarantee</h3>
                                    <p>A small river named Duden flows by their place and supplies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                            <div className="media block-6 services d-block text-center">
                                <div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-like" /></div></div>
                                <div className="media-body p-2 mt-2">
                                    <h3 className="heading mb-3">Travellers Love Us</h3>
                                    <p>A small river named Duden flows by their place and supplies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                            <div className="media block-6 services d-block text-center">
                                <div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-detective" /></div></div>
                                <div className="media-body p-2 mt-2">
                                    <h3 className="heading mb-3">Best Travel Agent</h3>
                                    <p>A small river named Duden flows by their place and supplies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                            <div className="media block-6 services d-block text-center">
                                <div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-support" /></div></div>
                                <div className="media-body p-2 mt-2">
                                    <h3 className="heading mb-3">Our Dedicated Support</h3>
                                    <p>A small river named Duden flows by their place and supplies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;