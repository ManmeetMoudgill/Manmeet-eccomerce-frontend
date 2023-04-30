//@ts-nocheck
import Image from "next/image";
import React from "react";
import Carousel from "react-elastic-carousel";

interface OffersItems {
  id: number;
  src: string;
  title: string;
  description?: string;
  price?: string;
  discount?: number;
  discountPrice?: string;
  tag?: string;
  tagBackgroundClass?: string;
}

const items: Array<OffersItems> = [
  {
    id: 1,
    src: "/assets/products/frigorifero.jpg",
    title: "Frigorifero",
    description: "Frigorifero da incasso",
    price: "1000,00",
    discount: 10,
    discountPrice: "900,00",
    tag: "Sconto",
    tagBackgroundClass: "bg-red-600",
  },
  {
    id: 2,
    src: "/assets/products/lavastoglie.webp",
    title: "Lavatrice",
    description: "Lavatrice da incasso",
    price: "2500,00",
    discount: 8,
    discountPrice: "1400,00",
    tag: "Sconto",
    tagBackgroundClass: "bg-red-600",
  },
  {
    id: 3,
    src: "/assets/products/notebook.jpg",
    title: "Lavastoviglie",
    description: "Lavastoviglie da incasso",
    price: "1000,00",
    discount: 20,
    discountPrice: "700,00",
    tag: "Acquista con MS6",
    tagBackgroundClass: "bg-red-600",
  },
  {
    id: 4,
    src: "/assets/products/scopeElettrice.jpg",
    title: "Forno",
    description: "Forno da incasso",
    price: "800,00",
    discount: 15,
    discountPrice: "620,00",
    tag: "Sconto",
    tagBackgroundClass: "bg-red-600",
  },
  {
    id: 5,
    src: "/assets/products/tv4K.jpg",
    title: "Tv 4K",
    description: "Televisore 4K",
    price: "900,00",
    discount: 5,
    discountPrice: "450,00",
    tag: "Sconto",
    tagBackgroundClass: "bg-gray-500",
  },
  {
    id: 5,
    src: "/assets/products/tvOLED.jpg",
    title: "Tv OLED",
    description: "Televisore OLED",
    price: "1000,00",
    discount: 5,
    discountPrice: "250,00",
    tag: "Acquista con PS5",
    tagBackgroundClass: "bg-red-600",
  },
  {
    id: 6,
    src: "/assets/products/tvOLED.jpg",
    title: "Tv OLED",
    description: "Televisore OLED",
    price: "1000,00",
    discount: 5,
    discountPrice: "250,00",
    tag: "Acquista con PS5",
    tagBackgroundClass: "bg-red-600",
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 650, itemsToShow: 2, itemsToScroll: 1 },
  { width: 700, itemsToShow: 2, itemsToScroll: 1 },
  { width: 900, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1000, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1420, itemsToShow: 4, itemsToScroll: 1 },
  { width: 1600, itemsToShow: 4, itemsToScroll: 1 },
  { width: 2000, itemsToShow: 4, itemsToScroll: 1 },
  { width: 2600, itemsToShow: 4, itemsToScroll: 1 },
];

const BestOffersCarousel = () => {
  return (
    <div className="flex w-full px-1 sm:px-0  justify-center items-center home_page_products_carousel my-8 ">
      <div className="w-full">
        <Carousel
          breakPoints={breakPoints}
          autoPlaySpeed={2500}
          enableAutoPlay={false}
        >
          {items.map((item) => (
            <div
              className=" rounded-md shadow-md my-4 border-2 relative  p-4"
              key={item?.id}
            >
              {/* SCONTO TAG HERE */}
              <div
                className={`absolute top-2 left-1 flex justify-center items-center   text-white px-2 py-1 font-bold rounded-2xl ${item?.tagBackgroundClass}`}
              >
                <span className="text-sm">{item?.tag}</span>
              </div>
              {/* UPPER PART */}
              <div className="flex flex-col">
                <Image
                  className="my-1 w-[320px] h-[250px] sm:w-[350px] sm:h-[320px]   md:h-[250px] md:w-[250px] 4xl:w-[320px] 4xl:h-[320px] object-contain"
                  src={item?.src}
                  width={200}
                  height={250}
                  alt={item?.title}
                />
                <div className="flex justify-center items-center flex-col">
                  <p className="my-1 text-base font-extralight text-gray-600">
                    {item?.title}
                  </p>
                  <span className=" text-xl font-light">
                    {item?.description}
                  </span>
                </div>
              </div>

              <div className="flex flex-col mt-16 items-center justify-center">
                <div className="text-blue-400 flex items-center font-medium text-lg">
                  <span>Risparmio il </span>
                  <span className=" font-medium text-blue-400 ml-2">
                    -{item?.discount}%
                  </span>
                </div>
                <div className="flex items-center justify-center ">
                  <span className="text-lg px-2 line-through text-gray-600">
                    € {item?.price}
                  </span>
                  <span className="text-lg font-bold px-2">
                    € {item?.discountPrice}
                  </span>
                </div>
              </div>

              {/* LOWER PART */}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BestOffersCarousel;
