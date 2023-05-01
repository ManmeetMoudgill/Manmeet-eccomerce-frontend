import { BreakPoints, OffersItems } from "@/view-model/home";
import BestOffersCarousel from "./home-offer-products-carousel";

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
    discount: 15,
    discountPrice: "620,00",
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
    discount: 5,
    discountPrice: "250,00",
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
    discount: 5,
    discountPrice: "250,00",
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
    discount: 5,
    discountPrice: "250,00",
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

const RecomendationOffers = () => {
  return (
    <section className="flex items-center justify-center mt-4">
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
    </section>
  );
};

export default RecomendationOffers;
