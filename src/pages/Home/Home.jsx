import React from "react";
import wave from "../../assets/BG Wave.svg";
import Hero from "./compo/Hero";
import NumbersHome from "./compo/NumbersHome";

const Home = () => {
  return (
    <>
      <div className="relative">
        <Hero />
        <div className="relative">
          <div
            style={{ backgroundImage: `url(${wave})` }}
            className="absolute w-full h-[200px] bg-no-repeat bg-bottom bg-cover -mt-[100px] z-10"
          ></div>
        </div>
        <NumbersHome />
      </div>
    </>
  );
};

export default Home;
