import BestOffers from "@/components/home/best-offers";
import BestOffersCarousel from "@/components/home/HomeProductsOfferCarousel";
import OffersCarousel from "@/components/home/offers-carousel";
import OffersSection from "@/components/home/offers-section";
import RecomendationOffers from "@/components/home/recomendation-offers";
import ServicesInformationSection from "@/components/home/services-information";

export default function Home() {
  return (
    <>
      <main className="flex flex-col ">
        <OffersCarousel />
        <OffersSection />
        <BestOffers />
        <ServicesInformationSection />
        <RecomendationOffers />
      </main>
    </>
  );
}
