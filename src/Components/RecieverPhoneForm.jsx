import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useGlobalContext } from "../context";

function RecieverPhoneForm() {
  const history = useNavigate();
  const { phoneNo, setPhoneNo, setPackageSelected } = useGlobalContext();
  const [phoneValue, setPhonevalue] = useState("");

  const handleNumber = (e) => {
    e.preventDefault();
    setPhoneNo(phoneValue);
    setPackageSelected(false);
    history("/summary");
    console.log(phoneNo);
  };

  return (
    <section id="phone-input-section" className="phone-input-conatainer">
      <div className="cont-header">
        <span className="cont-header-icon">!</span>
        <span className="cont-header-text">
          Enter the Reciever's Phone Number here
        </span>
      </div>
      <form onSubmit={handleNumber} className="phone-form">
        <div className="phone-div-wraper">
          <span id="et-code-span">+251</span>
          <input
            style={{ outline: "none" }}
            required
            type="number"
            id="phone-id"
            className="donation-input"
            name="phone"
            placeholder="Enter number"
            value={phoneValue}
            onChange={(e) => {
              setPhonevalue(e.target.value.slice(0, 9));
            }}
          />
        </div>
        <button type="submit" className="btn cont-btn block">
          Start top-up
        </button>
      </form>
    </section>
  );
}

export default RecieverPhoneForm;
