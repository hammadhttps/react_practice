 import React from "react";
import "./Header.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
        <Navbar/>
      <h1 className="header-title">Welcome to My Beautiful App</h1>
      <p className="header-subtitle">Making your experience delightful</p>
    </header>
  );
}

export default Header;