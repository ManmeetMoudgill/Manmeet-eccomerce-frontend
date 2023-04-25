import React, { useState } from "react";
import { GrClose } from "react-icons/gr";

const NEW_OFFER = {
  id: 1,
  title: "Today's Offer",
  description: "Apple Watch Series 6",
};

const Newoffers = () => {
  const [isOfferBarOpen, setIsOfferBarOpen] = useState<boolean>(true);
  return isOfferBarOpen ? (
    <>
      <div className="py-3 bg-yellowCustom-100 flex justify-center items-center">
        <div className="w-11/12 sm:w-10/12 2xl:w-3/4 flex justify-center  items-center relative ">
          <div className="absolute top-1 right-0">
            <GrClose
              onClick={() => {
                setIsOfferBarOpen(false);
              }}
              className="text-base 2xl:text-xl cursor-pointer"
            />
          </div>
          <h4 className="uppercase tracking-wide text-base 2xl:text-xl font-bold cursor-pointer hover:underline">
            {NEW_OFFER?.description}
          </h4>
        </div>
      </div>
    </>
  ) : null;
};

export default Newoffers;
