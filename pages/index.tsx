import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex z-10 min-h-screen flex-col items-center border-2 border-red-600 justify-between p-24 ${inter.className}`}
    >
      <h2>this is the main page</h2>
    </main>
  );
}
