import React, { useState } from 'react';
import { Icon, Tabs, Button, Card, Row, Col, Table, Carousel, Form, Select, Input } from 'antd';
const FormItem = Form.Item;
const { Option } = Select;
import './book.less';

const { TabPane } = Tabs;

const Index = (props) => {
    const columns = [
        {
            title: "Người lớn (Từ 12 tuổi trở lên)",
            dataIndex: '1'
        },
        {
            title: 'Trẻ em (Từ 5 tuổi đến dưới 12 tuổi)',
            dataIndex: '2'
        },
        {
            title: 'Trẻ nhỏ (Từ 2 tuổi đến dưới 5 tuổi)',
            dataIndex: '3'
        },
        {
            title: 'Em bé (Dưới 2 tuổi)',
            dataIndex: '4'
        },
        {
            title: 'Phụ thu phòng đơn',
            dataIndex: '5'
        }
    ];

    const data = [
        {
            key: '1',
            1: "7,490,000",
            2: "2,490,000",
            3: "4,490,000",
            4: "4,890,000",
            5: "5,490,000"
        }
    ];
    const [count, setCount] = useState(0);
    const { getFieldDecorator } = props.form;
    const onChangetxt = (e) => {
        setCount(e.target.value);
        console.log(count);

    }
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (err === null) {
                console.log(values);
            }
        });
    };
    return (
        <div className="book-tour-row">
            <div>
                <Card className="gx-card-widget gx-p-lg-1">
                    <Row>
                        <Col xl={9} lg={10} md={5} sm={10} xs={24}>
                            <Carousel autoplay>
                                <div><img className="gx-rounded-lg" alt="..." src='https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-15.jpg' /></div>
                                <div><img className="gx-rounded-lg" alt="..." src='https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-15.jpg' /></div>
                                <div><img className="gx-rounded-lg" alt="..." src='https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-15.jpg' /></div>
                                <div><img className="gx-rounded-lg" alt="..." src='https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-15.jpg' /></div>
                            </Carousel>
                        </Col>
                        <Col xl={15} lg={14} md={14} sm={14} xs={24}>
                            <div className="gx-fnd-content">
                                <p className="gx-text-grey">Miền Bắc</p>
                                <h2 className="gx-text-uppercase gx-font-weight-bold gx-fnd-title color-txt">
                                    Hà Nội - Bái Đính - Tràng An - Hạ Long - Yên Tử (Khách sạn 4 sao trọn tour, Tour Tiêu Chuẩn)
                                </h2>
                                <p>Had a great time with family on beach this weekend.</p>
                                <ul className="gx-fnd-gallery-list">
                                    <li><img alt="..." src='http://minhhieu.com.vn/uploads/image/troi%20non(1).jpg'
                                        className="gx-rounded-lg gx-img-fluid" /></li>
                                    <li><img alt="..." src='http://minhhieu.com.vn/uploads/image/troi%20non(1).jpg'
                                        className="gx-rounded-lg gx-img-fluid" /></li>
                                    <li><img alt="..." src='http://minhhieu.com.vn/uploads/image/troi%20non(1).jpg'
                                        className="gx-rounded-lg gx-img-fluid" /></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
            <div>
                <Card className="gx-card-widget gx-card-full gx-dot-arrow-hover">
                    <div className="gx-user-wid-row">
                        <div className="gx-user-wid gx-mr-3">
                            <Icon type="exclamation" style={{ fontSize: 60, padding: 20, color: "#0B6121" }} className="gx-object-cover" />
                        </div>
                        <div className="gx-user-wid-body gx-py-3 gx-pr-3">
                            <div className="ant-row-flex">
                                <h2 className="h4 gx-mr-1 gx-mb-1">
                                    Khách nữ từ 55 tuổi trở lên, khách nam từ 60 tuổi trở lên đi tour một mình
                                    và khách mang thai trên 4 tháng (16 tuần) vui lòng đăng ký tour trực tiếp
                                    tại văn phòng của Vietravel. Không áp dụng đăng ký tour online đối với khách từ 70 tuổi trở lênn
                                </h2>
                            </div>
                            <p className="gx-mb-1 gx-text-grey gx-fs-sm">Ghi chú<br /></p>
                            <div className="gx-dot-arrow">
                                <div className="gx-bg-danger gx-hover-arrow">
                                    <i className="icon icon-long-arrow-right gx-text-white" />
                                </div>
                                <div className="gx-dot">
                                    <i className="icon icon-ellipse-v gx-text-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div>
                <Col className="orderoc-col-2">
                    <Card className="gx-card-widget"
                        title={
                            <h2 className="h2 color-txt gx-text-capitalize gx-mb-0 gx-border-bottom">
                                Giá tour cơ bản</h2>
                        } extra={
                            <p className="gx-text-primary gx-mb-0 gx-pointer"></p>
                        }>
                        <div className="gx-table-responsive">
                            <Table className="gx-table-no-bordered" columns={columns} dataSource={data} pagination={false} bordered={false} style={{ backgound: "white" }}
                                size="middle" />
                        </div>
                    </Card>
                </Col>
            </div>
            <div>
                <div className="gx-login-container">
                    <div className="gx-login-content form-full">
                        <div className=" gx-mb-4 color-txt gx-border-bottom">
                            <h2 className="color-txt">Thông tin</h2>
                        </div>
                        <Form onSubmit={handleSubmit} layout="inline">
                            <div style={{ display: 'flex' }}>
                                <Row>
                                    <Col md={12}>
                                        <div>Họ</div>
                                        <FormItem className="tuyen">
                                            {getFieldDecorator("first_name", {
                                                rules: [{ required: true, message: "Vui lòng nhập họ!" }]
                                            })(
                                                <Input
                                                    prefix={<Icon type="user" />}
                                                    placeholder="họ"
                                                />
                                            )}
                                        </FormItem >
                                        <div>Giới tính</div>
                                        <Form.Item className="tuyen">
                                            {getFieldDecorator('gender', {
                                                rules: [
                                                    { required: true, message: 'Vui lòng chọn giới tính!' }]
                                            })(
                                                <Select>
                                                    <Option value="Nam">Nam</Option>
                                                    <Option value="Nữ">Nữ</Option>
                                                </Select>
                                            )}
                                        </Form.Item>
                                        <div>Số điện thoại</div>
                                        <FormItem className="tuyen">
                                            {getFieldDecorator("phone", {
                                                rules: [{ required: true, message: "Vui lòng nhập số điện thoại!" }]
                                            })(
                                                <Input
                                                    prefix={<Icon type="phone" />}
                                                    placeholder="Số điện thoại"
                                                />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col md={12}>
                                        <div>Tên</div>
                                        <FormItem className="tuyen">
                                            {getFieldDecorator("last_name", {
                                                rules: [{ required: true, message: "Vui lòng nhập tên!" }]
                                            })(
                                                <Input
                                                    prefix={<Icon type="user" />}
                                                    placeholder="Tên"
                                                />
                                            )}
                                        </FormItem>
                                        <div>Địa chỉ</div>
                                        <FormItem className="tuyen">
                                            {getFieldDecorator("address", {
                                                rules: [{ required: true, message: "Vui lòng nhập địa chỉ!" }]
                                            })(
                                                <Input
                                                    prefix={<Icon type="environment" />}
                                                    placeholder="Địa chỉ"
                                                />
                                            )}
                                        </FormItem>
                                        <div style={{ display: "flex", paddingTop: 18 }}>
                                            <div>Người lớn</div>
                                            <FormItem className="">
                                                {getFieldDecorator("nguoilon")(
                                                    <Input
                                                        onChange={onChangetxt}
                                                        placeholder="Người lớn"
                                                    />
                                                )}
                                            </FormItem>
                                            <div>Trẻ em</div>
                                            <FormItem className="">
                                                {getFieldDecorator("country", {
                                                    rules: [{ required: true, message: "Vui lòng nhập quốc gia!" }]
                                                })(
                                                    <Input
                                                        placeholder="Trẻ em"
                                                    />
                                                )}
                                            </FormItem>
                                            <div>Em bé</div>
                                            <FormItem className="">
                                                {getFieldDecorator("country", {
                                                    rules: [{ required: true, message: "Vui lòng nhập quốc gia!" }]
                                                })(
                                                    <Input
                                                        placeholder="Em bé"
                                                    />
                                                )}
                                            </FormItem>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="gx-login-container">
                    <div className="gx-login-content form-full">
                        <div className=" gx-mb-4 color-txt gx-border-bottom">
                            <h2 className="color-txt">Danh sách khách đi tour</h2>
                        </div>
                        <Form onSubmit={handleSubmit} layout="inline">
                            <div style={{ display: 'flex' }}>
                                <Row>
                                    <Col md={12}>
                                        <div>Họ</div>
                                        <FormItem className="tuyen">
                                            {getFieldDecorator("first_name", {
                                                rules: [{ required: true, message: "Vui lòng nhập họ!" }]
                                            })(
                                                <Input
                                                    prefix={<Icon type="user" />}
                                                    placeholder="họ"
                                                />
                                            )}
                                        </FormItem >
                                        <div>Giới tính</div>
                                        <Form.Item className="tuyen">
                                            {getFieldDecorator('gender', {
                                                rules: [
                                                    { required: true, message: 'Vui lòng chọn giới tính!' }]
                                            })(
                                                <Select>
                                                    <Option value="Nam">Nam</Option>
                                                    <Option value="Nữ">Nữ</Option>
                                                </Select>
                                            )}
                                        </Form.Item>
                                        <div>Số điện thoại</div>
                                        <FormItem className="tuyen">
                                            {getFieldDecorator("phone", {
                                                rules: [{ required: true, message: "Vui lòng nhập số điện thoại!" }]
                                            })(
                                                <Input
                                                    prefix={<Icon type="phone" />}
                                                    placeholder="Số điện thoại"
                                                />
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col md={12}>
                                        <div>Tên</div>
                                        <FormItem className="tuyen">
                                            {getFieldDecorator("last_name", {
                                                rules: [{ required: true, message: "Vui lòng nhập tên!" }]
                                            })(
                                                <Input
                                                    prefix={<Icon type="user" />}
                                                    placeholder="Tên"
                                                />
                                            )}
                                        </FormItem>
                                        <div>Địa chỉ</div>
                                        <FormItem className="tuyen">
                                            {getFieldDecorator("address", {
                                                rules: [{ required: true, message: "Vui lòng nhập địa chỉ!" }]
                                            })(
                                                <Input
                                                    prefix={<Icon type="environment" />}
                                                    placeholder="Địa chỉ"
                                                />
                                            )}
                                        </FormItem>
                                        <div style={{ display: "flex", paddingTop: 18 }}>
                                            <div>Người lớn</div>
                                            <FormItem className="">
                                                {getFieldDecorator("nguoilon")(
                                                    <Input
                                                        placeholder="Người lớn"
                                                    />
                                                )}
                                            </FormItem>
                                            <div>Trẻ em</div>
                                            <FormItem className="">
                                                {getFieldDecorator("country", {
                                                    rules: [{ required: true, message: "Vui lòng nhập quốc gia!" }]
                                                })(
                                                    <Input
                                                        placeholder="Trẻ em"
                                                    />
                                                )}
                                            </FormItem>
                                            <div>Em bé</div>
                                            <FormItem className="">
                                                {getFieldDecorator("country", {
                                                    rules: [{ required: true, message: "Vui lòng nhập quốc gia!" }]
                                                })(
                                                    <Input
                                                        placeholder="Em bé"
                                                    />
                                                )}
                                            </FormItem>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <FormItem>
                                <div className="">
                                    <div><Input type="submit" value="Đặt tour" className="btn_book" style={{ background: "#ff4d4f", color: "white" }} /></div>
                                </div>
                            </FormItem>
                        </Form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Form.create()(Index);