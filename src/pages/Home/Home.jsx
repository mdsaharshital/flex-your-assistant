import wave from "../../assets/BG Wave.svg";
import FeaturesHome from "./compo/FeatureHome";
import Hero from "./compo/Hero";
import NumbersHome from "./compo/NumbersHome";

const Home = () => {
  return (
    <>
      <div className="relative px-2">
        <Hero />
        <WaveBackground />
        <NumbersHome />
        <WaveBackground rotate={true} marginTop="-100px" />
        <FeaturesHome />
        <WaveBackground />
      </div>
    </>
  );
};

export default Home;
const WaveBackground = ({ rotate = false, marginTop = "-50px" }) => {
  return (
    <div
      style={{ backgroundImage: `url(${wave})`, marginTop }}
      className={`absolute w-full h-[200px] bg-no-repeat bg-bottom bg-cover ${
        rotate ? "rotate-180" : ""
      } z-10`}
    ></div>
  );
};
