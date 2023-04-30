import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import FirstOffer from "../../public/assets/offer_1.webp";
import SecondOffer from "../../public/assets/offer_2.jpg";
import ThirdOffer from "../../public/assets/offer_3.jpg";
const OffersSection = () => {
  return (
    <section className="flex items-center justify-center mt-8 mb-4">
      <div className="w-4/5   grid  grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  ">
        <div className="  mx-4 my-4">
          <div className="offer__upper__part ">
            <Image className="w-full" src={FirstOffer} alt="First Offer" />
          </div>
          <div className="offer__lower__part flex-col p-8 bg-customGray-100">
            <h3 className="text-xl font-medium uppercase text-blueCustom-100">
              Speciale
            </h3>
            <h4 className="my-1 text-3xl font-bold text-blueCustom-100">
              Piccoli Elettrodomestici
            </h4>
            <span className="my-2 text-lg text-customBlue-100 font-light">
              Scopri le offerte
            </span>
            <button className="my-6 bg-yellowCustom-100 p-2 rounded-2xl shadow-md flex items-center ">
              <span>Scopri di più</span>
              <IoIosArrowForward className="text-xl ml-2" />
            </button>
          </div>
        </div>
        {/* SECOND OFFER */}
        <div className=" mx-4 my-4">
          <div className="offer__upper__part ">
            <Image className="w-full" src={SecondOffer} alt="First Offer" />
          </div>
          <div className="offer__lower__part flex-col p-8 bg-customGray-100">
            <h3 className="text-xl font-medium uppercase text-blueCustom-100">
              Offerta Speciale
            </h3>
            <h4 className="my-1 text-3xl font-bold text-blueCustom-100">
              Scopri i prodotti scontati
            </h4>
            <span className="my-2 text-lg text-customBlue-100 font-light">
              Scopri le offerte
            </span>
            <button className="my-6 bg-yellowCustom-100 p-2 rounded-2xl shadow-md flex items-center ">
              <span>Scopri di più</span>
              <IoIosArrowForward className="text-xl ml-2" />
            </button>
          </div>
        </div>
        {/* THIRD OFFER */}
        <div className="mx-4 my-4 ">
          <div className="offer__upper__part ">
            <Image className="w-full" src={ThirdOffer} alt="First Offer" />
          </div>
          <div className="offer__lower__part flex-col p-8 bg-customGray-100">
            <h3 className="text-xl font-medium uppercase text-blueCustom-100">
              Speciale
            </h3>
            <h4 className="my-1 text-3xl font-bold text-blueCustom-100">
              Informatica
            </h4>
            <span className="my-2 text-lg text-customBlue-100 font-light">
              Scopri le offerte
            </span>
            <button className="my-6 bg-yellowCustom-100 p-2 rounded-2xl shadow-md flex items-center ">
              <span>Scopri di più</span>
              <IoIosArrowForward className="text-xl ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
