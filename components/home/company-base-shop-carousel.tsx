//@ts-nocheck
import Carousel from "react-elastic-carousel";
import { MdKeyboardArrowRight } from "react-icons/md";
interface OffersItems {
  id: number;
  src: string;
  title: string;
  smallDesc?: string;
  largeDesc?: string;
  link: string;
  textColorClass?: string;
  smallDeviceImg?: string;
  slug?: string;
}

export const companiesShop: Array<OffersItems> = [
  {
    id: 1,
    src: "/assets/company_based_shopping/apple_container_bg_img.jpg",
    smallDeviceImg:
      "/assets/company_based_shopping/apple_container_bg_img_small_devices.jpg",
    title: "Apple",
    slug: "apple",
    smallDesc: " Insieme, realizziamo il tuo mondo",
    largeDesc:
      "   Scopri tutti i prodotti apple e scegli quello più adatto a te",
    link: "/apple",
    textColorClass: "text-blueCustom-100",
  },
  {
    id: 2,
    src: "/assets/company_based_shopping/lg_bg_container.jpg",
    slug: "lg",
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
    slug: "samsung",
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
    slug: "Intel",
    textColorClass: "text-blueCustom-100",
  },
  {
    id: 5,
    src: "/assets/company_based_shopping/hisense_bg_container.jpg",
    smallDeviceImg:
      "/assets/company_based_shopping/hisense_small_bg_container.jpg",
    title: "Hisense",
    smallDesc: " Insieme, realizziamo il tuo mondo",
    slug: "hisense",
    largeDesc:
      "   Scopri tutti i prodotti apple e scegli quello più adatto a te",

    link: "/Hisense",
    textColorClass: "text-white",
  },
  {
    id: 6,
    src: "/assets/company_based_shopping/lenovo_bg_container.jpg",
    smallDeviceImg:
      "/assets/company_based_shopping/lenovo_small_bg_container.jpg",
    title: "Lenovo",
    slug: "lenovo",
    smallDesc: " Insieme, realizziamo il tuo mondo",
    largeDesc:
      "   Scopri tutti i prodotti apple e scegli quello più adatto a te",
    link: "/lenovo",
    textColorClass: "text-white",
  },
  {
    id: 7,
    src: "/assets/company_based_shopping/dyson_bg_container.jpg",
    smallDeviceImg:
      "/assets/company_based_shopping/dyson_small_bg_container.jpg",
    title: "Dyson",
    slug: "dyson",
    smallDesc: " Insieme, realizziamo il tuo mondo",
    largeDesc:
      "   Scopri tutti i prodotti apple e scegli quello più adatto a te",
    link: "/dyson",
    textColorClass: "text-white",
  },
];

interface CompanyBaseShopCarouselProps {
  getCarouselRef: (ref: any) => void;
}
const CompanyBaseShopCarousel = ({
  getCarouselRef,
}: CompanyBaseShopCarouselProps) => {
  return (
    <div className="w-full company_shop_carousel bg-[#F9F9F9] mt-8 mb-2">
      <Carousel
        ref={(ref) => {
          getCarouselRef(ref);
        }}
      >
        {companiesShop.map((item) => (
          <>
            <div
              key={item.id}
              style={{
                backgroundImage: `url(${item?.src})`,
                backgroundSize: "cover",
                backgroundPosition: "48%",
                backgroundRepeat: "no-repeat",
              }}
              className="hidden   sm:flex  justify-center  md:relative md:left-[10px] py-3 md:py-0 lg:pt-0  w-screen     items-center px-4  lg:pl-10"
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

interface AppleShopContainerContentProps {
  title?: string;
  smallDesc?: string;
  largeDesc?: string;
  link: string;
  textColorClass?: string;
}

export const AppleShopContainerContent = ({
  title,
  smallDesc,
  largeDesc,
  textColorClass,
}: AppleShopContainerContentProps) => {
  return (
    <div className="flex flex-col justify-center ">
      {title && (
        <h6
          className={`text-base md:text-lg xl:text-xl my-1  font-light   ${
            textColorClass ? textColorClass : "text-blueCustom-100"
          }`}
        >
          {title}
        </h6>
      )}

      {smallDesc && (
        <h3
          className={`text-2xl md:text-3xl 2xl:text-4xl ${
            textColorClass ? textColorClass : "text-blueCustom-100"
          } font-bold my-2 w-10/12 md:w-2/3`}
        >
          {smallDesc}
        </h3>
      )}
      {largeDesc && (
        <p
          className={`my-2 ${
            textColorClass ? textColorClass : "text-blueCustom-100"
          } text-lg md:text-xl`}
        >
          {largeDesc}
        </p>
      )}
      <button
        className={`flex group max-w-[15rem] rounded-full shadow-sm px-3 py-2 lg:py-3 justify-center t bg-blueCustom-100 text-white mt-6 md:mt-8 items-center`}
      >
        <span className="text-sm md:text-base  2xl:text-lg">
          Visita il negozio
        </span>
        <MdKeyboardArrowRight className=" group-hover:translate-x-1 transition-transform delay-75 text-base md:text-xl  2xl:text-2xl mt-1 ml-2" />
      </button>
    </div>
  );
};
