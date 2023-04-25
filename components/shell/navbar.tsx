import React from "react";
import { MdLocationOn, MdOutlineStarRate } from "react-icons/md";
import { GrDocumentImage, GrServices } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  return (
    <section className="border-2 border-red-600 flex justify-center items-center bg-white">
      <div className=" w-3/4">
        <div className="mt-3">
          <nav>
            <ul className="flex  items-center">
              <li className="   text-xl flex items-center justify-center pr-10  cursor-pointer ">
                <MdLocationOn className=" text-base" />
                <span className=" ml-1 text-blueCustom-100">Negozi</span>
              </li>
              <li className="  text-xl flex items-center justify-center pr-10 cursor-pointer ">
                <GrDocumentImage className=" text-base" />
                <span className=" ml-1 text-blueCustom-100">Volantini</span>
              </li>
              <li className="   text-xl flex items-center justify-center pr-10 cursor-pointer ">
                <MdOutlineStarRate className=" text-base" />
                <span className=" ml-1 text-blueCustom-100">Star Club</span>
              </li>
              <li className="   text-xl flex items-center justify-center pr-10 cursor-pointer ">
                <GrServices className=" text-base" />
                <span className=" ml-1 text-blueCustom-100">Servizi</span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="border-2 min-h-[25vh] border-yellow-600 flex justify-between items-center my-6 py-2">
          <div className="__left__mid__container border-2 border-green-900 ">
            <div className="relative">
              <div className="h-9 w-9 rounded-full absolute top-1 flex justify-center items-center  right-2 bg-yellowCustom-100">
                <GoSearch className="text-lg" />
              </div>

              <input
                type="text"
                placeholder="Cosa stai cercando?"
                className="w-96 text-lg bg-white rounded-3xl border border-blueCustom-100 shadow-lg focus:shadow-none focus:outline-none text-blueCustom-100 py-1 px-3 leading-9 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="__center__mid___container border-2 border-red-900">
            <Image
              src="/assets/site-logo.png"
              alt="Site Logo"
              width={300}
              height={300}
            />
          </div>

          <div className="__right__mid__container border-2 flex justify-center items-center border-red-900 px-3">
            <div className="border-2 border-green-100 cursor-pointer mx-4">
              <div className="flex items-end">
                <span className="text-xl">Ciao</span>
                <IoIosArrowDown className="ml-3 text-xl" />
              </div>
            </div>
            <div className="border-2 border-green-100 mx-3">
              <div className=" cursor-pointer w-14 h-14 rounded-full bg-gray-200  flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded-full  flex items-center justify-center">
                  <BiUser />
                </div>
              </div>
            </div>
            <div className="border-2 border-green-100 ml-6">
              <div className="relative">
                <div className="w-14 h-14 rounded-full hover:bg-gray-200 flex justify-center items-center cursor-pointer">
                  <AiOutlineShoppingCart className="text-3xl text-blueCustom-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-blue-600">asd</div>
      </div>
    </section>
  );
};

export default Navbar;
