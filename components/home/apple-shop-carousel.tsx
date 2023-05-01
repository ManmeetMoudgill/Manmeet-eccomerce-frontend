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
  textColorClass?: string;
  smallDeviceImg?: string;
}

const items: Array<OffersItems> = [
  {
    id: 1,
    src: "/assets/company_based_shopping/apple_container_bg_img.jpg",
    smallDeviceImg:
      "/assets/company_based_shopping/apple_container_bg_img_small_devices.jpg",
    title: "Apple",
    smallDesc: " Insieme, realizziamo il tuo mondo",
    largeDesc:
      "   Scopri tutti i prodotti apple e scegli quello più adatto a te",
    link: "/apple",
    textColorClass: "text-blueCustom-100",
  },
  {
    id: 2,
    src: "/assets/company_based_shopping/lg_bg_container.jpg",
    smallDeviceImg: "/assets/company_based_shopping/lg_small_bg_container.jpg",
    title: "LG",
    smallDesc: " Insieme, realizziamo il tuo mondo",
    largeDesc:
      "   Scopri tutti i prodotti apple e scegli quello più adatto a te",

    link: "/lg",
    textColorClass: "text-blueCustom-100",
  },
  {
    id: 3,
    src: "/assets/company_based_shopping/samsung_bg_container.jpg",
    smallDeviceImg:
      "/assets/company_based_shopping/samsung_small_bg_container.jpg",
    title: "Samsung",
    smallDesc: " Insieme, realizziamo il tuo mondo",
    largeDesc:
      "   Scopri tutti i prodotti apple e scegli quello più adatto a te",

    link: "/nokie",
    textColorClass: "text-blueCustom-100",
  },
  {
    id: 4,
    src: "/assets/company_based_shopping/intel_bg_container.jpg",
    smallDeviceImg:
      "/assets/company_based_shopping/intel_small_bg_container.jpg",
    link: "/Intel",
    textColorClass: "text-blueCustom-100",
  },
  {
    id: 4,
    src: "/assets/company_based_shopping/hisense_bg_container.jpg",
    smallDeviceImg:
      "/assets/company_based_shopping/hisense_small_bg_container.jpg",
    title: "Hisense",
    smallDesc: " Insieme, realizziamo il tuo mondo",
    largeDesc:
      "   Scopri tutti i prodotti apple e scegli quello più adatto a te",

    link: "/Hisense",
    textColorClass: "text-white",
  },
  {
    id: 5,
    src: "/assets/company_based_shopping/lenovo_bg_container.jpg",
    smallDeviceImg:
      "/assets/company_based_shopping/lenovo_small_bg_container.jpg",
    title: "Lenovo",
    smallDesc: " Insieme, realizziamo il tuo mondo",
    largeDesc:
      "   Scopri tutti i prodotti apple e scegli quello più adatto a te",
    link: "/lenovo",
    textColorClass: "text-white",
  },
  {
    id: 6,
    src: "/assets/company_based_shopping/dyson_bg_container.jpg",
    smallDeviceImg:
      "/assets/company_based_shopping/dyson_small_bg_container.jpg",
    title: "Dyson",
    smallDesc: " Insieme, realizziamo il tuo mondo",
    largeDesc:
      "   Scopri tutti i prodotti apple e scegli quello più adatto a te",
    link: "/dyson",
    textColorClass: "text-white",
  },
];

const CompanyBaseShopCarousel = () => {
  return (
    <div className="w-full company_shop_carousel bg-[#F9F9F9] my-8 ">
      <Carousel>
        {items.map((item) => (
          <>
            <div
              key={item.id}
              style={{
                backgroundImage: `url(${item?.src})`,
                backgroundSize: "cover",
                backgroundPosition: "48%",
                backgroundRepeat: "no-repeat",
              }}
              className="hidden   md:flex  justify-center  md:relative md:left-[10px] py-3 md:py-0 lg:pt-0  w-screen     items-center px-4  lg:pl-10"
            >
              <div className="w-3/5">
                <AppleShopContainerContent
                  link={item?.link}
                  title={item?.title}
                  smallDesc={item?.smallDesc}
                  largeDesc={item?.largeDesc}
                  textColorClass={item?.textColorClass}
                />
              </div>
            </div>

            <div
              style={{
                backgroundImage: `url(${item?.smallDeviceImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "center",
              }}
              className="flex sm:hidden    bg-[#F9F9F9] md:relative md:left-[10px] py-3 md:py-0 lg:pt-0  w-full   md:w-4/5  items-center px-4  lg:pl-10"
            >
              <AppleShopContainerContent
                link={item?.link}
                title={item?.title}
                smallDesc={item?.smallDesc}
                largeDesc={item?.largeDesc}
                textColorClass={item?.textColorClass}
              />
            </div>
          </>
        ))}
      </Carousel>
    </div>
  );
};

export default CompanyBaseShopCarousel;
