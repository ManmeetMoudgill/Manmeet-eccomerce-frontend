import { informaticaCategories } from "@/constants";

interface Props {
  title: string;
}

export const SubNavbar = ({ title }: Props) => {
  switch (title) {
    case "Informatica":
      return (
        <div className="left-0 top-14 flex flex-col  pointer-events-none group-hover:pointer-events-auto absolute w-full opacity-0 group-hover:opacity-100 transition-all   z-50  py-4">
          <div className="grid grid-cols-6">
            <div className=" flex flex-col ">
              <nav className="mt-2 min-h-[15vh] ">
                <span className="text-xl font-bold text-blueCustom-100">
                  Computer Portatili
                </span>
                <ul className="flex flex-col">
                  {informaticaCategories?.computerPortatili?.map(
                    (item, index) => {
                      return (
                        index < 3 && <SubNavBarItem key={index} title={item} />
                      );
                    }
                  )}
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
                    return (
                      index < 3 && <SubNavBarItem key={index} title={item} />
                    );
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
                  Mac
                </span>
                <ul className="flex flex-col">
                  {informaticaCategories?.mac?.map((item, index) => {
                    return (
                      index < 3 && <SubNavBarItem key={index} title={item} />
                    );
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
                  {informaticaCategories?.workStationServer?.map(
                    (item, index) => {
                      return (
                        index < 3 && <SubNavBarItem key={index} title={item} />
                      );
                    }
                  )}
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
                    return (
                      index < 3 && <SubNavBarItem key={index} title={item} />
                    );
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
                  {informaticaCategories?.stampantiScanner?.map(
                    (item, index) => {
                      return (
                        index < 3 && <SubNavBarItem key={index} title={item} />
                      );
                    }
                  )}
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
                    return (
                      index < 3 && <SubNavBarItem key={index} title={item} />
                    );
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
                  {informaticaCategories?.hardDiskStorage?.map(
                    (item, index) => {
                      return (
                        index < 3 && <SubNavBarItem key={index} title={item} />
                      );
                    }
                  )}
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
    case "Foto,Video,Droni":
      return (
        <div className="left-0 top-14  pointer-events-none group-hover:pointer-events-auto absolute w-full opacity-0 group-hover:opacity-100 transition-all   z-50  h-[50vh]">
          <div className="z-50 w-full border-2 border-blue-600">
            <div className="">asdsadsadsadasdsad</div>
          </div>
        </div>
      );
    case "Gaming":
      return (
        <div className="left-0 top-14  pointer-events-none group-hover:pointer-events-auto absolute w-full opacity-0 group-hover:opacity-100 transition-all   z-50  h-[50vh]">
          <div className="z-50 w-full border-2 border-blue-600">
            <div className="">asdsadsadsadasdsad</div>
          </div>
        </div>
      );
    case "Telefonia":
      return (
        <div className="left-0 top-14  pointer-events-none group-hover:pointer-events-auto absolute w-full opacity-0 group-hover:opacity-100 transition-all   z-50  h-[50vh]">
          <div className="z-50 w-full border-2 border-blue-600">
            <div className="">asdsadsadsadasdsad</div>
          </div>
        </div>
      );
    case "Tv e Audio":
      return (
        <div className="left-0 top-14  pointer-events-none group-hover:pointer-events-auto absolute w-full opacity-0 group-hover:opacity-100 transition-all   z-50  h-[50vh]">
          <div className="z-50 w-full border-2 border-blue-600">
            <div className="">asdsadsadsadasdsad</div>
          </div>
        </div>
      );
    case "Greeen tech":
      return (
        <div className="left-0 top-14  pointer-events-none group-hover:pointer-events-auto absolute w-full opacity-0 group-hover:opacity-100 transition-all   z-50  h-[50vh]">
          <div className="z-50 w-full border-2 border-blue-600">
            <div className="">asdsadsadsadasdsad</div>
          </div>
        </div>
      );
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

const SubNavBarItem = ({ title }: Props) => {
  return (
    <li className="text-black text-base transition-all delay-75 hover:underline">
      {title}
    </li>
  );
};
