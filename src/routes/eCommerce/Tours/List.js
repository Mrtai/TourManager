import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Rate } from "antd";
import ToursList from '../../../modules/eCommerce/ToursList'
import "./List.scss";
import { getToursList } from '../../../modules/eCommerce/ToursList/redux/actions'

const ProductList = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToursList());
  });
  const data = [
    {
      id: 1,
      name: "Du lịch Nha Trang",
      description: "rất là đẹp luôn",
      price: 500,
      city: "Nha trang"
    },
    {
      id: 2,
      name: "Du lịch Nha Trang",
      description: "rất là đẹp luôn",
      price: 500,
      city: "Nha trang"
    },
    {
      id: 3,
      name: "Du lịch Nha Trang",
      description: "rất là đẹp luôn",
      price: 500,
      city: "Nha trang"
    },
    {
      id: 4,
      name: "Du lịch Nha Trang",
      description: "rất là đẹp luôn",
      price: 500,
      city: "Nha trang"
    },
    {
      id: 5,
      name: "Du lịch Nha Trang",
      description: "rất là đẹp luôn",
      price: 500,
      city: "Nha trang"
    },
    {
      id: 6,
      name: "Du lịch Nha Trang",
      description: "rất là đẹp luôn",
      price: 500,
      city: "Nha trang"
    },
    {
      id: 7,
      name: "Du lịch Nha Trang",
      description: "rất là đẹp luôn",
      price: 500,
      city: "Nha trang"
    },
    {
      id: 8,
      name: "Du lịch Nha Trang",
      description: "rất là đẹp luôn",
      price: 500,
      city: "Nha trang"
    }
  ]
  return (
    <ToursList data={data} />
  );
};

export default ProductList;
