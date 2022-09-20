import React, { useState, useContext } from "react";

const myContext = React.createContext();

export const useGlobalContext = () => {
  return useContext(myContext);
};

export default function AppProvider({ children }) {
  const [preparing, setPreparing] = useState(false);
  const [transferdAmount, setTransferdAmount] = useState(0);
  const [chargedAmount, setChargedAmount] = useState(0);
  const [operatorsList, setOperatorsList] = useState([]);
  const [operatorSelected, setOperatorSelected] = useState({
    isOpSelected: false,
    operator: null,
  });
  const [packagesList, setPackagesList] = useState([]);
  const [packageSelected, setPackageSelected] = useState({
    packageChosen: false,
    package:null,
  });

  const [isPromoted, setIsPromoted] = useState({
    isAdd: true,
    isPromoted: false,
    promoCode: null,
  });
  const [phoneNo, setPhoneNo] = useState(920809496);
  const [summaryMax, setSummaryMax] = useState(2);

  return (
    <myContext.Provider
      value={{
        preparing,
        setPreparing,
        phoneNo,
        setPhoneNo,
        transferdAmount,
        setTransferdAmount,
        chargedAmount,
        setChargedAmount,
        operatorsList,
        setOperatorsList,
        operatorSelected,
        setOperatorSelected,
        packagesList,
        setPackagesList,
        packageSelected,
        setPackageSelected,
        isPromoted,
        setIsPromoted,
        summaryMax,
        setSummaryMax,
      }}
    >
      {children}
    </myContext.Provider>
  );
}
