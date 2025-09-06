import { useState } from 'react';
import { Github, ExternalLink, Users, Code, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projectsData } from '@/data/projectsData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', ...Array.from(new Set(projectsData.map(project => project.category)))];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'in-progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'planning': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const ProjectCard = ({ project }: { project: any }) => (
    <Card className="h-full hover-glow-primary transition-all duration-300 group bg-card/50">
      <div className="aspect-video overflow-hidden rounded-t-lg">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge className={getStatusColor(project.status)}>
            {project.status.replace('-', ' ')}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {project.category}
          </Badge>
        </div>
        <CardTitle className="text-xl text-gradient-primary group-hover:text-gradient-secondary transition-colors">
          {project.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-muted-foreground leading-relaxed">
          {project.description}
        </CardDescription>
        
        {/* Tools Used */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-2 flex items-center">
            <Code className="w-4 h-4 mr-2" />
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Team Members */}
        {project.team && (
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2 flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Team
            </h4>
            <p className="text-sm text-muted-foreground">
              {project.team.join(', ')}
            </p>
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex gap-2 pt-4">
          {project.githubLink && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {project.demoLink && project.demoLink !== '#' && (
            <Button size="sm" asChild className="flex-1">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-primary">Research</span>
              <span className="text-foreground"> Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Explore our cutting-edge research projects that combine statistical analysis, 
              data science, and collaborative innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Coming Soon Message */}
          <div className="text-center py-32">
            <Code className="w-24 h-24 mx-auto mb-8 text-muted-foreground" />
            <h2 className="text-4xl font-bold text-gradient-primary mb-4">
              Projects Coming Soon
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're currently working on showcasing our amazing research projects. 
              Check back soon to explore our cutting-edge work in data science and collaborative research.
            </p>
          </div>
          
          {/* Original Projects Display - Commented Out */}
          {/* Category Filter */}
          {/* <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-lg font-semibold text-foreground">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category: string) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category === 'all' ? 'All Projects' : category}
                </Button>
              ))}
            </div>
          </div> */}

          {/* Projects Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div> */}

          {/* <div className="text-center py-16">
            <Code className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-2xl font-semibold text-muted-foreground mb-2">
              No Projects Found
            </h3>
            <p className="text-muted-foreground">
              Try selecting a different category or check back later for new projects.
            </p>
          </div> */}
        </div>
      </section>

      {/* Project Stats - Commented Out */}
      {/* <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient-secondary">
              Project Impact
            </h2>
            <p className="text-xl text-muted-foreground">
              Our research projects create real-world impact and learning opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-primary mb-2">
                {projectsData.length}+
              </div>
              <p className="text-muted-foreground">Total Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-primary mb-2">
                {projectsData.filter(p => p.status === 'completed').length}
              </div>
              <p className="text-muted-foreground">Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-primary mb-2">
                {categories.length - 1}
              </div>
              <p className="text-muted-foreground">Research Areas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-primary mb-2">
                50+
              </div>
              <p className="text-muted-foreground">Contributors</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gradient-primary">Ready to</span>
            <span className="text-foreground"> Collaborate?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join our research community and contribute to projects that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:cluster.vset@university.edu">
                Propose a Project
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://github.com/cluster-vset" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;