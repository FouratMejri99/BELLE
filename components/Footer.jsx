"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#a6826c] via-[#8b6f5d] to-[#a6826c] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '30px 30px'
      }} />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Belle Logo"
                width={40}
                height={40}
                className="rounded-full object-cover ring-2 ring-white/30"
              />
              <h3 className="font-[Playfair_Display] text-2xl font-semibold">
                Belle
              </h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Aesthetics & Wellness
            </p>
            <p className="text-white/70 text-xs leading-relaxed">
              Enhancing your natural beauty with personalized care and expertise.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-[Playfair_Display] text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/80 hover:text-white text-sm transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-white/50 rounded-full group-hover:bg-white transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-[Playfair_Display] text-lg font-semibold mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-white/80">
                49 Sunrise Highway<br />
                Lindenhurst, NY 11757
              </p>
              <p className="text-white/80">
                <a href="tel:6317049895" className="hover:text-white transition-colors">
                  631-704-9895
                </a>
              </p>
              <p className="text-white/80">
                <a href="mailto:Fedlenenp@mybelleaesthetics.com" className="hover:text-white transition-colors break-all">
                  Fedlenenp@mybelleaesthetics.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 my-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-white/70 text-xs sm:text-sm tracking-wide"
        >
          <p>
            © {currentYear} Belle Aesthetics & Wellness. All rights reserved.
          </p>
          <p className="mt-2 text-white/60 text-xs">
            Designed with care for your beauty journey
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
