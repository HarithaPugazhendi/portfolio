import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icon pack

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl font-bold text-sky-400">Haritha P</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg">
          <Link to="/" className="hover:text-sky-400">Home</Link>
          <Link to="/projects" className="hover:text-sky-400">Projects</Link>
          <Link to="/skills" className="hover:text-sky-400">Skills</Link>
          <Link to="/contact" className="hover:text-sky-400">Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center space-y-4 pb-4 md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
