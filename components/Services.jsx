"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Hydro Facials",
    desc: "Hydrates, exfoliates, and removes dead skin cells for a youthful glow.",
    img: "/services/hydro-facial.jpg",
  },
  {
    title: "Microneedling",
    desc: "Stimulates collagen production to improve skin texture and reduce scars.",
    img: "/services/microneedling.jpg",
  },
  {
    title: "Chemical Peels",
    desc: "Exfoliates the skin to improve texture and reduce fine lines.",
    img: "/services/chemical-peel.webp",
  },
  {
    title: "IV Hydration",
    desc: "Provides nutrients and hydration to rejuvenate and revitalize the body.",
    img: "/services/iv-hydration.jpeg",
  },
  {
    title: "Botox & Fillers",
    desc: "Reduces wrinkles and restores facial volume with non-invasive injections.",
    img: "/services/botox-fillers.jpeg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-[#ffe7dc] to-[#fff] px-6"
    >
      <h2 className="font-[Playfair_Display] text-4xl text-center text-[#a6826c] mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 border border-[#f5e3da] flex flex-col items-center text-center"
          >
            {/* Service Image */}
            <div className="w-32 h-32 mb-4 relative">
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>

            {/* Service Title */}
            <h3 className="text-2xl font-[Playfair_Display] text-[#d8a7aa] mb-2">
              {s.title}
            </h3>

            {/* Service Description */}
            <p className="text-[#444] leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
