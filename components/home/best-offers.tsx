import React from "react";
import BestOffersCarousel from "./best-offers-carousel";

const BestOffers = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="w-full md:w-4/5  flex flex-col items-center justify-center">
        {/* UPPER DIV */}
        <div className="flex items-center justify-center my-4">
          <h3 className="text-3xl text-blueCustom-100 font-bold">
            Le Migliore offerte del momento
          </h3>
        </div>
        {/* LOWER DIV PRDOCUTS CAROUSEL */}
        <BestOffersCarousel />
      </div>
    </section>
  );
};

export default BestOffers;
