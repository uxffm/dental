
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    practice: "Johnson Family Dental",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    quote: "Working with DentalRank has been transformative for our practice. They truly understand the dental industry and have helped us reach new patients we couldn't before. Our schedule is now consistently full, and we attribute much of that to their SEO expertise.",
    rating: 5
  },
  {
    name: "Dr. Michael Chen",
    practice: "Parkview Dental Associates",
    location: "Boston, MA",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    quote: "I've worked with several marketing companies before finding DentalRank. The difference is night and day. Their dental-specific SEO knowledge helped us target exactly the kinds of patients we wanted to attract. The ROI has been impressive.",
    rating: 5
  },
  {
    name: "Dr. Jennifer Martinez",
    practice: "Smile Solutions",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    quote: "As a new practice, we needed to build our patient base quickly. DentalRank's strategies helped us compete with established practices in our area. Their team is responsive, knowledgeable, and focused on results.",
    rating: 5
  },
  {
    name: "Dr. Robert Wilson",
    practice: "Premier Dental Care",
    location: "Atlanta, GA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    quote: "We've seen a 200% increase in new patient calls since working with DentalRank. Their understanding of how patients search for dental services online has given us a real competitive edge in our market.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="bg-dental-50 py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            What Dental Professionals Say
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Don't just take our word for it. Hear from the dental practices we've helped succeed.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.practice}</p>
                        <p className="text-gray-500 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <blockquote className="italic text-gray-700 mb-4 flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="static transform-none mr-2" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
