import wave from "../../assets/BGWave.svg";
import FeaturesHome from "./compo/FeatureHome";
import Hero from "./compo/Hero";
import NumbersHome from "./compo/NumbersHome";

const Home = () => {
  return (
    <>
      <div className="relative px-2">
        <Hero />
        <div className="relative">
          <WaveBackground />
          <NumbersHome />
          <WaveBackground rotate={true} marginTop="-100px" />
          <FeaturesHome />
          <WaveBackground />
        </div>
      </div>
    </>
  );
};

export default Home;
const WaveBackground = ({ rotate = false, marginTop = "-50px" }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${wave})`,
        marginTop,
        width: "100%", // Ensure the width of the component matches its container
        overflow: "hidden", // Hide any content that overflows the container
      }}
      className={`absolute h-[200px] bg-no-repeat bg-bottom bg-cover ${
        rotate ? "rotate-180" : ""
      } z-10`}
    ></div>
  );
};
