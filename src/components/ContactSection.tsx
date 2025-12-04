import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-12 px-6 scroll-mt-20">
      <h2 className="section-heading">Contact</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="aws-card">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Get in Touch
            </h3>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out for collaborations, opportunities, or just
              to connect!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:adarshl10604@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center ">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">eklavyasinghparihar@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919200203742"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center ">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 9179941690</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Available for Hire */}
        <div className="aws-card">
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Available for Hire
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                As an AWS Certified Solutions Architect, I am currently
                available for freelance and full-time opportunities. Let's
                discuss how I can help design, build, and scale your cloud
                infrastructure.
              </p>
            </div>

            <div className="flex justify-center pt-4">
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-glow-purple transition-all duration-300"
              >
                <a
                  href="https://cal.com/eklavya-singh-parihar-q9sm4i"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a 30 min slot
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
