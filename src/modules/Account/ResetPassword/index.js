import React from 'react';
import { notification, Modal, Button, Form, Input, Icon } from 'antd';
import { useDispatch } from 'react-redux';
import { resetPassword } from 'modules/Account/redux/actions';
import { getURLParameter } from 'base/helper/getURLParameter';
import { NotificationManager } from 'react-notifications';

const FormItem = Form.Item;

const Index = (props) => {
  const dispatch = useDispatch();

  const token = getURLParameter("key");

  const { getFieldDecorator } = props.form;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        dispatch(resetPassword({
          info: {
            ...values,
            token
          },
          callback: (message) => {
            props.form.resetFields();
            NotificationManager.success('Đổi mật khẩu thành công', message, 2000);
            setTimeout(() => {
              props.route.history.push("/account/signin");
            }, 2000);
          },
          errorCallback: (error) => {
            NotificationManager.error(error, 'Đổi mật khẩu không thành công', 2000);
          }
      }));
     }
    });
  }

  return(
    <div className="gx-login-container">
      <div className="gx-login-content">
        <div className="gx-login-header gx-text-center">
          <h1 className="gx-login-title">ĐỔI MẬT KHẨU</h1>
        </div>
        <Form onSubmit={handleSubmit} className="gx-login-form gx-form-row0">
          <FormItem className="gx-mb-3">
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Vui lòng nhập mật khẩu!" }]
            })(
              <Input
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="Mật khẩu mới"
              />
            )}
          </FormItem>
          <FormItem className="ft-form-ac gx-text-center">
            <Button className="gx-btn-red st-btn-login" htmlType="submit">
              Đổi mật khẩu
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}

export default Form.create()(Index);
