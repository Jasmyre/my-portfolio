import ContactSection from "@/components/home/contact-section/ContactSection";
import HeroSection from "@/components/home/hero-section/HeroSection";
import PortfolioSection from "@/components/home/portfolio-section/PortfolioSection";
import SolutionSection from "@/components/home/solution-section/SolutionSection";
import AboutSection from "../components/home/about-section/AboutSection";
import FooterSection from "../components/home/footer-section/FooterSection";
import Header from "@/components/template/header/Header";

const Home = () => {
  return (
    <main className="main w-full" id="home">
      <Header>Jasmyre Lanuza</Header>
      <HeroSection />
      <AboutSection />
      <SolutionSection />
      <PortfolioSection />
      <ContactSection />
      <FooterSection>Jasmyre Lanuza</FooterSection>
    </main>
  );
};

export default Home;
