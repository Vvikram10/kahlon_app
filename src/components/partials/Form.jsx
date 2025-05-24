import React from "react";

export default function Form() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 overflow-x-hidden">
      <div className="w-full max-w-3xl bg-gradient-to-b from-[#D4EAF7] via-[#E7F2F8] to-[#F8F9F9] shadow-md p-4 sm:p-6 md:p-8">
        <h1 className="text-center text-xl sm:text-2xl md:text-2xl font-semibold mb-6 text-gray-800 break-words">
          WOULD YOU LIKE US TO GET IN TOUCH WITH YOU? <br />
          PLEASE LEAVE A MESSAGE.
        </h1>

        <div className="flex items-center justify-center gap-3 mb-6">
          <hr className="flex-grow border-gray-800" />
          <div className="inline-flex gap-2 rounded px-1 py-1 text-lg ">
            <img
              src="/images/home/logo_01_3icon.png"
              alt="Logo"
              className="h-8 w-auto object-contain"
            />
          </div>
          <hr className="flex-grow border-gray-800" />
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-0 sm:p-4">
          <div>
            <label htmlFor="firstName" className="block mb-1 font-normal">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full rounded-lg bg-white p-3 focus:outline-none"
              placeholder=""
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block mb-1 font-normal">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full rounded-lg bg-white p-3 focus:outline-none"
              placeholder=""
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-normal">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg bg-white p-3 focus:outline-none"
              placeholder=""
            />
          </div>

          <div>
            <label htmlFor="cellphone" className="block mb-1 font-normal">
              Cellphone Number:
            </label>
            <input
              type="tel"
              id="cellphone"
              className="w-full rounded-lg bg-white p-3 focus:outline-none"
              placeholder=""
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="subject" className="block mb-1 font-normal">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              className="w-full rounded-lg bg-white p-3 focus:outline-none"
              placeholder=""
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="matter" className="block mb-1 font-normal">
              Matter (Please do not share anything confidential):
            </label>
            <textarea
              id="matter"
              rows={2}
              className="w-full rounded-lg bg-white p-3 focus:outline-none"
              placeholder=""
            />
          </div>

          <div className="md:col-span-2 flex items-start gap-3">
            <input type="checkbox" id="agree" className="mt-1" />
            <label htmlFor="agree" className="text-sm">
              I agree to the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Terms of Service
              </a>
            </label>
          </div>

          <div className="md:col-span-2 flex justify-center mt-2">
            <button
              type="submit"
              className="bg-[#ADD8E6] text-white hover:text-gray-950 font-semibold px-6 py-3 rounded-lg hover:bg-[#FFFFFF] transition duration-300 w-full text-xl rounded-l-full rounded-r-full"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
