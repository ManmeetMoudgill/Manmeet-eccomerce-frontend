import Newoffers from "@/components/offer-before-navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Newoffers />
      <Component {...pageProps} />
    </>
  );
}
