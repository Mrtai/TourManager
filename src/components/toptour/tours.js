import React, { Component } from 'react';
import Tour from './tour';
import { connect } from 'react-redux';
class Tours extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }
  render() {
    var { tours } = this.props;
    var toptours = [];
    for (var i = 0; i < 4; i++) {
      toptours.push(tours[i]);
    }
    var elmTours = toptours.map((tour, index) => {
      return (
        <Tour
          tour={tour}
          key={index}
        />
      );
    });
    return (
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-start mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate fadeInUp ftco-animated">
              <span className="subheading">Special Offers</span>
              <h2 className="mb-4"><strong>Top</strong> Tour Packages</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">

            {elmTours}

          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    tours: state.tours,
  }
};


export default connect(mapStateToProps, null)(Tours);