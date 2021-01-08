import React from "react";

export default function AddressSection({ payment }) {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="footer-bottom-left">
          <p>
            <a href="#">@ 2021 Shopping</a>, All Right Reserved
          </p>
        </div>
        <div className="footer-bottom-right">
          <img src={payment} alt="payment" />
        </div>
      </div>
    </div>
  );
}
