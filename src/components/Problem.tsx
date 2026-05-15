import { useEffect, useRef, useState } from "react";
import { AlertTriangle, FileSpreadsheet, CalendarX, BarChart3 } from "lucide-react";

export const Problem = () => {
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

  const pains = [
    {
      icon: CalendarX,
      title: "Annual blanket increases",
      description: "A single across-the-board percentage hides which prices were actually wrong — and which were already correct.",
    },
    {
      icon: FileSpreadsheet,
      title: "Scattered spreadsheets",
      description: "Pricing decisions live in tabs, exports, and inboxes. Nothing connects strategy to what changed and why.",
    },
    {
      icon: AlertTriangle,
      title: "Gut-feel decisions",
      description: "Without a clear process, pricing becomes political — uncomfortable conversations get deferred and margin slips.",
    },
    {
      icon: BarChart3,
      title: "Generic industry benchmarks",
      description: "Benchmarks ignore your practice's unique strategy, clientele, and product mix — making them unrelatable and often misleading at the individual practice level.",
    },
  ];

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pricing is too important to manage with guesswork.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Most veterinary practices rely on overly simple or unmanageably complex solutions, leaving real revenue and margin on the table every month.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          {pains.map((pain) => (
            <div
              key={pain.title}
              className="bg-card rounded-xl p-6 shadow-soft border border-border"
            >
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <pain.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{pain.title}</h3>
              <p className="text-muted-foreground">{pain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
