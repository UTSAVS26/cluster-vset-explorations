import { useState } from 'react';
import { Calendar, User, Clock, Tag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogsData } from '@/data/blogsData';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const BlogCard = ({ post }: { post: any }) => (
    <Card 
      className="hover-glow-primary transition-all duration-300 cursor-pointer group bg-card/50"
      onClick={() => setSelectedPost(post)}
    >
      <div className="aspect-video overflow-hidden rounded-t-lg">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {post.category}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="w-3 h-3 mr-1" />
            {post.readTime}
          </div>
        </div>
        <CardTitle className="text-xl text-gradient-primary group-hover:text-gradient-secondary transition-colors">
          {post.title}
        </CardTitle>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(post.date).toLocaleDateString()}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
          {post.excerpt}
        </CardDescription>
        
        {post.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <Button variant="outline" className="w-full group-hover:bg-primary/10">
          Read Full Article
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );

  const BlogPost = ({ post }: { post: any }) => (
    <div className="max-w-4xl mx-auto">
      <Button 
        variant="outline" 
        onClick={() => setSelectedPost(null)}
        className="mb-8"
      >
        ← Back to Blog
      </Button>
      
      <article className="prose prose-lg max-w-none dark:prose-invert">
        <div className="mb-8">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary">
              {post.category}
            </Badge>
            <div className="flex items-center text-muted-foreground">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gradient-primary mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-muted-foreground mb-6">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {new Date(post.date).toLocaleDateString()}
            </div>
          </div>
          
          {post.tags && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string, index: number) => (
                <Badge key={index} variant="outline">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>
        
        <div 
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gradient-primary prose-a:text-primary prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );

  if (selectedPost) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <BlogPost post={selectedPost} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-primary">Research</span>
              <span className="text-foreground"> Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Insights, tutorials, and research findings from our community of 
              data scientists and researchers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Coming Soon Message */}
          <div className="text-center py-32">
            <User className="w-24 h-24 mx-auto mb-8 text-muted-foreground" />
            <h2 className="text-4xl font-bold text-gradient-primary mb-4">
              Blog Coming Soon
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're working on bringing you insightful articles, research findings, and tutorials. 
              Check back soon for engaging content from our community of data scientists and researchers.
            </p>
          </div>
          
          {/* Original Blog Display - Commented Out */}
          {/* <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient-primary">Latest</span>
              <span className="text-foreground"> Articles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest insights and research from our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div> */}
        </div>
      </section>

      {/* Categories - Commented Out */}
      {/* <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient-secondary">
              Explore by Category
            </h2>
            <p className="text-xl text-muted-foreground">
              Find articles that match your interests and research areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Research', 'Data Science', 'Statistics'].map((category) => {
              const categoryPosts = blogsData.filter(post => post.category === category);
              return (
                <Card key={category} className="text-center hover-glow-primary transition-all duration-300 bg-card/70">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gradient-primary">
                      {category}
                    </CardTitle>
                    <CardDescription>
                      {categoryPosts.length} article{categoryPosts.length !== 1 ? 's' : ''}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      View {category} Posts
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gradient-primary">Want to</span>
            <span className="text-foreground"> Contribute?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Share your research insights and experiences with our community by contributing to our blog.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:cluster.vset@university.edu">
                Submit an Article
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/contact">
                Get Writing Guidelines
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;