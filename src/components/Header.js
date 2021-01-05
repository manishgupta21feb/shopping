import React from 'react';
import logo from '../assets/images/logo.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-top">
          <div className="container">
            <div className="number-mail-wrapper for-width">
              <ul>
                <li><span className="number-text"><span className="icon-mic"></span>8881868382</span></li>
                <li><span className="mail-text"><span className="icon-envelop"></span>manish@gmail.com</span></li>
              </ul>
            </div>
            <div className="middle-text for-width">
              <p>Free shipping on all orders over $79 <span>shop Now!</span></p>
            </div>
            <div className="social-icons for-width">
              <ul>
                <li><a href="#"><span className="icon-facebook"></span></a></li>
                <li><a href="#"><span className="icon-twitter"></span></a></li>
                <li><a href="#"><span className="icon-instagram"></span></a></li>
                <li><a href="#"><span className="icon-pinterest"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-header">
          <div className="container">
            <div className="logo">
              <img src={logo} alt="logo"/>
            </div>
            <div className="header-nav">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Collections</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="header-right">
              <ul className="login-signup">
                <li><a href="#"><span className="icon-user-tie"></span> Login</a></li>
                <li><a href="#">/ Sign up</a></li>
              </ul>
              <ul className="search-cart">
                <li><span className="icon-search"></span></li>
                <li><span className="icon-cart"></span></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
