import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import WhyVIGLO from "./components/WhyVIGLO";
import Footer from "./components/Footer";
import Head from "next/head";
import { useEffect, useState } from "react";

// Dynamic imports for the LiveDashboard and JoinRevolution components
const DynamicLiveDashboard = dynamic(() => import("./components/LiveDashboard"), {
  loading: () => <p className="text-center text-gray-400">Loading Live Dashboard...</p>,
  ssr: false,
});

const DynamicJoinRevolution = dynamic(() => import("./components/JoinRevolution"), {
  loading: () => <p className="text-center text-gray-400">Loading Join Revolution...</p>,
  ssr: false,
});

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>VIGLO - Revolutionizing Your Experience</title>
        <meta name="description" content="Join the VIGLO revolution and discover how our technology is changing the world." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-gray-900 text-white overflow-x-hidden">
        <Hero />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="use-cases">
          <UseCases />
        </section>
        <section id="why-viglo">
          <WhyVIGLO />
        </section>
        <section id="live-dashboard">
          <DynamicLiveDashboard />
        </section>
        <section id="join">
          <DynamicJoinRevolution />
        </section>
        <Footer />
      </main>
    </>
  );
}
