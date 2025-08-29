"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Main Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b text-sm">
        <div className="flex items-center space-x-6">
          {/* Menu button (for mobile) */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>

          {/* Main Nav */}
          <nav className="hidden md:flex space-x-4 font-medium">
            <a href="#" className="hover:text-orange-500">Live</a>
            <a href="#" className="hover:text-orange-500">Push</a>
            <a href="#" className="hover:text-orange-500">Move</a>
            <a href="#" className="hover:text-orange-500">Note</a>
            <a href="#" className="hover:text-orange-500">Link</a>
            <a href="#" className="hover:text-orange-500">Shop</a>
            <a href="#" className="hover:text-orange-500">Packs</a>
            <a href="#" className="hover:text-orange-500">Help</a>
            <a href="#" className="text-orange-500">More +</a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" className="text-blue-600 font-medium">Try Live 12 for free</a>
          <a href="#" className="hover:underline">Log in or register</a>
        </div>
      </header>

      {/* Secondary Nav */}
      <div className="flex space-x-6 px-6 py-5 text-sm font-medium">
        <a href="#" className="text-orange-500">About</a>
        <a href="#" className="hover:text-orange-500">Jobs</a>
        <a href="#" className="hover:text-orange-500">Apprenticeships</a>
      </div>
    </>
  );
}
