import Image from "next/image";
//Images
import Twist from "../../public/Twist.jpg";
//Icons
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaRegSnowflake } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function Main() {
  return (
    <div className="flex h-screen w-full ">
      <div className="flex flex-col justify-center w-1/3 h-full px-4 ">
        <h1 className="text-black font-semibold text-6xl font-OpenSans my-6">
          SCANDINAVIAN CANDLES DESIGN FOR YOUR INTERIOR
        </h1>
        <p className="text-zinc-400 my-6">
          Experience the simplicity and the elegance of Scandinavian{" "}
        </p>
        <div className="flex justify-center items-center bg-black p-3 rounded-xl w-1/4">
          <h1 className="font-bold">DISCOVER</h1>
        </div>
      </div>
      <div className="w-2/3 flex">
        <div className="flex flex-col h-full justify-end items-start px-4 pb-8 w-1/2 overflow-hidden rounded-2xl bg-candle-wallpaper bg-cover">
          <div className="bg-white p-4 rounded-full">
            <FaFireFlameCurved color={"black"} size={20} />
          </div>
          <h1 className="text-white text-5xl">Twist design</h1>
        </div>
        <div className="h-full w-1/2 px-4">
          <div className="w-full h-1/2 flex items-center">
            <div className="w-full h-full bg-tree-wallpaper bg-cover overflow-hidden rounded-3xl bg-right -ml-24 border-8 border-white"></div>
          </div>
          <div className="w-full h-1/2 flex flex-col justify-center">
            <div className="border-b-[0.85px] border-zinc-400 flex items-center justify-between my-3">
              <h1 className="text-black text-xl">Christmas Collection</h1>
              <IoIosArrowForward color="black" size={20} />
            </div>
            <div className="border-b-[0.85px] border-zinc-400 flex items-center justify-between my-3">
              <h1 className="text-black text-xl">Autumn Collection</h1>
              <IoIosArrowForward color="black" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
