import React, { Component } from 'react';
import * as actions from './../../actions/index';
import { connect } from 'react-redux';
import axios from 'axios';

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            users: []
        }
    };
    // load data sever api
    componentDidMount = () => {
        axios.get(`http://localhost:5000/api/login`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
            .catch(error => console.log(error));
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
        var user = [];
        if (this.state.username !== '') {
            user = this.state.users.filter((useri) => {
                if (useri.username === this.state.username && useri.password === this.state.password) {
                    return useri;
                }
            });
        }
        if (user.length !== 0) {
            alert("login thành công");
            localStorage.setItem('user', JSON.stringify(user));
            var data = JSON.parse(localStorage.getItem('user'));
            console.log(data[0].username);
            this.props.onLogin(data[0].username, data[0].password, data[0].name);
        }
        else {
            alert("login không thành công");
        }
        window.location.reload();
    }
    render() {
        return (
            <div className="container">
                {/* Trigger the modal with a button */}

                {/* Modal */}
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        {/* Modal content*/}
                        <div className="modal-content">
                            <div className="modal-header">

                                <h4 className="modal-title">Đăng nhập</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>



                            <div className="modal-body">

                                <form onSubmit={this.onSubmit}>

                                    <div className="form-group">
                                        <label >Tên đăng nhập</label>
                                        <input type="text" name="username" className="form-control" id="" placeholder="Tên đăng nhập của bạn" onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label >Mật khẩu</label>
                                        <input type="password" name="password" className="form-control" id="" placeholder="**********" onChange={this.onChange} />
                                    </div>
                                    <button type="subbmit" className="btn btn-primary">Đăng nhập</button>

                                </form>

                            </div>



                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        userlogin: state.users
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLogin: (username, password, name) => {
            dispatch(actions.login(username, password, name));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(login);
