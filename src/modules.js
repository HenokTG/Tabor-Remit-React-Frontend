import { axiosInstance } from "./axios";

export const returnSummary = (phoneNo, operator, mobPackage, promo) => {
  phoneNo = String(phoneNo);
  const customerNumber =
    "+251 " +
    phoneNo.slice(0, 3) +
    " " +
    phoneNo.slice(3, 5) +
    " " +
    phoneNo.slice(5, 7) +
    phoneNo.slice(7, 9);
  const summaryData = [
    { id: 1, lineTitle: "Country", lineValue: "Ethiopia" },
    { id: 2, lineTitle: "Phone Number", lineValue: customerNumber },
    {
      id: 3,
      lineTitle: "Operator",
      lineValue: operator && operator.operator_name,
    },
    {
      id: 4,
      lineTitle: "Operator Discount",
      lineValue: `${operator && operator.operator_discount_rate * 100}%`,
    },
    {
      id: 5,
      lineTitle: "Airtime Amount Selected",
      lineValue: mobPackage && `${mobPackage.airtime_value} Birr`,
    },
    {
      id: 6,
      lineTitle: "Promotion Discount",
      lineValue: `${promo && promo.promo_discount_rate * 100}%`,
    },
  ];

  return summaryData;
};

//Fetch List of Operators
export const fetchOperators = (
  setOperatorsList,
  setOperatorSelected,
  setSummaryMax
) => {
  axiosInstance
    .get("api/remit/operators/")
    .then((res) => {
      const operatorList = res.data
        .filter((oper) => oper.id !== 0)
        .sort((a, b) =>
          a.operator_order > b.operator_order
            ? 1
            : a.operator_order === b.operator_order
            ? a.operator_name > b.operator_name
              ? 1
              : -1
            : -1
        );
      setOperatorsList(operatorList);
      if (operatorList.length === 1) {
        setOperatorSelected({
          isOpSelected: true,
          operator: operatorList[0],
        });
        setSummaryMax(4);
      }
    })
    .catch(function (error) {
      console.log(error.toJSON());
      console.error("Caution: No Operator list is fetched to render!");
    });
};

//Fetch List of Packages
export const fetchPackages = (
  setPackagesList,
  setIsLoading,
  setIsLoadingFailed
) => {
  axiosInstance
    .get("api/remit/packages/")
    .then((res) => {
      const packageList = res.data
        .filter((mobPack) => mobPack.id !== 0)
        .sort((a, b) =>
          a.package_order > b.package_order
            ? 1
            : a.package_order === b.package_order
            ? a.airtime_value > b.airtime_value
              ? 1
              : -1
            : -1
        );
      setPackagesList(packageList);
      setIsLoading(false);
      setIsLoadingFailed(false);
    })
    .catch(function (error) {
      setIsLoading(false);
      setIsLoadingFailed(true);
      console.log(error.toJSON());
      console.error("Caution: No Package list is fetched to render!");
    });
};

// Check if the Promo Code submited is Valid.
export const checkPromoCode = (e, promocode, setSummaryMax, setIsPromoted) => {
  e.preventDefault();
  axiosInstance
    .get(`api/remit/promo-codes/${promocode}`)
    .then((res) => {
      if (res.data.message) {
        setSummaryMax(5);
        setIsPromoted({
          isAdd: true,
          isPromoted: true,
          promoCode: null,
        });
      } else {
        const validPromo = !res.data.message && res.data;
        setSummaryMax(6);
        setIsPromoted({
          isAdd: false,
          isPromoted: false,
          promoCode: validPromo,
        });
      }

      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
      console.error("Promo Code INVALID!");
    });
};

// Submit Invoive....this is after transaction is approved
export const handleInvoice = (paymentDetail, navigate, orderID) => {
  const postURL = "api/remit/invoices/" + orderID;
  axiosInstance
    .post(postURL, paymentDetail)
    .then(function (response) {
      navigate("/success");
    })
    .catch(function (error) {
      console.log(error);
    });
};
