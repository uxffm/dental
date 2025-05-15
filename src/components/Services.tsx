import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-10 h-10 text-dental-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Lokales SEO für Zahnärzte",
    description: "Dominieren Sie lokale Suchergebnisse und Google Maps, um mehr Patienten in Ihrer Nähe zu gewinnen.",
    features: ["Google My Business Optimierung", "Lokale Verzeichniseinträge", "Ortsbezogene Inhalte", "Bewertungsmanagement"]
  },
  {
    icon: (
      <svg className="w-10 h-10 text-dental-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
    title: "Content-Marketing für Zahnärzte",
    description: "Bildende, optimierte Inhalte, die Ihre Praxis als Autorität etablieren und neue Patienten anziehen.",
    features: ["Inhaltsseiten zu Behandlungen", "Blogartikel für Zahnärzte", "Patientenaufklärungsmaterial", "Content-Strategie"]
  },
  {
    icon: (
      <svg className="w-10 h-10 text-dental-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Technisches Dental-SEO",
    description: "Optimieren Sie die technischen Aspekte Ihrer Website für bessere Sichtbarkeit und Nutzererfahrung.",
    features: ["Optimierung der Ladegeschwindigkeit", "Mobile Anpassung", "Schema-Markup für Zahnärzte", "Technische Audits"]
  },
  {
    icon: (
      <svg className="w-10 h-10 text-dental-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Dental-SEO Analytics",
    description: "Umfassendes Tracking und Reporting aller wichtigen Leistungskennzahlen Ihrer Zahnarztpraxis.",
    features: ["Tracking von Patientenanfragen", "Conversion-Optimierung", "Wettbewerbsanalyse", "Monatliche Berichte"]
  }
];

const Services = () => {
  return (
    <div id="services" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Spezialisierte SEO-Dienste für Zahnarztpraxen
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Unsere SEO-Strategien sind speziell auf die Bedürfnisse und Herausforderungen von Zahnarztpraxen abgestimmt.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-center text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-center">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-4 h-4 text-dental-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
