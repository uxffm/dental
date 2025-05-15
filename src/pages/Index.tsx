
import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        } 
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Mouse movement effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  
  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div 
        className="fixed inset-0 -z-10 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-dental-100/30 to-dental-200/30 opacity-0"
          style={{
            opacity: useMotionTemplate`${mouseX.get() * mouseY.get() / 1000000}`,
            background: useMotionTemplate`radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )`,
          }}
        />
      </div>
      
      <Header />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
