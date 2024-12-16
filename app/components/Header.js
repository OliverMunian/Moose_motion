import SVGLogo from "../components/SVG";
//Icons
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { LuShoppingBasket } from "react-icons/lu";

function Header() {
  return (
    <div className="flex items-center justify-around pt-5 border-b-[0.85px] border-zinc-400 py-3 px-2">
      <div className=" flex items-center justify-start w-1/3">
        <SVGLogo />
        <h1 className="text-2xl text-[#af916e] mx-6 font-OpenSans">
          Moose motion
        </h1>
      </div>
      <div className=" flex items-center justify-center w-1/3">
        <h1 className="text-xl text-black mx-2 font-bold font-OpenSans hover:cursor-pointer">
          Home
        </h1>
        <h1 className="text-xl text-zinc-400 mx-2 font-OpenSans hover:cursor-pointer">Shop</h1>
        <h1 className="text-xl text-zinc-400 mx-2 font-OpenSans hover:cursor-pointer">Collection</h1>
      </div>
      <div className=" flex items-center justify-center w-1/3">
        {/* <button className="bg-white p-3 rounded-lg">
          <h1 className="text-xl text-black mx-2 font-bold">Contact</h1>
        </button> */}
        <HiMiniMagnifyingGlass className="mx-2 text-zinc-400 hover:cursor-pointer" size={30} />
        <LuShoppingBasket className="mx-2 text-zinc-400 hover:cursor-pointer" size={30} />
        <h1 className="mx-2 text-zinc-400 font-OpenSans hover:cursor-pointer">Login</h1>
      </div>
    </div>
  );
}

export default Header;
