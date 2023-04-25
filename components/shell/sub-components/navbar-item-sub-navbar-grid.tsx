import { informaticaCategories } from "@/constants";
import React from "react";
import { SubNavBarItem } from "./navbar-item-sub-navbar";

const SubNavbarGrid = () => {
  return (
    <div className="left-0 top-14 flex flex-col  pointer-events-none group-hover:pointer-events-auto absolute w-full opacity-0 group-hover:opacity-100 transition-all   z-50  py-4">
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
        <div className="col-span-2 border-l-2 border-gray-200"></div>
      </div>
      <div className="py-2 w-full bg-gray-200">asdsadasdasd</div>
    </div>
  );
};

export default SubNavbarGrid;
