import React from "react";

const PromotionList = [
  {
    id: 1,
    promoTitle: "Fast",
    imgLink: "/static/images/homepage/promo-section/Clock.png",
    content: "Aute nulla ullamco qui do tempor esse reprehenderit aliqua.",
  },
  {
    id: 2,
    promoTitle: "Safe",
    imgLink: "/static/images/homepage/promo-section/Worldwide.png",
    content: "Aliqua aliquip sint Lorem eiusmod enim consequat anim .",
  },
  {
    id: 3,
    promoTitle: "Simple",
    imgLink: "/static/images/homepage/promo-section/Bag.png",
    content: "Commodo laborum culpa consectetur exercitation labore.",
  },
];

function Promotions() {
  return (
    <div className="bg-white py-24 px-8">
      <h1 className="text-3xl xs:text-4xl">
        Reacharge fast, secure and simple
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-evenly mt-12">
        {PromotionList.map((item) => (
          <div key={item.id} className="text-center w-60 m-4">
            <img
              src={item.imgLink}
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
