import React from 'react';
import Slider from "react-slick";
import CurrencyFormat from "react-currency-format";
import { Link } from 'react-router-dom';
import { Row, Col, Rate, Button, Input, Icon, Select, Tabs, Card, Table, Avatar, Carousel } from "antd";
import './detailtour.less';
const { TabPane } = Tabs;
const { Option } = Select;

const changeTabPosition = (tabPosition) => {
    tabPosition.setState({ tabPosition });
};
const Index = () => {
    const columns = [
        {
            title: "Ngày đi",
            dataIndex: '1'
        },
        {
            title: 'Ngày đến',
            dataIndex: '2'
        },
        {
            title: 'Chuyến bay',
            dataIndex: '3'
        }
    ];

    const data = [
        {
            key: '1',
            1: "12/06/2019",
            2: "13/6/2019",
            3: "VKIG004"
        }
    ];
    return (
        <div>
            <div className="padding-row-detail">

                <div className="gx-login-container">
                    <div className="gx-login-content form-full">
                        <Row className="gx-border-bottom">
                            <Col md={16} xs={24} className="">
                                <div style={{}}>
                                <Carousel autoplay>
                                <div><img className="gx-rounded-lg" alt="..." src='https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-15.jpg' /></div>
                                <div><img className="gx-rounded-lg" alt="..." src='https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-15.jpg' /></div>
                                <div><img className="gx-rounded-lg" alt="..." src='https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-15.jpg' /></div>
                                <div><img className="gx-rounded-lg" alt="..." src='https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-15.jpg' /></div>
                            </Carousel>

                                </div>
                            </Col>
                            <Col md={8} xs={24} className="">
                                <div className="ais-RatingMenu-link pad-bot ro">
                                    <div>
                                        <p className="rate ico">
                                            <i className="icon-star pad-rig-del "></i>
                                            <i className="icon-star pad-rig-del"></i>
                                            <i className="icon-star pad-rig-del"></i>
                                            <i className="icon-star pad-rig-del"></i>
                                            <i className="icon-star-o icon-star ico pad-rig-del" ></i>
                                        </p>
                                    </div>
                                    <div className="ro">
                                        <span className="rat rev">4.61/5 trong 368 Đánh giá</span>
                                    </div>
                                </div>

                                <div className="ro gx-border-bottom pad-bot-del">
                                    <div className="pad-ri-del"><Icon type="eye" />423</div>
                                    <div className="pad-ri-del"><Icon type="like" />124</div>
                                    <div className="pad-ri-del"><Icon type="message" />7</div>
                                </div>

                                <div className="gx-border-bottom pad-bot-del ">
                                    <Row style={{ paddingTop: "20px" }}>
                                        <Col md={12} xs={24}>
                                            <div className="ro">
                                                <div className="pad-r">Khởi hành:<span style={{ paddingLeft: "6px" }}>12/09/2019</span></div>
                                            </div>
                                            <div>Thời gian:<span style={{ paddingLeft: "40px" }}>6 ngày</span></div>
                                            <div>Nơi khởi hành:TP.HCM</div>
                                        </Col>
                                        <Col md={12} xs={24}>
                                            <div className="ro">
                                                <div className="ico-day"><Icon type="unordered-list" /></div>
                                                <div className="day">Ngày khác</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="gx-border-bottom pad-bot-del">
                                    <Row className="pad-bot-del" style={{ paddingTop: "20px" }}>
                                        <Col md={12} xs={24}>
                                            <div>
                                                <div>Giá:<span className="price" style={{ paddingLeft: "40px" }}>9.000.000đ</span></div>
                                                <div>Số chỗ còn nhận:<span className="seat" style={{ paddingLeft: "20px" }}>3</span></div>
                                            </div>
                                        </Col>
                                        <Col md={12} xs={24}>
                                            <div className="but-book"><Link to="/booking/tour/5"><Button type="danger">Đặt ngay</Button></Link></div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="gx-border-bottom pad-bot-del">
                                    <Row className="pad-bot-del" style={{ paddingTop: "20px" }}>
                                        <Col md={12} xs={24}>
                                            <div>
                                                <div className="te">Giá ưu đãi  khi đăng ký & thanh toán trực tuyến</div>
                                                <div>Giá:<span className="price" style={{ paddingLeft: "40px" }}>9.000.000đ</span></div>
                                                <div>Số chỗ còn nhận:<span className="seat" style={{ paddingLeft: "20px" }}>3</span></div>
                                            </div>
                                        </Col>
                                        <Col md={12} xs={24}>
                                            <div className="but-book"><Link to="/booking/tour/5"><Button type="primary">Đặt ngay</Button></Link></div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="gx-border-bottom pad-bot-del">
                                    <Row className="pad-bot-del" style={{ paddingTop: "20px" }}>
                                        <Col md={12} xs={24}>
                                            <div className="">
                                                <Button type="primary" block className="te1"><Icon type="phone" />Gọi miễn phí</Button>
                                            </div>
                                        </Col>
                                        <Col md={12} xs={24}>
                                            <div className="">
                                                <Button type="danger" block className="te1"><Icon type="edit" />Gửi yêu cầu</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>



                <Row className="" style={{}}>
                    <Col md={24} xs={24} className="">
                        <div className="gx-login-container">
                            <div className="gx-login-content form-full">
                                <Row>

                                    <Tabs tabPosition="left">
                                        <TabPane tab="Chương trình tour" key="1">
                                            <div>

                                                <Row span={24} className="pad-bot-del tieudechinh">CHƯƠNG TRÌNH TUOR</Row>

                                                <Row span={24} className="pad-bot-del">
                                                    Mũi Né, Phan Thiết nổi tiếng với những bãi cát trắng trải dài trên mặt
                                                    biển xanh biếc và những hàng dừa cao vút, đặc biệt tới đây bạn sẽ được thưởng thức những món ăn ngon
                                                    và nổi tiếng của người vùng đất ven biển vô cùng xinh đẹp này. Nơi đây còn nổi tiếng là khu nghỉ dưỡng
                                                    bởi hệ thống khách sạn và resort ven biển, là nơi nghỉ ngơi cuối tuần cho cả gia đình đầy thù vị
                                                    với một số thắng cảnh như Bàu Sen – Bàu Trắng, Suối Hồng, Đồi Cát Bay, hay muốn tìm hiểu về
                                                    lịch sử có thể tìm về trường Dục Thanh, thành phố Phan Thiết… Hãy đồng hành cùng Travel khám phá hành trình thú vị này bạn nhé.
                                                 </Row>
                                                <Row span={24} className="pad-bot-del">
                                                    <Col md={3} xs={24} className="bor-right">
                                                        <div className="stt">01.</div>
                                                        <div>11-10-2019</div>
                                                    </Col>
                                                    <Col md={21} xs={24}>
                                                        <div className="ro padd-bot"><Icon type="environment" className="ico" /><p className="tieude">TP.HCM-MŨI NÉ-LÂU ĐÀI RƯỢU VANG( Ăn sáng, trưa, tối)</p></div>
                                                        <div className="padd-top">Quý khách tập trung tại công ty khởi hành đi Phan Thiết. Quý khách ăn sáng trên cung đường đi. Đến Phan Thiết đoàn tham quan:
                                                <div>-Lâu Đài Rượu Vang RD: nghe giới thiệu về quy trình sản xuất, đóng chai và thưởng thức một trong những loại rượu nổi tiếng được sản xuất từ thung lũng Napa (Mỹ).</div>
                                                            <div>-Nhận phòng tự do nghỉ ngơi, tắm biển hồ bơi tại khách sạn/ resort</div>
                                                            <div>-Ăn tối, thưởng thức hải sản Phan Thiết</div>
                                                            <div style={{ paddingBottom: "20px" }}>-Buổi tối tự do dạo phố về dêm</div>
                                                        </div>
                                                    </Col>

                                                    <Col md={3} xs={24} className="bor-right">
                                                        <div className="stt">02.</div>
                                                        <div>11-10-2019</div>
                                                    </Col>
                                                    <Col md={21} xs={24}>
                                                        <div className="ro padd-bot"><Icon type="environment" className="ico" /><p className="tieude">TP.HCM-MŨI NÉ-LÂU ĐÀI RƯỢU VANG( Ăn sáng, trưa, tối)</p></div>
                                                        <div className="padd-top">Quý khách tập trung tại công ty khởi hành đi Phan Thiết. Quý khách ăn sáng trên cung đường đi. Đến Phan Thiết đoàn tham quan:
                                                <div>-Lâu Đài Rượu Vang RD: nghe giới thiệu về quy trình sản xuất, đóng chai và thưởng thức một trong những loại rượu nổi tiếng được sản xuất từ thung lũng Napa (Mỹ).</div>
                                                            <div>-Nhận phòng tự do nghỉ ngơi, tắm biển hồ bơi tại khách sạn/ resort</div>
                                                            <div>-Ăn tối, thưởng thức hải sản Phan Thiết</div>
                                                            <div style={{ paddingBottom: "20px" }}>-Buổi tối tự do dạo phố về dêm</div>
                                                        </div>
                                                    </Col><br />

                                                    <Col md={3} xs={24} className="bor-right">
                                                        <div className="stt">03.</div>
                                                        <div>11-10-2019</div>
                                                    </Col>
                                                    <Col md={21} xs={24}>
                                                        <div className="ro padd-bot"><Icon type="environment" className="ico" /><p className="tieude">TP.HCM-MŨI NÉ-LÂU ĐÀI RƯỢU VANG( Ăn sáng, trưa, tối)</p></div>
                                                        <div className="padd-top">Quý khách tập trung tại công ty khởi hành đi Phan Thiết. Quý khách ăn sáng trên cung đường đi. Đến Phan Thiết đoàn tham quan:
                                                <div>-Lâu Đài Rượu Vang RD: nghe giới thiệu về quy trình sản xuất, đóng chai và thưởng thức một trong những loại rượu nổi tiếng được sản xuất từ thung lũng Napa (Mỹ).</div>
                                                            <div>-Nhận phòng tự do nghỉ ngơi, tắm biển hồ bơi tại khách sạn/ resort</div>
                                                            <div>-Ăn tối, thưởng thức hải sản Phan Thiết</div>
                                                            <div style={{ paddingBottom: "20px" }}>-Buổi tối tự do dạo phố về dêm</div>
                                                        </div>
                                                    </Col>

                                                </Row>
                                            </div>
                                        </TabPane>
                                        <TabPane className="panel-l" tab="Chi tiết tour" key="2">
                                            <div>
                                                <Row span={24} className="pad-bot-del tieudechinh">CHI TIẾT TOUR</Row>
                                                <Row>
                                                    <Col span={24}>
                                                        <div>
                                                            <div className="tieudenho">
                                                                <div style={{ display: "flex" }}>
                                                                    <div><Icon type="car" /></div>
                                                                    <div className="pad-icon-detail">THÔNG TIN VẬN CHUYỂN</div>
                                                                </div>
                                                            </div>
                                                            <div className="table-vanchuyen">
                                                                <Col className="orderoc-col-1">
                                                                    <Card className="gx-card-widget">
                                                                        <div className="gx-table-responsive">
                                                                            <Table className="gx-table-no-bordered" block columns={columns} dataSource={data} pagination={false} bordered={false} style={{ backgound: "white" }}
                                                                                size="middle" />
                                                                        </div>
                                                                    </Card>
                                                                </Col>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={24}>
                                                        <div>
                                                            <div className="tieudenho">
                                                                <div style={{ display: "flex" }}>
                                                                    <div><Icon type="wallet" /></div>
                                                                    <div className="pad-icon-detail">THÔNG TIN KHÁCH SẠN</div>
                                                                </div>
                                                            </div>
                                                            <div className="table-vanchuyen">
                                                                <Col className="orderoc-col-1">
                                                                    <Card className="gx-card-widget">
                                                                        <div className="gx-table-responsive">
                                                                            <Table className="gx-table-no-bordered" block columns={columns} dataSource={data} pagination={false} bordered={false} style={{ backgound: "white" }}
                                                                                size="middle" />
                                                                        </div>
                                                                    </Card>
                                                                </Col>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={24}>
                                                        <div>
                                                            <div className="tieudenho">
                                                                <div style={{ display: "flex" }}>
                                                                    <div><Icon type="user" /></div>
                                                                    <div className="pad-icon-detail">THÔNG TIN HƯỚNG DẪN VIÊN</div>
                                                                </div>
                                                            </div>
                                                            <div className="table-vanchuyen">
                                                                <Col className="orderoc-col-1">
                                                                    <Card className="gx-card-widget">
                                                                        <div className="gx-table-responsive">
                                                                            <Table className="gx-table-no-bordered" block columns={columns} dataSource={data} pagination={false} bordered={false} style={{ backgound: "white" }}
                                                                                size="middle" />
                                                                        </div>
                                                                    </Card>
                                                                </Col>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={24}>
                                                        <div>
                                                            <div className="tieudenho">
                                                                <div style={{ display: "flex" }}>
                                                                    <div><Icon type="dollar" /></div>
                                                                    <div className="pad-icon-detail">THÔNG TIN PHỤ THU</div>
                                                                </div>
                                                            </div>
                                                            <div className="table-vanchuyen">
                                                                <Col className="orderoc-col-1">
                                                                    <Card className="gx-card-widget">
                                                                        <div className="gx-table-responsive">
                                                                            <Table className="gx-table-no-bordered" block columns={columns} dataSource={data} pagination={false} bordered={false} style={{ backgound: "white" }}
                                                                                size="middle" />
                                                                        </div>
                                                                    </Card>
                                                                </Col>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </TabPane>
                                        <TabPane tab="Lưu ý" key="3">
                                            <div>
                                                <Row span={24} className="pad-bot-del tieudechinh">LƯU Ý</Row>
                                                <Row>
                                                    <Col span={24}>
                                                        <div>
                                                            <div className="tieudenho">
                                                                <div style={{ display: "flex" }}>
                                                                    <div className="pad-icon-detail">Lộ trình tham khảo, cự ly khoảng cách</div>
                                                                </div>
                                                            </div>
                                                            <div className="table-vanchuyen">
                                                                <div>
                                                                    <div>Ngày 01 (201 km): TP. HCM - Lâu Đài Rượu Vang (195 km) - Mũi Né (6 km)</div>
                                                                    <div>Ngày 02  (86 km): Mũi Né - Long Beach Pearl (2 km) - Bàu Trắng (36 km) - Mũi Né (38 km)  - Fishermen Show - Huyền Thoại Làng Chài (5 km) - Mũi Né (5 km)</div>
                                                                    <div className="padd-bot">Ngày 03 (195 km): Mũi Né - Làng Chài Xưa (5 km) - TP. HCM (190 km)</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={24}>
                                                        <div>
                                                            <div className="tieudenho">
                                                                <div style={{ display: "flex" }}>
                                                                    <div className="pad-icon-detail">Lộ trình tham khảo, cự ly khoảng cách</div>
                                                                </div>
                                                            </div>
                                                            <div className="table-vanchuyen">
                                                                <div>
                                                                    <div>Ngày 01 (201 km): TP. HCM - Lâu Đài Rượu Vang (195 km) - Mũi Né (6 km)</div>
                                                                    <div>Ngày 02  (86 km): Mũi Né - Long Beach Pearl (2 km) - Bàu Trắng (36 km) - Mũi Né (38 km)  - Fishermen Show - Huyền Thoại Làng Chài (5 km) - Mũi Né (5 km)</div>
                                                                    <div className="padd-bot">Ngày 03 (195 km): Mũi Né - Làng Chài Xưa (5 km) - TP. HCM (190 km)</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={24}>
                                                        <div>
                                                            <div className="tieudenho">
                                                                <div style={{ display: "flex" }}>
                                                                    <div className="pad-icon-detail">Lộ trình tham khảo, cự ly khoảng cách</div>
                                                                </div>
                                                            </div>
                                                            <div className="table-vanchuyen">
                                                                <div>
                                                                    <div>Ngày 01 (201 km): TP. HCM - Lâu Đài Rượu Vang (195 km) - Mũi Né (6 km)</div>
                                                                    <div>Ngày 02  (86 km): Mũi Né - Long Beach Pearl (2 km) - Bàu Trắng (36 km) - Mũi Né (38 km)  - Fishermen Show - Huyền Thoại Làng Chài (5 km) - Mũi Né (5 km)</div>
                                                                    <div className="padd-bot">Ngày 03 (195 km): Mũi Né - Làng Chài Xưa (5 km) - TP. HCM (190 km)</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={24}>
                                                        <div>
                                                            <div className="tieudenho">
                                                                <div style={{ display: "flex" }}>
                                                                    <div className="pad-icon-detail">Lộ trình tham khảo, cự ly khoảng cách</div>
                                                                </div>
                                                            </div>
                                                            <div className="table-vanchuyen">
                                                                <div>
                                                                    <div>Ngày 01 (201 km): TP. HCM - Lâu Đài Rượu Vang (195 km) - Mũi Né (6 km)</div>
                                                                    <div>Ngày 02  (86 km): Mũi Né - Long Beach Pearl (2 km) - Bàu Trắng (36 km) - Mũi Né (38 km)  - Fishermen Show - Huyền Thoại Làng Chài (5 km) - Mũi Né (5 km)</div>
                                                                    <div className="padd-bot">Ngày 03 (195 km): Mũi Né - Làng Chài Xưa (5 km) - TP. HCM (190 km)</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>

                                            </div>
                                        </TabPane>
                                        <TabPane tab="Ý kiến khách hàng" key="5">
                                            <div>
                                                <Row span={24} className="tieudechinh">Ý KIẾN KHÁCH HÀNG</Row>
                                                <Row>
                                                    <Col span={24}>
                                                        <div className="gx-timeline-section">
                                                            <div className="gx-timeline-item">
                                                                <div className="gx-timeline-badge gx-timeline-img">
                                                                    <Icon type="message" />
                                                                </div>
                                                                <div className="gx-timeline-panel">
                                                                    <div className="gx-timeline-panel-header">
                                                                        <div className="gx-timeline-header-img gx-timeline-left">
                                                                            <Avatar size="large" className="gx-size-60 gx-rounded-circle" src="https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-15.jpg" />
                                                                        </div>
                                                                        <div className="gx-timeline-heading">
                                                                            <h5>12/09/2018</h5>
                                                                            <h3 className="gx-timeline-title">Lê Thanh Tuyên</h3>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gx-timeline-body">
                                                                        <p>
                                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                            Lorem Ipsum has been the standard dummy text ever since the 1500s, when an
                                                                            unknown printer took a galley of type and scrambled it to make
                                                                            a type specimen book. It has survived not only five centuries, but also the
                                                                            leap into electronic typesetting, remaining essentially unchanged.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={24}>
                                                        <div className="gx-timeline-section">
                                                            <div className="gx-timeline-item">
                                                                <div className="gx-timeline-badge gx-timeline-img">
                                                                    <Icon type="message" />
                                                                </div>
                                                                <div className="gx-timeline-panel">
                                                                    <div className="gx-timeline-panel-header">
                                                                        <div className="gx-timeline-header-img gx-timeline-left">
                                                                            <Avatar size="large" className="gx-size-60 gx-rounded-circle" src="https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-15.jpg" />
                                                                        </div>
                                                                        <div className="gx-timeline-heading">
                                                                            <h5>12/09/2018</h5>
                                                                            <h3 className="gx-timeline-title">Lê Thanh Tuyên</h3>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gx-timeline-body">
                                                                        <p>
                                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                            Lorem Ipsum has been the standard dummy text ever since the 1500s, when an
                                                                            unknown printer took a galley of type and scrambled it to make
                                                                            a type specimen book. It has survived not only five centuries, but also the
                                                                            leap into electronic typesetting, remaining essentially unchanged.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col span={24}>
                                                        <div className="gx-timeline-section">
                                                            <div className="gx-timeline-item">
                                                                <div className="gx-timeline-badge gx-timeline-img">
                                                                    <Icon type="message" />
                                                                </div>
                                                                <div className="gx-timeline-panel">
                                                                    <div className="gx-timeline-panel-header">
                                                                        <div className="gx-timeline-header-img gx-timeline-left">
                                                                            <Avatar size="large" className="gx-size-60 gx-rounded-circle" src="https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-15.jpg" />
                                                                        </div>
                                                                        <div className="gx-timeline-heading">
                                                                            <h5>12/09/2018</h5>
                                                                            <h3 className="gx-timeline-title">Lê Thanh Tuyên</h3>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gx-timeline-body">
                                                                        <p>
                                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                            Lorem Ipsum has been the standard dummy text ever since the 1500s, when an
                                                                            unknown printer took a galley of type and scrambled it to make
                                                                            a type specimen book. It has survived not only five centuries, but also the
                                                                            leap into electronic typesetting, remaining essentially unchanged.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </TabPane>
                                        <TabPane tab="Liên hệ" key="6">
                                            Content of Tab 3
                                </TabPane>
                                    </Tabs>
                                </Row>
                            </div></div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default Index;