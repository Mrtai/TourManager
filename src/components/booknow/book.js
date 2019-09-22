import React, { Component } from 'react';
import './../../style1.css';
class book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n: '',
        }
    }

    onChange = (event) => {
        //console.log(event.target.value);
        this.setState({
            n: event.target.value
        })

    }
    showForm = () => {
        var n = this.state.n;
        var result = [];
        for (var i = 0; i < n; i++) {
            result.push(

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <span>Người lớn</span>
                        <input type="text" className="form-control" name="txtHoTen" onChange={this.onChange} />
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <span>Trẻ em</span>
                        <input type="text" className="form-control" name="txtHoTen" />
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <span>Trẻ nhỏ</span>
                        <input type="text" className="form-control" name="txtHoTen" />
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <span>Em bé</span>
                        <input type="text" className="form-control" name="txtHoTen" />
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <span>Số khách</span>
                        <input type="text" className="form-control" name="txtHoTen" />
                    </div>
                </div>
            );
            return result;
        };
    }
    render() {
        let f = this.showForm();
        var {  match } = this.props;
        console.log(match);
        return (
            <div>
                <div className="container" style={{ textAlign: "left"}}>
                    <div className="row">

                        <div className=" container-fuild col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <div id="circle" ><p className="stt"><br />1</p></div>
                                <span className="tt">Nhập thông tin</span>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <div id="circle" ><br />2</div>
                                <span className="tt">Xác nhận</span>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <div id="circle"><br />3</div>
                                <span className="tt">Thanh toán</span>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className=" pn"><br /><br />THÔNG TIN TOUR<br /></div>
                            <hr />
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3" >
                                <img src="https://travel.com.vn/Images/tour/tfd_20150529_sea qua.jpg" width="230px" height="220px" />
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="t">Singapore-Malaysia(Máy bay. Khách sạn 4*&3*. Tour tiêu chuẩn)<br /><br /><br /></div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <i className="glyphicon glyphicon-th-list ico">&nbsp;<span className="ct">NDSGN580-107-110919VJ-D-O</span></i><hr />
                                        <i className="glyphicon glyphicon-calendar ico ">&nbsp;<span className="ct">Ngày khởi hành:10/08/2019</span></i><hr />
                                        <i className="glyphicon glyphicon-dashboard ico">&nbsp;<span className="ct">Số ngày:3</span></i><hr />
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <i className="glyphicon glyphicon-modal-window ico ">&nbsp;    <span className="ct">Số chỗ còn nhận:2</span></i><hr />
                                        <i className="glyphicon glyphicon-calendar ico">&nbsp;    <span className="ct">Ngày khác</span></i><hr />
                                        <i className="glyphicon glyphicon-th-list ico">&nbsp;    <span className="ct">Giá:20.000.000 đ</span></i><hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ly"><br />
                        <div className="">Khách nữ từ 55 tuổi trở lên, khi nam từ 60 tuổi trở lên đi tour
                        một mình và khách mang thai trên 4 tháng( 16 tuần ) vui lòng đăng ký tour trực tiếp tại
                        văn phòng. Không áp dụng đăng ký tour online với khách từ 70 tuổi trở lên.</div>
                        <br />
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="pn">GIÁ TOUR CƠ BẢN</div>
                        <br />
                        <table className="table table-hover ">
                            <thead>
                                <tr>
                                    <th>Người lớn(Từ 12 tuổi trở lên)</th>
                                    <th>Trẻ em(Từ 5 đến 12 tuổi)</th>
                                    <th>Trẻ nhỏ(Từ 2 đến dưới 5 tuổi)</th>
                                    <th>Em bé(Dưới 2 tuổi)</th>
                                    <th>Phụ thu phòng đơn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>3.590.000 đ</td>
                                    <td>2.492.500 đ</td>
                                    <td>1.800.000 đ</td>
                                    <td>220.000 đ</td>
                                    <td>800.000 đ</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="pn">THÔNG TIN LIÊN LẠC</div>

                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <form >
                                <div className="form-group">
                                    <span>Họ tên(*)</span>
                                    <input type="text" className="form-control" name="txtHoTen" />
                                    <span>Di động(*)</span>
                                    <input type="text" className="form-control" name="txtHoTen" />
                                    <span>Địa chỉ</span>
                                    <input type="text" className="form-control" name="txtHoTen" />
                                </div>
                            </form>
                        </div>

                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <form >
                                <div className="form-group">
                                    <span>Email(*)</span>
                                    <input type="text" className="form-control" name="txtHoTen" />
                                    <span>Điện thoại</span>
                                    <input type="text" className="form-control" name="txtHoTen" />
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                            <span>Người lớn</span>
                                            <input type="text" className="form-control" name="txtHoTen" onChange={this.onChange} />
                                        </div>
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                            <span>Trẻ em</span>
                                            <input type="text" className="form-control" name="txtHoTen" />
                                        </div>
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                            <span>Trẻ nhỏ</span>
                                            <input type="text" className="form-control" name="txtHoTen" />
                                        </div>
                                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                            <span>Em bé</span>
                                            <input type="text" className="form-control" name="txtHoTen" />
                                        </div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                            <span>Số khách</span>
                                            <input type="text" className="form-control" name="txtHoTen" />
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                            <form>
                                <div className="form-group">
                                    <span>Ghi chú</span>
                                    <input type="textarea" className="form-control" rows="5" />
                                </div>
                            </form>
                        </div>
                        <br /><br /><br />

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="la">Người lớn sinh từ:13/09/1949 đến 13/09/2007</div>
                                <div className="la">Trẻ nhỏ sinh từ 14/09/2014 đến 13/09/2017</div>
                            </div>

                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="la">Trẻ em sinh từ 14/09/2007 đến 13/09/2014</div>
                                <div className="la">Em bé sinh từ 14/09/2017 đến 05/09/2019</div>
                            </div>
                            <br /><br /><br />
                            <div className="radio">
                                <input type="radio" name="" id="input" value="" checked="checked" />
                                <span className="nn">Nhập danh sách khách hàng đi tour</span>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ border: "solid 1px" }}>
                            <div className="pn">DANH SÁCH KHÁCH HÀNG ĐI TOUR</div>
                            <div class="row">


                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 tuyenne ">
                                    Loại người
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 tuyenne">

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            Họ và tên:
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <input type="text" name="" id="input" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 ">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            Gioi tính:
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 tuyenne">
                                                <select name="" id="input" class="form-control" required="required">
                                                    <option value="">Nam</option>
                                                    <option value="">Nữ</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 ">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            Độ tuổi:
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 tuyenne">
                                                <select name="" id="input" class="form-control" required="required">
                                                    <option value="">Người lớn</option>
                                                    <option value="">Trẻ em</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 ">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            Phòng đơn:
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 tuyenne">
                                                <select name="" id="input" class="form-control" required="required">
                                                    <option value="">Có</option>
                                                    <option value="">Không</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            Ngày sinh:
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 tuyenne">
                                                <select name="" id="input" class="form-control ngaysinh" required="required">
                                                    <option value="">Ngày</option>
                                                </select>
                                            </div>
                                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 tuyenne">
                                                <select name="" id="input" class="form-control ngaysinh" required="required">
                                                    <option value="">Tháng</option>
                                                </select>
                                            </div>
                                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 tuyenne">
                                                <select name="" id="input" class="form-control ngaysinh" required="required">
                                                    <option value="">Năm</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 tuyenne" style={{ border: "solid 1px", height: "50px" }}>
                                    <p className="tuyen2">Trị giá</p>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 tuyenne" style={{ height: "50px" }} >
                                    <p className="tuyen2">Tổng cộng</p>
                                </div>

                            </div>
                        </div>
                        <div className="form-group"> {this.showForm}</div>



                        <br /><br /><br /><br />

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 httt"><br />
                            <div className="pn">XIN QUÝ KHÁCH VUI LÒNG CHỌN HÌNH THỨC THANH TOÁN</div><br /><br /><br /><br />
                            <div className="radio nn">
                                <input className="nn" type="radio" name="" id="input" checked="checked" />
                                <span >Tiền mặt</span>
                            </div>
                            <div className="radio nn">
                                <input type="radio" name="" />
                                <span>Chuyển khoản</span>
                            </div>
                            <div className="radio nn">
                                <input className="nn" type="radio" name="" />
                                <span >ATM/Internet Banking</span>
                            </div>
                            <div className="radio nn">
                                <input className="nn" type="radio" name="" />
                                <span >Thẻ tín dụng(Cơ hội nhận Sim du lịch Nhật 4G hoặc Mèo may mắn Maneki Neko khi thanh toán bằng thẻ JCB)</span>
                            </div>
                            <div className="radio nn">
                                <input className="nn" type="radio" name="" />
                                <span >Thanh toán bằng quét QRCode(Cơ hội giảm ngay 500.000 đ cho 500 khách hàng đầu tiên và 300.000 đ cho 300 khách hàng tiếp theo thanh toán bằng tính năng QR Pay</span>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"><hr className="hr" />
                            <div className="nn1">Quý khách vui lòng thanh toán tại văn phòng trên toàn quốc.</div>
                            <div className="nn1">Lưu ý quý khách nên liên lạc trước để biết rõ hơn về giờ làm việc và các hồ sơ chuẩn bị khi thanh toán<br /><br /></div>
                            <br /><br /><br /><br /><br /><br /><br />
                        </div>
                        <div className="pn">ĐIỀU KHOẢN BẮT BUỘC KHI ĐĂNG KÝ ONLINE</div><br /><br /><br />
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 httt">
                            <div className="ov">
                                <div className="indam">ĐIỀU KIỆN BÁN VÉ CÁC CHƯƠNG TRÌNH DU LỊCH TRONG NƯỚC</div>
                                <div className="indam">I.GIÁ VÉ DU LỊCH</div>
                                <div>Giá vé du lịch được tính theo tiền Đồng (Việt Nam- VNĐ).
                                     Trường hợp khách thanh toán bằng USD sẽ được quy đổi ra VNĐ theo tỉ
                                     giá của ngân hàng Đầu Tư và Phát Triển Việt Nam-
                                     Chi nhánh TP.HCM tại thời điểm thanh toán.
                                    </div>
                                <p>Giá vé chỉ bao gồm những khoản được liệt kê một cách rõ ràng trong phần "Bao gồm" trong các chương trình du lịch. Không có nghĩa vụ thanh toán bất cứ chi phí nào không nằm trong phần "Bao gồm".</p>
                                <div className="indam">II.GIÁ DÀNH CHO TRẺ EM</div>
                                <p>- Trẻ em dưới 5 tuổi:  không thu phí dịch vụ, bố mẹ tự lo cho bé và thanh toán các chi phí phát sinh (đối với các dịch vụ tính phí theo chiều cao…). Hai người lớn chỉ được kèm 1 trẻ em dưới 5 tuổi, trẻ em thứ 2 sẽ đóng phí theo qui định dành cho độ tuổi từ 5 đến dưới 12 tuổi và phụ thu phòng đơn. Vé máy bay, tàu hỏa, phương tiện vận chuyển công cộng mua vé theo qui định của các đơn vị vận chuyển (nếu có)</p>
                                <p>- Trẻ em từ 5 tuổi đến dưới 12 tuổi:  50% giá tour người lớn đối với tuyến xe, 75% giá tour người lớn đối với tuyến có vé máy bay (không có chế độ giường riêng). Hai người lớn chỉ được kèm 1 trẻ em từ 5 - dưới 12 tuổi, em thứ hai trở lên phải mua 1 suất giường đơn.</p>
                                <p>- Trẻ em từ 12 tuổi trở lên: mua một vé như người lớn.</p>
                                <div className="indam">III.THANH TOÁN</div>
                                <p>Khi thanh toán, Quý khách vui lòng cung cấp đầy đủ thông tin và đặt cọc ít nhất 50% tổng số tiền tour để giữ chỗ, số tiền còn lại Quý khách sẽ thanh toán trước ngày khởi hành 05 ngày làm việc (tour ngày thường) và trước 10 ngày làm việc (tour dịp Lễ, Tết)”.</p>
                                <p>Thanh toán bằng tiền mặt hoặc chuyển khoản tới tài khoản ngân hàng của công ty</p>
                                <p>Tên tài khoản: DULICHVIET</p>
                                <p>Ngân hàng:Ngoại Thương Việt Nam – Chi nhánh TPHCM</p>
                                <p>Địa chỉ:29 Vân Đồn, Quận 1, TPHCM</p>
                                <p>Tài khoản: 007 231 902 1195</p>
                                <p>Việc thanh toán được xem là hoàn tất khi Vietravel nhận được đủ tiền vé du lịch trước lúc khởi hành hoặc theo hợp đồng thỏa thuận giữa hai bên. Bất kỳ mọi sự thanh toán chậm trễ dẫn đến việc hủy dịch vụ không thuộc trách nhiệm của Vietravel.</p>
                                <p>Khách hàng có nhu cầu xuất hóa đơn, vui lòng cung cấp thông tin xuất hóa đơn ngay tại thời điểm đăng ký. Vietravel có trách nhiệm xuất hóa đơn cho khách hàng trong vòng 7 ngày sau khi tour kết thúc.</p>
                                <p>DÀNH CHO KHÁCH HÀNG ĐĂNG KÝ TRÊN TRANG WWW.TRAVEL.COM.VN THANH TOÁN CHUYỂN KHOẢN</p>
                                <p>Khi thực hiện việc chuyển khoản, Quý khách vui lòng ghi rõ Tên họ, Số điện thoại và Nội dung chuyển cho chương trình du lịch cụ thể đã được Quý khách chọn đăng ký. Sau khi thực hiện việc chuyển khoản, Quý khách vui lòng gửi Ủy Nhiệm Chi về công ty Vietravel theo địa chỉ email sales@vietravel.com và liên hệ với nhân viên phụ trách tuyến để nhận được Vé du lịch chính thức từ công ty Vietravel. Vietravel sẽ không giải quyết các trường hợp hệ thống tự động hủy phiếu đăng ký nếu Quý khách không thực hiện đúng qui định trên.</p>
                                <div className="indam">IV.HỦY VÉ VÀ PHÍ HỦY VÉ DU LỊCH</div>
                                <p>1.Trường hợp bị hủy bỏ do Vietravel:</p>
                                <p>Nếu Vietravel không thực hiện được chuyến du lịch, Vietravel phải báo ngay cho khách hàng biết và thanh toán lại cho khách hàng toàn bộ số tiền khách hàng đã đóng trong vòng 3 ngày kể từ lúc việc thông báo hủy chuyến du lịch bằng tiền mặt hoặc chuyển khoản.</p>
                                <p>2.Trường hợp bị hủy bỏ do khách hàng:</p>
                                <p>Sau khi đóng tiền, nếu Quý khách muốn chuyển/hủy tour xin vui lòng mang Vé Du Lịch đến văn phòng đăng ký tour để làm thủ tục chuyển/hủy tour và chịu mất phí theo quy định của Vietravel. Không giải quyết các trường hợp liên hệ chuyển/hủy tour qua điện thoại.</p>
                                <p>*Đối với ngày thường:</p>
                                <p>-Được chuyển sang các tuyến du lịch khác trước ngày khởi  hành 20 ngày : Không mất chi phí.</p>
                                <p>-Hủy hoặc chuyển sang các chuyến du lịch khác ngay sau khi đăng ký đến từ 15 - 19 ngày trước ngày khởi hành: Chi phí chuyển/hủy tour: 50% tiền cọc tour.</p>
                                <p>*Đối với ngày lễ, Tết: </p>
                                <p>-Được chuyển sang các tuyến du lịch khác trước ngày khởi  hành 30 ngày : Không mất chi phí.</p>
                                <p>-Hủy hoặc chuyển sang các chuyến du lịch khác ngay sau khi đăng ký đến từ 25 - 29 ngày trước ngày khởi hành: Chi phí chuyển/hủy tour: 50% tiền cọc tour.</p>
                                <p>* Các tour ngày Lễ, Tết là các tour có thời gian diễn ra rơi vào một trong các ngày lễ, tết theo qui định.</p>
                                <p>*Thời gian hủy tour được tính cho ngày làm việc, không tính thứ 7, Chủ Nhật và các ngày Lễ, Tết.</p>
                                <p>DÀNH CHO KHÁCH HÀNG ĐĂNG KÝ TRÊN TRANG WWW.TRAVEL.COM.VN THANH TOÁN TRỰC TUYẾN:</p>
                                <p>Khách hàng hủy Vé du lịch trong thời điểm ngày Thường và Lễ Tết theo đúng những qui định trên, trong trường hợp khách thanh toán trực tuyến, nếu hủy Vé du lịch khách hàng sẽ chịu toàn bộ phí ngân hàng cho việc thanh toán tiền Vé du lịch. Việc hoàn trả tiền cho khách sẽ được Vietravel thực hiện ngay sau khi ngân hàng thông báo tiền đã vào tài khoản của Vietravel.</p>
                                <p>3.Trường hợp bất khả kháng:</p>
                                <p>Nếu chương trình du lịch bị hủy bỏ hoặc thay đổi bởi một trong hai bên vì một lý do bất khả kháng (hỏa hoạn, thời tiết, tai nạn, thiên tai, chiến tranh, dịch bệnh, hoãn, dời, hủy chuyến hoặc thay đổi khác của các phương tiện vận chuyển công cộng hoặc các sự kiến bất khả kháng khác theo quy định pháp luật…), thì hai bên sẽ không chịu bất kỳ nghĩa vụ bồi hoàn các tổn thất đã xảy ra và không chịu bất kỳ trách nhiệm pháp lý nào. Tuy nhiên mỗi bên có trách nhiệm cố gắng tối đa để giúp đỡ bên bị thiệt hại nhằm giảm thiểu các tổn thất gây ra vì lý do bất khả kháng.</p>
                                <p>4.Thay đổi lộ trình: </p>
                                <p>Tùy theo tình hình thực tế, Vietravel giữ quyền thay đổi lộ trình, sắp xếp lại thứ tự các điểm tham quan hoặc hủy bỏ chuyến đi du lịch bất cứ lúc nào mà Vietravel thấy cần thiết vì sự thuận tiện hoặc an toàn cho khách hàng.</p>
                                <div>V.NHỮNG YÊU CẦU ĐẶC BIỆT TRONG CHUYẾN DU LỊCH</div>
                                <p>Các yêu cầu đặc biệt của Quý khách phải được báo trước cho Vietravel ngay tại thời điểm đăng ký. Vietravel sẽ cố gắng đáp ứng những yêu cầu này trong khả năng của mình song sẽ không chịu trách nhiệm về bất kỳ sự từ chối cung cấp dịch vụ từ phía các nhà vận chuyển, khách sạn, nhà hàng và các nhà cung cấp dịch vụ độc lập khác.</p>
                                <div className="indam">VI.KHÁCH SẠN</div>
                                <p>Khách sạn được cung cấp trên cơ sở những phòng có hai giường đơn (TWN) hoặc một giường đôi (DBL) tùy theo cơ cấu phòng của các khách sạn. Khách sạn do Vietravel đặt cho các chương trình tham quan có tiêu chuẩn tương ứng với các mức giá vé mà khách chọn khi đăng ký đi du lịch. Nếu cần thiết thay đổi về bất kỳ lý do nào, khách sạn thay thế sẽ tương đương với tiêu chuẩn của khách sạn ban đầu và sẽ được báo cho du khách trước khi khởi hành. Những yêu cầu đặc biệt của khách hàng nếu thông báo trước cho Vietravel sẽ được đáp ứng tùy theo khả năng cung cấp của khách sạn và khách hàng phải trả thêm tiền đối với các yêu cầu này (nếu có). Vietravel có quyền không đáp ứng những yêu cầu này nếu khách sạn từ chối cung cấp dịch vụ. Thời gian nhận phòng theo qui định tại các khách sạn là sau 14:00 và phải trả phòng trước 12:00. Đối với các trường hợp khách lưu trú tại hệ thống khách sạn/Resort 5 sao (Vinpearl, FLC, Grand Ho Tram Strip…) tuân thủ theo điều kiện hủy phạt của khách sạn/Resort cho từng thời điểm.</p>
                                <div className="indam">VII.VẬN CHUYỂN</div>
                                <p>Phương tiện vận chuyển tùy thuộc theo từng chương trình du lịch.</p>
                                <p>Với chương trình đi bằng xe: xe máy lạnh (4, 7, 15, 25, 35, 45 chỗ) sẽ được Vietravel sắp xếp tùy theo số lượng khách từng đoàn, phục vụ suốt chương trình tham quan</p>
                                <p>Với chương trình đi bằng xe lửa - máy bay - tàu cánh ngầm (phương tiện vận chuyển công cộng), trong một số chương trình các nhà cung cấp dịch vụ có thể thay đổi giờ khởi hành mà không báo trước, việc thay đổi này sẽ được Vietravel thông báo cho khách hàng nếu thời gian cho phép.</p>
                                <p>Vietravel không chịu trách nhiệm bồi hoàn và trách nhiệm pháp lý với những thiệt hại về vật chất lẫn tinh thần do việc chậm trễ, thay đổi giờ giấc khởi hành của các phương tiện vận chuyển công cộng hoặc sự chậm trễ do chính hành khách gây ra. Vietravel chỉ thực hiện hành vi giúp đỡ để giảm bớt tổn thất cho hành khách.</p>
                                <div className="indam">VIII.HÀNH LÝ</div>
                                <p>Hành lý gọn nhẹ, với các chương trình sử dụng dịch vụ hàng không, hành lý miễn cước sẽ do các hãng hàng không qui định. Vietravel không chịu trách nhiệm về sự thất lạc, hư hỏng hành lý hoặc bất kỳ vật dụng gì của du khách trong suốt chuyến đi, du khách tự bảo quản hành lý của mình. Nếu khách hàng bị mất hay thất lạc hành lý thì Vietravel sẽ giúp hành khách liên lạc và khai báo với các bộ phận liên quan truy tìm hành lý bị mất hay thất lạc. Việc bồi thường hành lý bị mất hay thất lạc sẽ theo qui định của các đơn vị cung cấp dịch vụ hoặc các đơn vị bảo hiểm (nếu có).</p>
                                <div>IX.BẢO HIỂM DU LỊCH</div>
                                <p>Giá dịch vụ du lịch trọn gói đã bao gồm bảo hiểm du lịch trong nước với mức đền bù cao nhất là 120.000.000đ/khách Việt Nam/vụ cho nhân mạng và 12.000.000 VNĐ/khách Việt Nam/vụ cho hành lý .</p>
                                <p>Điều kiện, điều khoản bảo hiểm: Theo quy tắc bảo hiểm khách du lịch trong nước QĐ số: 001321/2006 – BM/BHCN.</p>
                                <p>Số hotline tư vấn về các điều kiện, điều khoản bảo hiểm 0938 30 1234</p>
                                <p>X.Trong quá trình thực hiện, nếu xảy ra tranh chấp sẽ được giải quyết trên cơ sở thương lượng trong thời hạn 30 ngày kể từ ngày một trong hai bên đưa tranh chấp ra thương lượng. Hết thời hạn này nếu tranh chấp không được giải quyết hoặc một trong hai bên không đồng ý với kết quả thương lượng thì có quyền đưa tranh chấp ra giải quyết tại Tòa án thẩm quyền.</p>
                                <p>* Vé du lịch được xem như Hợp đồng lữ hành và được lập thành 2 bản, mỗi bên giữ một bản, có giá trị như nhau.</p>
                            </div>
                        </div>

                        <div className="checkbox nn"><input type="checkbox" />Tôi đồng ý với các điều kiện trên</div> <br /><br /><br />

                        <button type="button" className="btn btn-warning btd">Đặt ngay</button><br /><br /><br />

                    </div>
                </div>
            </div>

        );
    }
}


export default book;