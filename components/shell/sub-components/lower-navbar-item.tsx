import { SubNavbar } from "./navbar-item-sub-navbar";
import Link from "next/link";
interface LowerNavbarItemProps {
  title: string;
}
const LowerNavbarItem = ({ title }: LowerNavbarItemProps) => {
  return (
    <Link
      href="/informatica"
      className=" group hidden xl:block    font-medium  cursor-pointer  py-1 mr-16 3xl:mr-20"
    >
      <p className=" text-blueCustom-100  text-lg 2xl:text-xl tracking-wider  ">
        {title}
      </p>
      <div
        className="
                              w-0 group-hover:w-full transition-all ease-in-out duration-700 bg-blueCustom-100 h-1 mt-1"
      ></div>

      <SubNavbar title={title} />
    </Link>
  );
};

export default LowerNavbarItem;
