"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const logos = [
    { size: 80, left: "5%", delay: 0, duration: 20, opacity: 0.8 },
    { size: 100, left: "15%", delay: 2, duration: 22, opacity: 0.8 },
    { size: 60, left: "25%", delay: 1, duration: 18, opacity: 0.8 },
    { size: 90, left: "35%", delay: 3, duration: 24, opacity: 0.8 },
    { size: 70, left: "50%", delay: 0.5, duration: 21, opacity: 0.8 },
    { size: 85, left: "65%", delay: 2.2, duration: 23, opacity: 0.8 },
    { size: 95, left: "80%", delay: 1.8, duration: 25, opacity: 0.8 },
  ];

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = `rgba(255, 231, 220, ${Math.max(1 - scrollY / 600, 0)})`;

  return (
    <motion.header
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden pt-24"
      style={{ background: bgColor }}
    >
      {/* Floating Logos */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: logo.left, bottom: "-120px" }}
            initial={{ y: 0, opacity: logo.opacity }}
            animate={{
              y: ["0%", "-120vh"],
              rotate: [0, 15, -15, 0],
              opacity: [logo.opacity, logo.opacity + 0.1, logo.opacity],
            }}
            transition={{
              duration: logo.duration,
              delay: logo.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <Image
              src="/logo.png"
              alt=""
              width={logo.size}
              height={logo.size}
              className="opacity-80"
            />
          </motion.div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/50 pointer-events-none" />

      {/* Hero Text */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative text-[#a6826c] text-lg md:text-xl tracking-[0.3em] uppercase z-10 font-[Playfair_Display]"
      >
        Welcome to
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative z-10 text-[#000] text-[5rem] md:text-[7rem] tracking-[0.15em]"
      >
        <span className="font-[Great_Vibes] text-[#d8a7aa] text-[6rem] md:text-[8rem] drop-shadow-md">
          BELLE
        </span>
      </motion.h1>

      {/* Use same font as 'Welcome to' + underline on hover */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="relative text-[#a6826c] text-2xl md:text-3xl mt-2 z-10 font-[Playfair_Display] cursor-pointer hover:after:w-full after:content-[''] after:block after:h-[2px] after:bg-[#d8a7aa] after:w-0 after:transition-all after:duration-300"
      >
        Aesthetics & Wellness
      </motion.p>
    </motion.header>
  );
}
