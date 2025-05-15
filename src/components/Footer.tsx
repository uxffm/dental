import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-container pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">Dental<span className="text-dental-400">Rank</span></span>
            </Link>
            <p className="mb-4">
              Spezialisierte SEO-Dienstleistungen ausschließlich für Zahnarztpraxen. Wir helfen Zahnärzten, mehr Patienten zu gewinnen und ihre Praxis zu vergrößern.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-dental-400" aria-label="Facebook">
                {/* SVG */}
              </a>
              <a href="#" className="text-gray-400 hover:text-dental-400" aria-label="Twitter">
                {/* SVG */}
              </a>
              <a href="#" className="text-gray-400 hover:text-dental-400" aria-label="LinkedIn">
                {/* SVG */}
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-dental-400 transition-colors">Lokales SEO für Zahnärzte</a></li>
              <li><a href="#" className="hover:text-dental-400 transition-colors">Content-Marketing für Zahnärzte</a></li>
              <li><a href="#" className="hover:text-dental-400 transition-colors">Technisches SEO für Zahnärzte</a></li>
              <li><a href="#" className="hover:text-dental-400 transition-colors">Website-Optimierung für Zahnärzte</a></li>
              <li><a href="#" className="hover:text-dental-400 transition-colors">Praxis-Analysen für Zahnärzte</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-dental-400 transition-colors">Über uns</a></li>
              <li><a href="#" className="hover:text-dental-400 transition-colors">Unser Team</a></li>
              <li><a href="#" className="hover:text-dental-400 transition-colors">Erfolgsgeschichten</a></li>
              <li><a href="#" className="hover:text-dental-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-dental-400 transition-colors">Karriere</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                {/* Phone icon */}
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                {/* Email icon */}
                <span>info@dentalrankseo.com</span>
              </li>
              <li className="flex items-start">
                {/* Location icon */}
                <span>123 Market Street, Suite 456<br/>San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} DentalRank SEO. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-dental-400 transition-colors">Datenschutzerklärung</a>
              <a href="#" className="hover:text-dental-400 transition-colors">Nutzungsbedingungen</a>
              <a href="#" className="hover:text-dental-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
