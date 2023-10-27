import React from "react";
import Logo from "../images/logo.png";

export const Header = () => {
  return (
    <header>
      <div className="parent-logo">
        <img src={Logo} className="logo" alt="" />
      </div>
      <div className="logo-text">
        <h1>Casedif <br /><p>EMPRESA CONSTRUCTORA</p></h1>
        
      </div>
    </header>
  );
};
