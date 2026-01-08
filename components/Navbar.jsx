"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scrolling behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gray-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo + Brand Name */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={(e) => handleLinkClick(e, "header")}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d8a7aa] to-[#a6826c] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
            <Image
              src="/logo.png"
              alt="Belle Logo"
              width={48}
              height={48}
              className="relative rounded-full object-cover shadow-lg ring-2 ring-white/50 group-hover:ring-[#d8a7aa]/50 transition-all duration-300 group-hover:scale-105"
            />
          </div>
          <h1 className="font-[Playfair_Display] text-2xl md:text-3xl bg-gradient-to-r from-[#a6826c] to-[#8b6f5d] bg-clip-text text-transparent tracking-wide font-semibold">
            Belle
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-[#a6826c] hover:bg-gray-100/80 focus:outline-none transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 lg:gap-12 items-center">
          {["About", "Services", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleLinkClick(e, `#${link.toLowerCase()}`)}
                className="relative text-gray-700 font-medium tracking-wide hover:text-[#d8a7aa] transition-all duration-300 group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d8a7aa] to-[#a6826c] group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-6 space-y-5">
          {["About", "Services", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleLinkClick(e, `#${link.toLowerCase()}`)}
                className="text-gray-700 text-lg font-medium hover:text-[#d8a7aa] transition-all duration-300 hover:scale-105 active:scale-95 inline-block"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
