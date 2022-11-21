import React, { useState } from "react";

import { useGlobalContext } from "../context";

import phone from "../Images/Homepage/How-it-works/phone.png";
import packages from "../Images/Homepage/How-it-works/packages.png";
import payment from "../Images/Homepage/How-it-works/pay.png";
import success from "../Images/Homepage/How-it-works/success.png";

const hotItWorks = [
  {
    id: 1,
    pic: phone,
    title: "Enter Reciever Phone Number",
    detail: "Ea eiusmod nulla amet quis officia adipisicing consectetur.",
  },
  {
    id: 2,
    pic: packages,
    title: "Choose a package",
    detail: "Velit anim ut laboris magna enim deserunt esse.",
  },
  {
    id: 3,
    pic: payment,
    title: "Proceed to payment",
    detail:
      "Proident est ullamco culpa veniam laboris laborum quis anim fugiat.",
  },
  {
    id: 4,
    pic: success,
    title: "Phone is Recharged",
    detail: "Esse amet laboris pariatur laborum veniam ut id ad eiusmod.",
  },
];

function HowItWorks() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-white py-16 ">
      <h1 className="font-bold">How it works?</h1>
      <div className="py-12 flex flex-row flex-nowrap items-center justify-evenly">
        {hotItWorks.map((elem) => (
          <div
            key={elem.id}
            className="rounded-md bg-white border-gray-200 shadow-2xl overflow-hidden w-72 border-2"
          >
            <img
              src={elem.pic}
              alt={elem.title}
              className="h-32 sm:h-48 w-full shadow-md object-cover"
            />
            <div className="m-4">
              <span className="font-bold">{elem.title}</span>
              <span className="block text-gray-500 text-sm">{elem.detail}</span>
            </div>
          </div>
        ))}
      </div>
      {showMore && (
        <div className="py-8">
          <ol className="mx-40 list-decimal list-outside pr-12 leading-6 text-justify">
            <li>
              Enter the reciever phone number in the entry field and press topup
              button, you will be redirected to "Summary" page.
            </li>
            <li className="my-2">
              In the Summary page, check the reciever phone number is correct
              and choose package to purchase. The total cost for the package in
              USD will be displayed in the "Total Charge" section. You can
              change the package selected by pressing the "Change" button in the
              summary list.
            </li>
            <li className="my-2">
              If you want use promo-code for discount on packages, you can
              submit your promo-code by pressing "Add Promo Code" button. If the
              promo-code submited is valid, its' discount rate will be applied
              to the "Total Charge" amount and the discount rate rate will be
              shown in the summary list. You can also change the promo-code by
              pressing the "Change Promo Code" button. If the promo-code is
              invalid, you recieve notification indicating the error no discount
              rate will be applied.
            </li>
            <li className="my-2">
              Proceed to the payment section, choose the suitable payment method
              available in the section and follow the steps to complete the
              purchase.
            </li>
            <li className="my-2">
              If the purchase is completed successfully, you will be redirected
              to the "success" page that shows success message containing the
              package amount and the phone number the package is purchased for
              and you also recieve a confirmition email on your purchase email
              address that contains the transaction id. Press "Back to Home"
              button to return "Homepage" to purchase another package.
            </li>
            <li className="my-2">
              If the purchase is unsuccessfully for any reason, you will be
              redirected to the "error" page that shows error message and
              package will not be purchased. Press "Back to Home" button to
              return "Homepage" to try again.
            </li>
          </ol>
          <div className="w-auto mt-4">
            <h1
              onClick={() => setShowMore(false)}
              className="font-bold hover: cursor-pointer hover:italic hover:underline text-sm inline-block"
            >
              Hide steps
            </h1>
          </div>
        </div>
      )}

      {!showMore && (
        <div className="w-auto mb-8">
          <h1
            onClick={() => setShowMore(true)}
            className="font-bold hover: cursor-pointer hover:italic hover:underline text-sm inline-block"
          >
            Learn more
          </h1>
        </div>
      )}
    </div>
  );
}

export default HowItWorks;
