import BestOffers from "@/components/home/best-offers";
import BestOffersCarousel from "@/components/home/HomeProductsOfferCarousel";
import OffersCarousel from "@/components/home/offers-carousel";
import OffersSection from "@/components/home/offers-section";
import RecomendationOffers from "@/components/home/recomendation-offers";
import ServicesInformationSection from "@/components/home/services-information";
import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
export default function Home() {
  const [isPageReady, setIsPageReady] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageReady(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {!isPageReady ? (
        <div className="w-full h-screen flex justify-center  pt-[10%]">
          <ImSpinner9 className="text-blueCustom-100 animate-spin text-5xl" />
        </div>
      ) : (
        <main className="flex flex-col ">
          <OffersCarousel />
          <OffersSection />
          <BestOffers />
          <ServicesInformationSection />
          <RecomendationOffers />
        </main>
      )}
    </>
  );
}
