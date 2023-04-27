import { informaticaCategories } from "@/constants";
import SubNavbarGrid from "./navbar-item-sub-navbar-grid";

interface Props {
  title: string;
}

export const SubNavbar = ({ title }: Props) => {
  switch (title) {
    case "Informatica":
      return <SubNavbarGrid />;
    case "Foto,Video,Droni":
      return <SubNavbarGrid />;
    case "Gaming":
      return <SubNavbarGrid />;
    case "Telefonia":
      return <SubNavbarGrid />;
    case "Tv e Audio":
      return <SubNavbarGrid />;
    case "Greeen tech":
      return <SubNavbarGrid />;
    case "Lifestyle":
      return <SubNavbarGrid />;

    default:
      return <div></div>;
  }
};

export const SubNavBarItem = ({ title }: Props) => {
  return (
    <li className="text-black text-base font-light transition-all delay-75 hover:underline">
      {title}
    </li>
  );
};
