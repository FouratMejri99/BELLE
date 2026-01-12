import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

// Lazy load below-the-fold components
const About = dynamic(() => import("../components/About"), {
  loading: () => <div className="h-screen" />,
});
const Services = dynamic(() => import("../components/Services"), {
  loading: () => <div className="h-screen" />,
});
const Contact = dynamic(() => import("../components/Contact"), {
  loading: () => <div className="h-screen" />,
});
const Footer = dynamic(() => import("../components/Footer"));

export default function Home() {
  return (
    <main className="relative bg-gradient-to-br from-[#fffef9] via-white to-[#fff5f0] text-[#1a1a1a] overflow-hidden">
      {/* Subtle background pattern - optimized with will-change */}
      <div 
        className="fixed inset-0 opacity-[0.02] pointer-events-none will-change-auto" 
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #a6826c 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          transform: 'translateZ(0)',
        }} 
      />
      <Navbar />
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
