import { useEffect, useRef, useState } from "react";
import jonsonHeadshot from "@/assets/jonson-headshot.jpg";
import ericHeadshot from "@/assets/eric-headshot.jpg";

export const TeamMembers = () => {
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

  const teamMembers = [
    {
      name: "Jonson Chatterley",
      title: "Founder & Director of Operations",
      image: jonsonHeadshot,
      bio: "Jonson brings over 15 years of experience in operational leadership and data analytics to VetLedger. His background spans inventory optimization, purchasing, and strategic planning for global organizations, where he built data-driven systems connecting operations to financial outcomes. At VetLedger, Jonson focuses on process design and performance visibility—helping veterinary businesses make better financial decisions through clear, actionable data. His analytical approach and operational insight ensure VetLedger's platform delivers measurable efficiency and control."
    },
    {
      name: "Eric Martin",
      title: "Founder & Director of Technology",
      image: ericHeadshot,
      bio: "Eric is a technology leader with more than two decades of experience guiding engineering, product, and AI initiatives across startups and enterprise organizations. His expertise combines deep technical knowledge with human-centered design principles to create systems that are both intelligent and intuitive. At VetLedger, Eric leads platform architecture and AI innovation—building automation and data intelligence solutions that simplify complex financial and operational processes for veterinary practices. His experience in AI, automation, and scalable system design drives VetLedger's commitment to delivering secure, reliable, and forward-looking technology."
    }
  ];

  return (
    <section 
      id="team" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-subtle"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Team Members
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className={`bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-medium">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg text-primary font-medium mb-4">
                    {member.title}
                  </p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-left">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
