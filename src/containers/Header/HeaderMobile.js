import React, { useState } from "react";
import { Row, Col, Icon, Drawer, Badge } from "antd";
import { Link } from "react-router-dom";
import CustomScrollbars from "utils/CustomScrollbars";

const HeaderMobile = React.memo((props) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <div className="st-menu-mobile gx-text-center">
      <Row>
        <Col onClick={showDrawer} className="gx-border-right-white" span={3}>
          <Icon
            className="gx-pl-2 gx-pointer gx-text-white"
            type="unordered-list"
          />
        </Col>
        {props.isLogin !== null ?
          <React.Fragment>
              <Col span={7} className="gx-border-right-white">
                <div className="st-block-menu-mobile">
                  <Link className="gx-text-white" to="/account/info">
                    Tài khoản
                  </Link>
                </div>
              </Col>
              <Col span={7} className="gx-border-right-white">
                <div onClick={props.logOut}  className="st-block-menu-mobile gx-text-white">
                    Đăng xuất
                </div>
              </Col>
          </React.Fragment> :
          <React.Fragment>
              <Col span={7} className="gx-border-right-white">
                <div className="st-block-menu-mobile">
                  <Link className="gx-text-white" to="/signin">
                    Đăng nhập
                  </Link>
                </div>
              </Col>
              <Col span={7} className="gx-border-right-white">
                <div className="st-block-menu-mobile">
                  <Link className="gx-text-white" to="/signup">
                    Đăng ký
                  </Link>
                </div>
              </Col>
          </React.Fragment>
        }
        <Col span={7}>
          <div className="st-block-menu-mobile">
            <Link className="gx-text-white gx-mr-2" to="/cart">
              <span>
                <i className="icon icon-shopping-cart" />
              </span>
            </Link>
            <Badge showZero count={props.totalCart} />
          </div>
        </Col>
      </Row>
      <Drawer
        title="Danh mục sản phẩm"
        className="st-drawer-menu"
        closable={false}
        onClose={onClose}
        placement="left"
        visible={visible}
      >
        <div className="gx-pl-3 custom-popover-scroll">
          <CustomScrollbars className="gx-custom-popover-scroll">
            <ul className="gx-sub-popover">
              <li>
                <Link to="/">cate 1</Link>
              </li>
              <li>
                <Link to="/">cate 1</Link>
              </li>
              <li>
                <Link to="/">cate 1</Link>
              </li>
              <li>
                <Link to="/">cate 1</Link>
              </li>
              <li>
                <Link to="/">cate 1</Link>
              </li>
              <li>
                <Link to="/">cate 1</Link>
              </li>
              <li>
                <Link to="/">cate 1</Link>
              </li>
              <li>
                <Link to="/">cate 1</Link>
              </li>
              <li>
                <Link to="/">cate 1</Link>
              </li>
              <li>
                <Link to="/">cate 1</Link>
              </li>
              <li>
                <Link to="/">cate 1</Link>
              </li>
              <li>
                <Link to="/">cate 1</Link>
              </li>
              <li>
                <Link to="/">cate 1</Link>
              </li>
            </ul>
          </CustomScrollbars>
        </div>
      </Drawer>
    </div>
  );
});
export default HeaderMobile;
