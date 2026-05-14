import { useEffect, useRef, useState } from "react";
import { Search, Layers, Compass, Activity } from "lucide-react";

export const Capabilities = () => {
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

  const items = [
    {
      icon: Search,
      title: "Identify underpriced products and services",
      description: "Surface the items where your prices have drifted out of line with cost, value, and your strategy.",
    },
    {
      icon: Layers,
      title: "Prioritize the opportunities that matter",
      description: "Focus reviews on the changes with the most revenue and margin impact — instead of touching everything.",
    },
    {
      icon: Compass,
      title: "Reduce reliance on generic benchmarks",
      description: "Make decisions grounded in your practice's data, strategy, and history — not someone else's averages.",
    },
    {
      icon: Activity,
      title: "Monitor revenue, margin, and volume after changes",
      description: "See whether each pricing decision actually moved the numbers you care about — and adjust from there.",
    },
  ];

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What VetLedger helps you do
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Practical outcomes for the people actually running the practice — not another report to sift through.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className={`grid sm:grid-cols-2 gap-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            {items.map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-6 shadow-soft">
                <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Placeholder for product screenshot */}
          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="rounded-2xl border-2 border-dashed border-border bg-card/50 aspect-[4/5] flex items-center justify-center">
              <div className="text-center px-6">
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Visual placeholder</p>
                <p className="text-foreground font-medium">Product screenshot: prioritized opportunities list with rationale and impact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
