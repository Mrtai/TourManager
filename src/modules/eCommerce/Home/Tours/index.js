import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Select, Badge, Table, Row, Col, Card } from "antd";
import Tour from './Tour';
import './tours.less'

const columns = [
    {
        title: 'Currency',
        dataIndex: 'currency'
    },
    {
        title: 'Rate (USD)',
        dataIndex: 'rate'
    },
    {
        title: 'DATE',
        dataIndex: 'date'
    },
    {
        title: 'FEE',
        dataIndex: 'fee',
        render: (text) => {
            return <span className="gx-text-red">{text}</span>
        }
    }
];

const data = [
    {
        key: '1',
        currency: '0.24 BTC',
        rate: '1 BTC = $740',
        date: '08.10.17',
        fee: '-$2.33'
    },
    {
        key: '2',
        currency: '0.34 RPL',
        rate: '1 RPL = $80.2',
        date: '08.03.17',
        fee: '-$1.23'
    },
    {
        key: '3',
        currency: '0.24 BTC',
        rate: '1 BTC = $740',
        date: '07.29.17',
        fee: '-$3.22'
    },
    {
        key: '4',
        currency: '0.22 BTC',
        rate: '1 BTC = $740',
        date: '07.28.17',
        fee: '-$3.22'
    },
    {
        key: '5',
        currency: '0.74 LTE',
        rate: '1 LTE = $99',
        date: '05.22.17',
        fee: '-$2.21'
    }
];
const Index = (props) => {
    return (
        <div className="gx-login-container">
            <div className="gx-login-content form-full">
                <div id="product">
                    <Row>
                        <Col xs={0} md={3}></Col>
                        <Col xs={24} md={16} className="gx-border-bottom text-tour"> <h2>Danh sách Tour du lịch</h2></Col>
                        <Col xs={0} md={3}></Col>
                    </Row>
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={20}>
                            <Row>
                                <Tour />
                                <Tour />
                                <Tour />
                                <Tour />
                                <Tour />
                                <Tour />
                                <Tour />
                                <Tour />
                            </Row>
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                    {/*<Card className="gx-card-widget">
                <div styleName="gx-order-history"
                    title={
                        <h2 className="h4 gx-text-capitalize gx-mb-0">
                            Order History</h2>
                    } extra={
                        <p className="gx-text-primary gx-mb-0 gx-pointer">Detailed History</p>
                    }>
                    <div className="gx-table-responsive">
                        <Table className="gx-table-no-bordered" columns={columns} dataSource={data} pagination={false} bordered={false} size="small" />
                    </div>
                </div>
            </Card>*/}
                </div >
            </div>
        </div>
    );
};
export default Index;