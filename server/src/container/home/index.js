import React from "react";
import Header from "../../components/Header";
const Home = () => {
  return (
    <div>
      <Header />
      <div>home</div>
      <button
        onClick={() => {
          alert(123);
        }}
      >
        同构的React
      </button>
    </div>
  );
};

export default Home;
