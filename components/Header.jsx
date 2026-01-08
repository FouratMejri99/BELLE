"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function Header() {
  const logos = [
    { size: 70, left: "8%", delay: 0, duration: 25, opacity: 0.15 },
    { size: 90, left: "18%", delay: 3, duration: 28, opacity: 0.12 },
    { size: 55, left: "32%", delay: 1.5, duration: 22, opacity: 0.1 },
    { size: 80, left: "48%", delay: 4, duration: 30, opacity: 0.15 },
    { size: 65, left: "65%", delay: 2, duration: 26, opacity: 0.12 },
    { size: 85, left: "78%", delay: 5, duration: 27, opacity: 0.1 },
    { size: 75, left: "88%", delay: 1, duration: 24, opacity: 0.15 },
  ];

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      id="header"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden pt-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fffef9] via-white to-[#fff5f0] opacity-90" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#d8a7aa]/10 via-transparent to-[#a6826c]/10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Floating Logos with better opacity */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: logo.left, bottom: "-150px" }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: ["0%", "-150vh"],
              rotate: [0, 20, -20, 10, -10, 0],
              opacity: [0, logo.opacity, logo.opacity * 1.2, logo.opacity, 0],
              scale: [0.9, 1, 1.1, 1, 0.9],
            }}
            transition={{
              duration: logo.duration,
              delay: logo.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <Image
              src="/logo.png"
              alt=""
              width={logo.size}
              height={logo.size}
              className="opacity-60 blur-[0.5px]"
            />
          </motion.div>
        ))}
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/30 pointer-events-none backdrop-blur-[1px]" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#d8a7aa]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#a6826c]/5 rounded-full blur-3xl" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[#a6826c] text-sm md:text-base tracking-[0.4em] uppercase z-10 font-[Playfair_Display] mb-6 font-medium"
        >
          Welcome to
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1, type: "spring" }}
          className="relative z-10 mb-6"
        >
          <span className="font-[Great_Vibes] bg-gradient-to-r from-[#d8a7aa] via-[#c9989b] to-[#d8a7aa] bg-clip-text text-transparent text-7xl md:text-9xl lg:text-[10rem] font-normal drop-shadow-lg inline-block">
            BELLE
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="relative text-[#a6826c] text-xl md:text-2xl lg:text-3xl mt-4 z-10 font-[Playfair_Display] font-medium tracking-wide"
        >
          <span className="inline-block relative group cursor-pointer">
            Aesthetics & Wellness
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d8a7aa] to-[#a6826c] group-hover:w-full transition-all duration-500 rounded-full" />
          </span>
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[#a6826c]/60 hover:text-[#a6826c] cursor-pointer transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
