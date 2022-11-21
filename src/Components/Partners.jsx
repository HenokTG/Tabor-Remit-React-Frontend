import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import eTele from "../Images/Homepage/partners-section/ethio-telecom.png";
import Safari from "../Images/Homepage/partners-section/Safaricom_Ethiopia.png";
import Payment from "../Images/Homepage/partners-section/payments.png";
function Partners() {
  return (
    <div className="bg-white">
      <h1>Supported Telecoms and Payment Methods</h1>
      <div className="flex flex-nowrap justify-evenly items-center py-20 px-60">
        <img
          src={eTele}
          alt="Ethio Telecom"
          className="h-16 mb-8 inline-block"
        />
        <img src={Safari} alt="Safaricom" className="h-16 mb-8 inline-block" />
        <img
          src={Payment}
          alt="payment methods"
          className="h-16 mb-8 inline-block"
        />
      </div>
    </div>
  );
}

export default Partners;
