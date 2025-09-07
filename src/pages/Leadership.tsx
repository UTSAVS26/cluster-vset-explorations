import { Mail, Linkedin, Github, Users, Award, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { teamData } from '@/data/teamData';
import { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import { FaTwitter, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Declare VANTA type for TypeScript
declare global {
  interface Window {
    VANTA: any;
  }
}

// Styled Components for Uiverse.io Card Design
const CardContainer = styled.div`
  width: 336px;
  height: 399px;
  background: linear-gradient(135deg, #0B0B1A 0%, #1a0a2e 50%, #0B0B1A 100%);
  border-radius: 32px;
  padding: 3px;
  position: relative;
  box-shadow: rgba(108, 99, 255, 0.3) 0px 20px 40px -20px;
  transition: all 0.5s ease-in-out;
  margin: 0 auto;
  border: 1px solid rgba(108, 99, 255, 0.2);
  
  &:hover {
    border-top-left-radius: 55px;
    box-shadow: rgba(108, 99, 255, 0.5) 0px 30px 60px -20px;
    border-color: rgba(108, 99, 255, 0.4);
  }
`;

const MailButton = styled.button`
  position: absolute;
  right: 2rem;
  top: 1.4rem;
  background: rgba(108, 99, 255, 0.1);
  border: 1px solid rgba(108, 99, 255, 0.3);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  svg {
    stroke: #6C63FF;
    stroke-width: 2px;
    transition: all 0.3s ease;
  }
  
  &:hover {
    background: rgba(0, 207, 255, 0.2);
    border-color: #00CFFF;
    transform: scale(1.1);
  }
  
  &:hover svg {
    stroke: #00CFFF;
  }
`;

const ProfilePic = styled.div`
  position: absolute;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  top: 3px;
  left: 3px;
  border-radius: 29px;
  z-index: 1;
  border: 0px solid #6C63FF;
  overflow: hidden;
  transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;
  
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: center;
    transition: all 0.5s ease-in-out 0s;
  }
  
  ${CardContainer}:hover & {
    width: 120px;
    height: 120px;
    aspect-ratio: 1;
    top: 15px;
    left: 15px;
    border-radius: 50%;
    z-index: 3;
    border: 7px solid #6C63FF;
    box-shadow: rgba(108, 99, 255, 0.4) 0px 10px 20px 0px;
    transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
  }
  
  ${CardContainer}:hover &:hover {
    transform: scale(1.1);
    border-radius: 20px;
  }
  
  ${CardContainer}:hover & img {
    object-fit: contain;
    transform: scale(1.1);
    object-position: center;
    transition: all 0.5s ease-in-out 0.5s;
  }
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 3px;
  left: 3px;
  right: 3px;
  background: linear-gradient(135deg, #6C63FF 0%, #00CFFF 100%);
  top: 75%;
  border-radius: 29px;
  z-index: 2;
  box-shadow: rgba(108, 99, 255, 0.3) 0px 5px 15px 0px inset;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  
  ${CardContainer}:hover & {
    top: 25%;
    border-radius: 80px 29px 29px 29px;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
  }
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 1.5rem;
  right: 1.5rem;
  height: 200px;
  padding-top: 1rem;
  
  .name {
    display: block;
    font-size: 1.3rem;
    color: white;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .role {
    display: block;
    font-size: 0.9rem;
    color: #FFD447;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.5rem;
    opacity: 1;
  }
  
  .about-me {
    display: block;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.9);
    margin-top: 0.5rem;
    line-height: 1.5;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
  }
  
  ${CardContainer}:hover & {
    top: 40px;
    left: 1rem;
    right: 1rem;
    height: auto;
    padding-top: 0.5rem;
  }
  
  ${CardContainer}:hover & .name {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }
  
  ${CardContainer}:hover & .role {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  
  ${CardContainer}:hover & .about-me {
    opacity: 1;
    transform: translateY(0);
    margin-top: 0;
  }
`;

const BottomBottom = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  ${CardContainer}:hover & {
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  opacity: 1;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }
  
  a:hover {
    background: rgba(255, 212, 71, 0.2);
    transform: translateY(-2px);
  }
  
  svg {
    height: 18px;
    fill: white;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  a:hover svg {
    fill: #FFD447;
    transform: scale(1.1);
  }
`;

const ContactButton = styled.button`
  background: rgba(255, 255, 255, 0.9);
  color: #6C63FF;
  border: none;
  border-radius: 20px;
  font-size: 0.7rem;
  padding: 0.5rem 0.8rem;
  box-shadow: rgba(108, 99, 255, 0.3) 0px 5px 10px 0px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  
  &:hover {
    background: #FFD447;
    color: #0B0B1A;
    transform: translateY(-1px);
    box-shadow: rgba(255, 212, 71, 0.4) 0px 8px 15px 0px;
  }
`;

// CoreMembers component - using data from teamData.js
const members = teamData.coreTeam.map(member => ({
  name: member.name,
  role: member.role,
  img: member.image,
  bio: member.bio,
  github: member.github !== "#" ? member.github : null,
  linkedin: member.linkedin !== "#" ? member.linkedin : null,
  x: member.X || null,
  email: member.email || null,
}));

const CoreMemberCard = ({ member }: { member: any }) => {
  return (
    <CardContainer>
      {member.email && (
        <MailButton onClick={() => window.open(`mailto:${member.email}`, '_blank')}>
          <Mail size={24} />
        </MailButton>
      )}
      
      <ProfilePic>
        <img src={member.img} alt={member.name} />
      </ProfilePic>
      
      <Bottom>
        <Content>
          <span className="name">{member.name}</span>
          <span className="role">{member.role}</span>
          <span className="about-me">{member.bio}</span>
        </Content>
        
        <BottomBottom>
          <SocialLinksContainer>
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            )}
            {member.x && (
              <a href={member.x} target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={20} />
              </a>
            )}
            {member.github && (
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            )}
          </SocialLinksContainer>
          
          <div className="text-xs text-white/70 font-medium tracking-wide">
            Hover here to know more
          </div>
        </BottomBottom>
      </Bottom>
    </CardContainer>
  );
};

const CoreMembers = () => {
  return (
    <div className="w-full py-16">
      {/* Enhanced Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gradient-primary">
          Our Core Members
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Meet the passionate leaders driving innovation and collaboration at CLUSTER-VSET
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {members.map((member, index) => (
          <CoreMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

const Leadership = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const statsRef = useRef(null);
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    const statsElements = statsRef.current?.querySelectorAll('.stat-number');
    
    if (statsElements) {
      statsElements.forEach((element, index) => {
        const finalValue = element.textContent;
        const numericValue = parseInt(finalValue.replace(/\D/g, ''));
        
        // Set initial value to 0
        element.textContent = '0' + (finalValue.includes('+') ? '+' : '');
        
        gsap.to(element, {
          textContent: finalValue,
          duration: 2,
          ease: "power2.out",
          delay: index * 0.2,
          onUpdate: function() {
            const currentValue = Math.round(this.progress() * numericValue);
            element.textContent = currentValue + (finalValue.includes('+') ? '+' : '');
          },
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }
  }, []);

  useEffect(() => {
    const initVanta = () => {
      if (!vantaEffect && vantaRef.current && window.VANTA && window.VANTA.TOPOLOGY) {
        try {
          setVantaEffect(
            window.VANTA.TOPOLOGY({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x4e8596,
              backgroundColor: 0x1d0838
            })
          );
        } catch (error) {
          console.log('Vanta topology initialization failed:', error);
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

  // Glass effect styles
  const glassStyles = `
    .container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    .container .glass {
      position: relative;
      width: 280px;
      height: 320px;
      background: linear-gradient(#fff2, transparent);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: 0.5s;
      border-radius: 15px;
      margin: 0 -30px;
      backdrop-filter: blur(10px);
      transform: rotate(calc(var(--r) * 1deg));
      padding: 20px;
    }

    .container:hover .glass {
      transform: rotate(0deg);
      margin: 0 10px;
    }

    .container .glass::before {
      content: attr(data-text);
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 50px;
      background: rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: bold;
      font-size: 1.1em;
      border-radius: 0 0 15px 15px;
    }
    
    .container .glass svg {
      font-size: 3.5em;
      fill: #fff;
      margin-bottom: 15px;
    }

    .container .glass .description {
      color: #fff;
      text-align: center;
      font-size: 0.9em;
      line-height: 1.4;
      margin-top: 10px;
      opacity: 0.9;
      max-width: 220px;
    }

    /* Mobile Responsive Styles */
    @media (max-width: 768px) {
      .container {
        flex-direction: column;
        gap: 30px;
        padding: 0 20px;
      }

      .container .glass {
        width: 100%;
        max-width: 320px;
        height: 280px;
        margin: 0;
        transform: rotate(0deg) !important;
        padding: 24px 20px;
      }

      .container:hover .glass {
        margin: 0;
        transform: rotate(0deg);
      }

      .container .glass::before {
        height: 45px;
        font-size: 1em;
      }

      .container .glass svg {
        font-size: 2.8em;
        margin-bottom: 12px;
      }

      .container .glass .description {
        font-size: 0.85em;
        line-height: 1.5;
        max-width: 100%;
        padding: 0 10px;
      }
    }

    @media (max-width: 480px) {
      .container .glass {
        height: 260px;
        padding: 20px 16px;
      }

      .container .glass::before {
        height: 40px;
        font-size: 0.9em;
      }

      .container .glass svg {
        font-size: 2.5em;
        margin-bottom: 10px;
      }

      .container .glass .description {
        font-size: 0.8em;
        line-height: 1.4;
      }
    }
  `;
  const TeamMemberCard = ({ member, isCore = false }: { member: any, isCore?: boolean }) => (
    <Card className="text-center hover-glow-primary transition-all duration-300 group bg-card/50">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-gradient-primary group-hover:text-gradient-secondary transition-colors">
          {member.name}
        </CardTitle>
        <CardDescription className="font-medium text-secondary text-sm">
          {member.role}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex justify-center space-x-2">
          {member.email && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hover:bg-primary/10 w-8 h-8 p-0"
            >
              <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
                <Mail className="w-3 h-3" />
              </a>
            </Button>
          )}
          {member.linkedin && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hover:bg-blue-500/10 hover:border-blue-500/50 w-8 h-8 p-0"
            >
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn`}>
                <Linkedin className="w-3 h-3" />
              </a>
            </Button>
          )}
          {member.github && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hover:bg-gray-500/10 hover:border-gray-500/50 w-8 h-8 p-0"
            >
              <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s GitHub`}>
                <Github className="w-3 h-3" />
              </a>
            </Button>
          )}
          {member.X && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hover:bg-black/10 hover:border-black/50 w-8 h-8 p-0"
            >
              <a href={member.X} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s X (Twitter)`}>
                <FaXTwitter className="w-3 h-3" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const organizationStats = [
    { icon: Users, label: 'Total Members', value: `100+`, color: 'text-blue-400' },
    { icon: Award, label: 'Years Active', value: '1+', color: 'text-green-400' },
    { icon: Target, label: 'Projects Led', value: '30+', color: 'text-purple-400' },
    { icon: Zap, label: 'Events Organized', value: '5+', color: 'text-orange-400' }
  ];

  return (
    <div className="min-h-screen ">
      <style dangerouslySetInnerHTML={{ __html: glassStyles }} />
      {/* Hero Section */}
      <section ref={vantaRef} className="py-20 bg-gradient-hero relative overflow-hidden">
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
      <section className="py-20" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {organizationStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover-glow-primary transition-all duration-300 
                             bg-gradient-to-br from-purple-900/80 via-blue-900/70 to-cyan-900/60 
                             border border-purple-800/50 backdrop-blur-sm shadow-lg"
                >
                  <CardContent className="pt-6">
                    <IconComponent className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                    <div className="text-3xl font-bold text-gradient-primary mb-2 stat-number">
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

      {/* Core Members Carousel */}
      <section className="pt-0 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CoreMembers />
        </div>
      </section>

      {/* Extended Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 md:py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gradient-primary">
              Our Leadership Philosophy
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              The principles that guide how we lead and serve our community
            </p>
          </div>

          <div className="flex justify-center">
            <div className="container">
              <div data-text="Collaborate" style={{ "--r": -15 } as React.CSSProperties} className="glass">
                <svg viewBox="0 0 640 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M144 0a48 48 0 1 0 0 96 48 48 0 1 0 0-96zM96 160a64 64 0 1 1 128 0A64 64 0 1 1 96 160zM48 224H192c0 17.7 14.3 32 32 32s32-14.3 32-32H384c0 17.7 14.3 32 32 32s32-14.3 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                  ></path>
                </svg>
                <div className="description">
                  We believe in shared leadership where every voice matters and decisions are made collectively for the benefit of our entire community.
                </div>
              </div>
              <div data-text="Innovate" style={{ "--r": 5 } as React.CSSProperties} className="glass">
                <svg viewBox="0 0 640 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                  ></path>
                </svg>
                <div className="description">
                  Every decision we make is guided by our commitment to advancing collaborative learning and innovative research in our academic community.
                </div>
              </div>
              <div data-text="Empower" style={{ "--r": 25 } as React.CSSProperties} className="glass">
                <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                  ></path>
                </svg>
                <div className="description">
                  We strive to empower every member to reach their potential and contribute meaningfully to research and academic excellence.
                </div>
              </div>
            </div>
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