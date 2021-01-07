import React from "react";
import logowhite from "../../assets/images/white-logo.png";
import payment from "../../assets/images/payment.png";
import SocialLinks from "./SocialLinks";
import CompantInfo from "./CompantInfo";
import ImportantLinks from "./ImportantLinks";
import ContactSection from "./ContactSection";
import AddressSection from "./AddressSection";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="footer-logo">
                <img src={logowhite} alt="logo" />
              </div>
              <SocialLinks />
            </div>
            <CompantInfo />
            <ImportantLinks />
            <ContactSection />
          </div>
        </div>
      </div>
      <AddressSection payment={payment} />
    </footer>
  );
}
