import React, { useState } from "react";

const hotItWorks = [
  {
    id: 1,
    imgLink: "/static/images/homepage/How-it-works/phone.png",
    title: "Enter Reciever Phone Number",
    detail: "Ea eiusmod nulla amet quis officia adipisicing consectetur.",
  },
  {
    id: 2,
    imgLink: "/static/images/homepage/How-it-works/packages.png",
    title: "Choose a package",
    detail: "Velit anim ut laboris magna enim deserunt esse.",
  },
  {
    id: 3,
    imgLink: "/static/images/homepage/How-it-works/pay.png",
    title: "Proceed to payment",
    detail:
      "Proident est ullamco culpa veniam laboris laborum quis anim fugiat.",
  },
  {
    id: 4,
    imgLink: "/static/images/homepage/How-it-works/success.png",
    title: "Phone is Recharged",
    detail: "Esse amet laboris pariatur laborum veniam ut id ad eiusmod.",
  },
];

function HowItWorks() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-white pt-16 pb-1" id="how-it-works">
      <h1 className="font-bold">How it works?</h1>
      <div className="flex flex-row flex-wrap items-center justify-evenly">
        {hotItWorks.map((elem) => (
          <div
            key={elem.id}
            className="rounded-md bg-white border-gray-200 shadow-2xl overflow-hidden w-5/6 sm:w-2/3 md:w-72 border-2 mt-12 mx-4"
          >
            <img
              src={elem.imgLink}
              alt={elem.title}
              className="h-52 xs:h-60 sm:h-80 md:h-48 w-full shadow-md object-cover"
            />
            <div className="m-4">
              <span className="font-bold">{elem.title}</span>
              <span className="block text-gray-500 text-sm">{elem.detail}</span>
            </div>
          </div>
        ))}
      </div>
      {showMore && (
        <div className="py-16">
          <ol className="mx-12 xs:mx-24 lg:mx-32 xl:mx-40 list-decimal list-outside leading-6 text-justify">
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
          <div className="w-auto mt-8">
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
        <div className="w-auto my-12">
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
