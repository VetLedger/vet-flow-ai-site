import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import vetledgerLogo from "@/assets/vetledger-logo.png";

interface HeaderProps {
  onCTAClick: () => void;
}

export const Header = ({ onCTAClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleNavigateToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
            <img src={vetledgerLogo} alt="VetLedger Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-foreground font-serif">
              VetLedger
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigateToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => handleNavigateToSection("product")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Product
            </button>
            <button
              onClick={() => handleNavigateToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Button variant="hero" size="sm" onClick={onCTAClick}>
              Join Waitlist
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
