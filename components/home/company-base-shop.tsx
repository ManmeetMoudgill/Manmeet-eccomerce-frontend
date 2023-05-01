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
        <div className=" w-4/5  flex flex-wrap">
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
                } flex cursor-pointer justify-center items-center group  w-[19rem] h-[7rem] hover:bg-gray-100 rec-dot`}
              >
                <span className="text-black text-3xl  uppercase group-hover:text-blueCustom-100  transition-all delay-75">
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
