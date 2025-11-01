import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // For dynamic underline effect
  const linkClass = ({ isActive }) =>
    `relative pb-1 transition-colors ${
      isActive ? "text-accent font-semibold" : "text-gray-800 hover:text-accent"
    }`;

  const underline = (isActive) => (
    <span
      className={`absolute left-0 bottom-0 h-[2px] bg-accent transition-all duration-300 ${
        isActive ? "w-full" : "w-0"
      }`}
    ></span>
  );

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-primary"
          onClick={() => setIsOpen(false)}
        >
          Somil Sonbhurra
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-gray-800 font-medium">
          <NavLink to="/" end className={linkClass}>
            {({ isActive }) => (
              <>
                Home
                {underline(isActive)}
              </>
            )}
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            {({ isActive }) => (
              <>
                About
                {underline(isActive)}
              </>
            )}
          </NavLink>

          <NavLink to="/projects" className={linkClass}>
            {({ isActive }) => (
              <>
                Projects
                {underline(isActive)}
              </>
            )}
          </NavLink>

          <NavLink to="/skills" className={linkClass}>
            {({ isActive }) => (
              <>
                Skills
                {underline(isActive)}
              </>
            )}
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            {({ isActive }) => (
              <>
                Contact
                {underline(isActive)}
              </>
            )}
          </NavLink>

          <a
            href="/resume.pdf"
            download
            className="ml-2 inline-flex items-center gap-2 border border-accent text-accent px-3 py-1.5 rounded-md hover:bg-accent hover:text-white transition"
          >
            <FiDownload /> Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <nav className="flex flex-col items-center gap-4 py-4 text-gray-700 font-medium">
            <NavLink
              to="/"
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `relative pb-1 ${
                  isActive ? "text-accent font-semibold" : "hover:text-accent"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `relative pb-1 ${
                  isActive ? "text-accent font-semibold" : "hover:text-accent"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/projects"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `relative pb-1 ${
                  isActive ? "text-accent font-semibold" : "hover:text-accent"
                }`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/skills"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `relative pb-1 ${
                  isActive ? "text-accent font-semibold" : "hover:text-accent"
                }`
              }
            >
              Skills
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `relative pb-1 ${
                  isActive ? "text-accent font-semibold" : "hover:text-accent"
                }`
              }
            >
              Contact
            </NavLink>

            <a
              href="/resume.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 border border-accent text-accent px-3 py-1.5 rounded-md hover:bg-accent hover:text-white transition"
            >
              <FiDownload /> Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
