import { useEffect, useRef, useState } from "react";
import { Stethoscope, Clock, Users } from "lucide-react";

export const WhyVet = () => {
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

  const points = [
    {
      icon: Stethoscope,
      title: "Built for integration with your practice management system",
      description: "Designed to work alongside the PIMS your team already uses every day.",
    },
    {
      icon: Clock,
      title: "Fits a busy operator's schedule",
      description: "Short, focused review sessions instead of multi-day spreadsheet projects nobody has time for.",
    },
    {
      icon: Users,
      title: "Clear decisions, not more data",
      description: "Owners and practice managers get a defensible answer they can act on — and explain to the team.",
    },
  ];

  return (
    <section
      id="why-vet"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-subtle"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why it fits veterinary workflows
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            VetLedger is built for the operators inside the practice — owners and practice managers who need clear decisions, not another spreadsheet to interpret.
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 max-w-5xl mx-auto ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          {points.map((point) => (
            <div key={point.title} className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
