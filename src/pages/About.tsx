import { Target, Users, Lightbulb, BookOpen, TrendingUp, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and methodologies to push the boundaries of research and learning.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and collective intelligence to solve complex problems.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BookOpen,
      title: "Knowledge Sharing",
      description: "We are committed to open science and making research accessible to all members of our community.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const achievements = [
    { number: "50+", label: "Active Members", icon: Users },
    { number: "25+", label: "Research Projects", icon: Target },
    { number: "100+", label: "Workshop Participants", icon: BookOpen },
    { number: "15+", label: "Industry Partners", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-primary">About</span>
              <span className="text-foreground"> CLUSTER-VSET</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Empowering the next generation of researchers through collaborative learning, 
              statistical analysis, and innovative research methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient-secondary">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our work and community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center hover-glow-primary transition-all duration-300 hover:scale-105 bg-card/50"
                >
                  <CardHeader>
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${value.color} p-5 mb-4`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gradient-primary">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-lg leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Club Story */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-primary">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  CLUSTER-VSET was founded in 2020 by a group of passionate students who recognized 
                  the need for a collaborative platform in statistical research and data science. 
                  What started as informal study groups has evolved into a thriving community of 
                  researchers, innovators, and learners.
                </p>
                <p>
                  Our organization bridges the gap between academic theory and practical application, 
                  providing students with hands-on experience in real-world research projects. 
                  We've successfully completed over 25 research initiatives, published numerous 
                  papers, and established partnerships with leading academic institutions and industry partners.
                </p>
                <p>
                  Today, CLUSTER-VSET continues to grow, fostering the next generation of data 
                  scientists and researchers through collaborative learning, mentorship, and 
                  innovative research opportunities.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card 
                    key={index} 
                    className="text-center p-6 hover-glow-secondary transition-all duration-300 bg-card/70"
                  >
                    <IconComponent className="w-8 h-8 mx-auto mb-4 text-secondary" />
                    <div className="text-3xl font-bold text-gradient-secondary mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {achievement.label}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient-primary">What We</span>
              <span className="text-foreground"> Do</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive approach to collaborative learning and research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-glow-primary transition-all duration-300 bg-card/50">
              <CardHeader>
                <Zap className="w-10 h-10 text-primary mb-4" />
                <CardTitle className="text-xl">Research Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Collaborative research initiatives spanning machine learning, statistical analysis, 
                  and data visualization across multiple disciplines.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-glow-primary transition-all duration-300 bg-card/50">
              <CardHeader>
                <BookOpen className="w-10 h-10 text-primary mb-4" />
                <CardTitle className="text-xl">Educational Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Regular workshops and seminars covering statistical methods, programming languages, 
                  and research methodologies for all skill levels.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-glow-primary transition-all duration-300 bg-card/50">
              <CardHeader>
                <Users className="w-10 h-10 text-primary mb-4" />
                <CardTitle className="text-xl">Mentorship Program</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Peer-to-peer mentorship connecting experienced members with newcomers 
                  to foster knowledge sharing and academic growth.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;