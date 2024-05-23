import pattern from "/assets/Pattern.svg";

const NumbersHome = () => {
  return (
    <section
      className="relative py-[250px] bg-white bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${pattern})` }}
    >
      <div className="container mx-auto text-center relative z-10">
        <span
          className="text-xs font-medium px-2 py-0.5 text-green-500
         rounded-full bg-green-100/95"
        >
          NUMBERS
        </span>
        <h2 className="text-5xl font-bold my-4">
          We believe in the power of data
        </h2>
        <p className="text-xl text-[#556987] font-medium text-center">
          Flex is the only business platform that lets you run your business on
          one platform, <br />
          seamlessly across all digital channels.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-24">
          <div>
            <h3 className="text-5xl font-bold">235.000</h3>
            <p className="text-[#556987] text-xl mt-2">Projects completed</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">$10m</h3>
            <p className="text-[#556987] text-xl mt-2">APR</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">+50.000</h3>
            <p className="text-[#556987] text-xl mt-2">Hours Saved Annually</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">3.500</h3>
            <p className="text-[#556987] text-xl mt-2">Unique Users</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersHome;
