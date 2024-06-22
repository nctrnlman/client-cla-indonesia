import logo from "../assets/logo/logo_cla.png";

function Navbar() {
  return (
    <div className="flex bg-white justify-around mx-auto w-full">
      <div className="">
        <img src={logo} alt="" width={100} />
      </div>
      <div className="flex gap-10 font-bold justify-center text-[#003262]">
        <button>Home</button>
        <button>Legal Associate</button>
        <button>Legal Training</button>
        <button>Other Services</button>
      </div>
    </div>
  );
}

export default Navbar;
