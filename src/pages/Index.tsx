import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TeamMembers } from "@/components/TeamMembers";
import { ProductHighlight } from "@/components/ProductHighlight";
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
    // Handle navigation from other pages with scroll target
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Small delay to ensure the page has rendered
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
      <About />
      <TeamMembers />
      <ProductHighlight onCTAClick={scrollToContact} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
