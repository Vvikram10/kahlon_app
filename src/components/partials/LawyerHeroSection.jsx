import React from 'react';
// import Header from './Header';
import { SlCalender } from 'react-icons/sl';
import { MdLocalPhone } from 'react-icons/md';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4,
    },
  },
};

const child = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  },
};

const animateText = (text) =>
  text.split('').map((char, index) => (
    <motion.span key={index} variants={child}>
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  ));
const AnimatedSubtitleWithUnderline = ({ text }) => {
  return (
    <div className="relative inline-block w-fit mb-6 pb-6">
      <motion.h6
        className="text-lg sm:text-xl md:text-4xl text-black relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {animateText(text)}
      </motion.h6>

      {/* Golden Animated Underline */}
      <motion.svg
        className="absolute left-0 bottom-0 pt-3 w-[70%] h-[40px] z-0"
        viewBox="0 0 600 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M10,65 Q597,10 580,60"
          stroke="#E0D583"
          strokeWidth="4"
          fill="transparent"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
};



const LawyerHeroSection = () => {
  return (
    <>
      {/* <Header /> */}
      <section className="bg-gradient-to-r from-[#D7EBF7] to-[#F5F7F9] pt-10 px-4 sm:px-6 lg:px-20 min-h-[85vh] flex items-center justify-center">
        {/* <div className="flex flex-col md:flex-row items-center justify-start gap-10"> */}
<div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10">

          {/* Image Section */}
          <div className="flex justify-center ml-auto">
            <img
              src="https://akahlon.ca/img/arshdeeps.webp"
              alt="Lawyer Arshdeep Singh Kahlon"
              className="w-full max-w-[330px] object-cover rounded-xl"
            />
          </div>

          {/* Content Section */}
          <div className="text-left">
            {/* ARSHDEEP SINGH */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {animateText("ARSHDEEP SINGH")}
            </motion.h1>

            {/* KAHLON */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {animateText("KAHLON")}
            </motion.h1>

            {/* Subtitle with animated golden underline */}
            <AnimatedSubtitleWithUnderline text="Canadian Immigration Lawyer" />

            <div className="flex flex-col sm:flex-row items-center md:items-start justify-start gap-4">
              <button className="bg-[#E0D583] hover:bg-white text-black px-6 py-3 rounded-full font-normal shadow-md transition-colors flex items-center gap-2">
                <SlCalender /> Contact Us Today
              </button>

              <a
                href="tel:+16474500000"
                className="bg-white border border-gray-700 px-6 py-3 flex items-center gap-2 rounded-full text-gray-900 font-normal hover:bg-[#E0D583] transition-colors"
              >
                <MdLocalPhone /> +1 (647) 450-0000
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LawyerHeroSection;
