import React, { useState } from "react";
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import data from "../../public/products.json"
import minhajLogo from "../../public/minLogo.png"
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    
  const [serachItem, setSearchItem] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchDisable,setSearchDisable] = useState(true)

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }
    const down=() =>{
      window.scrollTo({
        top: 950,
        behavior: 'smooth'
      });

    }
    const moreDown =()=>{
      window.scrollTo({
        top: 4500,
        behavior:"smooth"
      })
    }
    const moreDown2 =()=>{
      window.scrollTo({
        top: 950,
        behavior:"smooth"
      })
      setSearchDisable(false)
    }
    
  const navItems = [
    { title: "Jewelry & Accessories", path: "/" },
    { title: "Clothing & Shoes", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Wedding & Party", path: "/" },
    { title: "Toys & Entertainment", path: "/" },
    { title: "Art & Collectibles", path: "/" },
    { title: "Craft Supplies & Tools", path: "/" },
  ];
  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 left-0 right-0">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <form className="flex">
        <FaSearch className="hover:scale-105 transition-all duration-200 text-Black w-6 h-6 cursor-pointer hidden md:block mr-1" />
          <input type="text" placeholder="Search Items..." onChange={(e)=>{setSearchItem(e.target.value); setSearchDisable(true) }} className="bg-slate-300 rounded-md mr-2 " />
        </form>
        <a href="/" className="">
          <img src={minhajLogo} alt="" className="hover:scale-105 transition-all duration-200 w-36" />
        </a>

        {/* account and shopping btn */}
        <div className="text-lg text-Black sm:flex items-center gap-4 hidden">
          <a onClick={moreDown} className="flex items-center gap-2 cursor-pointer ">
            <FaUser /> Account
          </a>
          <a onClick={down}  className="cursor-pointer flex items-center gap-2 container">
            <FaShoppingBag /> Shoping
          </a>
        </div>

        <div className="sm:hidden">
            <button onClick={toggleMenu}>
                {
                    isMenuOpen ? <FaTimes className="w-6 h-6 text-red-400 ml-3"/> : <FaBars className="w-6 h-6 ml-3 text-red-400"/>
                }
            </button>
        </div>
      </nav>
      <hr />
      {/* nav items */}
      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-black hidden">
          {navItems.map(({ title, path}) => (
            <li key={title} className=" hover:text-orange-500" onClick={down}>
              <NavLink
                to={path}
                className={({ isActive}) => isActive ? "active" : ""}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile menu items */}
      <div>
        <ul className={`bg-black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`} >
          {navItems.map(({ title, path }) => (
            <li key={title} className=" hover:text-orange-500 my-3 cursor-pointer" onClick={down} >
              <Link
                to={path}
                onClick={toggleMenu}
              
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <div>

{

data.filter((val)=>{

if(serachItem==""){
  return console.log("minhaj");;
}
else if (val.title.toLowerCase().includes(serachItem.toLowerCase())){
  return val;
}

}).map((val)=>{

return(
  <div key={val.id}>
<div className="bg-slate-100"  > 

   { searchDisable && <img src={val.image} onClick={moreDown2} className="p-10 hover:scale-105 transition-all duration-200 cursor-pointer smallImg" />  
}
    { searchDisable && <h2 onClick={moreDown2} className="-mt-2 ml-28 cursor-pointer" >{val.title}</h2>
}
</div>


  </div>
)

})


}
        </div>


        </div>
      
    </header>
  );
};

export default Navbar;
