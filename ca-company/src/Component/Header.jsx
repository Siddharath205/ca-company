import React from "react";
import { FaArrowRight } from "react-icons/fa6"

export default function Navbar() {
  return (
    <header className="w-full bg-[#eef3f8]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
         <img src="/logo.svg" alt="Company Logo" />
          {/* <span className="text-xl font-semibold text-[#0b1c6d]">
            logoipsum
          </span> */}
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <a href="#" className="hover:text-[#0b1c6d]">Home</a>
          <a href="#" className="hover:text-[#0b1c6d]">Services</a>
          <a href="#" className="hover:text-[#0b1c6d]">Company</a>
          <a href="#" className="hover:text-[#0b1c6d]">Resources</a>
          <a href="#" className="hover:text-[#0b1c6d]">Contact</a>
        </nav>

        {/* CTA */}
        <button className="flex items-center gap-3 bg-[#0b1c6d] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#0a175a] transition">
          Let’s Talk
          <span className="bg-cyan-400 text-[#0b1c6d] px-2 py-1 rounded-md">
            <FaArrowRight />
          </span>
        </button>
      </div>
    </header>
  );
}
