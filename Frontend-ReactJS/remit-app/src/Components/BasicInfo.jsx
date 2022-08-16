import React from 'react'

function BasicInfo({ infoData }) {
  return (
    <div className="remit-summary">
      <div className="title-summary">
        <h4>{infoData.lineTitle} :</h4>
      </div>
      <div className="title-summary">
        <h4>{infoData.lineValue}</h4>
      </div>
    </div>
  );
}

export default BasicInfo