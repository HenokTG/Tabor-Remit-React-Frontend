import React from "react";

import { FaRegThumbsDown } from "react-icons/fa";

import { useGlobalContext } from "../context";

function BasicInfo({ infoData }) {
  const { setPackageSelected, setSummaryMax } = useGlobalContext();

  const handleChangeAirtime = () => {
    setPackageSelected({
      packageChosen: false,
      package: null,
    });
    setSummaryMax(4);
  };

  return (
    <div className="remit-summary">
      <div className="title-summary">
        <h4>{infoData.lineTitle} :</h4>
      </div>
      <div
        className="title-summary"
        id={infoData.id === 5 && "green-amount-text"}
      >
        <h3>{infoData.lineValue}</h3>
      </div>
      {infoData.id === 5 && (
        <button
          className="amount-edit-btn"
          type="button"
          onClick={handleChangeAirtime}
        >
          <div className="btn-flex">
            <FaRegThumbsDown />
            Change
          </div>
        </button>
      )}
    </div>
  );
}

export default BasicInfo;
