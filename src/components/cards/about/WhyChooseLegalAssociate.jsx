import React from "react";
import PropTypes from "prop-types";

const WhyChooseLegalAssociate = ({ icon, title, description, bgColor }) => {
  return (
    <div className={`bg-${bgColor} rounded-xl p-4 h-[300px] flex flex-col`}>
      <div className="mb-4 flex items-center justify-center">
        <div className="bg-white bg-opacity-20 rounded-full p-3">
          {icon &&
            React.cloneElement(icon, {
              className: "w-10 h-10 text-white",
            })}
        </div>
      </div>
      <div className="flex-grow flex flex-col overflow-hidden">
        <h2 className="text-white text-xl font-bold mb-2">{title}</h2>
        <p className="text-white text-opacity-80 text-sm overflow-y-auto">
          {description}
        </p>
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
