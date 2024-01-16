import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarRef = useRef();

  return (
    <>
      <header className="header">
      
        <nav className="navbar" ref={navbarRef}>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>

        </nav>
      </header>
    </>
  );
};

export default Navbar;
