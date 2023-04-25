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
      return (
        <div className="left-0 top-14 border-2 border-green-900 pointer-events-none group-hover:pointer-events-auto absolute w-full opacity-0 group-hover:opacity-100 transition-all   z-50  h-[50vh]">
          <div className="z-50 w-full border-2 border-blue-600">
            <div className="border-2 border-green-900">asdsadsadsadasdsad</div>
          </div>
        </div>
      );
    default:
      return <div></div>;
  }
};

export const SubNavBarItem = ({ title }: Props) => {
  return (
    <li className="text-black text-base transition-all delay-75 hover:underline">
      {title}
    </li>
  );
};
