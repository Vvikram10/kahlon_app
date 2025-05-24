// import React from 'react';
// import { Link } from 'react-router-dom';

// const services = [
//   { name: "Immigration Consultations", link: "service/immigration-consultations" },
//   { name: "Judicial Review", link: "service/judicial-review" },
//   { name: "Writ of Mandamus", link: "service/writ-of-mandamus" },
//   { name: "Stay of Removal", link: "service/stay-of-removal" },
//   { name: "Deferral Request", link: "service/deferral-request" },
//   { name: "Immigration Appeal", link: "service/immigration-appeal" },
//   { name: "Admissibility Hearing", link: "service/admissibility-hearing" },
//   { name: "Immigration Division", link: "service/immigration-division" },
//   { name: "Immigration Bail", link: "service/immigration-bail" },
//   { name: "A44 Report", link: "service/a44-report" },
//   { name: "CBSA Call-In Notice", link: "service/cbsa-call-in-notice" },
//   { name: "Criminal Rehabilitation", link: "service/criminal-rehabilitation" },
//   { name: "Immigration Consequences Letter", link: "service/immigration-consequences-letter" },
//   { name: "Authorization to Return to Canada", link: "service/authorization-to-return-to-canada" },
//   { name: "Procedural Fairness Letter", link: "service/procedural-fairness-letter" },
//   { name: "Misrepresentation Matter", link: "service/misrepresentation-matter" },
//   { name: "Temporary Resident Permit", link: "service/temporary-resident-permit" },
//   { name: "Refugee Claim", link: "service/refugee-claim" },
//   { name: "Refugee Appeal", link: "service/refugee-appeal" },
//   { name: "Pre-Risk Removal Assessment", link: "service/pre-risk-removal-assessment" },
//   { name: "Cessation of Refugee Status", link: "service/cessation-of-refugee-status" },
//   { name: "Reconsideration Request", link: "service/reconsideration-request" },
//   { name: "Visitor Visa", link: "service/visitor-visa" },
//   { name: "eTA", link: "service/eta" },
//   { name: "Super Visa", link: "service/super-visa" },
//   { name: "Study Permit", link: "service/study-permit" },
//   { name: "Extension of Stay Application (Visitor Record)", link: "service/extension-of-stay-application-visitor-record" },
//   { name: "Restoration of Status", link: "service/restoration-of-status" },
//   { name: "Intra-company Transfer Work Permit", link: "service/intra-company-transfer-work-permit" },
//   { name: "C11 LMIA-exempt Work Permit", link: "service/c11-lmia-exempt-work-permit" },
//   { name: "T13 LMIA-exempt Work Permit", link: "service/t13-lmia-exempt-work-permit" },
//   { name: "C16 Francophone Mobility Work Permit", link: "service/c16-francophone-mobility-work-permit" },
//   { name: "International Experience Class Work Permit", link: "service/international-experience-class-work-permit" },
//   { name: "Post-graduation Work Permit (PGWP)", link: "service/post-graduation-work-permit-pgwp" },
//   { name: "LMIA-based Work Permit", link: "service/lmia-based-work-permit" },
//   { name: "Spousal Open Work Permit", link: "service/spousal-open-work-permit" },
//   { name: "Vulnerable Open Work Permit", link: "service/vulnerable-open-work-permit" },
//   { name: "Religious Worker Visa", link: "service/religious-worker-visa" },
//   { name: "Bridging Open Work Permit", link: "service/bridging-open-work-permit" },
//   { name: "Other Work Permits", link: "service/other-work-permits" },
//   { name: "LMIA Application", link: "service/lmia-application" },
//   { name: "Employer Compliance Inspection", link: "service/employer-compliance-inspection" },
//   { name: "Startup Visa", link: "service/startup-visa" },
//   { name: "Business Immigration", link: "service/business-immigration" },
//   { name: "Self-employed Person-Cultural Activities or Athletics", link: "service/self-employed-person-cultural-activities-or-athletics" },
//   { name: "PR Card Renewal", link: "service/pr-card-renewal" },
//   { name: "Permanent Resident Travel Document (PRTD) Application", link: "service/permanent-resident-travel-document-prtd-application" },
//   { name: "Residency Obligation", link: "service/residency-obligation" },
//   { name: "Citizenship Application", link: "service/citizenship-application" },
//   { name: "Francophone Immigration", link: "service/francophone-immigration" },
//   { name: "Spousal Sponsorship Application", link: "service/spousal-sponsorship-application" },
//   { name: "Parents and Grandparents Program", link: "service/parents-and-grandparents-program" },
//   { name: "Group of Five Refugee Sponsorship", link: "service/group-of-five-refugee-sponsorship" },
//   { name: "Other Family Sponsorships", link: "service/other-family-sponsorships" },
//   { name: "Intercountry Adoption and Immigration", link: "service/intercountry-adoption-and-immigration" },
//   { name: "Express Entry", link: "service/express-entry" },
//   { name: "Atlantic Immigration Program", link: "service/atlantic-immigration-program" },
//   { name: "Agri Food Pilot Program", link: "service/agri-food-pilot-program" },
//   { name: "Rural and Francophone Mobility Immigration Pilot", link: "service/rural-and-francophone-mobility-immigration-pilot" },
//   { name: "Caregiver Pilot", link: "service/caregiver-pilot" },
//   { name: "Permanent Residence Pathway for Hong Kong Residents", link: "service/permanent-residence-pathway-for-hong-kong-residents" },
//   { name: "Permanent Residence for Families of Victims of Flight PS752", link: "service/permanent-residence-for-families-of-victims-of-flight-ps752" },
//   { name: "Provincial Nominee Program Application", link: "service/provincial-nominee-program-application" },
//   { name: "H&C Based PR Application", link: "service/hc-based-pr-application" },
// ];
// const FooterBottom = () => {
//   return (
//     <div className="bg-[#F0F0F2] pb-1 px-3 sm:px-6 lg:px-12">
//       <div className="max-w-screen-xl mx-auto">
//         <h2 className="text-sm font-semibold mb-2 text-gray-900">Services</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-0 gap-x-2 text-start">
//           {services.map((service, index) => (
//             <div key={index} className="py-[2px]">
//               <Link
//                 to={service.link}
//                 className="text-gray-700 text-[10px] sm:text-xs leading-[1.2] transition-colors duration-200"
//               >
//                 {service.name}
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };



// export default FooterBottom;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";

const services = [
  { name: "Immigration Consultations", link: "service/immigration-consultations" },
  { name: "Judicial Review", link: "service/judicial-review" },
  { name: "Writ of Mandamus", link: "service/writ-of-mandamus" },
  { name: "Stay of Removal", link: "service/stay-of-removal" },
  { name: "Deferral Request", link: "service/deferral-request" },
  { name: "Immigration Appeal", link: "service/immigration-appeal" },
  { name: "Admissibility Hearing", link: "service/admissibility-hearing" },
  { name: "Immigration Division", link: "service/immigration-division" },
  { name: "Immigration Bail", link: "service/immigration-bail" },
  { name: "A44 Report", link: "service/a44-report" },
  { name: "CBSA Call-In Notice", link: "service/cbsa-call-in-notice" },
  { name: "Criminal Rehabilitation", link: "service/criminal-rehabilitation" },
  { name: "Immigration Consequences Letter", link: "service/immigration-consequences-letter" },
  { name: "Authorization to Return to Canada", link: "service/authorization-to-return-to-canada" },
  { name: "Procedural Fairness Letter", link: "service/procedural-fairness-letter" },
  { name: "Misrepresentation Matter", link: "service/misrepresentation-matter" },
  { name: "Temporary Resident Permit", link: "service/temporary-resident-permit" },
  { name: "Refugee Claim", link: "service/refugee-claim" },
  { name: "Refugee Appeal", link: "service/refugee-appeal" },
  { name: "Pre-Risk Removal Assessment", link: "service/pre-risk-removal-assessment" },
  { name: "Cessation of Refugee Status", link: "service/cessation-of-refugee-status" },
  { name: "Reconsideration Request", link: "service/reconsideration-request" },
  { name: "Visitor Visa", link: "service/visitor-visa" },
  { name: "eTA", link: "service/eta" },
  { name: "Super Visa", link: "service/super-visa" },
  { name: "Study Permit", link: "service/study-permit" },
  { name: "Extension of Stay Application (Visitor Record)", link: "service/extension-of-stay-application-visitor-record" },
  { name: "Restoration of Status", link: "service/restoration-of-status" },
  { name: "Intra-company Transfer Work Permit", link: "service/intra-company-transfer-work-permit" },
  { name: "C11 LMIA-exempt Work Permit", link: "service/c11-lmia-exempt-work-permit" },
  { name: "T13 LMIA-exempt Work Permit", link: "service/t13-lmia-exempt-work-permit" },
  { name: "C16 Francophone Mobility Work Permit", link: "service/c16-francophone-mobility-work-permit" },
  { name: "International Experience Class Work Permit", link: "service/international-experience-class-work-permit" },
  { name: "Post-graduation Work Permit (PGWP)", link: "service/post-graduation-work-permit-pgwp" },
  { name: "LMIA-based Work Permit", link: "service/lmia-based-work-permit" },
  { name: "Spousal Open Work Permit", link: "service/spousal-open-work-permit" },
  { name: "Vulnerable Open Work Permit", link: "service/vulnerable-open-work-permit" },
  { name: "Religious Worker Visa", link: "service/religious-worker-visa" },
  { name: "Bridging Open Work Permit", link: "service/bridging-open-work-permit" },
  { name: "Other Work Permits", link: "service/other-work-permits" },
  { name: "LMIA Application", link: "service/lmia-application" },
  { name: "Employer Compliance Inspection", link: "service/employer-compliance-inspection" },
  { name: "Startup Visa", link: "service/startup-visa" },
  { name: "Business Immigration", link: "service/business-immigration" },
  { name: "Self-employed Person-Cultural Activities or Athletics", link: "service/self-employed-person-cultural-activities-or-athletics" },
  { name: "PR Card Renewal", link: "service/pr-card-renewal" },
  { name: "Permanent Resident Travel Document (PRTD) Application", link: "service/permanent-resident-travel-document-prtd-application" },
  { name: "Residency Obligation", link: "service/residency-obligation" },
  { name: "Citizenship Application", link: "service/citizenship-application" },
  { name: "Francophone Immigration", link: "service/francophone-immigration" },
  { name: "Spousal Sponsorship Application", link: "service/spousal-sponsorship-application" },
  { name: "Parents and Grandparents Program", link: "service/parents-and-grandparents-program" },
  { name: "Group of Five Refugee Sponsorship", link: "service/group-of-five-refugee-sponsorship" },
  { name: "Other Family Sponsorships", link: "service/other-family-sponsorships" },
  { name: "Intercountry Adoption and Immigration", link: "service/intercountry-adoption-and-immigration" },
  { name: "Express Entry", link: "service/express-entry" },
  { name: "Atlantic Immigration Program", link: "service/atlantic-immigration-program" },
  { name: "Agri Food Pilot Program", link: "service/agri-food-pilot-program" },
  { name: "Rural and Francophone Mobility Immigration Pilot", link: "service/rural-and-francophone-mobility-immigration-pilot" },
  { name: "Caregiver Pilot", link: "service/caregiver-pilot" },
  { name: "Permanent Residence Pathway for Hong Kong Residents", link: "service/permanent-residence-pathway-for-hong-kong-residents" },
  { name: "Permanent Residence for Families of Victims of Flight PS752", link: "service/permanent-residence-for-families-of-victims-of-flight-ps752" },
  { name: "Provincial Nominee Program Application", link: "service/provincial-nominee-program-application" },
  { name: "H&C Based PR Application", link: "service/hc-based-pr-application" },
];

const FooterBottom = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#F0F0F2] pb-1">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Mobile Dropdown Header */}
        <div
          className="flex justify-between items-center sm:hidden py-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <h2 className="text-sm font-semibold text-gray-900">Services</h2>
          <FaChevronDown
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Desktop Title */}
        <h2 className="hidden sm:block text-sm font-semibold mb-2 text-gray-900">
          Services
        </h2>

        {/* Grid List */}
        <div
          className={`${
            open ? "block" : "hidden"
          } sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-1 gap-x-2 text-start`}
        >
          {services.map((service, index) => (
            <div key={index} className="py-[2px]">
              <Link
                to={service.link}
                className="text-gray-700 text-[10px] sm:text-xs leading-[1.2] hover:text-blue-600"
              >
                {service.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
