import OffersCarousel from "@/components/home/offers-carousel";
import OffersSection from "@/components/home/offers-section";

export default function Home() {
  return (
    <>
      <main className="flex flex-col ">
        <OffersCarousel />
        <OffersSection />
      </main>
    </>
  );
}
