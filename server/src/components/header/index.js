import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login, logout } from "./store/actions";
import styles from "./test.css";

class Header extends React.Component {
  UNSAFE_componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.css.push(styles._getCss());
    }
  }
  render() {
    return (
      <div className={styles.test}>
        <Link to="/">首页</Link>
        <br />
        {!this.props.isLogin ? (
          <div onClick={this.props.handleLoginClick}>登录</div>
        ) : (
          <>
            <Link to="/translation">翻译列表</Link>
            <br />
            <div onClick={this.props.handleLogoutClick}>退出</div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isLogin: state.header.isLogin };
};
const mapDispatchToProps = dispatch => {
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
