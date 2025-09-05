import { Download, ExternalLink, BookOpen, Code, Database, FileText, Video, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { resourcesData } from '@/data/resourcesData';

const Resources = () => {
  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf guide': return FileText;
      case 'video series': return Video;
      case 'interactive guide': return Play;
      case 'r package': return Code;
      case 'template library': return Code;
      case 'web platform': return ExternalLink;
      default: return BookOpen;
    }
  };

  const getFormatIcon = (format: string) => {
    if (format.includes('CSV')) return FileText;
    if (format.includes('JSON')) return Code;
    return Database;
  };

  const ResourceCard = ({ resource, type }: { resource: any, type: string }) => {
    const IconComponent = type === 'tools' ? Code : type === 'datasets' ? Database : getTypeIcon(resource.type || '');
    
    return (
      <Card className="h-full hover-glow-primary transition-all duration-300 group bg-card/50">
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <div className="w-12 h-12 rounded-lg bg-gradient-primary p-3 group-hover:scale-110 transition-transform">
              <IconComponent className="w-full h-full text-primary-foreground" />
            </div>
            {resource.type && (
              <Badge variant="secondary" className="text-xs">
                {resource.type}
              </Badge>
            )}
            {resource.category && (
              <Badge variant="secondary" className="text-xs">
                {resource.category}
              </Badge>
            )}
          </div>
          <CardTitle className="text-xl text-gradient-primary group-hover:text-gradient-secondary transition-colors">
            {resource.title || resource.name}
          </CardTitle>
          {resource.author && (
            <p className="text-sm text-muted-foreground">by {resource.author}</p>
          )}
          {resource.version && (
            <Badge variant="outline" className="w-fit text-xs">
              {resource.version}
            </Badge>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          <CardDescription className="text-muted-foreground leading-relaxed">
            {resource.description}
          </CardDescription>
          
          {/* Tags */}
          {resource.tags && (
            <div className="flex flex-wrap gap-2">
              {resource.tags.map((tag: string, index: number) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Dataset specific info */}
          {type === 'datasets' && (
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Size:</span>
                <span>{resource.size}</span>
              </div>
              <div className="flex justify-between">
                <span>Format:</span>
                <span>{resource.format}</span>
              </div>
              <div className="flex justify-between">
                <span>License:</span>
                <span>{resource.license}</span>
              </div>
              <div className="flex justify-between">
                <span>Updated:</span>
                <span>{resource.lastUpdated}</span>
              </div>
            </div>
          )}
          
          {/* Action Button */}
          <Button 
            className="w-full mt-4" 
            asChild
            variant={resource.link === '#' ? 'outline' : 'default'}
          >
            <a 
              href={resource.link} 
              target={resource.link.startsWith('http') ? '_blank' : '_self'}
              rel={resource.link.startsWith('http') ? 'noopener noreferrer' : ''}
            >
              {resource.link === '#' ? (
                <>Coming Soon</>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  {type === 'datasets' ? 'Download Dataset' : 'Access Resource'}
                  {resource.link.startsWith('http') && (
                    <ExternalLink className="w-4 h-4 ml-2" />
                  )}
                </>
              )}
            </a>
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-primary">Learning</span>
              <span className="text-foreground"> Resources</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Access our curated collection of guides, tools, and datasets to accelerate 
              your research and learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Coming Soon Message */}
          <div className="text-center py-32">
            <BookOpen className="w-24 h-24 mx-auto mb-8 text-muted-foreground" />
            <h2 className="text-4xl font-bold text-gradient-primary mb-4">
              Resources Coming Soon
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're currently curating an amazing collection of learning resources, tools, and datasets. 
              Check back soon to access our comprehensive library for data science and research.
            </p>
          </div>
          
          {/* Original Resources Display - Commented Out */}
          {/* <Tabs defaultValue="guides" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="guides" className="text-lg py-3">
                <BookOpen className="w-5 h-5 mr-2" />
                Learning Guides
              </TabsTrigger>
              <TabsTrigger value="tools" className="text-lg py-3">
                <Code className="w-5 h-5 mr-2" />
                Tools & Software
              </TabsTrigger>
              <TabsTrigger value="datasets" className="text-lg py-3">
                <Database className="w-5 h-5 mr-2" />
                Open Datasets
              </TabsTrigger>
            </TabsList>

            <TabsContent value="guides" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient-primary">
                  Learning Guides
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Comprehensive guides and tutorials to help you master statistical analysis and research methods.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {resourcesData.learningGuides.map((guide) => (
                    <ResourceCard key={guide.id} resource={guide} type="guides" />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tools" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient-secondary">
                  Tools & Software
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Custom tools and software packages developed by our community to streamline research workflows.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {resourcesData.tools.map((tool) => (
                    <ResourceCard key={tool.id} resource={tool} type="tools" />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="datasets" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient-primary">
                  Open Datasets
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Curated datasets for research and educational purposes, ready for analysis and exploration.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {resourcesData.datasets.map((dataset) => (
                    <ResourceCard key={dataset.id} resource={dataset} type="datasets" />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs> */}
        </div>
      </section>

      {/* Resource Guidelines */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient-secondary">
              Usage Guidelines
            </h2>
            <p className="text-xl text-muted-foreground">
              Important information about using our resources responsibly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover-glow-primary transition-all duration-300 bg-card/70">
              <CardHeader>
                <FileText className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-xl">Attribution</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Please cite CLUSTER-VSET when using our resources in your research or projects.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-glow-primary transition-all duration-300 bg-card/70">
              <CardHeader>
                <Code className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <CardTitle className="text-xl">License Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Ensure you comply with the specific license terms for each resource and dataset.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-glow-primary transition-all duration-300 bg-card/70">
              <CardHeader>
                <Database className="w-12 h-12 mx-auto mb-4 text-accent" />
                <CardTitle className="text-xl">Data Ethics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Use datasets responsibly and follow ethical guidelines for data analysis and sharing.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gradient-primary">Need</span>
            <span className="text-foreground"> Something Specific?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Can't find what you're looking for? Suggest new resources or contribute your own tools and datasets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:cluster.vset@university.edu">
                Suggest a Resource
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Contribute Resources
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;