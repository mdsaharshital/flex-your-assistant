import fb from "../../../assets/fb.svg";
import apple from "../../../assets/apple.svg";
import google from "../../../assets/google.svg";
import logo from "../../../assets/Group.svg";
import { FaCheckCircle } from "react-icons/fa";
const Hero = () => {
  return (
    <section
      className="relative lg:px-[15vw] md:px-[5vw] py-[6vh] 
    "
    >
      <div className="flex flex-col-reverse md:flex-row">
        <div
          className="w-full md:w-1/2 p-4 text-center md:text-left
          flex flex-col justify-center md:items-baseline items-center"
        >
          <span
            className="text-xs font-medium px-2 py-0.5 text-gray-100 
            rounded-full bg-green-500 "
          >
            HEADER
          </span>
          <h1 className="md:text-6xl text-4xl text-center md:text-start font-bold mt-4 ">
            A small business <br /> is only as good <br /> as its tools.
          </h1>
          <p className="mt-2 text-xl text-[#556987] pt-8 pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-4 list-disc list-inside text-xl text-[#556987]">
            <p className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" /> Mauris pellentesque
              congue libero nec
            </p>
            <p className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Suspendisse mollis tincidunt
            </p>
            <p className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Praesent varius justo vel justo pulvinar
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <JoinOurCommunity />
        </div>
      </div>
    </section>
  );
};

export default Hero;

const JoinOurCommunity = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md pb-12 relative w-full">
      <img
        src={logo}
        width={64}
        className="bg-green-500 rounded-xl absolute top-0 left-1/2 transform 
          -translate-x-1/2 -translate-y-1/2"
        alt="logo of flex"
      />
      <div className="w-[300px] xl:min-w-[384px] mx-auto ">
        <h1 className="text-3xl font-bold pt-14 pb-4">Join Our Community</h1>
        <h4 className="text-lg text-[#556987] pb-7">Start your free trial</h4>
        <div className="pt-6 pb-4 mx-auto">
          <label htmlFor="email" className="block text-left pb-[6px]">
            Email
          </label>
          <input
            type="email"
            className="text-gray-200 px-[14px] py-[10px] border-[1px]
                w-full rounded-lg"
            placeholder="Enter your email address"
            name="email"
          />
        </div>
        <button
          className="w-full
         py-3 px-[18px] gap-2 border-[1px] border-gray-200 rounded-md
          bg-green-500 text-white mx-auto"
        >
          Get Started
        </button>
        <div className="relative flex py-4 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">Or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <button
          className="flex items-center justify-center w-full
         py-3 px-[18px] gap-2 border-[1px] border-gray-200 rounded-md bg-white mb-4 mx-auto"
        >
          <img src={google} />
          <span> Sign in with Google</span>
        </button>
        <button
          className="flex items-center justify-center w-full
         py-3 px-[18px] gap-2 border-[1px] border-gray-200 rounded-md bg-white mb-4 mx-auto"
        >
          <img src={fb} />
          <span> Sign in with Facebook</span>
        </button>
        <button
          className="flex items-center justify-center w-full
         py-3 px-[18px] gap-2 border-[1px] border-gray-200 rounded-md bg-white mb-4 mx-auto"
        >
          <img src={apple} />
          <span> Sign in with Apple</span>
        </button>
        <p className="text-sm text-[#556987] text-center">
          Already have an account?{" "}
          <a href="http://" className="text-green-500">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};
