import React from "react";
import PropTypes from "prop-types";

const WhyChooseLegalAssociate = ({ icon, title, description, bgColor }) => {
  const cardClasses = `bg-${bgColor} rounded-3xl p-6 h-[24rem] flex flex-col`;

  return (
    <div className={cardClasses}>
      <div className="mb-6 flex items-center justify-center h-1/3">
        <div className="bg-white bg-opacity-20 rounded-full p-4">
          {icon &&
            React.cloneElement(icon, {
              className: "w-16 h-16 text-white",
            })}
        </div>
      </div>
      <div className="flex-grow">
        <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
        <p className="text-white text-opacity-80">{description}</p>
      </div>
    </div>
  );
};

WhyChooseLegalAssociate.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
};

WhyChooseLegalAssociate.defaultProps = {
  bgColor: "blue-900",
};

export default WhyChooseLegalAssociate;
