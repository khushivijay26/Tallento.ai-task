import Head from "next/head";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tallento.ai — Find Your Dream Job</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Recreated Header and Hero Banner UI in Next.js + Tailwind CSS" />
      </Head>
      <Header />
      <main>
        <HeroBanner />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
        Built with Next.js 14 + Tailwind CSS
      </footer>
    </>
  );
}
