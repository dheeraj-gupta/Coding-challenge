import React from "react";

const Navbar = () => {
  const displayCompanyInfo = () => {
    return (
      <div className="company-details">
        <span className="company-title"> Crypto App</span>
      </div>
    );
  };
  return <nav className="navbar bg-dark">{displayCompanyInfo()}</nav>;
};

export default Navbar;
