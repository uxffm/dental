import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-dental-50 to-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Spezialisierte SEO-Dienste für <span className="text-dental-600">Zahnarztpraxen</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Wir helfen Zahnarztpraxen, mehr Patienten zu gewinnen – mit maßgeschneiderten SEO-Strategien, die messbare Ergebnisse liefern.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button className="bg-dental-600 hover:bg-dental-700 text-lg px-8 py-6">
                Kostenloser SEO-Check
              </Button>
              <Button variant="outline" className="border-dental-600 text-dental-600 hover:bg-dental-50 text-lg px-6 py-6">
                Ergebnisse ansehen
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-2 text-sm text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <svg className="w-5 h-5 text-dental-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Spezialisiert auf Dental-SEO</span>
            </motion.div>
          </div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-dental-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-dental-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Durchschnittliche Ergebnisse</h3>
                  <p className="text-gray-500">Bei unseren Zahnärzten</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-dental-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-dental-600">187%</div>
                  <p className="text-sm text-gray-600">Mehr organischer Traffic</p>
                </div>
                <div className="bg-dental-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-dental-600">94%</div>
                  <p className="text-sm text-gray-600">Mehr neue Anrufe von Patienten</p>
                </div>
                <div className="bg-dental-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-dental-600">83%</div>
                  <p className="text-sm text-gray-600">Höhere Conversion-Raten</p>
                </div>
                <div className="bg-dental-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-dental-600">4.8x</div>
                  <p className="text-sm text-gray-600">Return on Investment</p>
                </div>
              </div>
              
              <p className="text-sm text-center text-gray-500">Basierend auf den Durchschnittswerten von über 50 Zahnarztpraxen</p>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-dental-500 rounded-full w-24 h-24 flex items-center justify-center text-white font-bold text-lg z-0">
            
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
