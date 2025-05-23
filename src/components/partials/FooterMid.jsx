import React from "react";
import {
  FaFacebookF ,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FooterMid = () => {
  return (
    <footer className="bg-[#F0F0F2] w-full py-4 px-4 sm:px-6 lg:px-12 text-sm text-gray-800">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-3">
        
        {/* Logo */}
        <div>
          <div className="mb-4">
            <img src="https://akahlon.ca/img/logo_01.png" alt="Logo" className="w-32" />
          </div>
        </div>

        {/* Menu */}
        <div>
          <h2 className="text-sm font-normal text-gray-950 mb-4">Menu</h2>
          <ul className="space-y-2 text-[10px]">
            <li><Link to="about.php" className="">About</Link></li>
            <li><Link to="why-choose-us.php" className="">Why Choose Us</Link></li>
            <li><Link to="our-successful-court-cases.php" className="">Successful Court Cases</Link></li>
            <li><Link to="how-to-contact-us.php" className="">Contact Us</Link></li>
            <li><Link to="free_consultation.php" className="">Free Consultation</Link></li>
            <li><Link to="languages.php" className="">Languages</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-sm font-normal text-gray-950 mb-4">Contact Info</h2>
          <p className="mb-2 text-[13px]"><strong>Phone:</strong> <Link to="tel:+6474500000" className="text-[13px]">+1 (647) 450-0000</Link></p>
          <p className="mb-2 text-[13px]"><strong>Email:</strong> <Link to="mailto:Immlaw@akahlon.ca" className="text-[13px]">immlaw@akahlon.ca</Link></p>
          <p className="mb-2 text-[13px]">
            <strong>Address:</strong>{" "}
            <Link
              to="https://www.google.com/maps?q=200-1B+Conestoga+Drive,+Brampton,+Ontario+L6Z+4N5,+Canada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px]"
            >
              200-1B Conestoga Drive, Brampton, Ontario L6Z 4N5, Canada
            </Link>
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-sm font-normal text-gray-950 mb-4">Follow Us</h2>
          <ul className="flex space-x-4">
            <li>
              <Link to="https://www.facebook.com/arshdeepkahlonlawyer" target="_blank" rel="noopener noreferrer">
                <FaFacebookF  className="text-sm hover:text-blue-600" />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/imm.lawyer.kahlon" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-sm hover:text-pink-500" />
              </Link>
            </li>
            <li>
              <Link to="https://ca.linkedin.com/in/arshdeepkahlonlawyer" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-sm hover:text-blue-800" />
              </Link>
            </li>
            <li>
              <Link to="mailto:Immlaw@akahlon.ca">
                <FaEnvelope className="text-sm hover:text-red-500" />
              </Link>
            </li>
            <li>
              <Link to="tel:+6474500000">
                <FaPhone className="text-sm hover:text-green-600" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
<hr className="text-gray-400" />

    </footer>
  );
};

export default FooterMid;
