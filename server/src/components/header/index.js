import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login, logout } from "./store/actions";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">首页</Link>
        <br />
        {!this.props.isLogin ? (
          <div onClick={this.props.handleLoginClick}>登录</div>
        ) : (
          <>
            <Link to="/login1">翻译列表</Link>
            <br />
            <div onClick={this.props.handleLogoutClick}>退出</div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isLogin: state.header.isLogin };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleLoginClick() {
      dispatch(login());
    },
    handleLogoutClick() {
      dispatch(logout());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
