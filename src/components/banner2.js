import React, { Component } from 'react';

class content3 extends Component {
    render() {
        return (
            <section className="ftco-section ftco-counter img" id="section-counter" style={{ backgroundImage: 'url(images/bg_1.jpg)' }}>
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 text-center heading-section heading-section-white ftco-animate fadeInUp ftco-animated">
                            <h2 className="mb-4">Some fun facts</h2>
                            <span className="subheading">More than 100,000 websites hosted</span>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number={100000}>100,000</strong>
                                            <span>Happy Customers</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number={40000}>40,000</strong>
                                            <span>Destination Places</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number={87000}>87,000</strong>
                                            <span>Hotels</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number={56400}>56,400</strong>
                                            <span>Restaurant</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default content3;