"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#fffef9] to-white overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#d8a7aa]/10 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tl from-[#a6826c]/10 to-transparent rounded-full blur-3xl opacity-50" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ffe7dc]/20 rounded-full blur-3xl opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-6xl mx-auto"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-[Playfair_Display] text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-4 font-semibold">
            Trust, Expertise &{" "}
            <span className="bg-gradient-to-r from-[#d8a7aa] to-[#a6826c] bg-clip-text text-transparent">
              Radiance
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#d8a7aa] to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              At{" "}
              <span className="text-[#d8a7aa] font-semibold">
                Belle Aesthetics & Wellness
              </span>
              , our team of highly trained and talented professionals is passionate
              about helping you feel confident and radiant.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We combine{" "}
              <span className="text-[#a6826c] font-medium">
                expertise, innovation, and personalized care
              </span>{" "}
              to deliver treatments that enhance your natural beauty and overall
              well-being.
            </p>
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["Expert Team", "Personalized Care", "Advanced Technology"].map((feature, i) => (
                <motion.span
                  key={feature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-white border border-[#d8a7aa]/20 rounded-full text-sm text-[#a6826c] font-medium shadow-sm hover:shadow-md hover:border-[#d8a7aa]/40 transition-all duration-300"
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
              <Image
                src="/belle.png"
                alt="Belle Spa Ambiance"
                width={600}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-white/50 pointer-events-none" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
            >
              <div className="text-3xl font-bold text-[#a6826c]">15+</div>
              <div className="text-xs text-gray-600 uppercase tracking-wider">Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
