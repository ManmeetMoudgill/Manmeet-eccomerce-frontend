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
    <div className="w-full">
      <Carousel autoPlaySpeed={2500} enableAutoPlay>
        {items.map((item) => (
          <div className="min-h-[62vh] w-full " key={item.id}>
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `url(${item.src})`,
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default OffersCarousel;
