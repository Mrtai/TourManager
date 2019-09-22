import React, { Component } from 'react';
import ContentSlide from './contentSlide';

class Slide extends Component {
    //js-fullheight bo vao class ->full
    render() {
        return (
            <div className="hero-wrap js-fullheight slide">
                <ContentSlide/>
            </div>
        );
    }
}
export default Slide;