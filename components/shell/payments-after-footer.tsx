"use client";
import Image from "next/image";
import React from "react";

const PaymentsAfterFooter = () => {
  return (
    <div className="flex justify-center items-center py-1">
      <div className="w-3/4  justify-center my-4 flex items-center ">
        <Image
          className="mx-5 hover:scale-125 cursor-pointer transition-all duration-500 ease-in-out"
          src="/assets/payments_methods/maestro.webp"
          width={80}
          height={80}
          alt="maestro"
        />
        <Image
          className="mx-5 hover:scale-125 cursor-pointer transition-all duration-500 ease-in-out "
          src="/assets/payments_methods/visa.webp"
          width={80}
          height={80}
          alt="visa"
        />
        <Image
          className="mx-5 hover:scale-125 cursor-pointer transition-all duration-500 ease-in-out "
          src="/assets/payments_methods/mastercard.webp"
          width={80}
          height={80}
          alt="Mastercard"
        />
        <Image
          className="mx-5 hover:scale-125 cursor-pointer transition-all duration-500 ease-in-out "
          src="/assets/payments_methods/paypal.webp"
          width={80}
          height={80}
          alt="Pay Pal"
        />
        <Image
          className="mx-5 hover:scale-125 cursor-pointer transition-all duration-500 ease-in-out "
          src="/assets/payments_methods/verifiedbyvisa.webp"
          width={80}
          height={80}
          alt="Verified by visa"
        />
      </div>
    </div>
  );
};

export default PaymentsAfterFooter;
