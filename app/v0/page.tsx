import Header from "@/components/v0/V0Header";
import Hero from "@/components/v0/V0HeroSection";
import About from "@/components/v0/V0AboutSection";
import Portfolio from "@/components/v0/V0PortfolioSection";
import Skills from "@/components/v0/V0SkillsSection";
import Contact from "@/components/v0/v0ContactSection";

export default function Component() {
  return (
    <div className={`min-h-screen bg-white text-gray-900`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
