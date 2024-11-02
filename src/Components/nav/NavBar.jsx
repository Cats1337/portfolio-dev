import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from '../../styles.js';
import { navLinks } from "../../Constants/constants";
import { catsIcon } from "../../portfolioAssets";
import CatEyes from "../../Components/CatEyes";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full fixed top-0 z-20 bg-primary transition-all duration-300`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto py-5">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <CatEyes className={isScrolled ? 'small-cat-eyes' : 'large-cat-eyes'} />
          </Link>
          <button
            id="nav-icon"
            className={`flex flex-col justify-between items-center ${toggle ? 'open' : ''}`}
            onClick={handleMenuToggle}
            aria-expanded={toggle}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={`menu ${toggle ? 'open' : ''}`}>
          <ul className="list-none flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-blue-500" : "text-white"
                } font-poppins font-medium cursor-pointer text-[24px]`}
                onClick={() => {
                  setActive(link.title);
                  setToggle(false); // Close menu after selection
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
