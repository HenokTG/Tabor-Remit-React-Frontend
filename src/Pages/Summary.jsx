import React, { useEffect, useState } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import BasicInfo from "../Components/BasicInfo";
import Operators from "../Components/Operators";
import Packages from "../Components/Packages";
import AmountSummary from "../Components/AmountSummary";
import PromoCodeForm from "../Components/PromoCodeForm";
import SubmitButton from "../Components/SubmitButton";

import { useGlobalContext } from "../context";
import { returnSummary, fetchOperators, fetchPackages } from "../modules";

function Summary() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingFailed, setIsLoadingFailed] = useState(false);

  const {
    phoneNo,
    operatorsList,
    setOperatorsList,
    operatorSelected,
    packagesList,
    setPackagesList,
    packageSelected,
    summaryMax,
    isPromoted,
  } = useGlobalContext();

  useEffect(() => {
    setIsLoading(true);
    setIsLoadingFailed(false);
    fetchOperators(setOperatorsList, setIsLoadingFailed);
    fetchPackages(setPackagesList, setIsLoading, setIsLoadingFailed);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const summaryData = returnSummary(
    phoneNo,
    operatorSelected.operator,
    isPromoted.promoCode
  );

  return (
    <div className="summary-conatainer">
      <h2 style={{ marginBottom: "1rem" }}>Summary</h2>
      {summaryData.slice(0, summaryMax).map((infoElem, infoInx) => {
        return (
          <div className="pack-index" key={infoInx}>
            <BasicInfo infoData={infoElem} />
          </div>
        );
      })}
      {!operatorSelected.isOpSelected && (
        <Operators operatorsList={operatorsList} />
      )}
      <div className="hrt-rule--horizontal"></div>
      {packageSelected.packageChosen ? (
        <>
          <AmountSummary />
          <div className="hrt-rule--horizontal"></div>
          <PromoCodeForm />
          <div className="hrt-rule--horizontal"></div>
          <PayPalScriptProvider
            options={{
              "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
              components: "buttons",
            }}
          >
            <SubmitButton />
          </PayPalScriptProvider>
        </>
      ) : (
        <section className="package-section">
          <div className="pack-title" style={{ marginBottom: "0.5rem" }}>
            <h3>Choose the Package</h3>
          </div>
          <div className="pack-list">
            {packagesList &&
              packagesList.map((pkElem, pkInx) => {
                const {
                  selling_price_ETB,
                  airtime_value,
                  selling_price_USD,
                  discount_rate,
                } = pkElem;
                const servChrg =
                  (selling_price_ETB - airtime_value) / airtime_value;
                return (
                  <div className="pack-index" key={pkInx}>
                    <Packages
                      packId={pkElem.id}
                      packUSD={selling_price_USD * (1 - discount_rate)}
                      pkData={airtime_value}
                      serviceCharge={(servChrg * (1 - discount_rate)).toFixed(
                        4
                      )}
                    />
                  </div>
                );
              })}
          </div>
        </section>
      )}
    </div>
  );
}

export default Summary;
