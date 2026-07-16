'use client';

import React, { useState } from 'react';

const DevCredits = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Transparent, C-shaped logo
  const devImage =
    'https://res.cloudinary.com/dn4trwbmw/image/upload/v1784184771/chanakyaLabs/bznzmcueazcq1duunyez.png';

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    // The main outer boundary. We use "group" here as the ultimate hover anchor.
    <div className="fixed bottom-2 right-2 z-50 group">
      <div className="relative flex items-center justify-center min-h-10 min-w-10">
        
        {/* Main Badge Link */}
        <a
          href="https://chanakya.labs.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center h-8 min-w-8
        
            rounded-full
            transition-all duration-300 ease-in-out
            overflow-hidden
            z-10
            /* The background, border, and shadow react to the outer 'group' hover */
            group-hover:bg-white/95 group-hover:backdrop-blur-sm group-hover:shadow-xl group-hover:border-gray-200
          "
        >
          {/* Logo container: Scales when the outer group is hovered */}
          <div className="w-7 h-7 flex items-center justify-center shrink-0 ml-0.5 transition-transform duration-300 group-hover:scale-105 group-hover:ml-1.5">
            <img
              src={devImage}
              alt="Chanakya Labs Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Expanding text container: Expands when the outer group is hovered */}
          <div className="overflow-hidden max-w-0 group-hover:max-w-[200px] transition-all duration-500 ease-in-out whitespace-nowrap flex items-center">
            <div className="flex flex-col leading-tight pl-2 pr-4 -mb-0.5">
              <span className="text-[8px] uppercase text-gray-600 font-semibold tracking-wider">
                Developed by
              </span>
              <span className="text-sm font-bold text-gray-900 -mt-1">
                Chanakya Labs
              </span>
            </div>
          </div>
        </a>

        {/* Close button – Only visible and clickable when the outer group is hovered */}
        <button
          onClick={handleClose}
          className="
            absolute -top-1 -right-1
            w-4 h-4
            bg-white border border-gray-300
            text-gray-800
            rounded-full
            flex items-center justify-center
            transition-all duration-300 ease-in-out
            hover:bg-gray-100 hover:text-black hover:border-gray-400 hover:scale-110
            focus:outline-none
            z-30
            shadow-sm
            opacity-0 pointer-events-none
            group-hover:opacity-100 group-hover:pointer-events-auto
          "
          aria-label="Close credits"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-2.5 h-2.5"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DevCredits;