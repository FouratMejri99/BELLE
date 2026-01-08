"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const services = [
  {
    title: "Hydro Facials",
    desc: "Hydrates, exfoliates, and removes dead skin cells for a youthful glow.",
    img: "/services/hydro-facial.jpg",
    gradient: "from-blue-400/20 to-cyan-300/20",
  },
  {
    title: "Microneedling",
    desc: "Stimulates collagen production to improve skin texture and reduce scars.",
    img: "/services/microneedling.jpg",
    gradient: "from-purple-400/20 to-pink-300/20",
  },
  {
    title: "Chemical Peels",
    desc: "Exfoliates the skin to improve texture and reduce fine lines.",
    img: "/services/chemical-peel.webp",
    gradient: "from-orange-400/20 to-amber-300/20",
  },
  {
    title: "IV Hydration",
    desc: "Provides nutrients and hydration to rejuvenate and revitalize the body.",
    img: "/services/iv-hydration.jpeg",
    gradient: "from-emerald-400/20 to-teal-300/20",
  },
  {
    title: "Botox & Fillers",
    desc: "Reduces wrinkles and restores facial volume with non-invasive injections.",
    img: "/services/botox-fillers.jpeg",
    gradient: "from-rose-400/20 to-pink-300/20",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#fffef9] to-white overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#ffe7dc]/30 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#d8a7aa]/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#d8a7aa]" />
            <span className="text-sm uppercase tracking-widest text-[#a6826c] font-medium">
              Our Services
            </span>
            <Sparkles className="w-5 h-5 text-[#d8a7aa]" />
          </div>
          <h2 className="font-[Playfair_Display] text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-4 font-semibold">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-[#d8a7aa] to-[#a6826c] bg-clip-text text-transparent">
              Natural Beauty
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#d8a7aa] to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:border-[#d8a7aa]/30">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Service Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Image Badge */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#d8a7aa] to-[#a6826c] rounded-xl flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="relative p-6 lg:p-8 space-y-3">
                  <h3 className="text-2xl lg:text-3xl font-[Playfair_Display] text-[#1a1a1a] group-hover:text-[#d8a7aa] transition-colors duration-300 font-semibold">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base group-hover:text-gray-700 transition-colors duration-300">
                    {s.desc}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 text-[#a6826c] text-sm font-medium group-hover:gap-3 transition-all duration-300 cursor-pointer">
                      Learn More
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#d8a7aa]/20 transition-colors duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
