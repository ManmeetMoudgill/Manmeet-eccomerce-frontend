import React, { useState } from "react";
import { MdLocationOn, MdOutlineStarRate } from "react-icons/md";
import { GrDocumentImage, GrServices, GrClose } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import { IconType } from "react-icons";
interface NavbarItemProps {
  title: string;
  Icon: IconType;
  onClick?: () => void;
}

const Navbar = () => {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <section>
      <div className=" z-10 justify-center items-center bg-white hidden ">
        <div className=" w-3/4">
          <div className="mt-3 hidden xl:flex">
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
            <div className="__left__mid__container ">
              <div className="relative">
                <div className="h-9 w-9 rounded-full absolute top-2 flex justify-center items-center  right-2 bg-yellowCustom-100">
                  <GoSearch className="text-lg" />
                </div>
                {searchText.length > 0 ? (
                  <div className="absolute top-4 right-16">
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
                  className="w-96 text-lg bg-white rounded-3xl border shadow-lg focus:shadow-none focus:outline-none text-blueCustom-100 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="__center__mid___container ">
              <Image
                src="/assets/site-logo.png"
                alt="Site Logo"
                width={400}
                height={300}
              />
            </div>

            <div className="__right__mid__container  hidden xl:flex justify-center items-center px-3">
              <div className="   cursor-pointer mx-4">
                <div className="flex justify-center items-end">
                  <span className="text-xl">Ciao</span>
                  <IoIosArrowDown className="ml-1 text-xl" />
                </div>
              </div>
              <div className="mx-2">
                <div className=" cursor-pointer w-14 h-14 rounded-full bg-gray-200  flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-full  flex items-center justify-center">
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
          <nav className="hidden xl:block">
            <ul className="flex  relative  items-center py-2">
              <LowerNavbarItem title="Elettrodomestici" />
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
    <li className="   text-xl flex items-center justify-center pr-10  cursor-pointer ">
      <Icon className=" text-base" />
      <span className=" ml-1 text-blueCustom-100">{title}</span>
    </li>
  );
};

interface LowerNavbarItem {
  title: string;
}
export const LowerNavbarItem = ({ title }: LowerNavbarItem) => {
  return (
    <li className=" text-blueCustom-100   font-medium group cursor-pointer  py-1 mr-20">
      <a className="text-xl tracking-wider">{title}</a>
      <div
        className="
                            w-0 group-hover:w-full transition-all ease-in-out duration-700 bg-blueCustom-100 h-1 mt-1"
      ></div>

      <div className="left-0 top-16 absolute w-full opacity-0 group-hover:opacity-100 transition-all  flex z-50 items-center justify-center border-2 border-red-600 h-[50vh]">
        <SubNavbar title={title} />
      </div>
    </li>
  );
};

interface SubNavbarProps {
  title: string;
}

export const SubNavbar = ({ title }: SubNavbarProps) => {
  switch (title) {
    case "Elettrodomestici":
      return <div className="w-3/4 border-2 border-blue-600">{title}</div>;
    case "Foto,Video,Droni":
      return <div className="w-3/4 border-2 border-blue-600">{title}</div>;
    case "Gaming":
      return <div className="w-3/4 border-2 border-blue-600">{title}</div>;
    case "Telefonia":
      return <div className="w-3/4 border-2 border-blue-600">{title}</div>;
    case "Tv e Audio":
      return <div className="w-3/4 border-2 border-blue-600">{title}</div>;
    case "Greeen tech":
      return <div className="w-3/4 border-2 border-blue-600">{title}</div>;
    default:
      return <div></div>;
  }
};

export default Navbar;
