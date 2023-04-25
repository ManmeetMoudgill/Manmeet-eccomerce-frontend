import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex z-10 min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h2>this is the main page</h2>
    </main>
  );
}
