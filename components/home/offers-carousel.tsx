//@ts-nocheck
import React from "react";
import Carousel from "react-elastic-carousel";
type Props = {};

interface OffersItems {
  id: number;
  src: string;
  name: string;
}

const items: Array<OffersItems> = [
  { id: 1, src: "/assets/banner_1.jpg", name: "First Banner" },
  { id: 2, src: "/assets/banner_2.jpg", name: "Second Banner" },
  { id: 3, src: "/assets/banner_3.jpg", name: "Third Banner" },
  { id: 4, src: "/assets/banner_4.jpg", name: "Fourth Banner" },
  { id: 5, src: "/assets/banner_5.jpg", name: "Fifith Banner" },
  { id: 6, src: "/assets/banner_6.jpg", name: "Sixth Banner" },
  { id: 7, src: "/assets/banner_7.webp", name: "Seventh Banner" },
];

const OffersCarousel = (props: Props) => {
  return (
    <div className="w-full ">
      <Carousel
        autoPlaySpeed={2500}
        enableAutoPlay
        className="border-2 border-red-900"
      >
        {items.map((item) => (
          <div className="w-full h-auto min-h-[60vh]" key={item.id}>
            <div
              className="w-full object-contain h-full"
              style={{
                backgroundImage: `url(${item.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default OffersCarousel;
