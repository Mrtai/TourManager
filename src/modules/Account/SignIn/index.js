import React from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Input, Icon } from "antd";
import { Link } from "react-router-dom";
import { login } from "../redux/actions";
import { NotificationManager } from 'react-notifications';
import ForgotPassword from "../ForgotPassword";

const FormItem = Form.Item;

const Index = props => {

  const dispatch = useDispatch();

  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();

    props.form.validateFields((err, values) => {
      if (!err) {
        dispatch(login({
          account: values,
          callback: (description, status_code) => {
            if (status_code === 200) {
              NotificationManager.success(description,'Đăng nhập thành công', 2000);
              props.form.resetFields();
            } else {
              props.form.resetFields();
              NotificationManager.warning(description,'Tài khoản chưa kích hoạt', 2000);
            }
          },
          errorCallback: (error) => {
            NotificationManager.error(error ,'Đăng nhập không thành công', 2000);
          }
        }));
      }
    });
  };

  return (
    <div className="gx-login-container">
      <div className="gx-login-content">
        <div className="gx-login-header gx-text-center">
          <h1 className="gx-login-title">ĐĂNG NHẬP</h1>
        </div>
        <Form onSubmit={handleSubmit} className="gx-login-form gx-form-row0">
          <FormItem>
            {getFieldDecorator("email", {
              rules: [{ required: true, message: "Vui lòng nhập tài khoản!" },
                      { type: 'email', message: 'Địa chỉ email không đúng!' }]
            })(
              <Input
                prefix={<Icon type="user" />}
                placeholder="Tài khoản/email"
              />
            )}
          </FormItem>
          <FormItem className="gx-mb-2">
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Vui lòng nhập mật khẩu!" }]
            })(
              <Input
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="Mật khẩu"
              />
            )}
          </FormItem>
          <FormItem>
            <ForgotPassword />
            <small>
            {" "}Tạo tài khoản mới tại{" "}
              <Link className="gx-text-primary" to="/account/signup">
                đây
              </Link>
            </small>
          </FormItem>
          <FormItem className="ft-form-ac gx-text-center">
            <Button className="gx-btn-red st-btn-login" htmlType="submit">
              Đăng nhập
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
};

export default Form.create()(Index);
