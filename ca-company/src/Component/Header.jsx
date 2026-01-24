import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const Navigate = useNavigate();
  return (
    <header className="fixed top-0 z-50 w-full bg-[#FEFEFE]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Company Logo" />
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <a href="" className="hover:text-[#0b1c6d]" onClick={() => Navigate('/')}>Home</a>
          <a href="" className="hover:text-[#0b1c6d]" onClick={() => Navigate('/ServiceDetail')}>Services</a>
          <a href="" className="hover:text-[#0b1c6d]" onClick={() => Navigate('/Company')}>Company</a>
          <a href="" className="hover:text-[#0b1c6d]" onClick={() => Navigate('/Resources')}>Resources</a>
          <a href="" className="hover:text-[#0b1c6d]" onClick={() => Navigate('/Contact')}>Contact</a>
        </nav>

        {/* CTA */}
        <button className="flex items-center gap-3 bg-[#3117DF] text-white px-9 py-4 rounded-lg font-medium hover:bg-[#0a175a] transition">
          Let’s Talk

        </button>
      </div>
    </header>
  );
}
