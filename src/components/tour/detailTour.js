import React, { Component } from 'react'
import { connect } from 'react-redux';
import './../../Style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class detailTour extends Component {
    render() {
        var { tours, match } = this.props;
        console.log(match);


        tours = tours.filter((tour) => {
            if (tour.id === Number(match.params.id)) {
                return tour;
            }
        });
        var tourview = null;
        var elmTours = tours.map((tour, index) => {
            tourview = tour;
            return tour;
        });

        var image = "url(./../images/" + tourview.image + ")";
        return (

            <div>
                <div className="container">

                    <div className="row">
                        <span className="label-banner">{tourview.name}</span>

                    </div>

                    <div className="row">

                        <div className="slideshow-pt col-lg-8 col-md-12 col-sm-12 col-xs-12 pos-relative " style={{ background: image, height: "500px" }}>
                            <div id="myCarousel" className="carousel" data-ride="carousel">

                                {/* Indicators */}
                                <ol className="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to={0} className />
                                    <li data-target="#myCarousel" data-slide-to={1} className />
                                    <li data-target="#myCarousel" data-slide-to={2} className />
                                    <li data-target="#myCarousel" data-slide-to={3} className />
                                    <li data-target="#myCarousel" data-slide-to={4} className="active" />
                                    <li data-target="#myCarousel" data-slide-to={5} className />
                                </ol>
                                {/* Wrapper for slides */}
                                <div className="carousel-inner">
                                    <div className="item">

                                    </div>
                                </div>
                                {/* Left and right controls */}
                                <a className="left carousel-control hidden" href="#myCarousel" data-slide="prev">
                                    <span className="glyphicon glyphicon-chevron-left" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="right carousel-control hidden" href="#myCarousel" data-slide="next">
                                    <span className="glyphicon glyphicon-chevron-right" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <div className="frame-func">
                                <a className="ic">
                                    <i className="far fa-heart" onclick="AddWishlist('ea418201-6c36-4df8-8e56-bffcbac23c7a')" />
                                </a>
                                <a href="https://travel.com.vn/du-lich/NNSGN220-136-060919TROD-D-O-1/in-chuong-trinh-tour.aspx" target="_blank" className="ic">
                                    <i className="fas fa-print" />
                                </a>
                                <a className="ic" data-toggle="modal" data-target="#SendEmailFriend">
                                    <i className="far fa-envelope" />
                                </a>
                                <div className="clear" />
                            </div>
                        </div>

                        <div className="info col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <div className="frame-info pos-relative">


                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 sec1 tuyen">
                                    <div className="f-left frame-rating">
                                        <div style={{ float: 'left', margin: '8px 0px' }} data-tourid="ea418201-6c36-4df8-8e56-bffcbac23c7a" className="rateit" data-rateit-value="4.55" data-rateit-resetable="false">
                                            <button id="rateit-reset-2" data-role="none" className="rateit-reset" aria-label="reset rating" aria-controls="rateit-range-2" style={{ display: 'none' }} />
                                            <div id="rateit-range-2" className="rateit-range" tabIndex={0} role="slider" aria-label="rating" aria-owns="rateit-reset-2" aria-valuemin={0} aria-valuemax={5} aria-valuenow="4.55" aria-readonly="false" style={{ width: '80px', height: '16px' }}>
                                                <div className="rateit-selected" style={{ height: '16px', width: '72.8px', display: 'block' }} />
                                                <div className="rateit-hover" style={{ height: '16px', width: '0px', display: 'none' }} />
                                            </div>
                                        </div>
                                        <div style={{ float: 'left', marginTop: '8px' }} className="hidden-xs">
                                            <span className="hreview-aggregate">
                                                <span className="item">
                                                    <span className="fn">
                                                        <span className="rating">
                                                            <span className="average">
                                                                <strong>4.55</strong>
                                                            </span>
                                                            <strong>/
                                                                <span className="best">5 </span>
                                                            </strong>trong
                                                                <span className="votes">
                                                                <strong>379
                                                        </strong>
                                                            </span> Đánh giá
                                                        <span className="summary" />
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 tuyen">

                                    <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                        <div className="tuyenhapdan">Khởi hành: </div>
                                        <div className="tuyenhapdan">Thời gian: </div>
                                        <div className="tuyenhapdan">Nơi khởi hành: </div>
                                    </div>
                                    <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                        <div className="tuyenhapdan">10/08/2019</div>
                                        <div className="tuyenhapdan">3 Ngày 2 đêm</div>
                                        <div className="tuyenhapdan">Cánh gà</div>
                                    </div>

                                </div>

                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 tuyen">

                                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                        <div>{tourview.price}</div>
                                        <div>Sô Chô con: 3</div>
                                    </div>

                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 tuyenhapdan">

                                        <Link to={"/tour/"+ tourview.id +"/book"}>
                                            <button className="btn-book"><span>View Tour</span></button>
                                        </Link>

                                    </div>

                                </div>






                                <div className="sec5">
                                    <div style={{ marginBottom: '8px' }}>Bạn cần hỗ trợ?</div>
                                    <div>
                                        <div className="f-left btn-s1">
                                            <a href="https://webcall.talking.vn/frame-click-to-call?code=tCEZl1-MKPuA6JU-czVAScCb0pPkHmPt" onclick="javascript:window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=375,height=667');return false;" target="_blank">
                                                <img src="https://travel.com.vn/Content/ThemeHe/img/btn-call1.png" alt="phone" />
                                            </a>
                                        </div>
                                        <div className="f-left btn-s2" data-toggle="modal" data-target="#divTuVan" style={{ cursor: 'pointer' }}><img src="https://travel.com.vn/Content/ThemeHe/img/btn-call2.png" alt="phone" /></div>
                                        <div className="clear" />
                                    </div>
                                </div>


                                <div className="bg-phone hidden-md hidden-sm hidden-xs">
                                    <img src="https://travel.com.vn/Content/ThemeHe/img/bg-phone.png" alt="phone" />
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

                <div className="container">

                    <div className="row">

                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">

                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 tet">

                                <i className="glyphicon glyphicon-asterisk">&nbsp;Chương trình tour</i ><br /><br />

                                <i className="glyphicon glyphicon-th-list">&nbsp;Chi tiết tour</i><br /><br />

                                <i className="glyphicon glyphicon-warning-sign">&nbsp;Lưu ý</i><br /><br />

                                <i className="glyphicon glyphicon-calendar">&nbsp;Ngày khác</i><br /><br />

                                <i className="glyphicon glyphicon-pencil">&nbsp;Ý kiến khách hàng</i><br /><br />

                                <i className="glyphicon glyphicon-envelope">&nbsp;Liên hệ</i><br /><br />


                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 tet " >
                                <div >DỊCH VỤ ĐI KÈM</div><br />
                                <i className="glyphicon glyphicon-star-empty">&nbsp;Bữa ăn theo chương trình</i><br /><br />

                                <i className="glyphicon glyphicon-star-empty">&nbsp;Bảo hiểm</i><br /><br />
                                <i className="glyphicon glyphicon-star-empty">&nbsp;Hướng dẫn viên</i><br /><br />
                                <i className="glyphicon glyphicon-star-empty">&nbsp;Vé tham quan</i><br /><br />
                                <i className="glyphicon glyphicon-star-empty">&nbsp;Vận chuyển</i><br /><br />
                            </div>

                        </div>

                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 ">

                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="panel panel-default">
                                    <div className="panel-body ctt">
                                        <div className="ct">CHƯƠNG TRÌNH TOUR</div>
                                    </div>
                                    <div class="md">Quý khách hãy cùng chúng tôi khám phá chương trình "Một hành trình-Hai điểm đến" với hai miền đất lễ hội Malaysia-Singapore hứa hẹn những kỉ niệm và giây phút vui vẻ bên cạnh người thân. Hành trình khám phá Malaysia quý khách sẽ bất ngờ với những tòa nhà cao chọc trời, trung tâm thương mại sầm uất. Malaysia còn đẫm nét thiên nhiên diệu kỳ, những bãi biển xinh đẹp, những khu phố cổ kính, yên bình. Tham quan Singapore, du khách sẽ tìm thấy một thiên đường du lịch của riêng mình. Một đất nước có nhiều điểm tham quan hấp dẫn-lịch sử và văn hóa, các chương trình giải trí sôi động suốt ngày đêm.<br /><br /><br /><br />
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 hh ">
                                    <div className="dl">01</div>
                                    <div className="so">06-09-2019 </div>
                                    <br /> <br /> <br /> <br /> <br />
                                    <hr />
                                    <br /> <br /> <br />
                                    <div className="dl">02</div>
                                    <div className="so">07-09-2019</div>
                                    <br /> <br /> <br /> <br /> <br /><br /> <br /> <br /> <br /> <br /><br /> <br /> <br /><br />
                                    <hr />
                                    <br /> <br /> <br />
                                    <div className="dl">03</div>
                                    <div className="so">08-09-2019</div>
                                    <br /> <br /> <br /> <br />
                                    <hr />
                                    <div className="dl">04</div>
                                    <div className="so">09-09-2019</div>
                                    <br /> <br /> <br />
                                    <hr />
                                    <div className="dl">05</div>
                                    <div className="so">010-09-2019</div>
                                    <br /> <br /> <br />  <br />
                                    <hr />
                                    <div className="dl">06</div>
                                    <div className="so">11-09-2019</div>
                                    <br /> <br /> <br />
                                </div>

                                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 ">
                                    <i className="glyphicon glyphicon-map-marker ic" > <span className="dd">TP.HỒ CHÍ MINH-SINGAPORE: (Ăn tối)</span></i>
                                    <div className="mt">Trưởng đoàn đón quý khách tại cổng hẹn ở sân bay Tân Sơn Nhất, đón chuyến bay đi  Singapore. Đến sân bay quốc tế Changsi, xe và hướng dẫn viên địa phương sẽ đón và đưa đoàn tham quan bên ngoài Tòa nhà quốc hội, Công viên Sư Tử Biển, nhà hát Victoria, khu Suntec city, Vườn Thực Vật, và Vườn Lan Quốc Gia- từ hàng trăm loại lan tự nhiên đã lai tạo thành hàng ngàn giống lan mới vô cùng độc đáo... Sau bữa tối, xe và hướng dẫn viên đưa đoàn về nhận phòng và nghỉ ngơi tại khách sạn 3 sao.</div>
                                    <br />
                                    <i className="glyphicon glyphicon-map-marker ic" > <span className="dd">SINGAPORE: (Ăn ba bữa)</span></i>
                                    <div className="mt">Ăn sáng tại khách sạn. Quý khách sẽ được dạo quanh khu vườn sinh thái đặc biệt mang tên Bay South Garden với hệ thống "siêu cây" khu vườn nằm trong dự án Gardens by the Bay, dự án công viên sinh thái lớn nhất Singapore nhằm nâng cao chất lượng cuộc sống, nhằm giữ được màu xanh cho đô thị sầm uất.Toàn bộ dự án có tổng diện tích 101ha, chia làm ba khu riêng biệt: Bay South, Bay East và Bay Central( chỉ tham quan khu Bay South-không bao gồm vé tham quan hai vườn thực vật). Tự do mua sắm tại xưởng sản xuất kim cương Diamond Industry và cửa hnagf dầu xanh Habour Mart. Ăn trưa món nướng Hàn Quốc. Buổi chiều, đoàn di chuyển đến Sentosa, quý khách sẽ tham quan bên trong Merlion Tower-bức tượng sư tử biển cao 37m và ngắm toàn bộ khung cảnh đảo Sentosa và bờ phía Nam Singapore từ miệng sư tử biển. Sau đó, quý khách tham quan S.E.A Aquarium, hay thủy cung lớn nhất Đông Nam Á, với 45 triệu lít nước, khu đại dương nhân tạo khổng lồ mô phỏng 49 môi trường sống khác nhau  cùng với thiết kế ấn tượng chắc chắn sẽ khiến du khách choáng ngợp với hơn 100.000 sinh vật biển thuộc 80.000 loài và 20.000 loài san hô đầy màu sắc. Sau khi ăn tối tại Sentosa, quý khách thưởng thức chương trình "Wings of time"-một chương trình hoàn toàn mới lạ và hấp dẫn lần đầu tiên có mặt tại Singapore với hiệu ứng phun lửa, robot phun nước áp lực cao kết hợp cùng đèn LED đầy màu sắc và hệ thống đèn lasez hiện đại tạo nên hiệu ứng 3D sống động và độc đáo. Chương trình được diễn tại bãi biển Siloso xinh đẹp cùng màn trình diễn pháo hoa hoàng tráng hứa hẹn sẽ để lại cho du khách những ấn tượng khó quên. Ăn tối và tự do nghỉ ngơi tại khách sạn</div>
                                    <br /><br />
                                    <i className="glyphicon glyphicon-map-marker ic" > <span className="dd">SINGAPORE-MALACCA: (Ăn ba bữa)</span></i>
                                    <div className="mt">Ăn sáng tại khách sạn. Trả phòng. Quý khách tham quan vườn chim Jurong-công viên chim lớn nhất, ấn tượng nhất trong khu vực Châu Á-Thái Bình Dương với hơn 9.000 người bạn lông vũ từ hơn 600 loài, thưởng thức màn trình diễn của những chú chim thông minh và đáng yêu. Sau khi dùng bữa trưa, xe đưa đoàn đến Tuas 2nd Link, gặp hướng dẫn viên Malaysia để bắt đầu chương trình tham quan tại Malaysia. Đoàn tiếp tục lên đường tới Malacca. Đến nơi, đoàn tham quan khu cảng biển nổi tiếng Santa De Santiago- Một trong những cảng lớn và giao lưu quan trọng của ba nước Malaysia-Singapore-Indonesia.Tiếp tục tham quan đền Cheng Hoon và nhà thờ thánh Paul. Sau bữa tối, nhận phòng nghỉ ngơi tại khách sạn ba sao</div>
                                    <br /><br />
                                    <i className="glyphicon glyphicon-map-marker ic" > <span className="dd">MALACCA-GENTING: (Ăn ba bữa)</span></i>
                                    <div className="mt">Ăn sáng tại khách sạn. Quý khách tham quan động Batu, tự do mua sắm tại các cửa hàng miễn thuế và các cửa hàng đặc sản địa phương. Sau đó, đoàn đi lên Cao nguyên Genting bằng cáp treo-Thành phố trong mây với độ cao khoảng 2000 mét so với mục nước biển. Đến nơi, đoàn tự do tham quan và thử vận may của mình tại Casino nổi tiếng nhất Đông Nam Á. Quý khách sẽ trở về Kuala Lumpur dùng bữa tối và nghỉ ngơi tại khách sạn ba sao.</div>
                                    <br /><br />
                                    <i className="glyphicon glyphicon-map-marker ic" > <span className="dd">MALACCA-GENTING: (Ăn ba bữa)</span></i>
                                    <div className="mt">Ăn sáng tại khách sạn. Sau đó quý khách tham quan cửa hàng Đá quý tham quan Đài tưởng niệm quốc gia, Quảng Trường Độc Lập với cột cờ cao nhất thế giới, tham quan bên ngoài cung điện Hoàng Gia và Tòa Nhà Quốc Hội. Sau đó, xe đưa du khách đến tự do mua sắm tại cửa hàng chocolate, cửa hàng đặc sản, cửa hàng đồng hồ và chụp hình bên ngoài tháp đôi Petronas. Sau bữa tối, nhận phòng và nghỉ ngơi.</div>
                                    <br /><br />
                                    <i className="glyphicon glyphicon-map-marker ic" > <span className="dd">KUALA LUMPUR: (Ăn sáng)</span></i>
                                    <div className="mt">Ăn sáng tại khách sạn. Quý khách tham quan thành phố mới Putraijaya-tham quan đền thờ Hồi Giáo, cầu Putraijaya, ngắm nhìn bên ngoài tòa nhà Chính Phủ. Sau đó, Quý khách tự do đến giờ ra sân bay đấp chuyến bay về nước. Về đến sân bay Tân Sơn Nhất, kết thúc chuyến tham quan. Trưởng đoàn chia tay và tạm biệt quý khách.</div>
                                </div>


                            </div>



                        </div>


                    </div>

                </div>

            </div >
        )
    }
}
const mapStateToProps = state => {
    return {
        tours: state.tours,
    }
};


export default connect(mapStateToProps, null)(detailTour);