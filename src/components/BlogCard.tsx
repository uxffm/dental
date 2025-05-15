
import { Link } from "react-router-dom";
import { BlogPost } from "../data/blogPosts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.slug}`} className="block group">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-3">
            {post.categories.map((category, index) => (
              <Badge key={index} variant="secondary" className="text-xs font-medium">
                {category}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-dental-600 transition-colors">
            {post.title}
          </h3>
          
          <p className="text-gray-600 line-clamp-3">
            {post.excerpt}
          </p>
        </CardContent>
        
        <CardFooter className="flex items-center justify-between pt-0 border-t mt-4">
          <span className="text-sm text-gray-500">{post.author}</span>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1 text-dental-500" />
            {post.date}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
