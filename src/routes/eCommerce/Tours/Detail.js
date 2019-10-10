import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row } from "antd";
import {
  getProductDetail,
  showSelectPrice,
  getProductList,
  getProductToBuy
} from "modules/eCommerce/Product/redux/actions";
import { onAddToCart } from "modules/eCommerce/Cart/redux/actions";
import DetailProduct from "modules/eCommerce/Product/Detail/DetailProduct";
import RelatestProduct from "modules/eCommerce/Product/Detail/RelatestProduct";
import ConfirmBuy from "modules/eCommerce/Product/ConfirmBuy";
import DetailTour from '../../../modules/eCommerce/ToursList/TourDetail';

const Detail = ({ match }) => {
  return (
    <DetailTour />
  )
};


export default Detail;
