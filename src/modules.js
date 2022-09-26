import { axiosInstance } from "./axios";

export const returnSummary = (phoneNo, operator, promo) => {
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
    { lineTitle: "Country", lineValue: "Ethiopia" },
    { lineTitle: "Phone Number", lineValue: customerNumber },
    { lineTitle: "Operator", lineValue: operator && operator.operator_name },
    {
      lineTitle: "Operator Discount",
      lineValue: `${operator && operator.operator_discount_rate * 100}%`,
    },
    {
      lineTitle: "Promotion Discount",
      lineValue: `${promo && promo.promo_discount_rate * 100}%`,
    },
  ];

  return summaryData;
};

//Fetch List of Operators
export const fetchOperators = (setOperatorsList, setIsLoadingFailed) => {
  axiosInstance
    .get("api/remit/operators/")
    .then((res) => {
      const operatorList = res.data.sort((a, b) =>
        a.operator_order > b.operator_order
          ? 1
          : a.operator_order === b.operator_order
          ? a.operator_name > b.operator_name
            ? 1
            : -1
          : -1
      );
      setOperatorsList(operatorList);
      console.log("Operators: ", res.data);
    })
    .catch(function (error) {
      setIsLoadingFailed(true);
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
      const packageList = res.data.sort((a, b) =>
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
      console.log("Packages: ", packageList);
    })
    .catch(function (error) {
      setIsLoadingFailed(true);
      console.log(error.toJSON());
      console.error("Caution: No Package list is fetched to render!");
    });
};

// Check if the Promo Code submited is Valid.
export const checkPromoCode = (e, promocode, setSummaryMax, setIsPromoted) => {
  e.preventDefault();
  console.log("Promo Code Submited!", promocode);

  axiosInstance
    .get(`api/remit/promo-codes/${promocode}`)
    .then((res) => {
      if (res.data.message) {
        const invalidPromo = res.data.message;
        console.log("Promo Status: ", invalidPromo);
        setSummaryMax(4);
        setIsPromoted({
          isAdd: true,
          isPromoted: true,
          promoCode: null,
        });
      } else {
        const validPromo = !res.data.message && res.data;
        setSummaryMax(5);
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
export const handleInvoice = (paymentDetail, history, orderID) => {
  console.log("Payment redirected to Paypal");
  console.log("Payment Detail: ", paymentDetail);
  const postURL = "api/remit/invoices/" + orderID;
  axiosInstance
    .post(postURL, paymentDetail)
    .then(function (response) {
      window.location.replace(window.location.origin)
    })
    .catch(function (error) {
      console.log(error);
    });
};

