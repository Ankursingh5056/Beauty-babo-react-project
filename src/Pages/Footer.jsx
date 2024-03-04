import React from "react";
import "./footer.css"


function Footer() {
  return (
    <div className="footer">
      <div>
        <h3>CONTACT INFO</h3>
        <p>ph no. : 1800298344</p>
        <p>Email : babobeauty@gmail.com</p>
      </div>
      <div>
        <h3>QUICK LINKS</h3>
        <p>About us</p>
        <p>Contact Us</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Return and Refund Policy</p>
        <p>Shipping Policy</p>
      </div>
      <div>
          <h3>CUSTOMER INFO</h3>
           <p> My Account</p>
           <p>Track your Order</p>
           <p>Order Returns</p>
           <p>Wishlist</p>
           <p>News & Events</p>
           <p>FAQ</p>
      </div>
      <div>
         <h3>CATEGORIES</h3>
          <p>Mom & Baby Care</p>
          <p>Skin</p>
          <p>Women fashion</p>
      </div>
    </div>
  );
}

export default Footer;
