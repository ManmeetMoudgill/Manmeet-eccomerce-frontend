import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import BestOffersCarousel from "@/components/shell/offer-products-carousel";
import { BreakPoints, OffersItems } from "@/view-model/home";

const items: Array<OffersItems> = [
  {
    id: 1,
    src: "/assets/products/watches/Amazfit_3.jpg",
    title: "Smart Watch",
    description: "AMAZFIT - Smart Watch GTR 4-SUPERSPEED BLACK",
    price: "1000,00",
    discount: 10,
    discountPrice: "900,00",
    tag: "Sconto",
    tagBackgroundClass: "bg-red-600",
  },
  {
    id: 2,
    src: "/assets/products/watches/Amazfit_3.jpg",
    title: "Smart Watch",
    description: "AMAZFIT - Smart Watch GTR 4-SUPERSPEED BLACK",
    price: "2500,00",
    discount: 8,
    discountPrice: "1400,00",
    tag: "Sconto",
    tagBackgroundClass: "bg-red-600",
  },
  {
    id: 3,
    src: "/assets/products/watches/Amazfit_3.jpg",
    title: "Smart Watch",
    description: "AMAZFIT - Smart Watch GTR 4-SUPERSPEED BLACK",
    price: "1000,00",
    discount: 20,
    discountPrice: "700,00",
    tag: "Acquista con MS6",
    tagBackgroundClass: "bg-red-600",
  },
  {
    id: 4,
    src: "/assets/products/watches/Amazfit_4.jpg",
    title: "Smart Watch",
    description: "AMAZFIT - Smart Watch GTR 4-SUPERSPEED BLACK",
    price: "800,00",
    tag: "Sconto",
    tagBackgroundClass: "bg-red-600",
  },
  {
    id: 5,
    src: "/assets/products/watches/Amazfit_5.jpg",
    title: "Smart Watch",
    description: "AMAZFIT - Smart Watch GTR 4-SUPERSPEED BLACK",
    price: "900,00",
    discount: 5,
    discountPrice: "450,00",
    tag: "Sconto",
    tagBackgroundClass: "bg-gray-500",
  },
  {
    id: 6,
    src: "/assets/products/watches/Amazfit_6.jpg",
    title: "Smart Watch",
    description: "AMAZFIT - Smart Watch GTR 4-SUPERSPEED BLACK",
    price: "1000,00",
    discount: 5,
    discountPrice: "250,00",
    tag: "Acquista con PS5",
    tagBackgroundClass: "bg-red-600",
  },
  {
    id: 7,
    src: "/assets/products/watches/Amazfit_7.jpg",
    title: "Smart Watch",
    description: "AMAZFIT - Smart Watch GTR 4-SUPERSPEED BLACK",
    price: "1000,00",
    discount: 5,
    discountPrice: "250,00",
    tag: "Acquista con PS5",
    tagBackgroundClass: "bg-red-600",
  },
  {
    id: 8,
    src: "/assets/products/watches/Amazfit_8.jpg",
    title: "Smart Watch",
    description: "AMAZFIT - Smart Watch GTR 4-SUPERSPEED BLACK",
    price: "1000,00",
    tag: "Acquista con PS5",
    tagBackgroundClass: "bg-red-600",
  },
  {
    id: 9,
    src: "/assets/products/watches/Amazfit_9.jpg",
    title: "Smart Watch",
    description: "AMAZFIT - Smart Watch GTR 4-SUPERSPEED BLACK",
    price: "1000,00",
    discount: 5,
    discountPrice: "250,00",
    tag: "Acquista con PS5",
    tagBackgroundClass: "bg-red-600",
  },
  {
    id: 10,
    src: "/assets/products/watches/Amazfit_10.jpg",
    title: "Smart Watch",
    description: "AMAZFIT - Smart Watch GTR 4-SUPERSPEED BLACK",
    price: "1000,00",
    tag: "Acquista con PS5",
    tagBackgroundClass: "bg-red-600",
  },
  {
    id: 11,
    src: "/assets/products/watches/Amazfit_11.jpg",
    title: "Smart Watch",
    description: "AMAZFIT - Smart Watch GTR 4-SUPERSPEED BLACK",
    price: "1000,00",
    discount: 5,
    discountPrice: "250,00",
    tag: "Acquista con PS5",
    tagBackgroundClass: "bg-red-600",
  },
  {
    id: 12,
    src: "/assets/products/watches/Amazfit_12.jpg",
    title: "Smart Watch",
    description: "AMAZFIT - Smart Watch GTR 4-SUPERSPEED BLACK",
    price: "1000,00",
    discount: 5,
    discountPrice: "250,00",
    tag: "Acquista con PS5",
    tagBackgroundClass: "bg-red-600",
  },
  {
    id: 13,
    src: "/assets/products/watches/Amazfit_13.jpg",
    title: "Smart Watch",
    description: "Televisore OLED",
    price: "1000,00",
    tag: "Acquista con PS5",
    tagBackgroundClass: "bg-red-600",
  },
];

const breakPoints: Array<BreakPoints> = [
  { width: 1, itemsToShow: 1 },
  { width: 650, itemsToShow: 1, itemsToScroll: 1 },
  { width: 700, itemsToShow: 2, itemsToScroll: 1 },
  { width: 900, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1000, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1420, itemsToShow: 4, itemsToScroll: 1 },
  { width: 1600, itemsToShow: 5, itemsToScroll: 1 },
  { width: 2000, itemsToShow: 4, itemsToScroll: 1 },
  { width: 2600, itemsToShow: 4, itemsToScroll: 1 },
];

const products: Array<{
  id: number;
  firstItem: string;
  category: string;
  categoryLink?: string;
  categorySrc: string;
  secondItem?: string;
  thirdItem?: string;
}> = [
  {
    id: 1,
    category: "Computer Portatili",
    firstItem: "Notebook",
    secondItem: "Convertibili 2 in 1",
    thirdItem: "Notebook Gaming",
    categorySrc: "/assets/categories/informatica/computerPortatili.jpeg",
  },
  {
    id: 2,
    firstItem: "Tablet Android",
    category: "TABLET ED EBOOK READER",
    secondItem: "Ipad",
    thirdItem: "E-Book Reader",
    categorySrc: "/assets/categories/informatica/tablet.jpg",
  },
  {
    id: 3,
    firstItem: "Multifunzione",
    category: "STAMPANTI E SCANNER",
    secondItem: "Stampant Laser",
    thirdItem: "Cartucce",
    categorySrc: "/assets/categories/informatica/stampanti.jpg",
  },
  {
    id: 4,
    firstItem: "ACCESSORI PC",
    category: "ACCESSORI PC",
    secondItem: "Tablet Android",
    thirdItem: "Tablet iOS",
    categorySrc: "/assets/categories/informatica/accessori.jpg",
  },
  {
    id: 5,
    firstItem: "ACCESSORI PC",
    category: "MAC",
    secondItem: "Tablet Android",
    thirdItem: "Tablet iOS",
    categorySrc: "/assets/categories/informatica/mac.jpg",
  },
  {
    id: 6,
    firstItem: "ACCESSORI PC",
    category: "PC DESKTOP",
    secondItem: "Tablet Android",
    thirdItem: "Tablet iOS",
    categorySrc: "/assets/categories/informatica/DESKTOP.jpg",
  },
  {
    id: 7,
    firstItem: "ACCESSORI PC",
    category: "Hard Disk e Storage",
    secondItem: "Tablet Android",
    thirdItem: "Tablet iOS",
    categorySrc: "/assets/categories/informatica/hardisk-e-storage.jpg",
  },
  {
    id: 8,
    firstItem: "ACCESSORI PC",
    category: "MONITOR",
    secondItem: "Tablet Android",
    thirdItem: "Tablet iOS",
    categorySrc: "/assets/categories/informatica/monitor.jpg",
  },
  {
    id: 9,
    firstItem: "ACCESSORI PC",
    category: "RETI E CONNETTIVITÀ",
    secondItem: "Tablet Android",
    thirdItem: "Tablet iOS",
    categorySrc: "/assets/categories/informatica/retieconneyttivita.jpg",
  },
  {
    id: 10,
    firstItem: "ACCESSORI PC",
    category: "COMPONENTI PER PC",
    secondItem: "Tablet Android",
    thirdItem: "Tablet iOS",
    categorySrc: "/assets/categories/informatica/componentiperpc.jpg",
  },
  {
    id: 11,
    firstItem: "ACCESSORI PC",
    category: "SOFTWARE",
    secondItem: "Tablet Android",
    thirdItem: "Tablet iOS",
    categorySrc: "/assets/categories/informatica/software.jpg",
  },
  {
    id: 12,
    firstItem: "ACCESSORI PC",
    category: "WORKSTATION E SERVER",
    secondItem: "Tablet Android",
    thirdItem: "Tablet iOS",
    categorySrc: "/assets/categories/informatica/workstationeserver.jpg",
  },
];

const InformaticaPage = () => {
  return (
    <main>
      <section className="">
        <div className="flex bg-gradient-to-t shadow-inner   from-gray-100 justify-center items-center">
          <div className="w-10/12">
            <h2 className="py-4 px-3 text-gray-500 font-extralight ">
              Informatica
            </h2>
          </div>
        </div>
        <div
          className="w-full h-[50vh]"
          style={{
            backgroundImage: `url(/assets/informatica.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </section>
      <section className=" flex justify-center items-center my-6">
        <div className="flex flex-col w-full px-4 lg:px-0  xl:w-4/5 2xl:3/4 ">
          <div className="flex items-center justify-center my-3">
            <h2 className="text-2xl  lg:text-4xl  font-semibold text-blueCustom-100">
              Informatica
            </h2>
          </div>

          {/* PRODUCTS CONTAINER */}
          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-4 ">
            {products?.map((product) => {
              return (
                <div
                  key={product?.id}
                  className="flex flex-col sm:mx-3 border-[2px] border-gray-100 lg:mx-6 my-4  cursor-pointer hover:shadow-lg transition-all delay-75 duration-500 ease-out rounded-md items-center justify-center pt-4 pb-10 px-4 "
                >
                  <Image
                    className="mb-3 h-[150px] object-contain md:h-[200px] 2xl:h-[250px]"
                    src={product?.categorySrc}
                    alt={product?.category}
                    width={280}
                    height={200}
                  />
                  <p className="text-base md:text-lg text-center font-semibold ">
                    {product?.category}
                  </p>
                  <div className="w-full px-8 my-4">
                    <div className="h-[1px]  bg-gray-400" />
                  </div>
                  <p className="mb-2 hover:cursor-pointer hover:text-blueCustom-100 hover:font-normal hover:scale-105 transition-all ease-in text-center text-base md:text-lg text-black font-light">
                    {product?.firstItem}
                  </p>
                  <p className="mb-2 hover:cursor-pointer hover:text-blueCustom-100 hover:font-normal hover:scale-105 transition-all ease-in text-center text-base md:text-lg text-black font-light">
                    {product?.secondItem}
                  </p>
                  <p className="mb-2 hover:cursor-pointer hover:text-blueCustom-100 hover:font-normal hover:scale-105 transition-all ease-in text-center text-base md:text-lg text-black font-light">
                    {product?.thirdItem}
                  </p>
                  <button className="mx-2 group mt-4 flex justify-center items-center px-4  py-2 md:py-3 tracking-wide uppercase rounded-full bg-yellowCustom-100 ">
                    <span className="text-xs md:text-sm font-light">
                      vedi tutti i prodotti
                    </span>
                    <IoIosArrowForward className="text-xl ml-3 group-hover:translate-x-1 transition-all delay-75 duration-300 ease-in-out" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center">
        <div className="w-full px-0  lg:w-4/5  flex flex-col items-center justify-center">
          {/* UPPER DIV */}
          <div className="flex items-center justify-center my-4">
            <h3 className=" text-lg sm:text-xl  md:text-3xl text-blueCustom-100 font-bold">
              Pensati Per Te
            </h3>
          </div>
          {/* LOWER DIV PRDOCUTS CAROUSEL */}
          <BestOffersCarousel items={items} breakPoints={breakPoints} />
        </div>
      </div>
    </main>
  );
};

export default InformaticaPage;
