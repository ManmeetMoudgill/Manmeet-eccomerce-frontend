//@ts-nocheck
import React from "react";
import Image from "next/image";
import Carousel from "react-elastic-carousel";
import { BreakPoints } from "@/view-model/home";

const companiesLogies: Array<{
  id: number;
  src: string;
  alt: string;
  slug: string;
}> = [
  {
    id: 1,
    src: "/assets/companies/asus.jpg",
    alt: "Assus",
    slug: "assus",
  },
  {
    id: 2,
    src: "/assets/companies/ps.jpg",
    alt: "PlayStation",
    slug: "playstation",
  },
  {
    id: 3,
    src: "/assets/companies/yamha.jpg",
    alt: "Yamaha",
    slug: "yamaha",
  },
  {
    id: 4,
    src: "/assets/companies/delonghi.jpg",
    alt: "Delonghi",
    slug: "delonghi",
  },
  {
    id: 5,
    src: "/assets/companies/nintendop.jpg",
    alt: "Nintendo",
    slug: "nintendo",
  },
  {
    id: 6,
    src: "/assets/companies/whirlpool.jpg",
    alt: "Whirlpool",
    slug: "whirlpool",
  },
  {
    id: 7,
    src: "/assets/companies/zerowatt.jpg",
    alt: "Zerowatt",
    slug: "zerowatt",
  },
  {
    id: 8,
    src: "/assets/companies/siemens.jpg",
    alt: "Siemens",
    slug: "siemens",
  },
  {
    id: 9,
    src: "/assets/companies/meliconi.jpg",
    alt: "Meliconi",
    slug: "meliconi",
  },
  {
    id: 10,
    src: "/assets/companies/logo-hp2.webp",
    alt: "HP",
    slug: "hp",
  },
];
const breakPoints: Array<BreakPoints> = [
  { width: 1, itemsToShow: 2 },
  { width: 650, itemsToShow: 3, itemsToScroll: 1 },
  { width: 700, itemsToShow: 3, itemsToScroll: 1 },
  { width: 900, itemsToShow: 4, itemsToScroll: 1 },
  { width: 1000, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1420, itemsToShow: 4, itemsToScroll: 1 },
  { width: 1600, itemsToShow: 5, itemsToScroll: 1 },
  { width: 2000, itemsToShow: 5, itemsToScroll: 1 },
  { width: 2600, itemsToShow: 6, itemsToScroll: 1 },
];

const CompaniesLogoCarousel = () => {
  return (
    <section className="flex items-center  justify-center shared__carousel  mb-10 ">
      <div className=" flex flex-col items-center justify-center w-full px-4 md:px-0 md:w-4/5 ">
        <div className="flex justify-center items-center mb-8">
          <p className="text-blueCustom-100 text-center text-xl  md:text-4xl font-bold">
            Da Euronics Trovi le migiore mache
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <Carousel breakPoints={breakPoints} itemPadding={[10, 10, 10, 10]}>
            {companiesLogies.map((item) => (
              <div key={item.id} className="flex justify-center items-center ">
                <Image src={item.src} alt={item.alt} width={200} height={150} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CompaniesLogoCarousel;
