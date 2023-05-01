import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
const BACKGROUND_IMAGE = "/assets/apple_container_bg_img.jpg";
const BACKGROUND_IMAGE_FOR_SMALL_DEVICES =
  "/assets/apple_container_bg_img_small_devices.jpg";
type Props = {};

const AppleShop = (props: Props) => {
  return (
    <div className=" my-14 bg-[#F9F9F9] flex justify-start sm:justify-center sm:items-center ">
      <div
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className=" hidden sm:flex min-h-[55vh] bg-[#F9F9F9] md:relative md:left-[10px] py-12 md:py-0 lg:pt-0  w-full sm:w-10/12  md:w-4/5  items-center px-4  lg:pl-10"
      >
        {/* <AppleShopContainerContent /> */}
      </div>

      <div
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE_FOR_SMALL_DEVICES})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "bottom",
        }}
        className="flex sm:hidden h-[90vh]  bg-[#F9F9F9] md:relative md:left-[10px] py-3 md:py-0 lg:pt-0  w-full   md:w-4/5  items-center px-4  lg:pl-10"
      >
        {/* <AppleShopContainerContent /> */}
      </div>
    </div>
  );
};

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

export default AppleShop;
