import { useEffect, useRef, useState } from "react";
import teamImage from "@/assets/team-image.png";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pricing, managed like the profit lever it is.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pricing affects profit in every veterinary practice, but most owners don't manage it as a recurring discipline. The work is uncomfortable, time-consuming, and politically sensitive — so it gets reduced to broad annual increases, scattered spreadsheets, and gut-feel decisions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              VetLedger turns pricing from an occasional, emotional decision into a repeatable management process: set a strategy, surface the opportunities that matter most, approve changes with clear rationale, and monitor the result.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Built for independent and small multi-location practices on Pulse and ezyVet, VetLedger is practical, operator-friendly, and designed to fit how a busy practice actually runs — not another spreadsheet project.
            </p>
          </div>

          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="rounded-2xl overflow-hidden shadow-medium hover:shadow-hover transition-shadow duration-300">
              <img 
                src={teamImage} 
                alt="Veterinary team working together in modern clinic" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
