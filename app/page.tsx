import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

export default function Home() {
  return (
    <main className="relative bg-gradient-to-br from-[#fffef9] via-white to-[#fff5f0] text-[#1a1a1a] overflow-hidden">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #a6826c 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      <Navbar />
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
