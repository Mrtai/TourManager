import React from "react";
import { Row, Col } from "antd";
import "./slider.scss";
import ItemBanner from './itemBanner'

const listdata = [
    {
        icon: "safety-certificate",
        title: "Đảm bảo giá tốt nhất",
        description: "Một con sông nhỏ tên là Duden chảy theo địa điểm và nguồn cung cấp của họ."
    },
    {
        icon: "heart",
        title: "Du khách yêu chúng tôi",
        description: "Một con sông nhỏ tên là Duden chảy theo địa điểm và nguồn cung cấp của họ."
    },
    {
        icon: "star",
        title: "Đại lý du lịch tốt nhất",
        description: "Một con sông nhỏ tên là Duden chảy theo địa điểm và nguồn cung cấp của họ."
    },
    {
        icon: "fire",
        title: "Hỗ trợ tận tâm của chúng tôi",
        description: "Một con sông nhỏ tên là Duden chảy theo địa điểm và nguồn cung cấp của họ."
    }
];

const SliderItem = ({ slide, height }) => {
    return (
        <Row>
            <Col xs={0} md={3}></Col>
            <Col xs={24} md={18}>
                <Row>
                    {
                        listdata.map((data, index) => {
                            return (
                                <ItemBanner data={data} key={index}/>
                            )
                        })

                    }
                </Row>
            </Col>
            <Col xs={0} md={3}></Col>
        </Row>
    );
};
export default SliderItem;
