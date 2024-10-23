import React from "react";
import Header from "@/components/template/header/Header";
import HeroSection from "@/components/home/hero-section/HeroSection";
import AboutSection from "../components/home/about-section/AboutSection";
import SolutionSection from "@/components/home/solution-section/SolutionSection";
import PortfolioSection from "@/components/home/portfolio-section/PortfolioSection";
import ContactSection from '@/components/home/contact-section/ContactSection';
import FooterSection from '../components/home/footer-section/FooterSection';


const Home = () => {
  return (
    <main className="main" id="home">
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
