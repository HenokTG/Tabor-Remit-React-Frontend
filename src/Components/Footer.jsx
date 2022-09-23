import React from 'react'

import footerImage from "../Images/remittance.jpg";

function Footer() {
  return (
    <div className="App-footer">
      <div className="footer-content">
        <img src={footerImage} alt="Remmitance coin" className="footer-cute" />
      </div>
      <div className="footer-bottom">
        © 2022 Disigned by [...]. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer