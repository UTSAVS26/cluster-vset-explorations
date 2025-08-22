import { Mail, Linkedin, Github, Users, Award, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { teamData } from '@/data/teamData';

const Leadership = () => {
  const TeamMemberCard = ({ member, isCore = false }: { member: any, isCore?: boolean }) => (
    <Card className="text-center hover-glow-primary transition-all duration-300 group bg-card/50">
      <CardHeader>
        <div className="relative mb-4">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/60 transition-colors duration-300"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>
        <CardTitle className="text-xl text-gradient-primary group-hover:text-gradient-secondary transition-colors">
          {member.name}
        </CardTitle>
        <CardDescription className="font-medium text-secondary">
          {member.role}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {member.bio && (
          <p className="text-muted-foreground text-sm leading-relaxed">
            {member.bio}
          </p>
        )}
        
        <div className="flex justify-center space-x-3">
          {member.email && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hover:bg-primary/10"
            >
              <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
                <Mail className="w-4 h-4" />
              </a>
            </Button>
          )}
          {member.linkedin && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hover:bg-blue-500/10 hover:border-blue-500/50"
            >
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn`}>
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
          )}
          {member.github && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hover:bg-gray-500/10 hover:border-gray-500/50"
            >
              <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s GitHub`}>
                <Github className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const organizationStats = [
    { icon: Users, label: 'Total Members', value: `${teamData.coreTeam.length + teamData.extendedTeam.length}+`, color: 'text-blue-400' },
    { icon: Award, label: 'Years Active', value: '4+', color: 'text-green-400' },
    { icon: Target, label: 'Projects Led', value: '25+', color: 'text-purple-400' },
    { icon: Zap, label: 'Events Organized', value: '50+', color: 'text-orange-400' }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-primary">Our</span>
              <span className="text-foreground"> Leadership</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Meet the passionate individuals who drive CLUSTER-VSET's mission of collaborative 
              learning and innovative research.
            </p>
          </div>
        </div>
      </section>

      {/* Organization Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {organizationStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center hover-glow-primary transition-all duration-300 bg-card/50">
                  <CardContent className="pt-6">
                    <IconComponent className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                    <div className="text-3xl font-bold text-gradient-primary mb-2">
                      {stat.value}
                    </div>
                    <p className="text-muted-foreground text-sm font-medium">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="core" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="core" className="text-lg py-3">
                <Award className="w-5 h-5 mr-2" />
                Core Team
              </TabsTrigger>
              <TabsTrigger value="extended" className="text-lg py-3">
                <Users className="w-5 h-5 mr-2" />
                Extended Team
              </TabsTrigger>
            </TabsList>

            <TabsContent value="core" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-gradient-primary">
                  Core Leadership Team
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  The dedicated leaders who guide our organization's strategic direction and daily operations.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamData.coreTeam.map((member) => (
                  <TeamMemberCard key={member.id} member={member} isCore={true} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="extended" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-gradient-secondary">
                  Extended Team
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our committed team members who contribute to various aspects of our organization.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamData.extendedTeam.map((member) => (
                  <TeamMemberCard key={member.id} member={member} isCore={false} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient-primary">
              Our Leadership Philosophy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide how we lead and serve our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover-glow-primary transition-all duration-300 bg-card/70">
              <CardHeader>
                <Users className="w-16 h-16 mx-auto mb-4 text-primary" />
                <CardTitle className="text-2xl">Collaborative Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-lg leading-relaxed">
                  We believe in shared leadership where every voice matters and decisions are made collectively 
                  for the benefit of our entire community.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-glow-primary transition-all duration-300 bg-card/70">
              <CardHeader>
                <Target className="w-16 h-16 mx-auto mb-4 text-secondary" />
                <CardTitle className="text-2xl">Mission-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-lg leading-relaxed">
                  Every decision we make is guided by our commitment to advancing collaborative learning 
                  and innovative research in our academic community.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-glow-primary transition-all duration-300 bg-card/70">
              <CardHeader>
                <Zap className="w-16 h-16 mx-auto mb-4 text-accent" />
                <CardTitle className="text-2xl">Empowerment Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-lg leading-relaxed">
                  We strive to empower every member to reach their potential and contribute meaningfully 
                  to research and academic excellence.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Leadership */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gradient-primary">Interested in</span>
            <span className="text-foreground"> Leadership?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We're always looking for passionate individuals to join our leadership team and 
            help shape the future of CLUSTER-VSET.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:cluster.vset@university.edu">
                Apply for Leadership
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/about">
                Learn More About Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;