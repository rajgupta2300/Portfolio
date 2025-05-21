import { useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_79z4s2a";
const TEMPLATE_ID = "template_1f8v3wg";
const PUBLIC_KEY = "sLYNvb0CsUN6KjST8";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          toast({
            title: "Message received",
            description: "Thank you for your message. I'll get back to you soon!",
          });
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        () => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again later.",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-container">
        <div className="space-y-4 mb-12 text-center">
          <p className="text-primary font-medium">Get In Touch</p>
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Have a question or want to work together? Feel free to reach out to
            me using the form below or through my social channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Let's Talk</h3>
            <p>
              I'm always open to new opportunities, collaborations, or just a friendly
              chat about technology and innovation.
            </p>

            <div className="space-y-4">
              <Card className="glass-card p-2">
                <CardContent className="p-4 flex items-center">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">i.rajgupta2300@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card p-2">
                <CardContent className="p-4 flex items-center">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+91 6900698206</p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/rajgupta2300"
                  className="bg-muted hover:bg-muted/80 p-3 rounded-full transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rajgupta2300/"
                  className="bg-muted hover:bg-muted/80 p-3 rounded-full transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <Button asChild variant="outline" className="rounded-full">
                  <a href="/resume.pdf" download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
