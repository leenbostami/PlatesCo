import React from "react";
import instagram from '../images/icons/instagram.png';
import twitter from '../images/icons/twitter.png';
import whatsapp from '../images/icons/whatsapp.png';

export default function Footer() {
  return (
    <div className="footer">
      <p className="footer-item">©2023 - Plates Co</p>
      <p className="footer-item"><a href="tel:+4733378901"  className="footer-item">Call Us On: +971 99 090 0900</a></p>
      <div className="footer-item">
        <p className="footer-item"> Follow Us On Social Media</p>
        <img src={instagram} alt='instagram' className="socialIcons"/>
        <img src={twitter} alt='twitter' className="socialIcons"/>
        <img src={whatsapp} alt='whatsapp' className="socialIcons"/>
      </div>
    </div>
  );
}
