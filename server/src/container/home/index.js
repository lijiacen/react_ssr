import React from "react";

const Home = () => {
  return (
    <div>
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
