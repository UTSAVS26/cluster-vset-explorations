import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, Users, Zap, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { sponsorsData } from '@/data/sponsorsData';
import heroImage from '@/assets/hero-bg.jpg';

const Index = () => {
  const highlights = [
    {
      icon: Calendar,
      title: "Events & Workshops",
      description: "Join our regular workshops, seminars, and research symposiums to expand your knowledge and network.",
      link: "/events",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: Zap,
      title: "Cutting-edge Projects",
      description: "Collaborate on real-world data science projects that make a difference in academic research.",
      link: "/projects",
      gradient: "from-green-500 to-emerald-400"
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Access our curated collection of guides, tools, and datasets for your research journey.",
      link: "/resources",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: Users,
      title: "Research Community",
      description: "Connect with like-minded researchers and collaborate on groundbreaking academic projects.",
      link: "/leadership",
      gradient: "from-orange-500 to-red-400"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center animated-bg overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-gradient-primary">CLUSTER</span>
              <span className="text-foreground">-</span>
              <span className="text-gradient-secondary">VSET</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-2">
              Collaborative Learning Using Statistical Trends & Exploratory Research
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Empowering students through data science, research collaboration, and academic innovation
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              asChild
              className="group"
            >
              <Link to="/projects">
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              asChild
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
            >
              <Link to="/about">
                Learn About Us
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-gradient-to-br from-secondary to-secondary-glow rounded-full opacity-10 animate-pulse delay-1000" />
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To foster collaborative learning and innovative research in data science and statistics, 
                empowering students to make meaningful contributions to academic knowledge and society.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We bridge the gap between theoretical knowledge and practical application through 
                hands-on projects, peer collaboration, and cutting-edge research initiatives.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-secondary mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To become the leading student organization in collaborative research, setting new 
                standards for academic excellence and innovation in data science education.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a future where every student has the tools, knowledge, and network 
                to contribute meaningfully to research and drive positive change in their field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">What We</span> 
              <span className="text-foreground"> Offer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the opportunities and resources available through CLUSTER-VSET
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link 
                  key={index}
                  to={item.link}
                  className="group block"
                >
                  <Card className="h-full hover-glow-primary transition-all duration-500 hover:scale-105 bg-card/50 border-border/50">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.gradient} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-gradient-primary transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners & Sponsors */}
      {/* {sponsorsData && sponsorsData.length > 0 && (
        <section className="py-20 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gradient-secondary">
                Our Partners
              </h2>
              <p className="text-xl text-muted-foreground">
                Collaborating with leading organizations to advance research and education
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {sponsorsData.map((sponsor) => (
                <div 
                  key={sponsor.id}
                  className="flex items-center justify-center p-6 bg-card rounded-xl hover-glow-primary transition-all duration-300"
                >
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )} */}

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Ready to</span>
            <span className="text-foreground"> Join Us?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Be part of a community that's shaping the future of collaborative research and data science education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glow" size="xl" asChild>
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-secondary hover:border-secondary hover:bg-secondary/10">
              <a 
                href="https://github.com/cluster-vset" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;