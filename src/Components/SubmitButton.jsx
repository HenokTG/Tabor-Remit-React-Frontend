import React from "react";
import { useNavigate } from "react-router-dom";

import { useGlobalContext } from "../context";

import payPalLogo from "../Images/paypal-logo.png";
function SubmitButton() {
  const history = useNavigate();
  
  const { isPromoted, operator, phoneNo, transferdAmount } =
    useGlobalContext();

  const paymentDetail = {
    "Phone Number": phoneNo,
    "Transferred Package Amount in ETB:": transferdAmount,
    "Operator": operator,
    "Promo discount code": isPromoted,
  };
  const handlePayment=()=>{
    console.log("Payment redirected to Paypal");
    console.log("Payment Detail: ", paymentDetail);
    history("/");
  }
  return (
    <section className="pay-with-paypal-section">
      <h3>Pay with PayPal</h3>
      <img src={payPalLogo} alt="Pay with PayPal" id="pay-img" />
      <h4 style={{fontSize:"14px"}}>You will be redirected to PayPal</h4>
      <button onClick={handlePayment} className="btn block pay-btn"></button>
    </section>
  );
}

export default SubmitButton;
