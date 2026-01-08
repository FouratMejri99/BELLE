"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone, Clock } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "49 Sunrise Highway, Lindenhurst, NY 11757",
      href: "https://maps.google.com/?q=49+Sunrise+Highway,+Lindenhurst,+NY+11757",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "Fedlenenp@mybelleaesthetics.com",
      href: "mailto:Fedlenenp@mybelleaesthetics.com",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "631-704-9895",
      href: "tel:6317049895",
      color: "from-green-400 to-emerald-500",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#fffef9] to-[#fff5f0] overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d8a7aa]/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#a6826c]/10 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-[Playfair_Display] text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-4 font-semibold">
            Get in{" "}
            <span className="bg-gradient-to-r from-[#d8a7aa] to-[#a6826c] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-6">
            We'd love to hear from you. Reach out to schedule your consultation.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#d8a7aa] to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {contactInfo.map((info, i) => {
            const IconComponent = info.icon;
            return (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.label === "Address" ? "_blank" : undefined}
                rel={info.label === "Address" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:border-[#d8a7aa]/30 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 text-center space-y-4">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${info.color} shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-widest text-gray-500 font-medium mb-2">
                        {info.label}
                      </h3>
                      <p className="text-gray-800 text-base font-medium group-hover:text-[#a6826c] transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#d8a7aa]/20 transition-colors duration-500 pointer-events-none" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((social, i) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl flex items-center justify-center text-[#a6826c] group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-[#d8a7aa] group-hover:to-[#a6826c] transition-all duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
