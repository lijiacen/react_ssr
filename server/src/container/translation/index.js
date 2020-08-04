import React from "react";
import { connect } from "react-redux";
import { getTranList } from "./store/actions";
import { Redirect } from "react-router-dom";

class Tran extends React.Component {
  getList() {
    const { tranList } = this.props;
    return tranList.map((l) => {
      return <div key={l.id}>{l.title}</div>;
    });
  }
  render() {
    const { isLogin } = this.props;
    return isLogin ? <div>{this.getList()}</div> : <Redirect to="/" />;
  }
  //服务器端渲染不执行
  componentDidMount() {
    //防止注水后的重复加载
    if (this.props.tranList.length === 0) {
      this.props.getTranList();
    }
  }
}

Tran.loadData = (store) => {
  //这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getTranList());
};

const mapStateToProps = (state) => {
  return { tranList: state.tran.tranList, isLogin: state.header.isLogin };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getTranList() {
      dispatch(getTranList());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tran);
