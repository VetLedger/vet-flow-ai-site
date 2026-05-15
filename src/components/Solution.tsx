import { useEffect, useRef, useState } from "react";
import { Target, ListChecks, CheckCircle2, LineChart } from "lucide-react";

export const Solution = () => {
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

  const steps = [
    { icon: Target, title: "Strategy", description: "Define how your practice wants to price — and what you're protecting." },
    { icon: ListChecks, title: "Prioritized recommendations", description: "See the changes most worth reviewing first, not every line item." },
    { icon: MessageSquareText, title: "Rationale", description: "Every recommendation comes with a clear reason tied to your strategy." },
    { icon: CheckCircle2, title: "Approval", description: "Accept, edit, defer, or reject — with notes and a full decision history." },
    { icon: LineChart, title: "Monitoring", description: "Track revenue, margin, volume, and invoice impact after changes go live." },
  ];

  return (
    <section
      id="solution"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-subtle"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            A repeatable pricing management process.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            VetLedger gives your practice a single workflow for pricing — from strategy through monitoring — so decisions are intentional, defensible, and improving over time.
          </p>
        </div>

        {/* Placeholder for product workflow diagram / screenshot */}
        <div className={`max-w-5xl mx-auto mb-16 ${isVisible ? "animate-scale-in" : "opacity-0"}`}>
          <div className="rounded-2xl border-2 border-dashed border-border bg-card/50 aspect-[16/7] flex items-center justify-center">
            <div className="text-center px-6">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Visual placeholder</p>
              <p className="text-foreground font-medium">Workflow diagram or product screenshot of the pricing management process.</p>
            </div>
          </div>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          {steps.map((step, i) => (
            <div key={step.title} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-xs font-semibold text-primary mb-1">Step {i + 1}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
