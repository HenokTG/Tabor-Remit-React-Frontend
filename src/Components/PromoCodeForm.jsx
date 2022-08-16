import React, { useState } from "react";

import { useGlobalContext } from "../context";

function PromoCodeForm() {

  const [promoCodeValue, setPromoCodeValue] = useState("");
  const [showPromoForm, setShowPromoForm] = useState(false);
  const [addPromoForm, setAddPromoForm] = useState(true);
  const { setSummaryMax, setPromo, setIsPromoted } = useGlobalContext();

  const handlePromoCode = (e) => {
    e.preventDefault();
    console.log("Promo Code Submited!", promoCodeValue);
    setSummaryMax(5);
    setPromo(0.2);
    setShowPromoForm(false);
    setAddPromoForm(false);
    setIsPromoted(true);
  };
  return (
    <section
      id="promoCode-input-section"
      className="promoCode-input-conatainer"
    >
      {!showPromoForm ? (
        <h4 onClick={() => setShowPromoForm(true)}>
          {addPromoForm ? "Add" : "Edit"} Promo Code
        </h4>
      ) : (
        <form onSubmit={handlePromoCode} className="phone-form">
          <input
            type="text"
            id="promoCode-id"
            className="promoCode-input"
            name="promoCode"
            placeholder="Enter promo code"
            value={promoCodeValue}
            onChange={(e) => setPromoCodeValue(e.target.value)}
          />
          <button type="submit" className="btn promoCode-btn  block ">
            Submit
          </button>
        </form>
      )}
    </section>
  );
}

export default PromoCodeForm;
