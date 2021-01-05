import React from 'react';
import logowhite from '../assets/images/white-logo.png';
import payment from '../assets/images/payment.png';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="footer-logo">
                  <img src={logowhite} alt="logo"/>
                </div>
                <div className="social-icons footer-social">
                  <ul>
                    <li><a href="#"><span className="icon-facebook"></span></a></li>
                    <li><a href="#"><span className="icon-twitter"></span></a></li>
                    <li><a href="#"><span className="icon-instagram"></span></a></li>
                    <li><a href="#"><span className="icon-pinterest"></span></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <h4 className="footer-heading">Information Company</h4>
                <ul className="footer-links">
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">Track Your Order</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Payment Methods</a></li>
                  <li><a href="#">Shipping Guide</a></li>
                  <li><a href="#">Products Support</a></li>
                  <li><a href="#">Gift Card Balance</a></li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h4 className="footer-heading">Important Links</h4>
                <ul className="footer-links">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Our Guarantees</a></li>
                  <li><a href="#">Terms and Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Return Policy</a></li>
                  <li><a href="#">Delivery & Return</a></li>
                  <li><a href="#">Sitemap</a></li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h4 className="footer-heading">Let's Talk</h4>
                <div className="footer-connect-box">
                  <span className="icon-headphones icons"></span>
                  <p>
                    <span>8881868382</span>
                    <span>hello@domain.com</span>
                  </p>
                </div>
                <h4 className="footer-heading">Find Us</h4>
                <div className="footer-connect-box">
                  <span className="icon-location2 icons"></span>
                  <p>
                    <span>502 New Design Str <br></br>Melbourne, Australia</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-left">
              <p><a href="#">@ 2021 Shopping</a>, All Right Reserved</p>
            </div>
            <div className="footer-bottom-right">
              <img src={payment} alt="payment"/>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
