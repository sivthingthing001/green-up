import React from "react";
import './footer.css';
import footer from '../../assets/QR.png';

const Footer = () => (
  <div className="greenup_footer" id="contactus">
    <div className="greenup_footer_contactus">
      <h2>Contact Us</h2>
      <p>Khmer: +855 70877811</p>
      <p>Chinese: +855 78388828</p>
      <p>Alternative: +855 96688828</p>
      <p>Address: 106, St Betong, Choamchoa 2, Posenchey, Phnom Penh, Cambodia</p>
    </div>
    <div className="greenup_footer_QR">
      <h1>QR WhatsApp</h1>
      <img src={footer} alt="QR Code"/>
    </div>
    <div className="greenup_footer_copyright">
       <p>@Copyright 2024 by GreenUp Cambodia Co., LTD</p>
    </div>
  </div>
);

export default Footer;
