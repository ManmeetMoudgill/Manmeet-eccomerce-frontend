//@ts-nocheck
import Carousel from "react-elastic-carousel";
import { AppleShopContainerContent } from "./apple-shop";

interface OffersItems {
  id: number;
  src: string;
  title: string;
  smallDesc?: string;
  largeDesc?: string;
  link: string;
}

const items: Array<OffersItems> = [
  {
    id: 1,
    src: "/assets/company_based_shopping/apple_container_bg_img.jpg",
    title: "Apple",
    smallDesc: " Insieme, realizziamo il tuo mondo",
    largeDesc:
      "   Scopri tutti i prodotti apple e scegli quello più adatto a te",
    link: "/apple",
  },
  {
    id: 2,
    src: "/assets/company_based_shopping/lg_bg_container.jpg",
    title: "LG",
    smallDesc: " Insieme, realizziamo il tuo mondo",
    largeDesc:
      "   Scopri tutti i prodotti apple e scegli quello più adatto a te",

    link: "/lg",
  },
  {
    id: 3,
    src: "/assets/company_based_shopping/samsung_bg_container.jpg",
    title: "Samsung",
    smallDesc: " Insieme, realizziamo il tuo mondo",
    largeDesc:
      "   Scopri tutti i prodotti apple e scegli quello più adatto a te",

    link: "/nokie",
  },
  {
    id: 4,
    src: "/assets/company_based_shopping/intel_bg_container.jpg",
    link: "/Intel",
  },
  {
    id: 4,
    src: "/assets/company_based_shopping/hisense_bg_container.jpg",
    title: "Hisense",
    smallDesc: " Insieme, realizziamo il tuo mondo",
    largeDesc:
      "   Scopri tutti i prodotti apple e scegli quello più adatto a te",

    link: "/Hisense",
  },
];

const CompanyBaseShopCarousel = () => {
  return (
    <div className="w-full company_shop_carousel bg-[#F9F9F9] border-2 border-yellow-800 ">
      <Carousel>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundImage: `url(${item?.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundPositionY: "bottom",
            }}
            className="flex  h-[60vh]  bg-[#F9F9F9] border-2 border-blue-900 md:relative md:left-[10px] py-3 md:py-0 lg:pt-0  w-full   md:w-4/5  items-center px-4  lg:pl-10"
          >
            <AppleShopContainerContent
              link={item?.link}
              title={item?.title}
              smallDesc={item?.smallDesc}
              largeDesc={item?.largeDesc}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CompanyBaseShopCarousel;
