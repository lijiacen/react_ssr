import React from "react";
import Header from "../../components/Header";
import { connect } from "react-redux";
import { getHomeList } from "./store/actions";

class Home extends React.Component {
  getList() {
    const { newsList } = this.props;
    return newsList.map((l) => {
      return <div key={l.id}>{l.title}</div>;
    });
  }
  render() {
    return (
      <div>
        <Header />
        {this.getList()}
      </div>
    );
  }
  //服务器端渲染不执行
  componentDidMount() {
    //防止注水后的重复加载
    if (this.props.newsList.length === 0) {
      this.props.getHomeList();
    }
  }
}

Home.loadData = (store) => {
  //这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList(true));
};

const mapStateToProps = (state) => {
  return { newsList: state.home.newsList };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getHomeList() {
      dispatch(getHomeList());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
