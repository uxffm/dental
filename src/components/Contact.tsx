import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practice: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Danke für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        practice: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div id="contact" className="py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Lassen Sie uns Ihre Zahnarztpraxis gemeinsam wachsen lassen</h2>

            <p className="text-lg text-gray-600 mb-8">
              Bereit, mehr Patienten zu gewinnen und Ihre Praxis auszubauen? Kontaktieren Sie uns für eine kostenlose Beratung und SEO-Analyse.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-dental-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-dental-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Telefon</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-dental-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-dental-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">E-Mail</h4>
                  <p className="text-gray-600">info@dentalrankseo.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-dental-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-dental-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Adresse</h4>
                  <p className="text-gray-600">123 Market Street, Suite 456<br/>San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Kostenlose SEO-Analyse anfordern</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Vollständiger Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Dr. Max Mustermann"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail-Adresse</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="max@zahnarztpraxis.de"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefonnummer</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="practice">Name der Praxis</Label>
                    <Input
                      id="practice"
                      name="practice"
                      value={formData.practice}
                      onChange={handleChange}
                      placeholder="Zahnarztpraxis Mustermann"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Erzählen Sie uns von Ihrer Praxis</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Was sind Ihre Ziele? Welche Herausforderungen gibt es?"
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-dental-600 hover:bg-dental-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Wird gesendet..." : "Kostenlose SEO-Analyse anfordern"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;