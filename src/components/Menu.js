import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const menus = [
    {
        name: "Home",
        to: '/',
        exact: true,
    },
    {
        name: "About",
        to: '/about',
        exact: true,
    },
    {
        name: "Tours",
        to: '/tours',
        exact: true,
    },

];

const MenuLink = ({ label, to, activeOnly }) => {
    return (
        <Route path={to} exact={activeOnly} children={(match) => {
            var active = match ? ' nav-link' : '';
            return (
                <li className="nav-item">
                    <Link to={to} className={active}>
                        {label}
                    </Link>
                </li>
            )
        }} />
    )
}
class Menu extends Component {
    constructor(props) {
        super(props);
    }
    onLogout=()=>{
        localStorage.removeItem('user');
        window.location.reload();
    }
    showLogin = (user) => {
        var result = null;
        if (user.username !== '' ){
            result = (
                <li className="nav-item cta">
                    <a href="/" className="nav-link" style={{ float : "left"}}><span>{user.name}</span></a>
                    <a href="contact.html" className="nav-link nav-item cta" onClick={ this.onLogout } style={{ float : "left"}}><span>Log Out</span></a>
                </li>
            )
        }
        else {
            result = (<li className="nav-item cta">
                <a data-toggle="modal" data-target="#myModal" className="nav-link" style={{ float : "left"}}><span>Login</span></a>
                <a href="contact.html" className="nav-link nav-item cta" style={{ float : "left"}}><span>Sign In</span></a>
            </li>
            )
        }
        return result;
    }
    render() {
        var {userlogin} = this.props;
        var elmMenus = menus.map((menu, index) => {
            return (
                <MenuLink label={menu.name} to={menu.to} activeOnly={menu.exact} key={ index } />
            )
        });
        return (
            <div style={{ display: "block" }}>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light sleep" id="ftco-navbar">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">dirEngine.</a>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="oi oi-menu"></span> Menu
                        </button>
                        <div className="navbar-collapse collapse" id="ftco-nav" >
                            <ul className="navbar-nav ml-auto">


                                {elmMenus}

                                {this.showLogin(userlogin)}

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        userlogin: state.users
    }
};

export default connect(mapStateToProps, null)(Menu);