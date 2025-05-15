
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const caseStudies = [
  {
    name: "Smile360 Dental",
    location: "Chicago, IL",
    service: "Local SEO & Content Marketing",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    stats: [
      { label: "Increase in organic traffic", value: "212%" },
      { label: "New patient appointments", value: "147%" },
      { label: "Keywords in top 10", value: "89" },
    ],
    testimonial: "DentalRank transformed our online presence. We're now the top-ranked dental practice in our area for most major keywords."
  },
  {
    name: "Bright Family Dental",
    location: "Austin, TX",
    service: "Technical SEO & Google Maps",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    stats: [
      { label: "Increase in Google visibility", value: "178%" },
      { label: "Growth in phone calls", value: "92%" },
      { label: "Return on investment", value: "5.3x" },
    ],
    testimonial: "Working with DentalRank has been amazing. They understand the dental industry and delivered incredible results for our practice."
  },
  {
    name: "Clear Path Orthodontics",
    location: "Denver, CO",
    service: "Content Strategy & Local SEO",
    image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    stats: [
      { label: "First page keywords", value: "63" },
      { label: "Increase in consultations", value: "104%" },
      { label: "Growth in revenue", value: "83%" },
    ],
    testimonial: "The specialized knowledge DentalRank has for orthodontic practices made all the difference. Our online bookings have doubled."
  }
];

const CaseStudies = () => {
  return (
    <div id="case-studies" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Success Stories From Dental Practices
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            See how we've helped dental practices across the country increase their visibility, attract new patients, and grow their practice.
          </motion.p>
        </div>
        
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative">
                  <img 
                    src={study.image} 
                    alt={study.name} 
                    className="rounded-lg shadow-lg w-full object-cover h-[350px]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 p-6">
                    <h3 className="text-2xl font-bold text-white">{study.name}</h3>
                    <p className="text-dental-200">{study.location} • {study.service}</p>
                  </div>
                </div>
              </div>
              
              <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-dental-600">{stat.value}</div>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  
                  <blockquote className="border-l-4 border-dental-500 pl-4 mb-6 italic text-gray-600">
                    "{study.testimonial}"
                  </blockquote>
                  
                  <Button>View Full Case Study</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="outline" className="border-dental-600 text-dental-600 hover:bg-dental-50">
            View All Case Studies
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
