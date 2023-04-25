import { SubNavbar } from "./navbar-item-sub-navbar";

interface LowerNavbarItemProps {
  title: string;
}
const LowerNavbarItem = ({ title }: LowerNavbarItemProps) => {
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

export default LowerNavbarItem;
