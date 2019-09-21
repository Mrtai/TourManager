import React, { Component } from 'react';

class contentSlide extends Component {
  render() {
    return (
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true" style={{ height: '600px' }}>
          <div className="col-md-9 ftco-animate fadeInUp ftco-animated" data-scrollax=" properties: { translateY: '70%' }" style={{ transform: 'translateZ(0px) translateY(0%)' }}>
            <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{ opacity: 1, transform: 'translateZ(0px) translateY(0%)' }}><strong>Explore <br /></strong> your amazing city</h1>
            <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" style={{ opacity: 1, transform: 'translateZ(0px) translateY(0%)' }}>Find great places to stay, eat, shop, or visit from local experts</p>
            <div className="block-17 my-4">
              <form method="post" className="d-block d-flex">
                <div className="fields d-block d-flex">
                  <div className="textfield-search one-third">
                    <input type="text" className="form-control" placeholder="Ex: food, service, hotel" />
                  </div>
                  <div className="select-wrap one-third">
                    <div className="icon"><span className="ion-ios-arrow-down" /></div>
                    <select className="form-control" placeholder="Keyword search">
                      <option value>Where</option>
                      <option value>San Francisco USA</option>
                      <option value>Berlin Germany</option>
                      <option value>Lodon United Kingdom</option>
                      <option value>Paris Italy</option>
                    </select>
                  </div>
                </div>
                <input type="submit" className="search-submit btn btn-primary" defaultValue="Search" />
              </form>
            </div>
            <p>Or browse the highlights</p>
            <p className="browse d-md-flex">
              <span className="d-flex justify-content-md-center align-items-md-center"><a href="/"><i className="flaticon-fork" />Restaurant</a></span>
              <span className="d-flex justify-content-md-center align-items-md-center"><a href="/"><i className="flaticon-hotel" />Hotel</a></span>
              <span className="d-flex justify-content-md-center align-items-md-center"><a href="/"><i className="flaticon-meeting-point" />Places</a></span>
              <span className="d-flex justify-content-md-center align-items-md-	center"><a href="/"><i className="flaticon-shopping-bag" />Shopping</a></span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default contentSlide;