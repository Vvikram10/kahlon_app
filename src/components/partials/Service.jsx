import { Link } from "react-router-dom";

const ServiceCard = ({ title, icon, link }) => {
  return (
    <div className="bg-[#F5F5F5] hover:bg-gradient-to-b from-[#B1DDEE] to-[#DEEEF3] w-full h-full p-6 rounded-lg shadow-md text-center flex flex-col justify-between transition">
      <div>
        <div className="mb-4 py-3">
          <img src={icon} alt={`${title} icon`} className="mx-auto w-20 h-20" />
        </div>
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
      </div>
      <div>
     <Link
      to={link}
      className="text-yellow-500 pb-1 border-b-1 border-transparent hover:border-yellow-500 transition duration-200"
    >
      View Details
    </Link>

      </div>
    </div>
  );
};




const Services = () => {
const services = [
  {
    title: 'Immigration Consultations',
    icon: '/images/home/Judicial%20Review_7887_review.png',
    link: 'service/immigration-consultations',
  },
  {
    title: 'Judicial Review',
    icon: '/images/home/Writ%20of%20Mandamus_3815_copy-writing.png',
    link: 'service/judicial-review',
  },
  {
    title: 'Writ of Mandamus',
    icon: '/images/home/Stay%20of%20Removal_1514_delete%20(1).png',
    link: 'service/writ-of-mandamus',
  },
  {
    title: 'Stay of Removal',
    icon: '/images/home/Deferral%20Requests_4874_user-interface.png',
    link: 'service/stay-of-removal',
  },
  {
    title: 'Immigration Appeal',
    icon: '/images/home/Admissibility%20Hearings_8663_admission.png',
    link: 'service/immigration-appeal',
  },
  {
    title: 'Admissibility Hearing',
    icon: '/images/home/Immigration%20Division_3859_cell-division.png',
    link: 'service/admissibility-hearing',
  },
  {
    title: 'Deferral Request',
    icon: '/images/home/Immigration%20Appeals_6738_immigration.png',
    link: 'service/deferral-request',
  },
  {
    title: 'Immigration Division',
    icon: '/images/home/Immigration%20Bail_1028_bail.png',
    link: 'service/immigration-division',
  },
  {
    title: 'Immigration Bail',
    icon: '/images/home/A44%20Reports_4657_statistics.png',
    link: 'service/immigration-bail',
  },
  {
    title: 'A44 Report',
    icon: '/images/home/CBSA%20Call-In%20Notice_4304_warning.png',
    link: 'service/a44-report',
  },
  {
    title: 'CBSA Call-In Notice',
    icon: '/images/home/Criminal%20Rehabilitation_3060_scale.png',
    link: 'service/cbsa-call-in-notice',
  },
  {
    title: 'Criminal Rehabilitation',
    icon: '/images/home/Immigration%20Consequences%20letters_7454_consequences.png',
    link: 'service/criminal-rehabilitation',
  },
  {
    title: 'Immigration Consequences Letter',
    icon: '/images/home/Authorization%20to%20Return%20to%20Canada_9732_authorize.png',
    link: 'service/immigration-consequences-letter',
  },
  {
    title: 'Authorization to Return to Canada',
    icon: '/images/home/Authorization%20to%20Return%20to%20Canada_2210_contract%20(1).png',
    link: 'service/authorization-to-return-to-canada',
  },
   {
    title: "Procedural Fairness Letter",
    icon: "/images/home/Misrepresentation Matters_4071_condensed-matter.png",
    link: "service/procedural-fairness-letter",
  },
  {
    title: "Misrepresentation Matter",
    icon: "/images/home/Misrepresentation Matters_6102_book.png",
    link: "service/misrepresentation-matter",
  },
  {
    title: "Temporary Resident Permit",
    icon: "/images/home/Temporary Resident Permit_2561_Temporary Resident Permit.png",
    link: "service/temporary-resident-permit",
  },
  {
    title: "Refugee Claim",
    icon: "/images/home/Refugee Appeals_850_justice (1).png",
    link: "service/refugee-claim",
  },
  {
    title: "Refugee Appeal",
    icon: "/images/home/Refugee Appeals_1664_Untitled design.png",
    link: "service/refugee-appeal",
  },
  {
    title: "Pre-Risk Removal Assessment",
    icon: "/images/home/Pre-Risk Removal Assessment_7073_surveyor.png",
    link: "service/pre-risk-removal-assessment",
  },
  {
    title: "Cessation of Refugee Status",
    icon: "/images/home/Authorization to Return to Canada_6291_StudyPermitVisa.png",
    link: "service/cessation-of-refugee-status",
  },
  {
    title: "Reconsideration Request",
    icon: "/images/home/Reconsideration Request_2660_judgement.png",
    link: "service/reconsideration-request",
  },
  {
    title: "Visitor Visa",
    icon: "/images/home/Visitor Visa_4712_visitor-card.png",
    link: "service/visitor-visa",
  },
  {
    title: "eTA",
    icon: "/images/home/eTAs_1233_tickets_kahklon.png",
    link: "service/eta",
  },
  {
    title: "Super Visa",
    icon: "/images/home/Super Visa_5540_VisitorVisa.png",
    link: "service/super-visa",
  },
  {
    title: "Study Permit",
    icon: "/images/home/Study Permit_6970_affirmed.png",
    link: "service/study-permit",
  },
  {
    title: "Extension of Stay Application (Visitor Record)",
    icon: "/images/home/Extension of Stay Applications (Visitor Record)_9304_extension.png",
    link: "service/extension-of-stay-application-visitor-record",
  },
  {
    title: "Restoration of Status",
    icon: "/images/home/Restoration of Status_3426_Resident.png",
    link: "service/restoration-of-status",
  },
  {
    title: "Intra-company Transfer Work Permit",
    icon: "/images/home/Intra-company Transfer Work Permits_8078_briefcase.png",
    link: "service/intra-company-transfer-work-permit",
  },
  {
    title: "C11 LMIA-exempt Work Permit",
    icon: "/images/home/C11 LMIA-exempt Work Permits_4347_regulation.png",
    link: "service/c11-lmia-exempt-work-permit",
  },
  {
    title: "T13 LMIA-exempt Work Permit",
    icon: "/images/home/T13 LMIA-exempt Work Permits_9773_immigration-law.png",
    link: "service/t13-lmia-exempt-work-permit",
  },
  {
    title: "C16 Francophone Mobility Work Permit",
    icon: "/images/home/Francophone mobility (C16) Work Permits_5796_mobility (1).png",
    link: "service/c16-francophone-mobility-work-permit",
  },
  {
    title: "International Experience Class Work Permit",
    icon: "/images/home/International Experience Class Work Permits_8257_earth.png",
    link: "service/international-experience-class-work-permit",
  },
  {
    title: "Post-graduation Work Permit (PGWP)",
    icon: "/images/home/Post-graduation Work Permit (PGWPs)_6329_admission.png",
    link: "service/post-graduation-work-permit-pgwp",
  },
  {
    title: "LMIA-based Work Permit",
    icon: "/images/home/LMIA-based Work Permit_3384_authorize.png",
    link: "service/lmia-based-work-permit",
  },
    {
    title: "Spousal Open Work Permit",
    icon: "/images/home/Spousal Open Work Permit_7003_partners (1).png",
    link: "service/spousal-open-work-permit",
  },
  {
    title: "Vulnerable Open Work Permit",
    icon: "/images/home/Vulnerable Open Work Permit_2694_threat.png",
    link: "service/vulnerable-open-work-permit",
  },
    {
    title: "Religious Worker Visa",
    icon: "/images/home/Religious Worker Visa_4764_folded.png",
    link: "service/religious-worker-visa",
  },
  {
    title: "Bridging Open Work Permit",
    icon: "/images/home/Bridging Open Work Permit_6577_bridge (1).png",
    link: "service/bridging-open-work-permit",
  },
  {
    title: "Other Work Permits",
    icon: "/images/home/Other Work Permits_1410_menu (1).png",
    link: "service/other-work-permits",
  },
  {
    title: "LMIA Application",
    icon: "/images/home/LMIA Applications_1858_home.png",
    link: "service/lmia-application",
  },
  {
    title: "Employer Compliance Inspection",
    icon: "/images/home/Employer Compliance Inspections_6731_compliance-manager.png",
    link: "service/employer-compliance-inspection",
  },
  {
    title: "Startup Visa",
    icon: "/images/home/Startup Visa_8779_startup (1).png",
    link: "service/startup-visa",
  },
  {
    title: "Business Immigration",
    icon: "/images/home/Business Immigration_852_illegal.png",
    link: "service/business-immigration",
  },
  {
    title: "Self-employed Person-Cultural Activities or Athletics",
    icon: "/images/home/Self-employed Person – Cultural Activities or Athletics_2515_nominee.png",
    link: "service/self-employed-person-cultural-activities-or-athletics",
  },
  {
    title: "PR Card Renewal",
    icon: "/images/home/PR Card Renewal_531_card.png",
    link: "service/pr-card-renewal",
  },
  {
    title: "Permanent Resident Travel Document (PRTD) Application",
    icon: "/images/home/Permanent Resident Travel Document (PRTD)applications_3673_home.png",
    link: "service/permanent-resident-travel-document-prtd-application",
  },
  {
    title: "Residency Obligation",
    icon: "/images/home/Residency Obligations_1653_resident (1).png",
    link: "service/residency-obligation",
  },
  {
    title: "Citizenship Application",
    icon: "/images/home/Citizenship applications_4167_id-card.png",
    link: "service/citizenship-application",
  },
  {
    title: "Francophone Immigration",
    icon: "/images/home/Francophone Immigration_1592_immigration-officer.png",
    link: "service/francophone-immigration",
  },
  {
    title: "Spousal Sponsorship Application",
    icon: "/images/home/Spousal Sponsorship Applications_6686_extension.png",
    link: "service/spousal-sponsorship-application",
  },
  {
    title: "Parents and Grandparents program",
    icon: "/images/home/Parents and Grandparents program_6078_delete (1).png",
    link: "service/parents-and-grandparents-program",
  },
  {
    title: "Group of Five Refugee Sponsorship",
    icon: "/images/home/Other Family Sponsorships_891_family.png",
    link: "service/group-of-five-refugee-sponsorship",
  },
  {
    title: "Other Family Sponsorships",
    icon: "/images/home/Express Entry_5418_StudyPermitVisa.png",
    link: "service/other-family-sponsorships",
  },
  {
    title: "Intercountry Adoption and Immigration",
    icon: "/images/home/Intercountry Adoptions and Immigrations_1227_Untitled design.png",
    link: "service/intercountry-adoption-and-immigration",
  },
  {
    title: "Express Entry",
    icon: "/images/home/Express Entry_9010_express_entry.png",
    link: "service/express-entry",
  },
  {
    title: "Atlantic Immigration Program",
    icon: "/images/home/Atlantic Immigration Program_5592_Untitled design (3).png",
    link: "service/atlantic-immigration-program",
  },
  {
    title: "Agri Food Pilot Program",
    icon: "/images/home/Agri Food Pilot Program_6182_Untitled design.png",
    link: "service/agri-food-pilot-program",
  },
  {
    title: "Rural and Francophone Mobility Immigration Pilot",
    icon: "/images/home/Rural and Francophone Mobility Immigration Pilots_7291_Rural and Francophone Mobility Immigration Pilots_1310_countryside.png",
    link: "service/rural-and-francophone-mobility-immigration-pilot",
  },
  {
    title: "Caregiver Pilot",
    icon: "/images/home/Caregiver Pilots_3550_Untitled design (1).png",
    link: "service/caregiver-pilot",
  },
  {
    title: "Permanent Residence Pathway for Hong Kong Residents",
    icon: "/images/home/Provincial Nominee Program Applications_6902_nominee.png",
    link: "service/permanent-residence-pathway-for-hong-kong-residents",
  },
  {
    title: "Permanent Residence for Families of Victims of Flight PS752",
    icon: "/images/home/H&C Based PR Application_772_play.png",
    link: "service/permanent-residence-for-families-of-victims-of-flight-ps752",
  },
  {
    title: "Provincial Nominee Program Application",
    icon: "/images/home/Notarization service_4313_law.png",
    link: "service/provincial-nominee-program-application",
  },
  {
    title: "H&C Based PR Application",
    icon: "/images/home/H&C Based PR Application_5870_Untitled design (2).png",
    link: "service/hc-based-pr-application",
  },
];

  return (
<div className="w-full bg-white py-8">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Title */}
    <div className="flex justify-center items-center mb-8">
      <div className="relative" style={{ width: '190px', height: '30px' }}>
        <img
          src="/images/home/title_bg.png"
          alt="Gold Brush Stroke"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <h4 className="relative text-[28px] font-semibold text-black flex justify-center items-center h-full">
          OUR SERVICES
        </h4>
      </div>
    </div>

    {/* Cards Container */}
    <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
      {services.map((service, index) => (
        <div key={index} className="w-full sm:w-[45%] lg:w-[20%]">
          <ServiceCard {...service} />
        </div>
      ))}
    </div>
  </div>
</div>


  );
};

export default Services;