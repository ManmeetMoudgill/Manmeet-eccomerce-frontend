import Navbar from "@/components/shell/navbar";
import Newoffers from "@/components/shell/offer-before-navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Newoffers />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
