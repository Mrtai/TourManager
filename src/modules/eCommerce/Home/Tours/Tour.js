import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Select, Badge, Col, Button } from "antd";
const tour = (props) => {
    return (
        <Col md={6} sm={12} xs={24} className="col-tour-item img-wrapper">
            <div className="gx-product-item gx-product-vertical tour-item inner-img">
                <div className="gx-product-image">
                    <img src="https://hinhnen.tv/wp-content/uploads/2018/03/hinh-nen-may-tinh-30.jpg" className="image-tour" />
                </div>
                <div className="gx-product-body">

                    <div className="gx-product-name til pad-bot" style={{ display: "flex" }}>
                        <div>Đà Lạt</div>
                        <div className="pad-rig">$200</div>
                    </div>
                    <div className="gx-mb-3">
                        Far far away, behind the word mountains, far from the countries
                    </div>
                    <div className="ais-RatingMenu-link pad-bot"><p className="rate">
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star-o icon-star" style={{ fontSize: "10px" }}></i>
                        <span className="rat">8 Rating</span>
                    </p></div>
                    <div className="gx-product-price pad-bot gx-border-bottom">2 ngày 3 đêm</div>
                    <div className="pad-top" style={{ display: "flex" }}>
                        <div>Hồ XH</div>
                        <div className="btn-rey">
                            <Button type="" className="btn-rev" >
                                <p className="rev-del" >Xem chi tiết</p>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </Col >
    );
};
export default tour;