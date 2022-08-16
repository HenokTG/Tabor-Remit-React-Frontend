const serviceCharge = 0.1;
const conversionRate = 1 / 52.7002;

export const returnValue = (
  promo,
  operator,
  discount,
  phoneNo,
  transferdAmount
) => {
  phoneNo = String(phoneNo);
  const customerNumber =
    "+251 " +
    phoneNo.slice(0, 3) +
    " " +
    phoneNo.slice(3, 5) +
    " " +
    phoneNo.slice(5, 7) +
    " " +
    phoneNo.slice(7, 9);
  const summaryData = [
    { lineTitle: "Country", lineValue: "Ethiopia" },
    { lineTitle: "Phone Number", lineValue: customerNumber },
    { lineTitle: "Operator", lineValue: operator },
    { lineTitle: "Operator Discount", lineValue: `${discount * 100} %` },
    { lineTitle: "Promotion Discount", lineValue: `${promo * 100} %` },
  ];
  const totalAmount =
    transferdAmount * (1 + (serviceCharge - promo - discount)) * conversionRate;
  return [serviceCharge, conversionRate, summaryData, totalAmount];
};
