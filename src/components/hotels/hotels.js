import React, { Component } from 'react';
import Hotel from './hotel';
class hotels extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        id: 1,
        name: 'Khach san ba con cho',
        image : '',
        rating: 4,
        price: 50,
        des: 'Far far away, behind the word mountains, far from the countries',
        map: 'Miami, Fl',
      },
      {
        id: 2,
        name: 'Khach san ba con dien',
        image : '',
        rating: 4,
        price: 50,
        des: 'Far far away, behind the word mountains, far from the countries',
        map: 'Miami, Fl',
      },
      {
        id: 3,
        name: 'Khach san ba con meo',
        image : '',
        rating: 4,
        price: 50,
        des: 'Far far away, behind the word mountains, far from the countries',
        map: 'Miami, Fl',
      },
      {
        id: 4,
        name: 'Khach san ba con heo',
        image : '',
        rating: 4,
        price: 50,
        des: 'Far far away, behind the word mountains, far from the countries',
        map: 'Miami, Fl',
      },
    ];
  }
  render() {
    var hotels = this.state.map((hotel, index) => {
      return (
          <Hotel 
            hotel = { hotel } 
            key = { index }
          />
      );
  });
    return (
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-start mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate fadeInUp ftco-animated">
              <span className="subheading">Special Offers</span>
              <h2 className="mb-4"><strong>Popular</strong> Hotels &amp; Rooms</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">

            { hotels }

          </div>
        </div>
      </section>
    );
  }
}

export default hotels;
