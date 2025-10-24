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
          ? "bg-[#ffffff]/90 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo + Brand Name */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={(e) => handleLinkClick(e, "header")} // Scrolls to the header
        >
          <Image
            src="/logo.png"
            alt="Belle Logo"
            width={42}
            height={42}
            className="rounded-full object-cover shadow-sm"
          />
          <h1 className="font-[Playfair_Display] text-2xl md:text-3xl text-[#a6826c] tracking-wide">
            Belle
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#a6826c] focus:outline-none transition-transform duration-300 hover:scale-110"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center">
          {["About", "Services", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleLinkClick(e, `#${link.toLowerCase()}`)}
                className="relative text-[#000] font-medium tracking-wide hover:text-[#d8a7aa] transition-all duration-300 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-[#d8a7aa] hover:before:w-full before:transition-all before:duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-[#ffffff] shadow-lg transition-all duration-500 ease-in-out overflow-hidden ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          {["About", "Services", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleLinkClick(e, `#${link.toLowerCase()}`)}
                className="text-[#000] text-lg font-medium hover:text-[#d8a7aa] transition"
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
