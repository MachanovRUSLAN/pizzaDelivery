import React from "react";
import Slider from "./component/Slider";
import Featured from "./component/Featured";
import Offer from "./component/Offer";

function Home() {
  return (
    <div className="text-white">
      <Slider />
      <Featured />
      <Offer />
    </div>
  );
}

export default Home;
