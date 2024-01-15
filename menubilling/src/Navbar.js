import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  return (
    <>
      <header className="header">
       
        <nav className="navbar" ref={navbarRef}>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>

        </nav>
        <div className="icons">
          <div className="fas fa-search" id="search-btn" onClick={searchHandler}></div>
          <div className="fas fa-shopping-cart" id="cart-btn" onClick={cartHandler}></div>
          <div className="fas fa-bars" id="menu-btn" onClick={navbarHandler}></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          {/* Render cart items here */}
        </div>
      </header>
    </>
  );
};

export default Navbar;
