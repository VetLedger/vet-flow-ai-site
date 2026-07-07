import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  practice: z.string().trim().max(150).optional(),
  pims: z.string().trim().min(1, "Please select your PIMS").max(50),
  locations: z.string().trim().min(1, "Please select location count").max(20),
  pricingPain: z.string().trim().min(1, "Please share your biggest pricing challenge").max(1000),
  message: z.string().trim().max(1000).optional(),
});

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    practice: "",
    pims: "",
    locations: "",
    pricingPain: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validated = contactSchema.parse(formData);

      const composedMessage = [
        `Practice: ${validated.practice || "—"}`,
        `PIMS: ${validated.pims}`,
        `Locations: ${validated.locations}`,
        `Pricing pain: ${validated.pricingPain}`,
        validated.message ? `Notes: ${validated.message}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      const response = await fetch(
        `https://mxujtjaffjmrnpqhmdvj.supabase.co/functions/v1/send-contact-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: validated.name,
            email: validated.email,
            message: composedMessage,
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to send message");
      }

      toast.success("You're on the waitlist! We'll be in touch shortly.");
      setFormData({
        name: "",
        email: "",
        practice: "",
        pims: "",
        locations: "",
        pricingPain: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-subtle"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 max-w-2xl mx-auto ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Connect with us
          </h2>
          <p className="text-xl text-muted-foreground">
            Tell us a little about your practice and we'll be in touch about early access.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className={`bg-card rounded-2xl shadow-medium p-8 md:p-12 ${isVisible ? "animate-scale-in" : "opacity-0"}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} required className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@practice.com" value={formData.email} onChange={handleChange} required className="rounded-lg" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="practice">Practice name <span className="text-muted-foreground font-normal">(optional)</span></Label>
                <Input id="practice" name="practice" type="text" placeholder="e.g. Riverside Veterinary Hospital" value={formData.practice} onChange={handleChange} className="rounded-lg" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pims">PIMS</Label>
                  <Select value={formData.pims} onValueChange={(v) => setFormData((p) => ({ ...p, pims: v }))}>
                    <SelectTrigger id="pims" className="rounded-lg">
                      <SelectValue placeholder="Select your PIMS" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pulse">Pulse</SelectItem>
                      <SelectItem value="ezyVet">ezyVet</SelectItem>
                      <SelectItem value="Cornerstone">Cornerstone</SelectItem>
                      <SelectItem value="AVImark">AVImark</SelectItem>
                      <SelectItem value="ImproMed">ImproMed</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="locations"># of locations</Label>
                  <Select value={formData.locations} onValueChange={(v) => setFormData((p) => ({ ...p, locations: v }))}>
                    <SelectTrigger id="locations" className="rounded-lg">
                      <SelectValue placeholder="Select location count" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2-3">2–3</SelectItem>
                      <SelectItem value="4-10">4–10</SelectItem>
                      <SelectItem value="10+">10+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pricingPain">Biggest pricing challenge today</Label>
                <Textarea id="pricingPain" name="pricingPain" placeholder="e.g. We do an annual increase but never know if specific items are under- or overpriced…" value={formData.pricingPain} onChange={handleChange} required className="min-h-28 rounded-lg resize-none" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Anything else? <span className="text-muted-foreground font-normal">(optional)</span></Label>
                <Textarea id="message" name="message" placeholder="Other context you'd like us to know" value={formData.message} onChange={handleChange} className="min-h-20 rounded-lg resize-none" />
              </div>

              <Button type="submit" variant="default" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Connect with us"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground mb-2">Or reach us directly at:</p>
              <a href="mailto:info@vetledger.com" className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
                <Mail className="mr-2 h-5 w-5" />
                info@vetledger.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
