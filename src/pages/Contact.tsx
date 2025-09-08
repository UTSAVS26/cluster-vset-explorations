import { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, MessageCircle, Send, ExternalLink, Instagram, Linkedin, Github, MessageSquare, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

// Declare VANTA type for TypeScript
declare global {
  interface Window {
    VANTA: any;
  }
}

const Contact = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    const initVanta = () => {
      if (!vantaEffect && vantaRef.current && window.VANTA && window.VANTA.FOG) {
        try {
          setVantaEffect(
            window.VANTA.FOG({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              highlightColor: 0xf023b,
              midtoneColor: 0x3248cf,
              lowlightColor: 0xca45c2,
              baseColor: 0xa001a
            })
          );
        } catch (error) {
          console.log('Vanta fog initialization failed:', error);
        }
      }
    };

    // Try to initialize immediately
    initVanta();

    // If not available, try again after a short delay
    const timer = setTimeout(initVanta, 1000);

    return () => {
      clearTimeout(timer);
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const socialLinks = [
    { 
      name: 'WhatsApp', 
      icon: MessageCircle, 
      url: 'https://whatsapp.com/channel/0029VbAz3MRFMqrhOULA2k07',
      description: 'Follow the CLUSTER channel on WhatsApp',
      color: 'bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20' 
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://www.instagram.com/dsclub.vips/',
      description: 'Follow us for event photos and behind-the-scenes content',
      color: 'bg-pink-500/10 text-pink-400 border-pink-500/20 hover:bg-pink-500/20' 
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/company/cluster-vips',
      description: 'Connect with us professionally and see career opportunities',
      color: 'bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20' 
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/CLUSTER-DS-Club/',
      description: 'Explore our open-source projects and contribute to development',
      color: 'bg-gray-500/10 text-gray-300 border-gray-500/20 hover:bg-gray-500/20' 
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/cluster_dsclub',
      description: 'Follow us for the latest news, announcements, and tech insights.',
      color: 'bg-sky-500/10 text-sky-400 border-sky-500/20 hover:bg-sky-500/20'
    },
    { 
      name: 'Discord', 
      icon: MessageSquare, 
      url: 'https://discord.gg/6QN83D89vx',
      description: 'Join our Discord server for real-time collaboration and support',
      color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20 hover:bg-indigo-500/20' 
    },
  ];

  const contactInfo = [
    {
      title: 'Official Email',
      content: 'dsclub.cluster@vips.edu',
      icon: Mail,
      description: 'For general inquiries, partnerships, and collaboration opportunities'
    },
    {
      title: 'Campus Location',
      content: 'VIPS-TC, AU- Block (Outer Ring Road) Pitampura, Delhi - 110034',
      icon: MapPin,
      description: 'Visit us during office hours for in-person meetings'
    }
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section ref={vantaRef} className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-primary">Get in</span>
              <span className="text-foreground"> Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Connect with CLUSTER-VSET through our official channels and social media platforms. 
              We're here to answer your questions and welcome you to our community.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient-primary">Contact</span>
              <span className="text-foreground"> Information</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Reach out to us through any of these official channels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="text-center hover-glow-primary transition-all duration-300 bg-card/50">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-primary p-4 mb-4">
                      <IconComponent className="w-full h-full text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-gradient-primary">
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-foreground mb-2">
                      {info.content}
                    </p>
                    <CardDescription className="text-muted-foreground">
                      {info.description}
                    </CardDescription>
                    {info.icon === Mail && (
                      <Button 
                        className="mt-4" 
                        asChild
                      >
                        <a href={`mailto:dsclub.cluster@vips.edu`}>
                          Send Email
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient-secondary">
              Follow Us on Social Media
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay connected and up-to-date with our latest activities and announcements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Card 
                  key={index} 
                  className={`hover-glow-primary transition-all duration-300 bg-card/70 border ${social.color.includes('border-') ? social.color.split(' ').find(c => c.includes('border-')) : 'border-border'}`}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${social.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl">{social.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                      {social.description}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      className={`w-full ${social.color}`}
                      asChild
                    >
                      <a 
                        href={social.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <IconComponent className="w-4 h-4 mr-2" />
                        Follow on {social.name}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient-primary">Quick</span>
              <span className="text-foreground"> Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Common ways to get involved and connect with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-glow-primary transition-all duration-300 bg-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-gradient-primary">
                  How do I join CLUSTER-VSET?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Send us an email expressing your interest, or join our Discord server 
                  to connect with current members and learn about upcoming events.
                </CardDescription>
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:dsclub.cluster@vips.edu">
                    Contact Us
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-glow-primary transition-all duration-300 bg-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-gradient-primary">
                  Can I propose a project?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Absolutely! We welcome project proposals from all members. 
                  Send us your ideas via email or discuss them during our regular meetings.
                </CardDescription>
                <Button variant="outline" size="sm" asChild>
                  <a href="/projects">
                    View Projects
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-glow-primary transition-all duration-300 bg-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-gradient-primary">
                  When do you meet?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  We hold regular meetings every Wednesday at 6:00 PM in the CS Building. 
                  Follow our social media for updates and special events.
                </CardDescription>
                <Button variant="outline" size="sm" asChild>
                  <a href="/events">
                    View Events
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-glow-primary transition-all duration-300 bg-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-gradient-primary">
                  Need research collaboration?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  We're always open to research collaborations with faculty, students, 
                  and external organizations. Reach out to discuss potential partnerships.
                </CardDescription>
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:dsclub.cluster@vips.edu">
                    Collaborate
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gradient-primary">Ready to</span>
            <span className="text-foreground"> Connect?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Don't hesitate to reach out. We're excited to hear from you and welcome you to our community!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:dsclub.cluster@vips.edu">
                <Mail className="w-5 h-5 mr-2" />
                Send us an Email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://discord.gg/clustervset" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Join Discord
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;