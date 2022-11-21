import React, { useState } from "react";

import Clock from "../Images/Homepage/promo-section/Clock.png";
import Worldwide from "../Images/Homepage/promo-section/Worldwide.png";
import Bag from "../Images/Homepage/promo-section/Bag.png";

const PromotionList = [
  {
    id: 1,
    promoTitle: "Fast",
    logo: Clock,
    content:
      "Aute nulla ullamco qui do tempor esse reprehenderit aliqua adipisicing Lorem id.",
  },
  {
    id: 2,
    promoTitle: "Safe",
    logo: Worldwide,
    content:
      "Aliqua aliquip sint Lorem eiusmod enim consequat anim ullamco sunt commodo et dolore.",
  },
  {
    id: 3,
    promoTitle: "Simple",
    logo: Bag,
    content:
      "Commodo laborum culpa consectetur exercitation labore laborum veniam dolore nulla officia sint commodo eiusmod eu.",
  },
];

function Promotions() {
  return (
    <div className="bg-white py-24 ">
      <h1 className="">Reacharge fast, secure and simple</h1>
      <div className="grid grid-cols-3 justify-items-center content-center gap-4 mt-20">
        {PromotionList.map((item) => (
          <div key={item.id} className="text-center w-60">
            <img
              src={item.logo}
              alt={item.promoTitle}
              className="h-16 mb-8 inline-block"
            />
            <h2 className="mb-4">{item.promoTitle} </h2>
            <p className="text-center">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Promotions;
