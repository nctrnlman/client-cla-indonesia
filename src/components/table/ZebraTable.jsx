import { FaCheck } from "react-icons/fa";

function ZebraTable({ features }) {
  return (
    <div>
      <div className=" rounded-md">
        <table className="table border-4 border-secondary rounded-md ">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0
                    ? "bg-gradient-to-r from-primary to-cyan-600 text-white border-none hover:bg-cyan-500"
                    : "bg-[#194B6A] text-white border-none hover:bg-[#1A3C5E]"
                } transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer`}
              >
                <td className="text-lg">{feature}</td>
                <td>
                  <FaCheck
                    className="bg-green-500 text-white p-1 rounded-full"
                    size={20}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ZebraTable;
