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
  },
  {
    id: 2,
    src: "/assets/products/lavastoglie.webp",
    title: "Lavatrice",
    description: "Lavatrice da incasso",
    price: "2500,00",
    discount: 8,
    discountPrice: "1400,00",
  },
  {
    id: 3,
    src: "/assets/products/notebook.jpg",
    title: "Lavastoviglie",
    description: "Lavastoviglie da incasso",
    price: "1000,00",
    discount: 20,
    discountPrice: "700,00",
  },
  {
    id: 4,
    src: "/assets/products/scopeElettrice.jpg",
    title: "Forno",
    description: "Forno da incasso",
    price: "800,00",
    discount: 15,
    discountPrice: "620,00",
  },
  {
    id: 5,
    src: "/assets/products/tv4K.jpg",
    title: "Tv 4K",
    description: "Televisore 4K",
    price: "900,00",
    discount: 5,
    discountPrice: "450,00",
  },
  {
    id: 5,
    src: "/assets/products/tvOLED.jpg",
    title: "Tv OLED",
    description: "Televisore OLED",
    price: "1000,00",
    discount: 5,
    discountPrice: "250,00",
  },
  {
    id: 6,
    src: "/assets/products/tvOLED.jpg",
    title: "Tv OLED",
    description: "Televisore OLED",
    price: "1000,00",
    discount: 5,
    discountPrice: "250,00",
  },
];

const BestOffersCarousel = () => {
  return (
    <div className="flex w-full justify-center items-center home_page_products_carousel my-8 ">
      <div className="w-full">
        <Carousel
          itemsToShow={5}
          itemsToScroll={1}
          autoPlaySpeed={2500}
          enableAutoPlay={false}
        >
          {items.map((item) => (
            <div className=" rounded-md shadow-md my-4  p-4" key={item.id}>
              {/* UPPER PART */}
              <div className="flex flex-col">
                <Image
                  className="my-1 h-[250px] w-[250px] object-contain"
                  src={item?.src}
                  width={200}
                  height={250}
                  alt={item?.title}
                />
                <div className="flex justify-center items-center flex-col">
                  <p className="my-1 text-base font-light text-gray-600">
                    {item?.title}
                  </p>
                  <span className=" text-xl font-light">
                    {item?.description}
                  </span>
                </div>
              </div>

              <div className="flex flex-col mt-16 items-center justify-center">
                <p className="text-blue-400 text-lg">
                  Risparmio il{" "}
                  <span className="text-red-900">-{item?.discount}%</span>
                </p>
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
