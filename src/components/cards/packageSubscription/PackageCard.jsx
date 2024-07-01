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
      className={`border rounded-lg shadow-lg p-6 m-4 min-h-[24rem] flex flex-col justify-between transition duration-300 ${backgroundColor}`}
    >
      <div className={textColor}>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="mb-4 text-sm">{content}</p>
      </div>
      <div className="mt-auto text-center">
        <button
          className={`py-2 px-6 text-sm font-semibold rounded-full transition duration-300 hover:brightness-110 ${buttonColor}`}
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PackageCard;