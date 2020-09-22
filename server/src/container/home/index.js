import React from "react";
import { connect } from "react-redux";
import { getHomeList } from "./store/actions";
import styles from "./test.css";

class Home extends React.Component {
  getList() {
    const { newsList } = this.props;
    return newsList.map(l => {
      return <div key={l.id}>{l.title}</div>;
    });
  }
  render() {
    return <div className={styles.test}>{this.getList()}</div>;
  }

  UNSAFE_componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.css.push(styles._getCss());
    }
  }

  //服务器端渲染不执行
  componentDidMount() {
    //防止注水后的重复加载
    if (this.props.newsList.length === 0) {
      this.props.getHomeList();
    }
  }
}

const mapStateToProps = state => {
  return { newsList: state.home.newsList };
};
const mapDispatchToProps = dispatch => {
  return {
    getHomeList() {
      dispatch(getHomeList());
    }
  };
};
const HomeExport = connect(mapStateToProps, mapDispatchToProps)(Home);

HomeExport.loadData = store => {
  //这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList());
};

export default HomeExport;
