import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaBars } from "react-icons/fa6";
import {FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../seo/SEO";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Why Choose Us?", to: "/why-choose-us" },
    { label: "Services", to: "/services" },
    { label: "Urgent Matters", to: "/urgent-matters" },
    { label: "Our Successful Court Cases", to: "/court-cases" },
    { label: "How To Contact Us?", to: "/contact" },
    { label: "Free Consultation", to: "/consultation" },
    { label: "Languages", to: "/languages" },
    { label: "Follow Us On Social Media", to: "/social" },
  ];

  return (
    <>
      <SEO
        title="Home"
        description="Welcome to our Kahlon Website - Your trusted partner in legal matters."
        keywords="Kahlon, legal services, immigration law"
      />
      <style>{`
        @media (max-width: 1024px) {
          header > div:nth-child(2) img {
            position: static !important;
            margin-top: 10px;
            display: block;
            width: 130px;
          }
          nav.custom-nav {
            flex-direction: row !important;
            gap: 0.5rem !important;
          }
          nav.custom-nav a {
            display: block;
          }
        }

        @media (min-width: 1025px) {
          header > div:nth-child(2) img {
            position: absolute !important;
            top: 0.5rem;
            width: 130px;
          }
        }
      `}</style>

      <header className="w-full shadow-md sticky top-0 z-50">
        {/* Top Header */}
        <div className="bg-[#F0F0F2] text-sm text-gray-800 px-4 sm:px-6 lg:px-20 py-2 flex flex-col sm:flex-row justify-center sm:justify-center items-center sm:items-center">
          <div className="flex items-center gap-2">
            <FaEnvelope size={18} />
            <a href="mailto:immlaw@akahon.ca" className="text-black text-[17px]">
              immlaw@akahon.ca
            </a>
          </div>
          <span className="mx-4">|</span>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <FaPhone size={14} />
            <a href="tel:+16474500000" className="text-black text-[15px]">
              +1 (647) 450-0000
            </a>
          </div>
        </div>

        {/* Bottom Header */}
        <div className="bg-[#FBFBFD] px-4 sm:px-6 lg:px-20 py-3 z-0">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="w-[130px]">
              <img
                src="https://akahlon.ca/img/logo_01.png"
                alt="Kahlon Logo"
                className="w-[130px] absolute top-2"
              />
            </div>

            {/* Hamburger Icon */}
            <div className="block lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>


            {/* Desktop Nav */}
            <nav className="hidden lg:flex flex-wrap gap-4 text-[12px] font-normal text-gray-700 custom-nav">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className={`${
                    location.pathname === to ? "text-[#E0D583]" : "hover:text-[#E0D583]"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Nav */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden mt-4 flex flex-col gap-3 text-[13px] font-normal text-gray-700"
              >
                {navLinks.map(({ label, to }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className={`${
                      location.pathname === to ? "text-[#E0D583]" : "hover:text-[#E0D583]"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;
