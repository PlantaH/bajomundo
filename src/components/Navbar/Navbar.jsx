import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
     
    <nav className="navMenu">
      <a href="#" className="navWidth-80">Home</a>
      <a href="#" className="navWidth-80">Bajos</a>
      <a href="#" className="navWidth-110">Equipos</a>
      <a href="#" className="navWidth-110">Efectos</a>
      <a href="#" className="navWidth-110">Accesorios</a>
      <div className="dot"></div>
    </nav>
     
  );
};
export default Navbar;
