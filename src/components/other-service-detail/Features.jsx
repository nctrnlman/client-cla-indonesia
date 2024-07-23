import ZebraTable from "../table/ZebraTable";

function Features({ packages }) {
  const features = packages[0].features;

  return (
    <div className="relative px-4">
      <div className="mx-auto max-w-3xl py-20">
        <div className="text-center mb-16">
          <span className="bg-secondary text-primary font-extrabold text-lg py-2 px-4 rounded-full">
            PRODUCT
          </span>
          <h2 className="text-5xl font-extrabold text-primary mt-5 mb-6">
            Features
          </h2>
        </div>
        <ZebraTable features={features} />
      </div>
      <div className="half-circle-right"></div>
      <div className="half-circle-left"></div>
    </div>
  );
}

export default Features;
