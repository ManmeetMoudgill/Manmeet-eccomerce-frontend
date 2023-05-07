import OffersCarousel from "@/components/categories/informatica/offers-carousel";
import ProductsSection from "@/components/categories/informatica/products-container";
import InformaticaBannerSection from "@/components/categories/informatica/informatica-banner-section";

const InformaticaPage = () => {
  return (
    <main>
      <InformaticaBannerSection />
      <ProductsSection />
      <OffersCarousel />
    </main>
  );
};

export default InformaticaPage;
