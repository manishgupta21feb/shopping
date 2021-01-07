import React from "react";

export default function SocialContainer() {
  return (
    <div className="container">
      <div className="number-mail-wrapper for-width">
        <ul>
          <li>
            <span className="number-text">
              <span className="icon-mic"></span>8881868382
            </span>
          </li>
          <li>
            <span className="mail-text">
              <span className="icon-envelop"></span>manish@gmail.com
            </span>
          </li>
        </ul>
      </div>
      <div className="middle-text for-width">
        <p>
          Free shipping on all orders over $79 <span>shop Now!</span>
        </p>
      </div>
      <div className="social-icons for-width">
        <ul>
          <li>
            <a href="#">
              <span className="icon-facebook"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon-twitter"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon-instagram"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon-pinterest"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
