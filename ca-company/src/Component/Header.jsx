import React from "react";


export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-[#FEFEFE]">
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
        <button className="flex items-center gap-3 bg-[#3117DF] text-white px-9 py-4 rounded-lg font-medium hover:bg-[#0a175a] transition">
          Let’s Talk
          
        </button>
      </div>
    </header>
  );
}
