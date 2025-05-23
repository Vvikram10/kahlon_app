import React from 'react';

const About = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#161616] via-[#646464] to-[#EFEFEF] py-16 px-4 mt-2 min-h-[85vh]">
      <div className="max-w-5xl mx-auto text-center md:text-center">
        <h2 className="text-2xl sm:text-2xl md:text-2xl font-bold text-white mb-6">
          WHY CHOOSE ARSHDEEP SINGH KAHLON AS YOUR IMMIGRATION LAWYER?
        </h2>

        <p className="text-white leading-relaxed mx-auto text-justify">
          Arshdeep Singh Kahlon is a distinguished Canadian immigration lawyer with over 14 years of legal experience, including seven years specializing in Canadian immigration law. He is the founder of Kahlon Law Office, where he has built a solid reputation for providing strategic, client-focused, and results-driven legal representation in complex immigration matters. Before practicing immigration law in Canada, Arshdeep was a trial court lawyer in India, honing his litigation skills in various legal areas. Arshdeep has successfully represented clients in high-stakes immigration cases, including inadmissibility matters, immigration appeals, misrepresentation bans, student deportations, and CBSA enforcement actions. His expertise spans across multiple legal domains such as:
        </p>
        <br />
        <p className="text-white leading-relaxed mx-auto text-justify">
        Known for his exceptional courtroom advocacy, Arshdeep has won every immigration court oral hearing during his first seven years of practice in Canada. He has represented clients before immigration courts and tribunals at all levels across Canada, securing victories in critical cases like Singh v. <strong>Canada (2024 FC 1369)</strong>, which dealt with verbal U.S. entry denials and their impact on Canadian immigration applications, particularly in flagpoling cases. Additionally, he won Rupal v. <strong>Canada (2024 FC 1371)</strong>, a precedent-setting case emphasizing the importance of webform submissions before visa decisions, and Kaur v. <strong>Canada (2023 FC 1470)</strong>, which overturned a five-year spousal sponsorship ban imposed during an interview.      
        </p>
      </div>
      <div className="flex items-center justify-center py-1">
        <button className="bg-[#EFEFEF] hover:bg-[#E0D583] border-2 border-black text-black px-6 py-3 rounded-full font-normal shadow-md transition-colors flex items-center gap-2">
        Learn More
        </button>

      </div>
    </section>
  );
};

export default About;
