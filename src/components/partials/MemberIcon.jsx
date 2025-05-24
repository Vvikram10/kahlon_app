import React from 'react';

const MemberIcon = () => {
  return (
    <section className="w-full py-10 bg-white">
      {/* Membership title with brush background */}
      <div className="flex justify-center items-center mb-8">
        <div className="relative" style={{ width: '190px', height: '30px' }}>
          <img
            src="/images/home/title_bg.png"
            alt="Gold Brush Stroke"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <h4 className="relative text-[28px] font-semibold text-gray-950 flex justify-center items-center h-full">
            MEMBERSHIP
          </h4>
        </div>
      </div>

      {/* Logos section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4 max-w-4xl mx-auto items-center justify-items-center">
        {[
          {
            href: 'https://lso.ca/home',
            src: '/images/home/Law_Society_of_Ontario_logo.svg.webp',
            alt: 'Law Society of Ontario',
          },
          {
            href: 'https://cila.co/',
            src: '/images/home/cila.webp',
            alt: 'CILA',
          },
          {
            href: 'https://www.cba.org/home/',
            src: '/images/home/CBA_eng_frBW.webp',
            alt: 'Canadian Bar Association',
          },
          {
            href: 'https://www.oba.org/home/',
            src: '/images/home/logo_oba.webp',
            alt: 'Ontario Bar Association',
          },
          {
            href: 'https://sabatoronto.com/',
            src: '/images/home/sabat.webp',
            alt: 'SABA Toronto',
          },
        ].map(({ href, src, alt }) => (
          <a href={href} target="_blank" rel="noopener noreferrer" key={alt}>
            <div className="transition-transform transform hover:scale-110 duration-300">
              <img
                src={src}
                alt={alt}
                className="w-35 h-35 object-contain"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MemberIcon;
