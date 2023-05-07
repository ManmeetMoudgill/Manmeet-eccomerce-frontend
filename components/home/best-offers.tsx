import { BreakPoints, OffersItems } from "@/view-model/home";
import BestOffersCarousel from "../shell/offer-products-carousel";

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
  {
    id: 7,
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
const BestOffers = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="w-full px-0 lg:w-4/5  flex flex-col items-center justify-center">
        {/* UPPER DIV */}
        <div className="flex items-center justify-center my-4">
          <h3 className=" text-lg sm:text-xl  md:text-3xl text-blueCustom-100 font-bold">
            Le Migliore offerte del momento
          </h3>
        </div>
        {/* LOWER DIV PRDOCUTS CAROUSEL */}
        <BestOffersCarousel items={items} breakPoints={breakPoints} />
      </div>
    </section>
  );
};

export default BestOffers;
