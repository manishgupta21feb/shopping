import React from "react";
import logo from "../../assets/images/logo.png";
import AuthSection from "./AuthSection";
import NavSection from "./NavSection";
import SocialContainer from "./SocialContainer";

export default function Header() {
  return (
    <header>
      <div className="header-top">
        <SocialContainer />
      </div>
      <div className="main-header">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <NavSection />
          <AuthSection />
        </div>
      </div>
    </header>
  );
}
