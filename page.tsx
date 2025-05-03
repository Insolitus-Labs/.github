import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import WhyVIGLO from "./components/WhyVIGLO";
import Footer from "./components/Footer";

const DynamicLiveDashboard = dynamic(() => import("./components/LiveDashboard"), {
  loading: () => <p className="text-center text-gray-400">Loading Live Dashboard...</p>, // Updated loading message for clarity
  ssr: false, // Added SSR optimization
});

const DynamicJoinRevolution = dynamic(() => import("./components/JoinRevolution"), {
  loading: () => <p className="text-center text-gray-400">Loading Join Revolution...</p>, // Updated loading message for clarity
  ssr: false, // Added SSR optimization
});

export default function Home() {
  return (
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
  );
}
