import { informaticaCategories } from "@/constants";
import React from "react";
import { SubNavBarItem } from "./navbar-item-sub-navbar";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { AiFillGift } from "react-icons/ai";
const SubNavbarGrid = () => {
  return (
    <div className="left-0 top-14 pl-52 bg-white flex flex-col  pointer-events-none group-hover:pointer-events-auto absolute w-full opacity-0 group-hover:opacity-100 transition-all   z-50  pt-4">
      <div className="grid grid-cols-6">
        <div className=" flex flex-col ">
          <nav className="mt-2 min-h-[15vh] ">
            <span className="text-xl font-bold text-blueCustom-100">
              Computer Portatili
            </span>
            <ul className="flex flex-col">
              {informaticaCategories?.computerPortatili?.map((item, index) => {
                return index < 3 && <SubNavBarItem key={index} title={item} />;
              })}
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
                return index < 3 && <SubNavBarItem key={index} title={item} />;
              })}
              <li className="text-blueCustom-100 text-base transition-all delay-75 underline">
                Vedi tutti
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <nav className="mt-2 min-h-[15vh]">
            <span className="text-xl font-bold text-blueCustom-100">Mac</span>
            <ul className="flex flex-col">
              {informaticaCategories?.mac?.map((item, index) => {
                return index < 3 && <SubNavBarItem key={index} title={item} />;
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
              {informaticaCategories?.workStationServer?.map((item, index) => {
                return index < 3 && <SubNavBarItem key={index} title={item} />;
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
              Pc Desktop
            </span>
            <ul className="flex flex-col">
              {informaticaCategories?.pcDesktop?.map((item, index) => {
                return index < 3 && <SubNavBarItem key={index} title={item} />;
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
              {informaticaCategories?.stampantiScanner?.map((item, index) => {
                return index < 3 && <SubNavBarItem key={index} title={item} />;
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
              Monitor
            </span>
            <ul className="flex flex-col">
              {informaticaCategories?.monitor?.map((item, index) => {
                return index < 3 && <SubNavBarItem key={index} title={item} />;
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
              {informaticaCategories?.hardDiskStorage?.map((item, index) => {
                return index < 3 && <SubNavBarItem key={index} title={item} />;
              })}
              <li className="text-blueCustom-100 text-base transition-all delay-75 underline">
                Vedi tutti
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-span-2  border-l-4 border-gray-100"></div>
      </div>
      <div className=" bg-customGray-100 w-full flex justify-center py-6 ">
        <div className="grid grid-cols-3 w-3/4">
          <div className=" flex items-center ">
            <BsFillBoxSeamFill className="text-xl" />
            <span className="text-xl ml-3 font-light">
              Consegna anche al piano
            </span>
          </div>
          <div className=" flex items-center">
            <MdMiscellaneousServices className="text-xl" />
            <span className="text-xl ml-3 font-light">
              Servizi integrativi Serena - fino a 6 anni
            </span>
          </div>
          <div className=" flex items-center">
            <AiFillGift className="text-xl" />
            <span className="text-xl ml-3 font-light">
              Vantaggi speciali per gli Euronics Members
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNavbarGrid;
