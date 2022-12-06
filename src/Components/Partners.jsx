import React from "react";

function Partners() {
  return (
    <div className="bg-white px-4 xs:px-8">
      <h1 className="text-3xl xs:text-4xl">
        Supported Telecoms and Payment Methods
      </h1>
      <div className="flex flex-wrap justify-evenly items-center pt-12 pb-20 px-10 xs:px-20">
        <img
          src="/static/images/homepage/partners-section/ethio-telecom.png"
          alt="Ethio Telecom"
          className="h-16 inline-block m-4"
        />
        <img
          src="/static/images/homepage/partners-section/Safaricom_Ethiopia.png"
          alt="Safaricom"
          className="h-16 inline-block m-4"
        />
        <img
          src="/static/images/homepage/partners-section/payments.png"
          alt="payment methods"
          className="h-16 inline-block m-4"
        />
      </div>
    </div>
  );
}

export default Partners;
