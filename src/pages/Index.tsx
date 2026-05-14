import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Capabilities } from "@/components/Capabilities";
import { WhyVet } from "@/components/WhyVet";
import { Partners } from "@/components/Partners";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Header onCTAClick={scrollToContact} />
      <Hero onCTAClick={scrollToContact} />
      <Problem />
      <Solution />
      <Capabilities />
      <WhyVet />
      <Partners onCTAClick={scrollToContact} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
