import React, { Component } from 'react';
import * as actions from './../../actions/index';
import { connect } from 'react-redux';
import axios from 'axios';
import 'antd/dist/antd.css';
import { isMobilePhone } from 'validator';
import { Form, Icon, Input, Button, Checkbox, Radio } from 'antd';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            user_id: '',
            name: ''
        }
    };
    checkPhoneNumber = (rules, values, callback) => {
        if (!values) {
            callback('Please input the phone number')
        }
        else if (!isMobilePhone(values, 'vi-VN')) {
            callback('invalid phone number');
        }
        else {
            callback();
        }
    }
    //== lay data input
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    // submit form
    onSubmit = (event) => { //gọi hàm dòng 52
        event.preventDefault();
        this.props.form.validateFields();
        this.props.form.validateFields((err, values) => {
            this.props.onSignUp(values);
        });
        //console.log(this.state);
        window.location.reload();
    }
    render() {
        //console.log(this.props.usersignup);
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="container">
                {/* Trigger the modal with a button */}

                {/* Modal */}
                <div className="modal fade" id="myModalSignUp" role="dialog">
                    <div className="modal-dialog">
                        {/* Modal content*/}
                        <div className="modal-content">
                            <div className="modal-header">

                                <h4 className="modal-title">Sign Up</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>



                            <div className="modal-body">


                                <Form onSubmit={this.onSubmit} className="login-form">

                                    <Form.Item className="col-first_name">
                                        {getFieldDecorator('username', {
                                            rules: [{ required: true, message: 'Please input your first name!' }],
                                        })(
                                            <Input
                                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                placeholder="User name"
                                            />,
                                        )}
                                    </Form.Item>

                                    <Form.Item className="col-password">
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: 'Please input your Password!' }],
                                        })(
                                            <Input
                                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                type="password"
                                                placeholder="Password"
                                            />,
                                        )}
                                    </Form.Item>

                                    <Form.Item className="col-last_name">
                                        {getFieldDecorator('user_id', {
                                            rules: [{ required: true, message: 'Please input your last name!' }],
                                        })(
                                            <Input
                                                prefix={<Icon type="number" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                placeholder="123"
                                            />,
                                        )}
                                    </Form.Item>

                                    <Form.Item className="col-last_name">
                                        {getFieldDecorator('name', {
                                            rules: [{ required: true, message: 'Please input your last name!' }],
                                        })(
                                            <Input
                                                prefix={<Icon type="name" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                placeholder="Lê Thanh Tuyên"
                                            />,
                                        )}
                                    </Form.Item>

                                    <Form.Item className="col-gender">
                                        {getFieldDecorator('gender', {

                                            rules: [{ required: true, message: 'Please input your last name!' }],

                                        })(
                                            <Radio.Group name="radiogroup" >

                                                <Radio value={1}>Nam</Radio>
                                                <Radio value={2}>Nữ</Radio>

                                            </Radio.Group>
                                        )}
                                    </Form.Item>






                                    <Form.Item className="col-email">
                                        {getFieldDecorator('email', {
                                            rules: [{ required: true, message: 'Please input your Email!' }],
                                        })(
                                            <Input
                                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                type="Email"
                                                placeholder="Email"
                                            />,
                                        )}
                                    </Form.Item>

                                    <Form.Item className="col-phone_number">
                                        {getFieldDecorator('phone', {
                                            rules: [
                                                { validator: this.checkPhoneNumber }]
                                        })(
                                            <Input
                                                prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                placeholder="Phone number"
                                            />,
                                        )}
                                    </Form.Item>

                                    <Form.Item>
                                        {getFieldDecorator('remember', {
                                            valuePropName: 'checked',
                                            initialValue: true,
                                        })(<Checkbox>Remember me</Checkbox>)}
                                        <a className="login-form-forgot" href="">
                                            Forgot password
                                        </a>
                                        <Button type="primary" htmlType="submit" className="login-form-button" >
                                            Sing Up
                                        </Button>
                                        Or <a href="">register now!</a>
                                    </Form.Item>
                                </Form>
                                );

                            </div>



                            <div className="modal-footer">

                                <button type="button" className="btn btn-default" data-dismiss="modal" data-toggle="modal" data-target="#myModal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const WrappedSignUpForm = Form.create()(SignUp);

const mapStateToProps = state => {
    return {
        usersignup: state.usersignup
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSignUp: (values) => {
            dispatch(actions.SignUp(values));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedSignUpForm);
