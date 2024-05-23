import React from "react";
import pattern from "../../../assets/Pattern.svg";

const NumbersHome = () => {
  return (
    <section className="py-[200px] bg-white">
      <div className="container mx-auto text-center">
        <span
          className="text-xs font-medium px-2 py-0.5 text-green-500
         rounded-full bg-green-100/95"
        >
          NUMBERS
        </span>
        <h2 className="text-5xl font-bold my-4">
          We believe in the power of data
        </h2>
        <p className="text-xl text-gray-500 font-medium text-center">
          Flex is the only business platform that lets you run your business on
          one platform, <br />
          seamlessly across all digital channels.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-24">
          <div>
            <h3 className="text-5xl font-bold">235.000</h3>
            <p className="text-gray-500 text-xl mt-2">Projects completed</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">$10m</h3>
            <p className="text-gray-500 text-xl mt-2">APR</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">+50.000</h3>
            <p className="text-gray-500 text-xl mt-2">Hours Saved Annually</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">3.500</h3>
            <p className="text-gray-500 text-xl mt-2">Unique Users</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersHome;
