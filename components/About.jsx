"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-b from-[#fff8f5] via-[#ffffff] to-[#ffe7dc]/60 overflow-hidden"
    >
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#ffe7dc]/60 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#d8a7aa]/30 rounded-full blur-3xl opacity-40"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto text-center"
      >
        {/* Section Title */}
        <h2 className="font-[Playfair_Display] text-4xl md:text-5xl text-[#a6826c] mb-8">
          Trust, Expertise & Radiance
        </h2>

        {/* Divider */}
        <div className="w-24 h-[2px] bg-[#d8a7aa] mx-auto mb-10 rounded-full"></div>

        {/* Paragraph */}
        <p className="max-w-3xl mx-auto text-[#444] text-lg md:text-xl leading-relaxed mb-10">
          At{" "}
          <span className="text-[#d8a7aa] font-semibold">
            Belle Aesthetics & Wellness
          </span>
          , our team of highly trained and talented professionals is passionate
          about helping you feel confident and radiant. We combine
          <span className="text-[#a6826c] font-medium">
            {" "}
            expertise, innovation, and personalized care{" "}
          </span>
          to deliver treatments that enhance your natural beauty and overall
          well-being.
        </p>

        {/* Optional image (delete if not needed) */}
        <div className="flex justify-center mt-8">
          <Image
            src="/belle.png"
            alt="Belle Spa Ambiance"
            width={500}
            height={300}
            className="rounded-3xl shadow-lg object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
