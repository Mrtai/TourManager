import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Select, Badge, Popover } from "antd";
const HeaderPC = (props) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/product/list">Danh sách Tours</Link>
      <Link to="/booking/tour/5">Đặt tour</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
};
export default HeaderPC;
