import React from 'react';

const Contact = () => {
  return (
    <section className="flex items-center justify-center w-full py-10 px-4 bg-white">
      <div className="w-full max-w-4xl text-center bg-[#F5F5F5] rounded-lg shadow-md p-6 sm:p-10 md:p-15">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Contact Us Today
        </h1>
        <p className=" mb-6 text-gray-950 sm:text-lg">
          Schedule a consultation today and get expert legal advice tailored to your case.
        </p>
        <button
          className="inline-flex items-center justify-center gap-2 bg-[#E0D583] border-2 border-gray-950 px-15 py-3 rounded-full text-gray-900 font-medium hover:bg-[#E0D583] transition-colors duration-300"
        >
          +1 (647) 450-0000
        </button>
      </div>
    </section>
  );
};

export default Contact;
