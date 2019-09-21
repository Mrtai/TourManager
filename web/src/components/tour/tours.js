import React, { Component } from 'react';
import Tour from './tour';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class Tours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            price_min: 200,
            price_max: 5000,
        };
    }

    componentDidMount = () =>{
        this.setState({
            rating: 0,
            price_min: 200,
            price_max: 5000,
        })
        console.log('tuyen');
      }
    //search tour============================================================
    onChangePrice = (event) => {
        var target = event.target;
        var name = target.name;
        var value = Number(target.value);
        this.setState({
            [name]: value
        });
    }
    onHandleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmitTour(this.state.price_min, this.state.price_max);
    }

    // search rating==========================================================
    onChangeStar = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({ [name]: value });
        this.onCheckRating();
    }
    onCheckRating = () => {
        this.props.onCheckRating(this.state.rating);
    }
    //=========================================================================
    render() {

        localStorage.setItem('tours', JSON.stringify(tours)); //lưu danh sách ảo
        var { tours, ratings, searchTour, match } = this.props;
        var url = match.url;
        
        //search rating ================================
        if (ratings.rating > 0) {
            var t = Number(ratings.rating)
            tours = tours.filter((tour) => {
                return tour.rating >= t ? tour : '';
            });
        }
        //==============================================

        //search price, map, day========================
        //console.log(searchTour);
        if (searchTour.price_max > 0) {
            tours = tours.filter((tour) => {
                if (tour.price >= searchTour.price_min && tour.price <= searchTour.price_max) {
                    return tour;
                }
            });
        }
        //==============================================
        //==============================================

        var elmTours = tours.map((tour, index) => {
            return (
                <Tour tour={tour} key={index} />
            );
        });

        return (
            <section className="ftco-section ftco-degree-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 sidebar ftco-animate fadeInUp ftco-animated">
                            <div className="sidebar-wrap bg-light ftco-animate fadeInUp ftco-animated">
                                <h3 className="heading mb-4">Find City</h3>
                                <form onSubmit={this.onHandleSubmit}>
                                    <div className="fields">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Destination, City" />
                                        </div>
                                        <div className="form-group">
                                            <div className="select-wrap one-third">
                                                <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                                <select className="form-control" placeholder="Keyword search">
                                                    <option value>Select Location</option>
                                                    <option value>San Francisco USA</option>
                                                    <option value>Berlin Germany</option>
                                                    <option value>Lodon United Kingdom</option>
                                                    <option value>Paris Italy</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" id="checkin_date" className="form-control" placeholder="Date from" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" id="checkin_date" className="form-control" placeholder="Date to" />
                                        </div>
                                        <div className="form-group">
                                            <div className="range-slider">
                                                <span>
                                                    <input type="number" defaultValue={200} min={0} max={120000} name="price_min" onChange={this.onChangePrice} /> -
                                                    <input type="number" defaultValue={5000} min={0} max={120000} name="price_max" onChange={this.onChangePrice} />
                                                </span>
                                                <input defaultValue={200} min={0} max={50000} step={500} type="range" name="" onChange={console.log(this.defaultValue)} />
                                                <input defaultValue={50000} min={0} max={120000} step={500} type="range" name="" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" defaultValue="Search" className="btn btn-primary py-3 px-5" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="sidebar-wrap bg-light ftco-animate fadeInUp ftco-animated">
                                <h3 className="heading mb-4">Star Rating</h3>
                                <form className="star-rating">

                                    <div className="form-check">

                                        <input type="radio" className="form-check-input" id="exampleCheck1" value={5} name='rating' onChange={this.onChangeStar} />

                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /></span></p>
                                        </label>

                                    </div>

                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" id="exampleCheck1" value={4} name='rating' onChange={this.onChangeStar} />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /></span></p>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" id="exampleCheck1" value={3} name='rating' onChange={this.onChangeStar} />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /><i className="icon-star-o" /></span></p>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" id="exampleCheck1" value={2} name='rating' onChange={this.onChangeStar} />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /><i className="icon-star-o" /><i className="icon-star-o" /></span></p>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" id="exampleCheck1" value={1} name='rating' onChange={this.onChangeStar} />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star" /><i className="icon-star-o" /><i className="icon-star-o" /><i className="icon-star-o" /><i className="icon-star-o" /></span></p>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <input type="button" defaultValue="Search" className="btn btn-primary py-3 px-5" onClick={this.onChangeStar} />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">

                                {elmTours}

                            </div>
                            <div className="row mt-5">
                                <div className="col text-center">
                                    <div className="block-27">
                                        <ul>
                                            <li><a href="#">&lt;</a></li>
                                            <li className="active"><span>1</span></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="#">&gt;</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => {
    return {
        tours: state.tours,
        ratings: state.rating,
        searchTour: state.searchTour,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onCheckRating: (rating) => {
            dispatch(actions.checkStar(rating));
        },
        onSubmitTour: (price_min, price_max) => {
            dispatch(actions.searchTour(price_min, price_max));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tours);
