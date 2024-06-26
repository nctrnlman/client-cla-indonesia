import React from "react";
import PropTypes from "prop-types";

const WhyChooseLegalAssociate = ({
  icon,
  title,
  description,
  bgColor,
  iconPosition,
  maxIconSize,
}) => {
  const cardClasses = `bg-${bgColor} rounded-xl py-7 px-5 h-[32rem] `;

  return (
    <div className={cardClasses}>
      <div className="grid grid-cols-6 gap-3 justify-between h-full">
        {iconPosition === "top" && (
          <>
            <div className="col-span-6 flex mb-4 ">
              <div className="flex items-center justify-center border-b py-4 border-white w-full ">
                {React.cloneElement(icon, {
                  className: `w-${maxIconSize} h-${maxIconSize}`,
                })}
              </div>
            </div>
            <div className="col-span-6  py-2">
              <p className="text-white text-xl font-extrabold">{title}</p>
              <p className="text-white mt-4">{description}</p>
            </div>
          </>
        )}
        {iconPosition === "bottom" && (
          <>
            <div className="col-span-6  py-2">
              <p className="text-white text-xl font-extrabold">{title}</p>
              <p className="text-white  mt-4">{description}</p>
            </div>
            <div className="col-span-6 flex items-center justify-center mt-4 ">
              <div className="flex items-center justify-center border-t border-white w-full py-4 pt-4  ">
                {React.cloneElement(icon, {
                  className: `w-${maxIconSize} h-${maxIconSize}`,
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

WhyChooseLegalAssociate.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  description: PropTypes.string,
  bgColor: PropTypes.string,
  iconPosition: PropTypes.oneOf(["top", "bottom"]),
  maxIconSize: PropTypes.string,
};

WhyChooseLegalAssociate.defaultProps = {
  bgColor: "white",
  iconPosition: "top",
  maxIconSize: "12",
};

export default WhyChooseLegalAssociate;
