import React from "react";

export default function AuthSection() {
  return (
    <div className="header-right">
      <ul className="login-signup">
        <li>
          <a href="#">
            <span className="icon-user-tie"></span> Login
          </a>
        </li>
        <li>
          <a href="#">/ Sign up</a>
        </li>
      </ul>
      <ul className="search-cart">
        <li>
          <span className="icon-search"></span>
        </li>
        <li>
          <span className="icon-cart"></span>
        </li>
      </ul>
    </div>
  );
}
