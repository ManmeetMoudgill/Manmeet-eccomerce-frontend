import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
const products: Array<{
  id: number;
  firstItem: string;
  category: string;
  categoryLink?: string;
  categorySrc: string;
  secondItem?: string;
  thirdItem?: string;
}> = [
  {
    id: 1,
    category: "Computer Portatili",
    firstItem: "Notebook",
    secondItem: "Convertibili 2 in 1",
    thirdItem: "Notebook Gaming",
    categorySrc: "/assets/categories/informatica/computerPortatili.jpeg",
  },
  {
    id: 2,
    firstItem: "Tablet Android",
    category: "TABLET ED EBOOK READER",
    secondItem: "Ipad",
    thirdItem: "E-Book Reader",
    categorySrc: "/assets/categories/informatica/tablet.jpg",
  },
  {
    id: 3,
    firstItem: "Multifunzione",
    category: "STAMPANTI E SCANNER",
    secondItem: "Stampant Laser",
    thirdItem: "Cartucce",
    categorySrc: "/assets/categories/informatica/stampanti.jpg",
  },
  {
    id: 4,
    firstItem: "ACCESSORI PC",
    category: "ACCESSORI PC",
    secondItem: "Tablet Android",
    thirdItem: "Tablet iOS",
    categorySrc: "/assets/categories/informatica/accessori.jpg",
  },
  {
    id: 5,
    firstItem: "ACCESSORI PC",
    category: "MAC",
    secondItem: "Tablet Android",
    thirdItem: "Tablet iOS",
    categorySrc: "/assets/categories/informatica/mac.jpg",
  },
  {
    id: 6,
    firstItem: "ACCESSORI PC",
    category: "PC DESKTOP",
    secondItem: "Tablet Android",
    thirdItem: "Tablet iOS",
    categorySrc: "/assets/categories/informatica/DESKTOP.jpg",
  },
  {
    id: 7,
    firstItem: "ACCESSORI PC",
    category: "Hard Disk e Storage",
    secondItem: "Tablet Android",
    thirdItem: "Tablet iOS",
    categorySrc: "/assets/categories/informatica/hardisk-e-storage.jpg",
  },
  {
    id: 8,
    firstItem: "ACCESSORI PC",
    category: "MONITOR",
    secondItem: "Tablet Android",
    thirdItem: "Tablet iOS",
    categorySrc: "/assets/categories/informatica/monitor.jpg",
  },
  {
    id: 9,
    firstItem: "ACCESSORI PC",
    category: "RETI E CONNETTIVITÀ",
    secondItem: "Tablet Android",
    thirdItem: "Tablet iOS",
    categorySrc: "/assets/categories/informatica/retieconneyttivita.jpg",
  },
  {
    id: 10,
    firstItem: "ACCESSORI PC",
    category: "COMPONENTI PER PC",
    secondItem: "Tablet Android",
    thirdItem: "Tablet iOS",
    categorySrc: "/assets/categories/informatica/componentiperpc.jpg",
  },
  {
    id: 11,
    firstItem: "ACCESSORI PC",
    category: "SOFTWARE",
    secondItem: "Tablet Android",
    thirdItem: "Tablet iOS",
    categorySrc: "/assets/categories/informatica/software.jpg",
  },
  {
    id: 12,
    firstItem: "ACCESSORI PC",
    category: "WORKSTATION E SERVER",
    secondItem: "Tablet Android",
    thirdItem: "Tablet iOS",
    categorySrc: "/assets/categories/informatica/workstationeserver.jpg",
  },
];
const ProductsSection = () => {
  return (
    <section className=" flex justify-center items-center my-6">
      <div className="flex flex-col w-full px-4 lg:px-0  xl:w-4/5 2xl:3/4 ">
        <div className="flex items-center justify-center my-3">
          <h2 className="text-2xl  lg:text-4xl  font-semibold text-blueCustom-100">
            Informatica
          </h2>
        </div>

        {/* PRODUCTS CONTAINER */}
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
          {products?.map((product) => {
            return (
              <div
                key={product?.id}
                className="flex flex-col sm:mx-3 border-[2px] border-gray-100 lg:mx-6 my-4  cursor-pointer hover:shadow-lg transition-all delay-75 duration-500 ease-out rounded-md items-center justify-center pt-4 pb-10 px-4 "
              >
                <Image
                  className="mb-3 h-auto w-auto object-contain "
                  src={product?.categorySrc}
                  alt={product?.category}
                  width={200}
                  height={180}
                />
                <p className="text-base md:text-lg text-center font-semibold ">
                  {product?.category}
                </p>
                <div className="w-full px-8 my-4">
                  <div className="h-[1px]  bg-gray-400" />
                </div>
                <p className="mb-2 hover:cursor-pointer hover:text-blueCustom-100 hover:font-normal hover:scale-105 transition-all ease-in text-center text-base md:text-lg text-black font-light">
                  {product?.firstItem}
                </p>
                <p className="mb-2 hover:cursor-pointer hover:text-blueCustom-100 hover:font-normal hover:scale-105 transition-all ease-in text-center text-base md:text-lg text-black font-light">
                  {product?.secondItem}
                </p>
                <p className="mb-2 hover:cursor-pointer hover:text-blueCustom-100 hover:font-normal hover:scale-105 transition-all ease-in text-center text-base md:text-lg text-black font-light">
                  {product?.thirdItem}
                </p>
                <button className="mx-2 group mt-4 flex justify-center items-center px-4  py-2 xl:py-3 tracking-wide uppercase rounded-full bg-yellowCustom-100 ">
                  <span className="text-xs xl:text-sm font-light">
                    vedi tutti i prodotti
                  </span>
                  <IoIosArrowForward className="text-xl ml-3 group-hover:translate-x-1 transition-all delay-75 duration-300 ease-in-out" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
