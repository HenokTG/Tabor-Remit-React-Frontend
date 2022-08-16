import React, { useState, useEffect, useContext } from "react";

const myContext = React.createContext();

export const useGlobalContext = () => {
  return useContext(myContext);
};

export default function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingFailed, setIsLoadingFailed] = useState(false);
  const [packages, setPackages] = useState([]);
  const [promo, setPromo] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [urlRedirect, setUrlRedirect] = useState(null);
  const [isPromoted, setIsPromoted] = useState(false);
  const [packageSelected, setPackageSelected] = useState(false);
  const [preparing, setPreparing] = useState(false);
  const [promoting, setPromoting] = useState(false);
  const [operator, setOperator] = useState("Ethio Telecom");
  const [phoneNo, setPhoneNo] = useState(null);
  const [summaryMax, setSummaryMax] = useState(3);
  const [transferdAmount, setTransferdAmount] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setIsLoadingFailed(false);
  }, []);

  return (
    <myContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isLoadingFailed,
        setIsLoadingFailed,
        packages,
        setPackages,
        promo,
        setPromo,
        discount,
        setDiscount,
        totalAmount,
        setTotalAmount,
        urlRedirect,
        setUrlRedirect,
        isPromoted,
        setIsPromoted,
        packageSelected,
        setPackageSelected,
        preparing,
        setPreparing,
        promoting,
        setPromoting,
        operator,
        setOperator,
        phoneNo,
        setPhoneNo,
        summaryMax,
        setSummaryMax,
        transferdAmount,
        setTransferdAmount,
      }}
    >
      {children}
    </myContext.Provider>
  );
}
