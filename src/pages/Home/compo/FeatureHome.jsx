import featureImage from "../../../assets/featureImg.svg"; // Adjust the path accordingly

const FeaturesSection = () => {
  return (
    <section className="py-[200px] bg-white relative">
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
        <p className="text-xl text-gray-500 font-medium mb-8">
          With our integrated CRM, project management, collaboration and
          invoicing capabilities, you can manage every aspect of your business
          in one secure platform.
        </p>
        <div className="flex justify-center mb-8">
          <img
            src={featureImage}
            alt="Feature"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 p-3 rounded-full text-white">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 10l7.997-4.116A1 1 0 0017.997 4H2.003a1 1 0 00-.767 1.884zM10 12L2.003 7.884A1 1 0 002 9v6a1 1 0 001.233.972L10 14l6.764 1.972A1 1 0 0018 15V9a1 1 0 00-.997-.884L10 12z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold">Measure your performance</h3>
            <p className="text-gray-500 mt-2">
              Stay connected with your team and make quick decisions wherever
              you are.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 p-3 rounded-full text-white">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12h1v-2H9v2zM8 5h2a2 2 0 012 2v1H6V7a2 2 0 012-2zm2 5v1a1 1 0 001 1h1a1 1 0 001-1v-1h-3z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold">Custom analytics</h3>
            <p className="text-gray-500 mt-2">
              Get a complete sales dashboard in the cloud. See activity, revenue
              and social metrics all in one place.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 p-3 rounded-full text-white">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm3.293 9.293a1 1 0 11-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 1.414L11.414 10l1.879 1.879z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold">Team Management</h3>
            <p className="text-gray-500 mt-2">
              Our calendar lets you know what is happening with customer and
              projects so you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
