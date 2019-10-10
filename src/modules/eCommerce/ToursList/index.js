import ItemTour from './itemTour';
import React, { useState } from 'react';
import { Row, Col, Form, Input, Icon, Checkbox, Button, Select, DatePicker } from 'antd';
import './listtour.less';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { Option } = Select;


const Index = (props) => {
    const [count, setCount] = useState(0);
    const { getFieldDecorator } = props.form;
    const onSubmit = event => { //gọi hàm dòng 52
        event.preventDefault();
        props.form.validateFields();
        props.form.validateFields((err, values) => {
            console.log(values)
        });
    }
    const handleChange = (value) => {
        console.log('selected ${value}');
    }
    const onChange = (e) => {
        setCount(e.target.value);
        console.log(count)
    }
    return (
        <div id="product">
            <Row>
                <Col xs={0} md={3}></Col>
                <Col xs={24} md={16} className="gx-border-bottom text-tour"> <h2>Danh sách Tour du lịch</h2></Col>
                <Col xs={0} md={3}></Col>
            </Row>
            <Row>
                <Col sm={2} xs={0}></Col>
                <Col sm={5} >
                    <Row style={{ padding: "10px", paddingTop: 30 }}>
                        <Col span={24} xs={24}>
                            <div style={{ backgroundColor: "#F2F2F2" }} className="inp" >
                                <Form onSubmit={onSubmit} className="login-form">

                                    <Form.Item className="col-first_name inp-pad">
                                        {getFieldDecorator('name', {
                                            rules: [{ required: true, message: 'Please input your first name!' }]
                                        })(
                                            <Input className="inp-size"
                                                placeholder="Hà Nội"
                                            />
                                        )}
                                    </Form.Item>
                                    <Form.Item className="col-first_name inp-pad">
                                        {getFieldDecorator('map', {
                                            rules: [{ required: true, message: 'Please input your first name!' }]
                                        })(
                                            <div className="inp-size">
                                                <Select defaultValue="tuyen">
                                                    <Option value="jack">Jack</Option>
                                                    <Option value="lucy">Lucy</Option>
                                                    <Option value="Yiminghe">yiminghe</Option>
                                                </Select>
                                            </div>

                                        )}
                                    </Form.Item>
                                    <Form.Item className="col-first_name inp-pad">
                                        {getFieldDecorator('date_from', {
                                            rules: [{ required: true, message: 'Please input your first name!' }]
                                        })(
                                            <RangePicker className="inp-size"/>
                                        )}
                                    </Form.Item>
                                    <Form.Item className="col-first_name inp-pad">
                                        {getFieldDecorator('date_to', {
                                            rules: [{ required: true, message: 'Please input your first name!' }]
                                        })(
                                            <Input className="inp-size"
                                                placeholder="Ngày đến"
                                            />
                                        )}
                                    </Form.Item>
                                    <Form.Item className="inp-pad">
                                        {getFieldDecorator('remember', {
                                            valuePropName: 'checked',
                                            initialValue: true
                                        })}
                                        <Button type="danger" htmlType="submit" className="inp-size" >
                                            Tìm kiếm
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </Col>
                        <Col span={24} xs={24} style={{ paddingTop: "30px" }}>
                            <div style={{ paddingTop: "30px", border: "solid 1px #D8D8D8", paddingLeft: "10px", backgroundColor: "#F2F2F2" }}>
                                <div style={{ display: "flex" }}>
                                    <div><Checkbox value={5} onChange={onChange}></Checkbox></div>
                                    <div className="ais-RatingMenu-link pad-bot ">
                                        <p className="rate" style={{ paddingLeft: "20px" }}>
                                            <i className="icon-star tuyen"></i>
                                            <i className="icon-star tuyen"></i>
                                            <i className="icon-star tuyen"></i>
                                            <i className="icon-star tuyen"></i>
                                            <i className="icon-star tuyen"></i>
                                        </p>
                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div><Checkbox value={4} onChange={onChange}></Checkbox></div>
                                    <div className="ais-RatingMenu-link pad-bot ">
                                        <p className="rate" style={{ paddingLeft: "20px" }}>
                                            <i className="icon-star tuyen"></i>
                                            <i className="icon-star tuyen"></i>
                                            <i className="icon-star tuyen"></i>
                                            <i className="icon-star tuyen"></i>
                                            <i className="icon-star-o tuyen"></i>
                                        </p>
                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div><Checkbox value={3} onChange={onChange}></Checkbox></div>
                                    <div className="ais-RatingMenu-link pad-bot ">
                                        <p className="rate" style={{ paddingLeft: "20px" }}>
                                            <i className="icon-star tuyen"></i>
                                            <i className="icon-star tuyen"></i>
                                            <i className="icon-star tuyen"></i>
                                            <i className="icon-star-o tuyen"></i>
                                            <i className="icon-star-o tuyen"></i>
                                        </p>
                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div><Checkbox value={2} onChange={onChange}></Checkbox></div>
                                    <div className="ais-RatingMenu-link pad-bot ">
                                        <p className="rate" style={{ paddingLeft: "20px" }}>
                                            <i className="icon-star tuyen"></i>
                                            <i className="icon-star tuyen"></i>
                                            <i className="icon-star-o tuyen"></i>
                                            <i className="icon-star-o tuyen"></i>
                                            <i className="icon-star-o tuyen"></i>
                                        </p>
                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div><Checkbox value={1} onChange={onChange}></Checkbox></div>
                                    <div className="ais-RatingMenu-link pad-bot ">
                                        <p className="rate" style={{ paddingLeft: "20px" }}>
                                            <i className="icon-star tuyen"></i>
                                            <i className="icon-star-o tuyen"></i>
                                            <i className="icon-star-o tuyen"></i>
                                            <i className="icon-star-o tuyen"></i>
                                            <i className="icon-star-o tuyen"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col sm={15}>
                    <Row>
                        <Col ></Col>
                    </Row>
                    <Row>
                        {
                            props.data.map((item, index) => {
                                return (
                                    <ItemTour data={item} key={index} />
                                )
                            })
                        }
                    </Row>
                </Col>

                <Col sm={2} xs={0}></Col>
            </Row>
        </div >
    );
}
const WrappedSignUpForm = Form.create()(Index);
export default WrappedSignUpForm;
