
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.slug === slug);
  
  useEffect(() => {
    // Scroll to top when post loads
    window.scrollTo(0, 0);
    
    // If post not found, redirect to blog page
    if (!post && slug) {
      navigate("/blog", { replace: true });
    }
  }, [slug, post, navigate]);
  
  // Show placeholder while loading or if post not found
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 md:pt-32 pb-16">
          <div className="max-w-3xl mx-auto px-4">
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2 mb-10" />
            <Skeleton className="h-64 w-full mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-10">
            <Link to="/blog">
              <Button variant="ghost" className="pl-0 mb-6 text-gray-600 hover:text-dental-600">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all articles
              </Button>
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              {post.title}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {post.categories.map((category, index) => (
                <Badge key={index} variant="secondary">
                  {category}
                </Badge>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center text-sm text-gray-600 mb-8"
            >
              <span className="font-medium mr-4">{post.author}</span>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-dental-500" />
                {post.date}
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="rounded-lg overflow-hidden mb-10">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-dental-600 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="border-t border-gray-200 mt-12 pt-8">
              <h3 className="text-lg font-semibold mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  Share on Twitter
                </Button>
                <Button variant="outline" size="sm">
                  Share on LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  Share on Facebook
                </Button>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 bg-dental-50 p-8 rounded-lg"
          >
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Want to improve your dental practice's SEO?
              </h2>
              <p className="text-gray-600 mb-6">
                Get a free SEO audit and discover how we can help you attract more patients.
              </p>
              <Button className="bg-dental-500 hover:bg-dental-600">
                Get Your Free SEO Audit
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
