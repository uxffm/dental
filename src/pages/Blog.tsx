
import { useEffect } from "react";
import { blogPosts } from "../data/blogPosts";
import BlogCard from "../components/BlogCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Blog = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 md:pt-28">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Dental SEO Insights
            </h1>
            <p className="text-xl text-gray-600 text-center">
              Expert strategies, case studies, and guides to help your dental practice 
              achieve higher rankings and attract more patients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>

          {/* Newsletter signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-20 bg-dental-50 p-8 rounded-lg max-w-4xl mx-auto"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Get SEO Tips Delivered to Your Inbox
              </h2>
              <p className="text-gray-600 mb-6">
                Join our newsletter for exclusive dental marketing insights and strategies.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dental-500 focus:border-dental-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-dental-500 hover:bg-dental-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
