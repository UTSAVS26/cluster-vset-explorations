import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ExternalLink, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { eventsData } from '@/data/eventsData';

// Declare VANTA type for TypeScript
declare global {
  interface Window {
    VANTA: any;
  }
}

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [isVisible, setIsVisible] = useState(false);
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const upcomingEvents = eventsData.filter(event => event.type === 'upcoming');
  const pastEvents = eventsData.filter(event => event.type === 'past');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const initVanta = () => {
      if (!vantaEffect && vantaRef.current && window.VANTA && window.VANTA.WAVES) {
        try {
          setVantaEffect(
            window.VANTA.WAVES({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x180060
            })
          );
        } catch (error) {
          console.log('Vanta initialization failed:', error);
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

  const EventCard = ({ event, isUpcoming = true, index = 0 }: { event: any, isUpcoming?: boolean, index?: number }) => (
    <div 
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        animation: isVisible ? 'slideInUp 0.6s ease-out forwards' : 'none'
      }}
    >
      <div className="group h-full">
        <Card className="hover-glow-primary transition-all duration-300 bg-card/50 h-full group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:shadow-xl glow-card card-3d glass-effect hover-lift">
          <div className="aspect-video overflow-hidden rounded-t-lg relative">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Shimmer overlay */}
            <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <CardHeader>
            <div 
              className="flex items-start justify-between mb-2 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <Badge variant="secondary" className="text-xs glow-pulse">
                {isUpcoming ? 'Upcoming' : 'Past Event'}
              </Badge>
              {event.sponsor && (
                <Badge variant="outline" className="text-xs glow-border">
                  {event.sponsor}
                </Badge>
              )}
            </div>
            <div
              className="animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              <CardTitle className="text-xl text-gradient-primary">
                {event.title}
              </CardTitle>
            </div>
            <div 
              className="space-y-2 text-sm text-muted-foreground animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{event.date ? event.date : ''}</span>
              </div>
              {event.time && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
              )}
              {event.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div
              className="animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                {event.description}
              </CardDescription>
            </div>

            {event.tags && (
              <div 
                className="flex flex-wrap gap-2 mb-4 animate-fade-in"
                style={{ animationDelay: '0.6s' }}
              >
                {event.tags.map((tag: string, tagIndex: number) => (
                  <div
                    key={tagIndex}
                    className="animate-scale-in magnetic"
                    style={{ animationDelay: `${0.7 + tagIndex * 0.1}s` }}
                  >
                    <Badge variant="outline" className="text-xs glow-border">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  </div>
                ))}
              </div>
            )}

            {isUpcoming && event.registrationLink && (
              <div
                className="animate-fade-in"
                style={{ animationDelay: '0.8s' }}
              >
                {event.status === 'planning' ? (
                  <Button className="w-full btn-glow" disabled>
                    Registration Coming Soon
                  </Button>
                ) : (
                  <Button className="w-full transition-transform duration-200 hover:scale-105 btn-glow" asChild>
                    <a href={event.registrationLink}>
                      Register Now
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={vantaRef} className="pt-20 pb-20 bg-gradient-hero relative overflow-hidden" style={{ marginTop: '0px' }}>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 
              className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-800 ease-out float-3d ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <span className="text-gradient-primary">Events &</span>
              <span className="text-foreground"> Workshops</span>
            </h1>
            <p 
              className={`text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed transition-all duration-800 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              Join our community events, workshops, and research symposiums to expand your knowledge
              and connect with fellow researchers.
            </p>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-600 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-12 glass-effect glow-pulse">
                <TabsTrigger value="upcoming" className="text-lg py-3 magnetic">
                  <Calendar className="w-5 h-5 mr-2" />
                  Upcoming Events
                </TabsTrigger>
                <TabsTrigger value="past" className="text-lg py-3 magnetic">
                  <Users className="w-5 h-5 mr-2" />
                  Past Events
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="space-y-8">
                {upcomingEvents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {upcomingEvents.map((event, index) => (
                      <EventCard key={event.id} event={event} isUpcoming={true} index={index} />
                    ))}
                  </div>
                ) : (
                  <div 
                    className={`text-center py-16 transition-all duration-600 ease-out ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  >
                    <div
                      className="transition-all duration-800 ease-out"
                      style={{ transitionDelay: '0.2s' }}
                    >
                      <Calendar className="w-16 h-16 mx-auto mb-4 text-muted-foreground animate-bounce" />
                    </div>
                    <h3 
                      className="text-2xl font-semibold text-muted-foreground mb-2 transition-all duration-600 ease-out"
                      style={{ transitionDelay: '0.4s' }}
                    >
                      No Upcoming Events
                    </h3>
                    <p 
                      className="text-muted-foreground transition-all duration-600 ease-out"
                      style={{ transitionDelay: '0.6s' }}
                    >
                      Check back soon for our latest workshops and events!
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="past" className="space-y-8">
                {pastEvents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pastEvents.map((event, index) => (
                      <EventCard key={event.id} event={event} isUpcoming={false} index={index} />
                    ))}
                  </div>
                ) : (
                  <div 
                    className={`text-center py-16 transition-all duration-600 ease-out ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  >
                    <div
                      className="transition-all duration-800 ease-out"
                      style={{ transitionDelay: '0.2s' }}
                    >
                      <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground animate-bounce" />
                    </div>
                    <h3 
                      className="text-2xl font-semibold text-muted-foreground mb-2 transition-all duration-600 ease-out"
                      style={{ transitionDelay: '0.4s' }}
                    >
                      No Past Events
                    </h3>
                    <p 
                      className="text-muted-foreground transition-all duration-600 ease-out"
                      style={{ transitionDelay: '0.6s' }}
                    >
                      Our event history will appear here as we host more activities.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-card/30 relative overflow-hidden">
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 
            className={`text-4xl font-bold mb-6 transition-all duration-800 ease-out float-3d ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <span className="text-gradient-primary">Want to</span>
            <span className="text-foreground"> Get Involved?</span>
          </h2>
          <p 
            className={`text-xl text-muted-foreground mb-8 leading-relaxed transition-all duration-800 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Join our community to stay updated on upcoming events and workshops.
          </p>
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-800 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <div className="transition-transform duration-200 hover:scale-105">
              <Button size="lg" className="btn-glow glass-effect" asChild>
                <a href="mailto:dsclub.cluster@vips.edu">
                  Subscribe to Updates
                </a>
              </Button>
            </div>
            <div className="transition-transform duration-200 hover:scale-105">
              <Button variant="outline" size="lg" className="btn-glow glass-effect" asChild>
                <Link to="/contact">
                  Follow Us on Social
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Events;