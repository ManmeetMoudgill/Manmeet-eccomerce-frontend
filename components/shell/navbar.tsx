import React, { useEffect, useState } from "react";
import { MdLocationOn, MdOutlineStarRate } from "react-icons/md";
import { GrDocumentImage, GrServices, GrClose } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import Image from "next/image";
import UpperNavbarItem from "./sub-components/upper-navbar-item";
import LowerNavbarItem from "./sub-components/lower-navbar-item";

const Navbar = () => {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <section className="z-50">
      <div className=" px-4 xl:hidden flex justify-between bg-white ">
        <div className="   flex items-center  ">
          <BsList className="text-2xl" />
        </div>
        <div className="  flex items-center object-contain h-20 w-40 md:h-24 md:w-56 lg:h-24 lg:w-60 justify-center relative">
          <Image src="/assets/site-logo.png" priority alt="Site Logo" fill />
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

      <div
        id="nav__bar__categories "
        className={`justify-center items-center bg-white flex`}
      >
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
              <Image
                src="/assets/site-logo.png"
                priority
                alt="Site Logo"
                fill
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
        </div>
      </div>
      <nav className={`hidden xl:block `}>
        <ul className="flex  relative  items-center py-2 pl-6  2xl:pl-24 3xl:pl-52 ">
          <LowerNavbarItem title="Informatica" />
          <LowerNavbarItem title="Foto,Video,Droni" />
          <LowerNavbarItem title="Gaming" />
          <LowerNavbarItem title="Telefonia" />
          <LowerNavbarItem title="Tv e Audio" />
          <LowerNavbarItem title="Greeen tech" />
          <LowerNavbarItem title="Lifestyle" />
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
