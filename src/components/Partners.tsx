import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";

interface PartnersProps {
  onCTAClick: () => void;
}

export const Partners = ({ onCTAClick }: PartnersProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-5xl mx-auto bg-card rounded-2xl shadow-medium border border-border p-10 md:p-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Handshake className="w-8 h-8 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                For advisors & partners
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                A trusted next step when pricing comes up.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Consultants, accountants, and buying groups working with veterinary practices can refer clients to VetLedger when pricing surfaces in profitability conversations — and stay in the loop on the work.
              </p>
            </div>
            <div className="md:justify-self-end">
              <Button variant="default" size="lg" onClick={onCTAClick}>
                Become a partner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
