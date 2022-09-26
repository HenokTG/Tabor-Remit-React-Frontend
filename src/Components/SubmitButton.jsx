import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PayPalButtons } from "@paypal/react-paypal-js";

import { useGlobalContext } from "../context";
import { handleInvoice } from "../modules";

import payPalLogo from "../Images/paypal-logo.png";
import { useState } from "react";
import { useEffect } from "react";

function SubmitButton() {
  const history = useNavigate();

  const [promoKey, setPromoKey] = useState("");
  const [valCharged, setValCharged] = useState(0);

  const {
    operatorSelected,
    packageSelected,
    isPromoted,
    phoneNo,
    transferdAmount,
    chargedAmount,
  } = useGlobalContext();

  useEffect(() => {
    const prKey = isPromoted.promoCode
      ? isPromoted.promoCode.promo_code
      : "NOPROMO";
    setPromoKey(prKey);
    setValCharged(chargedAmount);
  }, [chargedAmount]);

  const paymentDetail = {
    AgentCode: "Henok",
    phoneNumber: phoneNo,
    operatorID: operatorSelected.operator.id,
    packageID: packageSelected.package.id,
    promoCode: promoKey,
    airtimeValue: transferdAmount,
    valueCharged: valCharged.toFixed(2),
    payMethodID: 1,
  };

  return (
    <section className="pay-with-paypal-section">
      <img src={payPalLogo} alt="Pay with PayPal" id="pay-img" />
      <h4 style={{ fontSize: "14px", marginBottom: "1rem" }}>
        You will be redirected to PayPal
      </h4>
      <PayPalButtons
        style={{
          layout: "vertical",
          color: "blue",
          label: "pay",
          shape: "pill",
          height: 45,
        }}
        disabled={false}
        forceReRender={[valCharged]}
        createOrder={async function (data, actions) {
          const orderId = await actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: valCharged.toFixed(2),
                  currency: "USD",
                },
              },
            ],
          });
          // Your code here after create the order
          console.log("Order ID: ", orderId);
          return orderId;
        }}
        onApprove={async function (data, actions) {
          const details = await actions.order.capture();
          toast.success(
            "Transaction Completed. Thank you, " +
              details.payer.name.given_name,
            { duration: 5000 }
          );
          console.log("Check Order ID: ", data);
          handleInvoice(paymentDetail, history, data.orderID);
        }}
        onCancel={function () {
          toast("Transaction cancelled.");
        }}
        onError={function () {
          toast.error(
            "There was an error with your transaction. Please Try Again"
          );
        }}
      />
    </section>
  );
}

export default SubmitButton;
