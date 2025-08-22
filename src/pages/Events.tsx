import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ExternalLink, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { eventsData } from '@/data/eventsData';

const Events = () => {
  const upcomingEvents = eventsData.filter(event => event.type === 'upcoming');
  const pastEvents = eventsData.filter(event => event.type === 'past');

  const EventCard = ({ event, isUpcoming = true }: { event: any, isUpcoming?: boolean }) => (
    <Card className="hover-glow-primary transition-all duration-300 bg-card/50">
      <div className="aspect-video overflow-hidden rounded-t-lg">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {isUpcoming ? 'Upcoming' : 'Past Event'}
          </Badge>
          {event.sponsor && (
            <Badge variant="outline" className="text-xs">
              {event.sponsor}
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl text-gradient-primary">
          {event.title}
        </CardTitle>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
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
        <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
          {event.description}
        </CardDescription>

        {event.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {event.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {isUpcoming && event.registrationLink && (
          event.status === 'planning' ? (
            <Button className="w-full" disabled>
              Registration Coming Soon
            </Button>
          ) : (
            <Button className="w-full" asChild>
              <a href={event.registrationLink}>
                Register Now
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          )
        )}
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
              <span className="text-gradient-primary">Events &</span>
              <span className="text-foreground"> Workshops</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Join our community events, workshops, and research symposiums to expand your knowledge
              and connect with fellow researchers.
            </p>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="upcoming" className="text-lg py-3">
                <Calendar className="w-5 h-5 mr-2" />
                Upcoming Events
              </TabsTrigger>
              <TabsTrigger value="past" className="text-lg py-3">
                <Users className="w-5 h-5 mr-2" />
                Past Events
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-8">
              {upcomingEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {upcomingEvents.map((event) => (
                    <EventCard key={event.id} event={event} isUpcoming={true} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Calendar className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-2xl font-semibold text-muted-foreground mb-2">
                    No Upcoming Events
                  </h3>
                  <p className="text-muted-foreground">
                    Check back soon for our latest workshops and events!
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="past" className="space-y-8">
              {pastEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pastEvents.map((event) => (
                    <EventCard key={event.id} event={event} isUpcoming={false} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-2xl font-semibold text-muted-foreground mb-2">
                    No Past Events
                  </h3>
                  <p className="text-muted-foreground">
                    Our event history will appear here as we host more activities.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gradient-primary">Want to</span>
            <span className="text-foreground"> Get Involved?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join our community to stay updated on upcoming events and workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:cluster.vset@university.edu">
                Subscribe to Updates
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Follow Us on Social
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;