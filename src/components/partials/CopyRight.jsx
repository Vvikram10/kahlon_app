import React from "react";
import { Link } from "react-router-dom";

const CopyRight = () => {
  return (
    <div className="bg-[#F0F0F2] text-center py-3 px-4 text-xs sm:text-sm overflow-hidden">
      <style>
        {`
          @keyframes shimmer {
            0% {
              background-position: -200% 0;
            }
            50% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }

          .shimmer-text {
            display: inline-block;
            background-image: linear-gradient(90deg, #FFD700 0%, #000 50%, #FFD700 100%);
            background-size: 200%;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
            animation: shimmer 20s linear infinite;
          }
        `}
      </style>

      <h1 className="mb-1 text-[16px] py-3 font-semibold">
        <Link
          to="https://intopdigital.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="shimmer-text"
        >
          POWERED AND MAINTAINED BY INTOPDIGITAL
        </Link>
      </h1>

      <p className="text-gray-950 text-[16px]">© Kahlon Law Office 2025.</p>
    </div>
  );
};

export default CopyRight;
