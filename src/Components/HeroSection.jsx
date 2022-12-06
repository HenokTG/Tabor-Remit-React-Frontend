import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useGlobalContext } from "../context";

export default function HeroSection() {
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
    <div className="mx-2 xs:mx-4 md:mx-6 lg:mx-10 bg-gray-100 pt-12 my-5 rounded-3xl overflow-hidden relative">
      <form
        onSubmit={handleNumber}
        className="absolute z-10 top-36 xs:top-32 md:top-40 xl:top-52 flex flex-col items-center w-full"
      >
        <div className="bg-white rounded-xl font-bold text-sm xs:text-base sm:text-xl flex flex-row flex-nowrap flex-Start items-center w-3/4 h-10 px-6 xs:px-12 xs:h-12 sm:h-16 lg:w-1/2">
          <span id="w-1/2">+251</span>
          <input
            required
            type="number"
            id="phone-input"
            name="phone"
            placeholder="Enter Number"
            className="ml-4 xs:ml-8 mr-0 bg-transparent focus:bg-transparent tracking-widest outline-none"
            value={phoneValue}
            onChange={(e) => {
              setPhonevalue(e.target.value.slice(0, 9));
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white p-1 px-2 my-3 rounded-md text-xs xxs:text-sm xs:text-base xs:px-6 xs:rounded-xl sm:py-2 sm:rounded-2xl sm:text-xl md:font-bold md:px-10 md:py-4 md:my-5 lg:px-16"
        >
          Topup
        </button>
      </form>
      <div className="mb-5 mx-4 ">
        <h2 className="font-bold text-sm sm:text-lg md:text-2xl">
          The easiest way to make someone happy today
        </h2>
        <p className="text-center my-2 md:my-4 text-xs sm:text-sm md:text-lg">
          Recharge mobile phones in Ethiopia with tabs to keep in touch with the
          people you care about
        </p>
      </div>
      <img
        src="/static/images/Homepage/smiling-girl.jpg"
        alt="smiling girl"
        className="pr-2 sm:pr-4 lg:pr-6 "
      />
    </div>
  );
}
