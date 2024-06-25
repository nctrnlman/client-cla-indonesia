import PropTypes from "prop-types";

const WhyChooseLegalAssociate = ({ icon, title, description }) => {
  return (
    <div className="border-secondary border hover:border-double rounded py-7 px-5">
      <div className="grid grid-cols-6 gap-3">
        <div className="col-span-2 flex items-center justify-center">
          {icon}
        </div>
        <div className="col-span-4">
          <p className="text-primary font-bold">{title}</p>
          <p className="text-black mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

WhyChooseLegalAssociate.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default WhyChooseLegalAssociate;
