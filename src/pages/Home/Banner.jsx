import React from "react";
import { FaShoppingBag , FaUser} from "react-icons/fa";
import bannerImg from "/images/banner.png";


const Banner = () => {
  const down =()=>{
    window.scrollTo({
      top: 950,
      behavior: 'smooth'
    })
  }
  const moreDown =()=>{
    window.scrollTo({
      top: 4500,
      behavior:"smooth"
    })
  }
  return (
    <div className="bg-primaryBG py-12 xl:px-28 px-4">
      <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
      <div className="md:w-1/2">
            <img onClick={down} src={bannerImg} alt="" className="mx-auto h-full md:h-[562px] md:w-[442px] w-full hover:scale-105 transition-all duration-200 cursor-pointer" />
        </div>

        <div className="md:w-1/2 w-full">
          <h1 className="text-6xl mb-10 text-zinc-700 font-extrabold ">Minhaj Collections</h1>
          <p className="text-2xl mb-12 font-semibold">
            You can explore and shop many differnt collection from various
            barands here.
          </p>
          <div className="inline-flex gap-7">

          <button onClick={down} className="hover:scale-105 transition-all duration-200 bg-slate-950 hover:bg-orange-500 px-6 py-2 text-white font-semibold flex gap-2 items-center rounded-sm">
            <FaShoppingBag className="inline-flex" /> Shop Now
          </button>
          <button onClick={moreDown} className="hover:scale-105 transition-all duration-200 bg-slate-950 hover:bg-orange-500 px-6 py-2 text-white font-semibold flex gap-2 items-center rounded-sm">
            <FaUser className="inline-flex" /> Account
          </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
