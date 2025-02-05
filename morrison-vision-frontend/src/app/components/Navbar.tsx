"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            <Image
              src="/morrisonvision.jpg"
              alt="Morrison Vision Logo"
              width={150}
              height={50}
              className="cursor-pointer"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-600">Inicio</Link>

            {/* Dropdown de Servicios (solo en desktop) */}


            <Link href="/galeria" className="hover:text-blue-600">Galeria</Link>
            <Link href="/equipo" className="hover:text-blue-600">Equipo</Link>
            <Link href="/preguntas-frecuentes" className="hover:text-blue-600">Preguntas Frecuentes</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-900"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (sin dropdown de Servicios) */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white shadow-md"
        >
          <Link href="/" className="block px-4 py-3 border-b">Inicio</Link>
          <Link href="/galeria" className="block px-4 py-3 border-b">Galeria</Link>
          <Link href="/equipo" className="block px-4 py-3 border-b">Equipo</Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
