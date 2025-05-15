
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-dental-600">Dental<span className="text-dental-500">Rank</span></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-dental-600 font-medium">
              Home
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-dental-600 font-medium">
              Blog
            </Link>
            <a href="#services" className="text-gray-700 hover:text-dental-600 font-medium">
              Services
            </a>
            <a href="#case-studies" className="text-gray-700 hover:text-dental-600 font-medium">
              Case Studies
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-dental-600 font-medium">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-dental-600 font-medium">
              Contact
            </a>
            <Button className="bg-dental-500 hover:bg-dental-600">
              Free SEO Audit
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link 
              to="/" 
              className="block py-2 px-3 text-gray-700 hover:bg-dental-50 hover:text-dental-600 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className="block py-2 px-3 text-gray-700 hover:bg-dental-50 hover:text-dental-600 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <a 
              href="#services" 
              className="block py-2 px-3 text-gray-700 hover:bg-dental-50 hover:text-dental-600 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#case-studies" 
              className="block py-2 px-3 text-gray-700 hover:bg-dental-50 hover:text-dental-600 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </a>
            <a 
              href="#testimonials" 
              className="block py-2 px-3 text-gray-700 hover:bg-dental-50 hover:text-dental-600 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block py-2 px-3 text-gray-700 hover:bg-dental-50 hover:text-dental-600 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-2">
              <Button className="w-full bg-dental-500 hover:bg-dental-600">
                Free SEO Audit
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
