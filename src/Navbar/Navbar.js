import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../images/Logo.svg"
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
    
 <img src={logo}/>
   
      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      <div className="t_1">
      {setOpen ? (document.body.style.overflow = "auto") : null}
      {open ? (document.body.style.overflow = "hidden") : null}

      </div>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
         
            Home
        
        </li>
        <li className="nav-item">
          
            About
 
        </li>
        <li className="nav-item">
         
            Shop
     
        </li>
        <li className="nav-item">
        
            Contact
        
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
