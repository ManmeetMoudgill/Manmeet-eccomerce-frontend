import { IconType } from "react-icons";

interface NavbarItemProps {
  title: string;
  Icon: IconType;
  onClick?: () => void;
}

const UpperNavbarItem = ({ title, Icon }: NavbarItemProps) => {
  return (
    <li className=" text-base 2xl:text-xl flex items-center justify-center pr-10  cursor-pointer ">
      <Icon className="text-sm 2xl:text-base" />
      <span className=" ml-1 text-blueCustom-100">{title}</span>
    </li>
  );
};

export default UpperNavbarItem;
