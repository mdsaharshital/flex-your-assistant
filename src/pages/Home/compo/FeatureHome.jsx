import featureImage from "../../../assets/featureImg.svg"; // Adjust the path accordingly
import message from "../../../assets/message.svg"; // Adjust the path accordingly
import user from "../../../assets/user.svg"; // Adjust the path accordingly
import chart from "../../../assets/chart.svg"; // Adjust the path accordingly

const FeaturesHome = () => {
  return (
    <section className="py-[100px] relative bg-center bg-no-repeat">
      <div className="container mx-auto text-center">
        <span
          className="text-xs font-medium px-2 py-0.5
         text-green-500 rounded-full bg-green-100/95"
        >
          FEATURES
        </span>
        <h2 className="text-5xl font-bold my-4">
          Gain more insight into how people use your
        </h2>
        <p className="text-xl text-[#556987] font-medium mb-12">
          With our integrated CRM, project management, collaboration and
          invoicing capabilities, <br /> you can manage every aspect of your
          business in one secure platform.
        </p>
        <div className="flex justify-center mb-16">
          <img src={featureImage} alt="Feature" className="rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:px-20 px-0">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 w-16 h-16  rounded-md text-white">
                <img
                  src={message}
                  className="mx-auto py-[20px]"
                  alt="message"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mt-7 mb-4 ">
              Measure your performance
            </h3>
            <p className="text-[#556987] font-medium mt-2">
              Stay connected with your team and <br /> make quick decisions
              wherever <br />
              you are.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 w-16 h-16  rounded-md text-white">
                <img src={chart} className="mx-auto py-[20px]" alt="message" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mt-7 mb-4">Custom analytics</h3>
            <p className="text-[#556987] font-medium mt-2">
              Get a complete sales dashboard in <br /> the cloud. See activity,
              revenue and <br /> social metrics all in one place.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 w-16 h-16  rounded-md text-white">
                <img src={user} className="mx-auto py-[20px]" alt="message" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mt-7 mb-4">Team Management</h3>
            <p className="text-[#556987] font-medium mt-2">
              Our calendar lets you know what is <br /> happening with customer
              and <br />
              projects so you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHome;
