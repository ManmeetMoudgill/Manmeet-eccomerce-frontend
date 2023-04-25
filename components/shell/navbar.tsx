//@ts-nocheck
import React, { useState } from "react";
import { MdLocationOn, MdOutlineStarRate } from "react-icons/md";
import { GrDocumentImage, GrServices, GrClose } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import Image from "next/image";
import { IconType } from "react-icons";
interface NavbarItemProps {
  title: string;
  Icon: IconType;
  onClick?: () => void;
}

const informaticaCategories = Object.freeze({
  computerPortatili: [
    "Notebook",
    "Notebook 2 in 1",
    "Notebook Gaming",
    "Notebook Apple",
  ],
  tabletEdReader: [
    "Tablet",
    "E-Reader",
    "Accessori Tablet",
    "Accessori E-Reader",
  ],
  mac: ["MacBook", "iMac", "Mac Mini", "Mac Pro", "Accessori Mac"],
  workStationServer: [
    "Workstation",
    "Server",
    "Accessori Workstation",
    "Accessori Server",
  ],
  pcDesktop: [
    "Pc Desktop",
    "Pc All in One",
    "Accessori Pc Desktop",
    "Accessori Pc All in One",
  ],
  stampantiScanner: [
    "Stampanti",
    "Scanner",
    "Accessori Stampanti",
    "Accessori Scanner",
  ],
  monitor: ["Monitor", "Accessori Monitor"],
  hardDiskStorage: [
    "Hard Disk",
    "SSD",
    "Nas",
    "Accessori Hard Disk",
    "Accessori SSD",
    "Accessori Nas",
  ],
});
const Navbar = () => {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <section>
      <div className=" px-4 xl:hidden flex justify-between bg-white ">
        <div className="   flex items-center  ">
          <BsList className="text-2xl" />
        </div>
        <div className="  flex items-center object-contain h-20 w-40 md:h-24 md:w-56 lg:h-24 lg:w-60 justify-center relative">
          <Image src="/assets/site-logo.png" alt="Site Logo" fill />
        </div>
        <div className="  flex items-center justify-start">
          <div>
            <BiUser className="text-2xl text-blueCustom-100" />
          </div>
          <div className="ml-2">
            <div className="relative">
              <div className="w-4 h-4  rounded-full absolute -top-3 right-1  flex justify-center items-center   bg-yellowCustom-100">
                <span className="text-xs">1</span>
              </div>
              <AiOutlineShoppingCart className="text-2xl text-blueCustom-100" />
            </div>
          </div>
        </div>
      </div>

      <div className={`justify-center items-center bg-white flex`}>
        <div className=" px-4 2xl:-px-0 w-full  2xl:w-11/12 3xl:w-4/5 4xl:w-10/12">
          <div className="mt-3 hidden lg:flex">
            <nav>
              <ul className="flex  items-center">
                <UpperNavbarItem title="Negozio" Icon={MdLocationOn} />
                <UpperNavbarItem title="Volantini" Icon={GrDocumentImage} />
                <UpperNavbarItem title="Star Club" Icon={MdOutlineStarRate} />
                <UpperNavbarItem title="Servizi" Icon={GrServices} />
              </ul>
            </nav>
          </div>
          <div className=" min-h-[10vh] flex justify-between items-center my-1 ">
            <div className="__left__mid__container w-full xl:w-auto ">
              <div className="relative">
                <div className="w-7 h-7 xl:h-9 xl:w-9 rounded-full absolute top-2 xl:top-2 flex justify-center items-center  right-2 bg-yellowCustom-100">
                  <GoSearch className="text-lg" />
                </div>
                {searchText.length > 0 ? (
                  <div className="absolute top-3 xl:top-4 right-12 xl:right-16">
                    <GrClose
                      className="text-lg cursor-pointer"
                      onClick={() => {
                        setSearchText("");
                      }}
                    />
                  </div>
                ) : undefined}

                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                  placeholder="Cosa stai cercando?"
                  className=" w-full xl:w-80 2xl:w-96 text-lg bg-white rounded-3xl border shadow-lg focus:shadow-none focus:outline-none text-blueCustom-100 py-1 px-3 leading-8 xl:leading-10 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="__center__mid___container relative hidden xl:flex lg:h-52 lg:w-80 2xl:h-52 2xl:w-96 ">
              <Image src="/assets/site-logo.png" alt="Site Logo" fill />
            </div>

            <div className="__right__mid__container  hidden xl:flex justify-center items-center px-3">
              <div className="   cursor-pointer mx-4">
                <div className="flex justify-center items-end">
                  <span className="text-xl">Ciao</span>
                  <IoIosArrowDown className="ml-1 text-xl" />
                </div>
              </div>
              <div className="mx-2">
                <div className=" cursor-pointer w-12 h-12 rounded-full bg-gray-200  flex items-center justify-center">
                  <div className="w-9 h-9 bg-white rounded-full  flex items-center justify-center">
                    <BiUser />
                  </div>
                </div>
              </div>
              <div className="  ml-6">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full hover:bg-gray-200 flex justify-center items-center cursor-pointer">
                    <AiOutlineShoppingCart className="text-3xl text-blueCustom-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className={`hidden xl:block`}>
            <ul className="flex  relative  items-center py-2">
              <LowerNavbarItem title="Informatica" />
              <LowerNavbarItem title="Foto,Video,Droni" />
              <LowerNavbarItem title="Gaming" />
              <LowerNavbarItem title="Telefonia" />
              <LowerNavbarItem title="Tv e Audio" />
              <LowerNavbarItem title="Greeen tech" />
              <LowerNavbarItem title="Lifestyle" />
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
export const UpperNavbarItem = ({ title, Icon }: NavbarItemProps) => {
  return (
    <li className=" text-base 2xl:text-xl flex items-center justify-center pr-10  cursor-pointer ">
      <Icon className="text-sm 2xl:text-base" />
      <span className=" ml-1 text-blueCustom-100">{title}</span>
    </li>
  );
};

interface LowerNavbarItem {
  title: string;
}
export const LowerNavbarItem = ({ title }: LowerNavbarItem) => {
  return (
    <li className=" text-blueCustom-100 group    font-medium  cursor-pointer  py-1 mr-16 3xl:mr-20">
      <a className="text-lg 2xl:text-xl tracking-wider  ">{title}</a>
      <div
        className="
                            w-0 group-hover:w-full transition-all ease-in-out duration-700 bg-blueCustom-100 h-1 mt-1"
      ></div>

      <SubNavbar title={title} />
    </li>
  );
};

interface SubNavbarProps {
  title: string;
}

interface SubNavbarItemProps {
  title: string;
}

const SubNavBarItem = ({ title }: SubNavbarItemProps) => {
  return (
    <li className="text-black text-base transition-all delay-75 hover:underline">
      {title}
    </li>
  );
};

export const SubNavbar = ({ title }: SubNavbarProps) => {
  switch (title) {
    case "Informatica":
      return (
        <div className="left-0 top-14 flex flex-col  pointer-events-none group-hover:pointer-events-auto absolute w-full opacity-0 group-hover:opacity-100 transition-all   z-50  py-4">
          <div className="grid grid-cols-6">
            <div className=" flex flex-col ">
              <nav className="mt-2 min-h-[15vh] ">
                <span className="text-xl font-bold text-blueCustom-100">
                  Computer Portatili
                </span>
                <ul className="flex flex-col">
                  {informaticaCategories?.computerPortatili?.map(
                    (item, index) => {
                      return (
                        index < 3 && <SubNavBarItem key={index} title={item} />
                      );
                    }
                  )}
                  <li className="text-blueCustom-100 text-base transition-all delay-75 underline">
                    Vedi tutti
                  </li>
                </ul>
              </nav>
              <nav className="mt-4 min-h-[15vh]">
                <span className="text-xl font-bold text-blueCustom-100">
                  Tablet ed Ebbok Reader
                </span>
                <ul className="flex flex-col">
                  {informaticaCategories?.tabletEdReader?.map((item, index) => {
                    return (
                      index < 3 && <SubNavBarItem key={index} title={item} />
                    );
                  })}
                  <li className="text-blueCustom-100 text-base transition-all delay-75 underline">
                    Vedi tutti
                  </li>
                </ul>
              </nav>
            </div>
            <div className="">
              <nav className="mt-2 min-h-[15vh]">
                <span className="text-xl font-bold text-blueCustom-100">
                  Mac
                </span>
                <ul className="flex flex-col">
                  {informaticaCategories?.mac?.map((item, index) => {
                    return (
                      index < 3 && <SubNavBarItem key={index} title={item} />
                    );
                  })}
                  <li className="text-blueCustom-100 text-base transition-all delay-75 underline">
                    Vedi tutti
                  </li>
                </ul>
              </nav>
              <nav className="mt-4 min-h-[15vh]">
                <span className="text-xl font-bold text-blueCustom-100">
                  Workstation e Server
                </span>
                <ul className="flex flex-col">
                  {informaticaCategories?.workStationServer?.map(
                    (item, index) => {
                      return (
                        index < 3 && <SubNavBarItem key={index} title={item} />
                      );
                    }
                  )}
                  <li className="text-blueCustom-100 text-base transition-all delay-75 underline">
                    Vedi tutti
                  </li>
                </ul>
              </nav>
            </div>
            <div className="">
              <nav className="mt-2 min-h-[15vh]">
                <span className="text-xl font-bold text-blueCustom-100">
                  Pc Desktop
                </span>
                <ul className="flex flex-col">
                  {informaticaCategories?.pcDesktop?.map((item, index) => {
                    return (
                      index < 3 && <SubNavBarItem key={index} title={item} />
                    );
                  })}
                  <li className="text-blueCustom-100 text-base transition-all delay-75 underline">
                    Vedi tutti
                  </li>
                </ul>
              </nav>
              <nav className="mt-4 min-h-[15vh]">
                <span className="text-xl font-bold text-blueCustom-100">
                  Stampanti e Scanner
                </span>
                <ul className="flex flex-col">
                  {informaticaCategories?.stampantiScanner?.map(
                    (item, index) => {
                      return (
                        index < 3 && <SubNavBarItem key={index} title={item} />
                      );
                    }
                  )}
                  <li className="text-blueCustom-100 text-base transition-all delay-75 underline">
                    Vedi tutti
                  </li>
                </ul>
              </nav>
            </div>
            <div className="">
              <nav className="mt-2 min-h-[15vh]">
                <span className="text-xl font-bold text-blueCustom-100">
                  Monitor
                </span>
                <ul className="flex flex-col">
                  {informaticaCategories?.monitor?.map((item, index) => {
                    return (
                      index < 3 && <SubNavBarItem key={index} title={item} />
                    );
                  })}
                  <li className="text-blueCustom-100 text-base transition-all delay-75 underline">
                    Vedi tutti
                  </li>
                </ul>
              </nav>
              <nav className="mt-4 min-h-[15vh]">
                <span className="text-xl font-bold text-blueCustom-100">
                  Hard Disk e Storage
                </span>
                <ul className="flex flex-col">
                  {informaticaCategories?.hardDiskStorage?.map(
                    (item, index) => {
                      return (
                        index < 3 && <SubNavBarItem key={index} title={item} />
                      );
                    }
                  )}
                  <li className="text-blueCustom-100 text-base transition-all delay-75 underline">
                    Vedi tutti
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-span-2 border-l-2 border-gray-200"></div>
          </div>
          <div className="py-2 w-full bg-gray-200">asdsadasdasd</div>
        </div>
      );
    case "Foto,Video,Droni":
      return (
        <div className="left-0 top-14  pointer-events-none group-hover:pointer-events-auto absolute w-full opacity-0 group-hover:opacity-100 transition-all   z-50  h-[50vh]">
          <div className="z-50 w-full border-2 border-blue-600">
            <div className="">asdsadsadsadasdsad</div>
          </div>
        </div>
      );
    case "Gaming":
      return (
        <div className="left-0 top-14  pointer-events-none group-hover:pointer-events-auto absolute w-full opacity-0 group-hover:opacity-100 transition-all   z-50  h-[50vh]">
          <div className="z-50 w-full border-2 border-blue-600">
            <div className="">asdsadsadsadasdsad</div>
          </div>
        </div>
      );
    case "Telefonia":
      return (
        <div className="left-0 top-14  pointer-events-none group-hover:pointer-events-auto absolute w-full opacity-0 group-hover:opacity-100 transition-all   z-50  h-[50vh]">
          <div className="z-50 w-full border-2 border-blue-600">
            <div className="">asdsadsadsadasdsad</div>
          </div>
        </div>
      );
    case "Tv e Audio":
      return (
        <div className="left-0 top-14  pointer-events-none group-hover:pointer-events-auto absolute w-full opacity-0 group-hover:opacity-100 transition-all   z-50  h-[50vh]">
          <div className="z-50 w-full border-2 border-blue-600">
            <div className="">asdsadsadsadasdsad</div>
          </div>
        </div>
      );
    case "Greeen tech":
      return (
        <div className="left-0 top-14  pointer-events-none group-hover:pointer-events-auto absolute w-full opacity-0 group-hover:opacity-100 transition-all   z-50  h-[50vh]">
          <div className="z-50 w-full border-2 border-blue-600">
            <div className="">asdsadsadsadasdsad</div>
          </div>
        </div>
      );
    case "Lifestyle":
      return (
        <div className="left-0 top-14 border-2 border-green-900 pointer-events-none group-hover:pointer-events-auto absolute w-full opacity-0 group-hover:opacity-100 transition-all   z-50  h-[50vh]">
          <div className="z-50 w-full border-2 border-blue-600">
            <div className="border-2 border-green-900">asdsadsadsadasdsad</div>
          </div>
        </div>
      );
    default:
      return <div></div>;
  }
};

export default Navbar;
