
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
              Specialized SEO services exclusively for dental practices. Helping dentists attract more patients and grow their practice.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-dental-400" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-dental-400" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-dental-400" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-dental-400 transition-colors">Local SEO for Dentists</a></li>
              <li><a href="#" className="hover:text-dental-400 transition-colors">Dental Content Marketing</a></li>
              <li><a href="#" className="hover:text-dental-400 transition-colors">Technical Dental SEO</a></li>
              <li><a href="#" className="hover:text-dental-400 transition-colors">Dental Website Optimization</a></li>
              <li><a href="#" className="hover:text-dental-400 transition-colors">Dental Practice Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-dental-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-dental-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-dental-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-dental-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-dental-400 transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-dental-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-dental-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@dentalrankseo.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-dental-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Market Street, Suite 456<br/>San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} DentalRank SEO. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-dental-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-dental-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-dental-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
