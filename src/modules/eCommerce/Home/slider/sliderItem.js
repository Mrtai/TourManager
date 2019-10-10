import React from "react";
import { Carousel, Form, Row, Col } from "antd";
import "./slider.scss";
const SliderItem = ({ slide, height }) => {
  return (
    <div style={{ position: "relative"}}>
      <div className="text-slider">
        <Row style={{ color : "white"}}>
          <Col>
            <div style={{padding:70}} >
              <div>

              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="image-slide">
        <Carousel autoplay>
          {slide.map((obj, index) => (
            <div key={index}>
          <img
                className="slider"
                width="100%"
                height="auto" //{height}
                src={"http://thuthuatphanmem.vn/uploads/2018/06/18/hinh-nen-may-tinh-4k-binh-minh-tren-bien-xanh-dep_033012202.jpg"}
              ></img>
            </div>
          ))}
        </Carousel>
      </div>  
    </div>

  );
};

export default SliderItem;
