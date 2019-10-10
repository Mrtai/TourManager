import React, { useEffect, useMemo } from "react";
import { Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getSlideList } from "modules/eCommerce/Home/redux/actions";
import { getProductList } from "modules/eCommerce/Product/redux/actions";
import Banner from '../../../modules/eCommerce/Home/slider/banner';
import ListTours from '../../../modules/eCommerce/Home/Tours'
import SliderItem from "modules/eCommerce/Home/slider/sliderItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Index = React.memo(props => {
  const { slideList } = useSelector(state => state.HomeReducer);
  const dispatch = useDispatch();


  useEffect(() => {
    if (slideList.length <= 0) {
      dispatch(
        getSlideList({
          onError: () => {
            console.log("error");
          }
        })
      );
      dispatch(getProductList());
    }
  }, []);
  const showSlide = data => {
    let result = null;
    if (data && Object.entries(data).length > 0) {
      result = (
        <div className="slider-wrapper">
          <Row>
            <Col className="first-slide-col" span={24}>
              <SliderItem height="596px" slide={data.home.data} />
            </Col>
          </Row>
        </div>
      );
    }
    return result;
  };
  const slides = useMemo(() => showSlide(slideList), [slideList]);

  return (
    <div>
      {/* Slide */}
      {slides}
      <Banner/>

      <ListTours />
      <ListTours />
      {/* End Slide */}
    </div>
  );
});

export default Index;
