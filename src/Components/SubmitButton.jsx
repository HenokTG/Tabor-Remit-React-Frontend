import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PayPalButtons } from "@paypal/react-paypal-js";

import { useGlobalContext } from "../context";
import { handleInvoice } from "../modules";

function SubmitButton() {
  const navigate = useNavigate();

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
  }, [chargedAmount]); // eslint-disable-line react-hooks/exhaustive-deps

  const paymentDetail = {
    AgentCode: "Agent1",
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
      <img
        src="/static/images/paypal-logo.png"
        alt="Pay with PayPal"
        id="paypal-img"
      />
      <h4 style={{ fontSize: "14px", margin: "2rem" }}>
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
          return orderId;
        }}
        onApprove={async function (data, actions) {
          await actions.order.capture();
          handleInvoice(paymentDetail, navigate, data.orderID);
        }}
        onCancel={function () {
          navigate("/error");
        }}
        onError={function () {
          navigate("/error");
        }}
      />
    </section>
  );
}

export default SubmitButton;
