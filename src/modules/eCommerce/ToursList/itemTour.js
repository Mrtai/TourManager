import React from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

const ItemTour = ({ data }) => {
    console.log(data)
    return (
        <Col md={8} sm={12} xs={24} className="col-tour-item img-wrapper">
            <div className="gx-product-item gx-product-vertical tour-item inner-img">
                <div className="gx-product-image">
                    <img src="https://hinhnen.tv/wp-content/uploads/2018/03/hinh-nen-may-tinh-30.jpg" className="image-tour" />
                </div>
                <div className="gx-product-body">

                    <div className="gx-product-name til pad-bot" style={{ display: "flex" }}>
                        <div>{data.name}</div>
                        <div className="pad-rig">${data.price}</div>
                    </div>
                    <div className="gx-mb-3 pad-bot">
                        {data.description}
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
                        <div>{data.city}</div>
                        <div className="div-btn">
                            <Link to={'detail/' + data.id}>
                                <Button type="danger" className="btn-view" >
                                    <p className="" >Xem chi tiết</p>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </Col >
    );
}
export default ItemTour;