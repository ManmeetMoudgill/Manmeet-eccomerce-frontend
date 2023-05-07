"use client";
import React, { useState } from "react";
import { AiOutlineLaptop } from "react-icons/ai";
import { MdMobiledataOff } from "react-icons/md";
import { BiHomeAlt2 } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsHeadphones } from "react-icons/bs";
import { IconType } from "react-icons";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TfiLinkedin } from "react-icons/tfi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import PaymentsAfterFooter from "./payments-after-footer";
const InformazioniList = [
  {
    id: 1,
    item: "Chi siamo",
  },
  {
    id: 2,
    item: "Euronics International",
  },
  {
    id: 3,
    item: "Programma Franchising",
  },
  {
    id: 4,
    item: "Lo Facciamo per te, i nostri impegni",
  },
  {
    id: 5,
    item: "Lavora con noi",
  },
  {
    id: 6,
    item: "Lo facciamo per il tuo mondo",
  },
];

const perTuoiAcquisit = [
  {
    id: 1,
    item: "Modalità d' acquisto",
  },
  {
    id: 2,
    item: "Euronics International",
  },
  {
    id: 3,
    item: "Consegna e Installazione",
  },
  {
    id: 4,
    item: "In caso di guasto",
  },
  {
    id: 5,
    item: "Prenota e Ritira",
  },
  {
    id: 6,
    item: "Compra ora e paga dopo",
  },
];
const areaCliente = [
  {
    id: 1,
    item: "Contattaci",
  },
  {
    id: 2,
    item: "Carta Euronicsl",
  },
  {
    id: 3,
    item: "Verifica stato della riparazione",
  },
  {
    id: 4,
    item: "Credito Gift Card",
  },
  {
    id: 5,
    item: "Servizi Euronicsa",
  },
  {
    id: 6,
    item: "Servizi Serena",
  },
];

const privacy = [
  {
    id: 1,
    item: "Impostazioni cookie",
  },
  {
    id: 2,
    item: "Privacy Policy",
  },
  {
    id: 3,
    item: "Informativa Cookies",
  },
  {
    id: 4,
    item: "Credito Gift Card",
  },
  {
    id: 5,
    item: "Servizi Euronicsa",
  },
  {
    id: 6,
    item: "Servizi Serena",
  },
];

const LeftPartSectionFooterItem = ({
  Icon,
  title,
}: {
  Icon: IconType;
  title: string;
}) => {
  return (
    <div className="my-3 md:pr-3 xl:pr-0 flex  items-center cursor-pointer">
      <Icon className="text-yellowCustom-100 text-xl 2xl:text-2xl" />
      <p className="text-yellowCustom-100  font-semibold text-base 2xl:text-xl px-3">
        {title}
      </p>
    </div>
  );
};

const BeforeFooterSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  return (
    <>
      <footer className=" bg-blueCustom-200 justify-center flex  items-center pt-14 pb-14">
        <div className=" w-11/12 sm:w-full sm:px-6  lg:w-full 2xl:w-4/5   flex flex-col">
          <div className="flex flex-col xl:flex-row xl:border-b-[1px] border-gray-50 border-b-0 pb-4 lg:pb-10">
            <div className="xl:w-3/12 border-b-[1px] md:border-b-0 pb-8 md:pb-0 xl:border-r-[1px]  border-gray-50 flex flex-col md:flex-row md:flex-wrap xl:flex-col  md:pr-0 2xl:pr-8">
              <LeftPartSectionFooterItem
                Icon={AiOutlineLaptop}
                title="Prenota e ritira in negozio"
              />
              <LeftPartSectionFooterItem
                Icon={MdMobiledataOff}
                title="Ritira RAEE gratuito"
              />
              <LeftPartSectionFooterItem
                Icon={BiHomeAlt2}
                title="Consegna a domicilio"
              />
              <LeftPartSectionFooterItem
                Icon={RiSecurePaymentLine}
                title="Pagamenti con finanziamento"
              />
              <LeftPartSectionFooterItem
                Icon={BsHeadphones}
                title="Assistenza clienti"
              />
            </div>
            {/* FOR SMALL DEVICES */}
            <div className="flex lg:hidden flex-col ">
              <RightPartSectionFooterItemForSmallDevices
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                headingTitle="Informazioni"
                listItem={InformazioniList}
              />
              <RightPartSectionFooterItemForSmallDevices
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                headingTitle="Per i tuoi acquisti"
                listItem={perTuoiAcquisit}
              />
              <RightPartSectionFooterItemForSmallDevices
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                headingTitle="Area Clienti"
                listItem={areaCliente}
              />
              <RightPartSectionFooterItemForSmallDevices
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                headingTitle="Privay"
                listItem={privacy}
              />
            </div>

            {/* large devices */}
            <div className=" xl:w-3/4 hidden lg:grid xl:pl-0 2xl:pl-16  grid-cols-4  ">
              <RightPartSectionFooterItem
                headingTitle="Informazioni"
                listItem={InformazioniList}
              />

              <RightPartSectionFooterItem
                headingTitle="Per i tuoi acquisti"
                listItem={perTuoiAcquisit}
              />
              <RightPartSectionFooterItem
                headingTitle="Area Clienti"
                listItem={areaCliente}
              />
              <RightPartSectionFooterItem
                headingTitle="Privay"
                listItem={privacy}
              />
            </div>
          </div>
          <div className=" flex flex-col md:flex-row justify-between">
            <div className=" flex flex-col">
              <p className="my-5 text-base lg:text-xl text-white font-semibold">
                Seguici sui social
              </p>
              <div className="flex">
                <SocialMediaIcon Icon={FaFacebookF} title="Facebook" />
                <SocialMediaIcon Icon={TfiLinkedin} title="Linkedin" />
                <SocialMediaIcon Icon={AiFillInstagram} title="Instagram" />
                <SocialMediaIcon Icon={AiOutlineWhatsApp} title="Whatsapp" />
                <SocialMediaIcon Icon={AiFillYoutube} title="Youtube" />
              </div>
            </div>
            <div className="">
              <p className="my-5 text-base lg:text-xl text-white font-semibold">
                Scarica la nuova app
              </p>
              <div className="flex md:justify-center items-center">
                <Image
                  className="hover:scale-90 transition-all delay-75 duration-200 cursor-pointer mr-5 h-[40px]  w-auto lg:h-[47px]"
                  src="/assets/socials/apple_store.webp"
                  width={100}
                  height={40}
                  priority
                  alt="Apple Store"
                />
                <Image
                  className="hover:scale-90 transition-all delay-75 duration-200 cursor-pointer mr-5 h-[40px] w-auto  lg:h-[47px]"
                  src="/assets/socials/google_play_store.webp"
                  priority
                  width={100}
                  height={40}
                  alt="Google Play-Store"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <PaymentsAfterFooter />
    </>
  );
};

/* SOCIAL COMPONENTS */

export const SocialMediaIcon = ({
  Icon,
}: {
  Icon: IconType;
  title: string;
}): React.ReactElement => {
  return (
    <div className="w-10 cursor-pointer hover:-translate-y-2 transition-all delay-75 duration-300 h-10 lg:w-12 lg:h-12 mr-4 lg:mr-8 rounded-full bg-blueCustom-100 flex justify-center items-center">
      <Icon className="text-white text-xl md:text-2xl" />
    </div>
  );
};

/* FOR LARGER DEVICES */
export const RightPartSectionFooterItem = ({
  headingTitle,
  listItem,
}: {
  headingTitle: string;
  listItem: Array<{
    id: number;
    item: string;
  }>;
}): React.ReactElement => {
  return (
    <div className="boder-green-800 xl:px-6">
      <h4 className="text-yellowCustom-100 text-xl mt-3 font-semibold">
        {headingTitle}
      </h4>
      <ul className="mt-4 flex flex-col list-none">
        {listItem.map((item) => {
          return (
            <li
              key={item.id}
              className="cursor-pointer my-[2px] text-white text-base"
            >
              {item.item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

/* FOR SMALL DEVICES */
export const RightPartSectionFooterItemForSmallDevices = ({
  headingTitle,
  listItem,
  setSelectedCategory,
  selectedCategory,
}: {
  headingTitle: string;
  listItem: Array<{
    id: number;
    item: string;
  }>;
  setSelectedCategory: (args: string) => void;
  selectedCategory: string;
}) => {
  return (
    <div
      onClick={() => {
        if (selectedCategory === headingTitle) setSelectedCategory("");
        else setSelectedCategory(headingTitle);
      }}
    >
      <h4 className="text-yellowCustom-100 text-lg mt-3 font-semibold">
        {headingTitle}
      </h4>
      <ul
        className={`mt-1 flex-col list-none overflow-hidden transition-[height]  duration-500 transform ${
          selectedCategory === headingTitle ? "h-[160px]" : "h-[0px]"
        } `}
      >
        {selectedCategory === headingTitle
          ? listItem.map((item) => {
              return (
                <li
                  key={item.id}
                  className=" cursor-pointer my-[2px] text-white text-base"
                >
                  {item.item}
                </li>
              );
            })
          : undefined}
      </ul>
    </div>
  );
};
export default BeforeFooterSection;
