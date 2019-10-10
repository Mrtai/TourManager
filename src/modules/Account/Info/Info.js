import React, { useState } from "react";
import { Row, Col, Avatar, Button, Modal, Icon, Form, Card } from 'antd';
import Update from './Update'



const Info = () => {
    const [show, setShow] = useState(false);
    const onUpdate = (values) => {
        console.log(values);
        setShow(!show);
    }
    const onClose = () => {
        setShow(!show);
    }
    return (
        <Row>
            <Col xs={24} md={16} >
                <div className="gx-order-history padding-top"
                >
                    <Card className="gx-card-widget" title={
                        <h2 className="h4 gx-text-capitalize gx-mb-0">
                            Thông tin tài khoản</h2>
                    } extra={
                        <div className="gx-text-primary gx-mb-0 gx-pointer">
                            <Avatar size={90} src="https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-15.jpg" />
                        </div>
                    }>
                        <div className="gx-table-responsive">
                            <Row >
                                <Col xs={24} md={8} className="info-right-text gx-border-bottom">
                                    <div className="info-right-text-1">
                                        Họ
                                </div>
                                    <div className="info-right-text-2">
                                        Họ
                                </div>
                                </Col>
                                <Col xs={24} md={16} className="info-right-text gx-border-bottom">
                                    <div className="info-right-text-1">
                                        Tên
                                </div>
                                    <div className="info-right-text-2">
                                        Tên
                                </div>
                                </Col>
                                <Col xs={24} md={8} className="info-right-text gx-border-bottom">
                                    <div className="info-right-text-1">
                                        Giới tính
                                </div>
                                    <div className="info-right-text-2">
                                        Nam
                                </div>
                                </Col>
                                <Col xs={24} md={8} className="info-right-text gx-border-bottom">
                                    <div className="info-right-text-1">
                                        Số điện thoại
                                </div>
                                    <div className="info-right-text-2">
                                        0987748573
                                </div>
                                </Col>
                                <Col xs={24} md={8} className="info-right-text gx-border-bottom">
                                    <div className="info-right-text-1">
                                        ID/Passport
                                </div>
                                    <div className="info-right-text-2">
                                        242345654323
                                </div>
                                </Col>
                                <Col xs={24} md={8} className="info-right-text gx-border-bottom">
                                    <div className="info-right-text-1">
                                        Địa chỉ
                                </div>
                                    <div className="info-right-text-2">
                                        Quảng Ngãi
                                </div>
                                </Col >
                                <Col xs={24} md={8} className="info-right-text gx-border-bottom">
                                    <div className="info-right-text-1">
                                        Số OC hiện tại
                                </div>
                                    <div className="info-right-text-2">
                                        15
                                </div>
                                </Col >
                                <Col xs={24} md={24} sm={24}>
                                    <div className="info-right-text">
                                        <Button onClick={() => setShow(!show)} className="btn-info">Cập nhật</Button>
                                        <Modal
                                            title={
                                                <div><h2>Cập nhật thông tin</h2></div>
                                            }
                                            visible={show}
                                            onCancel={() => setShow(!show)}
                                            footer={[]}
                                        >
                                            <Update onUpdate={onUpdate} onCancel={onClose} />
                                        </Modal>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </div>
            </Col>
            <Col xs={24} md={8} className="info-row-2">
                <div className="info1-account gx-box-shadow">
                    <h1>Tài khoản</h1>
                    <div className="text-right-acc">
                        <div className="icon-account"><Icon type="mail" size={20} /></div>
                        <div className="text-right-account">
                            <div className="info-right-text-1">
                                Email
                        </div>
                            <div className="info-right-text-2">
                                levankhan@gmail.com
                        </div>
                        </div>
                    </div>
                    <div className="text-right-acc">
                        <div className="icon-account"><Icon type="lock" size={20} /></div>
                        <div className="text-right-account">
                            <div className="info-right-text-1">
                                Mật khẩu
                        </div>
                            <div style={{display : 'flex'}}>
                                <div className="info-right-text-2">
                                    ****************
                                </div>
                                <div>
                                    <Icon type="edit"></Icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Col>
        </Row>
    );
};

export default Form.create()(Info);
