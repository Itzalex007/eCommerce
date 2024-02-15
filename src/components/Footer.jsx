import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn} from "react-icons/fa";
import logo from "../../public/minLogo.png"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const down=() =>{
      window.scrollTo({
        top: 950,
        behavior: 'smooth'
      });

    }
  return (
    <footer>
        {/* footer top */}
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* company info */}
          <div className="md:w-[400px]">
            <Link to="/">
             <a href="/">
              </a>
               <img src={logo} alt="" className="w-44 hover:scale-105 transition-all duration-200" />
            </Link>
            <p className="my-8 text-Black/75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex items-center gap-6">
              <a href="https://www.facebook.com/menu.gaming.5" className="hover:scale-150 transition-all duration-200">
                <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-orange-500" />
                </a>
              <a href="https://www.linkedin.com/in/minhaj-ahmed-1202a3214/" className="hover:scale-150 transition-all duration-200">
              <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              </a>
              <a href="" className="hover:scale-150 transition-all duration-200">
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              </a>
            </div>
          </div>

          {/* Catalog */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CATALOG</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500" onClick={down}>
                Necklaces
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500" onClick={down}>
                Hoodies
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500" onClick={down}>
                Jewelry Box
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500" onClick={down}>
                T-shirt
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500" onClick={down}>
                Jacket
              </Link>
            </div>
          </div>

          {/* CUSTOMER SERVICES */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CUSTOMER SERVICES</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500" onClick={down}>
                Contact Us
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500" onClick={down}>
                Track Your Order
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500" onClick={down}>
                Product Care & Repair
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500" onClick={down}>
                Book an Appointment
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500" onClick={down}>
                Shipping & Returns
              </Link>
            </div>
          </div>

          {/* ABOUT US */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">ABOUT US</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-orange-500" onClick={down}>
                Our Producers
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500" onClick={down}>
                Sitemap
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500" onClick={down}>
                FAQ
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500" onClick={down}>
                About Us
              </Link>
              <Link to="/" className="text-sm block hover:text-orange-500" onClick={down}>
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="bg-Black">
      <p className="text-white text-center items-center py-3">© {currentYear} Minhaj Ahmed, <a href="mailto:ansariminhaj8208@gmail.com">ansariminhaj8208@gmail.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
