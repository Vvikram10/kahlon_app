import About from "./About";
import Contact from "./Contact";
import CopyRight from "./CopyRight";
import FooterBottom from "./FooterBottom";
import FooterMid from "./FooterMid";
import FooterTop from "./FooterTop";
import Form from "./Form";
import Header from "./Header";
import LawyerHeroSection from "./LawyerHeroSection";
import LeaveMessage from "./LeaveMessage";
import MemberIcon from "./MemberIcon";
import Services from "./Service";


const HomePage = () => {
  return (
    <>
      <Header />
      <LawyerHeroSection />
      <About />
      <Services />
      <Form />
      <Contact />
      <MemberIcon />
      <FooterTop />
      <FooterMid />
      <FooterBottom />
      <CopyRight />
      <LeaveMessage />
    </>
  );
};

export default HomePage;
