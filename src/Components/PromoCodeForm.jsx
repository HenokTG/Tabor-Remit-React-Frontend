import React, { useState, useEffect } from "react";

import { useGlobalContext } from "../context";
import { checkPromoCode } from "../modules";

function PromoCodeForm() {
  const [promoCodeValue, setPromoCodeValue] = useState("");
  const {
    setSummaryMax,
    isPromoted,
    setIsPromoted,
    chargedAmount,
    setChargedAmount,
    operatorSelected,
    packageSelected,
  } = useGlobalContext();

  const setPromotedAmount = () => {
    const promoDisc = isPromoted.promoCode.promo_discount_rate;
    setChargedAmount(chargedAmount * (1 - promoDisc));
  };
  const resetAmount = () => {
    const packUSD =
      packageSelected.package.selling_price_USD *
      (1 - packageSelected.package.discount_rate);
    const operDisc = operatorSelected.operator.operator_discount_rate;
    const chargAmt = packUSD * (1 - operDisc);

    setChargedAmount(chargAmt);
  };

  useEffect(() => {
    if (isPromoted.promoCode !== null && isPromoted.isPromoted === false) {
      setPromotedAmount();
    } else {
      resetAmount();
      setSummaryMax(5);
    }
  }, [isPromoted]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section
      id="promoCode-input-section"
      className="promoCode-input-conatainer"
    >
      {!isPromoted.isPromoted ? (
        <h4 onClick={() => setIsPromoted({ ...isPromoted, isPromoted: true })}>
          {isPromoted.isAdd ? "Add" : "Change"} Promo Code
        </h4>
      ) : (
        <form
          onSubmit={(e) =>
            checkPromoCode(e, promoCodeValue, setSummaryMax, setIsPromoted)
          }
          className="promo-form"
        >
          <input
            type="text"
            id="promoCode-id"
            className="promoCode-input"
            name="promoCode"
            placeholder="Enter promo code"
            value={promoCodeValue}
            onChange={(e) => setPromoCodeValue(e.target.value)}
          />
          <button type="submit" className="btn promoCode-btn  block">
            Submit
          </button>
        </form>
      )}
    </section>
  );
}

export default PromoCodeForm;
