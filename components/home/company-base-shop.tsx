import { useState } from "react";
import CompanyBaseShopCarousel, {
  companiesShop,
} from "./company-base-shop-carousel";

const CompanyBaseShop = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  let carousel: any = undefined;
  const getCarouselRef = (ref: any) => {
    carousel = ref;
  };
  return (
    <section className="flex flex-col mb-6">
      <CompanyBaseShopCarousel getCarouselRef={getCarouselRef} />
      <div className="  flex justify-center items-center">
        <div className="w-full px-2 md:px-0 sm:w-4/5  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 ">
          {companiesShop?.map((item, index) => {
            return (
              <div
                onClick={() => {
                  carousel?.goTo(index);
                  setActiveIndex(index);
                }}
                key={item?.id}
                className={` ${
                  index === activeIndex ? "bg-gray-100" : ""
                } flex cursor-pointer justify-center items-center group py-4 md:py-0 md:h-28 hover:bg-gray-100 w-full`}
              >
                <span className="text-black text-lg md:text-xl lg:text-2xl xl:text-3xl  uppercase group-hover:text-blueCustom-100  transition-all delay-75">
                  {item?.slug}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyBaseShop;
