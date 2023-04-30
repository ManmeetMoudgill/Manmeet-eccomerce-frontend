import OffersCarousel from "@/components/home/offers-carousel";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <OffersCarousel />
      <main
        className={`flex z-10 min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      ></main>
    </>
  );
}
