//@ts-nocheck
import { BreakPoints, OffersItems } from "@/view-model/home";
import Image from "next/image";
import Carousel from "react-elastic-carousel";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  items: Array<OffersItems>;
  breakPoints: Array<BreakPoints>;
}

const BestOffersCarousel = ({ items, breakPoints }: Props) => {
  return (
    <div className="flex w-full  sm:px-0  justify-center items-center shared__carousel my-8 ">
      <div className="w-full">
        <Carousel
          itemPadding={[10, 10, 10, 10]}
          breakPoints={breakPoints}
          autoPlaySpeed={2500}
          enableAutoPlay={false}
        >
          {items.map((item) => (
            <div
              className="rounded-md w-full  border-2 border-red-900 cursor-pointer group hover:shadow-lg m-0  md:m-4  relative p-2  md:p-4"
              key={item?.id}
            >
              {/* SCONTO TAG HERE */}
              <div
                className={`absolute top-2 left-1 flex justify-center items-center   text-white px-2 py-1 font-bold rounded-2xl ${item?.tagBackgroundClass}`}
              >
                <span className="text-xs md:text-sm">{item?.tag}</span>
              </div>
              {/* UPPER PART */}
              <div className="flex flex-col items-center">
                <Image
                  className="my-1  w-[200px] h-[150px] sm:w-[250] sm:h-[150px]   md:h-[250px] md:w-[150px]   4xl:w-[320px] 4xl:h-[320px] object-contain"
                  src={item?.src}
                  width={200}
                  height={250}
                  alt={item?.title}
                />
                <div className="flex justify-center items-center flex-col">
                  <p className="my-1 text-base font-extralight text-gray-600">
                    {item?.title}
                  </p>
                  <span className="text-lg text-center md:text-xl font-light">
                    {item?.description}
                  </span>
                </div>
              </div>

              <div className="flex   flex-col mt-16 items-center justify-center">
                <div className="flex relative  justify-center items-center">
                  <div className="flex relative  opacity-1   group-hover:opacity-0  flex-col mt-16 items-center justify-center">
                    <div
                      className={`text-blue-400 flex items-center font-medium text-base md:text-lg ${
                        item?.discount > 0 ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <span>Risparmio il </span>
                      <span className=" font-medium text-blue-400 ml-2">
                        -{item?.discount}%
                      </span>
                    </div>

                    <div className="flex items-center justify-center ">
                      <span className=" text-base md:text-lg px-2 line-through text-gray-600">
                        € {item?.price}
                      </span>
                      <span
                        className={`text-base md:text-lg font-bold px-2 text-center ${
                          item?.discountPrice ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        € {item?.discountPrice}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`flex-col absolute hidden group-hover:flex  top-5 -left-10 md:${
                      item?.discountPrice ? "-left-6" : "-left-16"
                    }`}
                  >
                    <button className="my-2 flex rounded-full items-center justify-center text-sm md:text-base text-gray-600 p-1 bg-yellowCustom-100">
                      <AiOutlineShoppingCart className="" />
                      <span className="ml-2 uppercase">Aggiungi</span>
                    </button>

                    <button className="my-2 p-1 min-w-[15rem]  rounded-full flex items-center text-sm md:text-base justify-center text-blueCustom-100 border-2 border-blueCustom-100">
                      <AiOutlineHeart className="" />
                      <span className="ml-2 uppercase">
                        Aggiungi al whishlist
                      </span>
                    </button>
                  </div>
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
