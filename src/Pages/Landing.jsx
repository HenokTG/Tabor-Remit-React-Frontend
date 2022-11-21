import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import smilingGirl from "../Images/smiling-girl.jpg";
import { useGlobalContext } from "../context";

import HowItWorks from "../Components/HowItWorks";
import DownloadApp from "../Components/DownloadApp";
import Promotion from "../Components/Promotion";
import Partners from "../Components/Partners";

function Home() {
  const navigate = useNavigate();
  const { phoneNo, setPhoneNo, setPackageSelected } = useGlobalContext();
  const [phoneValue, setPhonevalue] = useState("");

  const handleNumber = (e) => {
    e.preventDefault();
    setPhoneNo(phoneValue);
    setPackageSelected(false);
    navigate("/summary");
    console.log(phoneNo);
  };

  return (
    <div>
      <div className="mt-20">
        <div className="mx-10 bg-gray-100 pt-12 my-5 rounded-3xl overflow-hidden relative">
          <form
            onSubmit={handleNumber}
            className="absolute z-10 top-64 flex flex-col items-center w-full "
          >
            <div className="bg-white w-1/2 h-16 rounded-xl font-bold text-xl flex flex-row flex-nowrap flex-Start items-center px-12 ">
              <span id="w-1/2">+251</span>
              <input
                required
                type="number"
                id="phone-input"
                name="phone"
                placeholder="Enter Number"
                className="ml-8 tracking-widest outline-none"
                value={phoneValue}
                onChange={(e) => {
                  setPhonevalue(e.target.value.slice(0, 9));
                }}
              />
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white w-2/12 py-4 rounded-2xl font-bold text-xl my-5"
            >
              Topup
            </button>
          </form>
          <div className="mb-5 ">
            <h2 className="font-bold">
              The easiest way to make someone happy today
            </h2>
            <p className="text-center my-4">
              Recharge mobile phones in Ethiopia with tabs to keep in touch with
              the people you care about
            </p>
          </div>

          <img src={smilingGirl} alt="smiling girl" className="pr-6 " />
        </div>
      </div>
      <HowItWorks /> <DownloadApp /> <Promotion /> <Partners />
    </div>
  );
}

export default Home;
