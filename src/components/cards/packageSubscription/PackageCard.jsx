const PackageCard = ({
  title,
  content,
  buttonText,
  onButtonClick,
  backgroundColor,
  textColor,
  buttonColor,
}) => {
  return (
    <div
      className={`border rounded-lg shadow-lg p-6 m-4 h-96 flex flex-col justify-between transform transition duration-500 hover:scale-105 ${backgroundColor}`}
    >
      <div className={textColor}>
        <h3 className="text-3xl font-extrabold mb-6">{title}</h3>
        <p className="mb-4 text-justify">{content}</p>
      </div>
      <div className="pb-6 text-center">
        <button
          className={`py-2 px-6 font-bold rounded-full mt-auto transform transition duration-300 hover:scale-110 ${buttonColor}`}
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
