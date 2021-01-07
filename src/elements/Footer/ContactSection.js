import React from "react";

export default function ContactSection() {
  return (
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
          <span>
            502 New Design Str <br></br>Melbourne, Australia
          </span>
        </p>
      </div>
    </div>
  );
}
