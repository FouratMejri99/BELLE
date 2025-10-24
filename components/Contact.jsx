"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

export default function Contact() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Interpolate background from previous color (#fff) to section color (#fff8f5)
  const bgColor = `rgba(255, 248, 245, ${Math.min(scrollY / 500, 1)})`;

  return (
    <motion.section
      id="contact"
      className="py-24 px-6 text-center"
      style={{ backgroundColor: bgColor }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-[Playfair_Display] text-4xl text-[#a6826c] mb-10"
      >
        Contact Us
      </motion.h2>

      <p className="text-lg mb-4">
        📍 49 Sunrise Highway, Lindenhurst, NY 11757
      </p>

      <p className="mb-4">
        ✉️{" "}
        <a
          href="mailto:Fedlenenp@mybelleaesthetics.com"
          className="text-[#d8a7aa] hover:underline"
        >
          Fedlenenp@mybelleaesthetics.com
        </a>
      </p>

      <p className="mb-8">
        📞{" "}
        <a href="tel:6317049895" className="text-[#d8a7aa] hover:underline">
          631-704-9895
        </a>
      </p>

      <div className="flex justify-center gap-8 text-[#a6826c]">
        <a href="#">
          <Facebook />
        </a>
        <a href="#">
          <Instagram />
        </a>
        <a href="#">
          <Twitter />
        </a>
      </div>
    </motion.section>
  );
}
