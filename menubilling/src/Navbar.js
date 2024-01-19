import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarRef = useRef();

  return (
    <>
      <header className="header">
        <nav className="navbar" ref={navbarRef}>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

