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
  componentDidMount() {
    this.props.getHomeList();
  }
}
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
