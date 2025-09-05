import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, Users, Zap, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin, ScrollTrigger);
import { motion } from 'framer-motion';
import PhotoStack from '@/components/PhotoStack';
import Hyperspeed, { hyperspeedPresets } from '@/components/Hyperspeed';
import CircularGallery from '@/components/CircularGallery';
import CurvedLoop from '@/components/CurvedLoop';
import ClickSpark from '@/components/ClickSpark';
// Import your images
import image1 from '@/assets/1.jpg';
import image2 from '@/assets/2.jpeg';
import image3 from '@/assets/3.jpeg';
import image4 from '@/assets/4.jpeg';
 

const Index = () => {
  const highlightsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLUListElement>(null);
  // GSAP Hero Animations
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    const titleText = "Cluster —\nThe Data Science Club\nof VSET";
    
    // Animate tagline first
    tl.fromTo(taglineRef.current, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    // Show headline container
    .fromTo(headlineRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    )
    // Custom typing animation
    .call(() => {
      if (headlineRef.current) {
        headlineRef.current.textContent = "";
        let i = 0;
        const typeWriter = () => {
          if (i < titleText.length) {
            headlineRef.current!.textContent += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
          }
        };
        typeWriter();
      }
    })
    // Animate subtext with stagger
    .fromTo(subtextRef.current?.children || [],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.3, ease: "power2.out" },
      "+=1"
    )
    // Animate buttons
    .fromTo(buttonsRef.current?.children || [],
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "back.out(1.7)" },
      "-=0.5"
    );
  }, []);

  // GSAP Story Text Animations
  useEffect(() => {
    const textElements = document.querySelectorAll('.gsap-text-reveal');
    
    textElements.forEach((element, index) => {
      gsap.fromTo(element, 
        {
          opacity: 0,
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.3
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Slider navigation function
  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector<HTMLLIElement>(".expanding-card-item");
    if (!card) return;

    const cardWidth = card.offsetWidth + 16; // width + gap
    sliderRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

     // Expanding cards styles and PhotoStack animations
   const expandingCardsStyles = `
     /* PhotoStack floating animations */
     @keyframes float-0 {
       0%, 100% { transform: translateY(0px) rotate(var(--rotation)); }
       50% { transform: translateY(-8px) rotate(var(--rotation)); }
     }
     
     @keyframes float-1 {
       0%, 100% { transform: translateY(0px) rotate(var(--rotation)); }
       50% { transform: translateY(-12px) rotate(var(--rotation)); }
     }
     
     @keyframes float-2 {
       0%, 100% { transform: translateY(0px) rotate(var(--rotation)); }
       50% { transform: translateY(-6px) rotate(var(--rotation)); }
     }
     
     .animate-float-0 {
       animation: float-0 4s ease-in-out infinite;
     }
     
     .animate-float-1 {
       animation: float-1 5s ease-in-out infinite;
     }
     
     .animate-float-2 {
       animation: float-2 3.5s ease-in-out infinite;
     }
     
     /* PhotoStack hover effects */
     .photostack-img {
       transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
     }
     
     .photostack-img:hover {
       transform: scale(1.15) rotate(var(--rotation)) !important;
       z-index: 100 !important;
       box-shadow: 0 25px 50px rgba(0,0,0,0.4) !important;
     }
    .expanding-cards-grid {
      display: grid;
      container-type: inline-size;
      gap: 12px;
      list-style-type: none;
      justify-content: center;
      padding: 0;
      margin: 0 auto;
      max-width: calc(100% - 2rem);
      transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    /* Desktop: Expanding cards layout */
    @media (min-width: 1280px) {
      .expanding-cards-grid {
        grid-template-columns: 10fr 1fr 1fr 1fr 1fr 1fr 1fr;
        height: clamp(500px, 60dvh, 700px);
        width: 1000px;
      }
    }
    
    /* Tablet: 3 columns */
    @media (min-width: 1024px) and (max-width: 1279px) {
      .expanding-cards-grid {
        grid-template-columns: repeat(3, 1fr);
        height: auto;
        gap: 16px;
      }
    }
    
    /* Small tablet: 2 columns */
    @media (min-width: 640px) and (max-width: 1023px) {
      .expanding-cards-grid {
        grid-template-columns: repeat(2, 1fr);
        height: auto;
        gap: 16px;
      }
    }
    
    /* Mobile: Horizontal slider */
    @media (max-width: 639px) {
      .expanding-cards-grid {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        gap: 16px;
        padding: 0 16px;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
      
      .expanding-cards-grid::-webkit-scrollbar {
        display: none;
      }
    }

    .expanding-card-item {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      position: relative;
      overflow: hidden;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Desktop card sizing */
    @media (min-width: 1280px) {
      .expanding-card-item {
        min-width: clamp(3rem, 10cqi, 120px);
      }
    }
    
    /* Tablet card styling */
    @media (min-width: 640px) and (max-width: 1279px) {
      .expanding-card-item {
        min-height: 200px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    }
    
    /* Mobile slider card styling */
    @media (max-width: 639px) {
      .expanding-card-item {
        min-width: calc(100vw - 80px);
        max-width: 320px;
        min-height: 200px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-shrink: 0;
        scroll-snap-align: center;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
    }

    .expanding-card-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
      border-radius: 16px;
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
    }

    .expanding-card-item:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.15),
        0 0 0 1px rgba(255, 255, 255, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
      border-color: rgba(255, 255, 255, 0.4);
    }

    .expanding-card-item:hover::before {
      opacity: 1;
    }

    .expanding-card-item article {
      width: calc(var(--article-width) * 1px);
      height: 100%;
      position: absolute;
      font-family: inherit;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 2.5rem;
      padding-inline: calc(clamp(3rem, 10cqi, 120px) * 0.5 - 12px);
      padding-bottom: 3rem;
      overflow: hidden;
    }


    [data-active='true'] article :is(a, p, h3, svg) {
      opacity: 1;
    }

    [data-active='true'] article :is(a, p) {
      transition-delay: 0.15s;
    }

    /* Mobile/Tablet: Show all content without hover */
    @media (max-width: 1023px) {
      .expanding-cards-grid {
        grid-template-columns: 1fr;
        height: auto;
        gap: 1rem;
        width: 100%;
      }
      
      .expanding-card-item {
        min-height: 250px;
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(15px);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 1rem;
        padding: 1.25rem;
        transition: none;
      }
      
      .expanding-card-item article {
        display: flex;
        flex-direction: column;
        height: 100%;
        text-align: center;
        opacity: 1;
        visibility: visible;
        position: static;
        transform: none;
      }
      
      .expanding-card-item article h3 {
        font-size: 1.1rem;
        font-weight: 600;
        color: #6C63FF;
        margin-bottom: 0.75rem;
        position: static;
        transform: none;
        rotate: 0deg;
      }
      
      .expanding-card-item article p {
        font-size: 0.9rem;
        line-height: 1.4;
        color: #EDEDED;
        margin: 0.75rem 0;
        flex-grow: 1;
        opacity: 1;
        visibility: visible;
        max-width: none;
      }
      
      .expanding-card-item article svg {
        width: 2rem;
        height: 2rem;
        color: #00CFFF;
        margin: 0.5rem auto;
        opacity: 1;
        visibility: visible;
      }
      
    }
    
    /* Desktop: Hide content until hover */
    @media (min-width: 1024px) {
      .expanding-card-item article p {
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }
      
      .expanding-card-item:hover article p {
        opacity: 1;
        visibility: visible;
      }
      
      .expanding-card-item article h3 {
        position: absolute;
        top: 1.5rem;
        left: calc(clamp(3rem, 10cqi, 120px) * 0.5);
        transform-origin: 0 50%;
        rotate: 90deg;
        font-size: 0.95rem;
        font-weight: 400;
        text-transform: uppercase;
        white-space: nowrap;
        margin: 0;
        opacity: 0.7;
      }
      
      .expanding-card-item article svg {
        width: 20px;
        height: 20px;
        opacity: 0.7;
      }
      
      .expanding-card-item article {
        width: calc(var(--article-width) * 1px);
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 2.5rem;
        padding-inline: calc(clamp(3rem, 10cqi, 120px) * 0.5 - 12px);
        padding-bottom: 3rem;
        overflow: hidden;
      }
    }
  `;

  useEffect(() => {
    const list = document.querySelector<HTMLUListElement>("#expanding-cards");
    if (!list) return;
    const items = list.querySelectorAll<HTMLLIElement>("li");

    const setIndex = (event: Event) => {
      const closest = (event.target as HTMLElement)?.closest("li");
      if (closest) {
        const index = [...items].indexOf(closest);
        const cols = new Array(list.children.length)
          .fill(null)
          .map((_, i) => {
            items[i].dataset.active = (index === i).toString();
            return index === i ? "10fr" : "1fr";
          })
          .join(" ");
        list.style.setProperty("grid-template-columns", cols);
      }
    };

    const resync = () => {
      const w = Math.max(
        ...[...items].map((i) => {
          return i.offsetWidth;
        })
      );
      list.style.setProperty("--article-width", w.toString());
    };

    list.addEventListener("focus", setIndex, true);
    list.addEventListener("click", setIndex);
    list.addEventListener("pointermove", setIndex);
    window.addEventListener("resize", resync);

    resync();

    return () => {
      list.removeEventListener("focus", setIndex, true);
      list.removeEventListener("click", setIndex);
      list.removeEventListener("pointermove", setIndex);
      window.removeEventListener("resize", resync);
    };
  }, []);




  return (
    <ClickSpark
      sparkColor='#6C63FF'
      sparkSize={12}
      sparkRadius={20}
      sparkCount={6}
      duration={500}
    >
      <div className="min-h-screen">
        <style dangerouslySetInnerHTML={{ __html: expandingCardsStyles }} />
        
        {/* Hero Section: Hyperspeed with content */}
        <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <Hyperspeed effectOptions={hyperspeedPresets.one} />
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tagline */}
          <div ref={taglineRef} className="mb-6 opacity-0">
            <p className="text-xs md:text-sm text-cyan-400 font-mono tracking-wider">
              Cluster Ideas. Create Impact.
            </p>
          </div>
          
          {/* Main Headline */}
          <h1 ref={headlineRef} className="text-3xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6 leading-snug text-white opacity-0">
            {/* Text will be animated via GSAP */}
          </h1>
          
          {/* Subtext */}
          <div ref={subtextRef} className="mb-8 max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-white font-inter leading-relaxed mb-4 opacity-0">
              We're not just crunching numbers.
            </p>
            <p className="text-sm md:text-base text-muted-foreground font-inter leading-relaxed opacity-0">
              We're a community of learners, builders, and explorers clustering around ideas that matter.
              <br />
              From AI & ML to real-world projects, Cluster is where VSET minds connect, create, and grow together.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Join the Cluster Button */}
          <Link to="/contact" className="group relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden
            underline underline-offset-2 origin-left duration-500 
            hover:decoration-2 hover:text-rose-300 hover:border-rose-300 
            hover:underline hover:underline-offset-4 
            before:absolute before:w-12 before:h-12 before:content-[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg before:duration-500 group-hover:before:duration-500 hover:before:right-12 hover:before:-bottom-8 
            after:absolute after:z-10 after:w-20 after:h-20 after:content-[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg after:duration-500 group-hover:after:duration-500 hover:after:-right-8 flex items-center">
            Join the Cluster
          </Link>

          {/* See What We Do Button */}
          <Link to="/events" className="group relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden
          underline underline-offset-2 origin-left duration-500 
          hover:decoration-2 hover:text-cyan-300 hover:border-cyan-300 
          hover:underline hover:underline-offset-4 
          before:absolute before:w-12 before:h-12 before:content-[''] before:right-1 before:top-1 before:z-10 before:bg-blue-500 before:rounded-full before:blur-lg before:duration-500 group-hover:before:duration-500 hover:before:right-12 hover:before:-bottom-8 
          after:absolute after:z-10 after:w-20 after:h-20 after:content-[''] after:bg-cyan-300 after:right-8 after:top-3 after:rounded-full after:blur-lg after:duration-500 group-hover:after:duration-500 hover:after:-right-8 flex items-center">
            See What We Do
          </Link>
        </div>
        </div>
        </section>

        {/* CurvedLoop Section */}
        <CurvedLoop 
          marqueeText="CLUSTER ✦ VSET ✦ Data ✦ Science ✦ Research ✦ Innovation ✦"
          speed={1}
          curveAmount={0}
          direction="right"
          interactive={true}
          className="text-purple-400"
        />

      {/* Story / Mission / Vision */}
      <section className="p-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="relative w-full min-h-[85vh] my-16 p-12 rounded-[40px] shadow-[0_0_50px_rgba(108,99,255,0.2)] box-border bg-gradient-to-br from-card via-card to-card/80 border border-neon-primary/20 backdrop-blur-sm story-container">
            <h2 className="text-5xl md:text-7xl font-orbitron font-black mb-8 story-title">
              <span className="text-cyan-400 font-mono tracking-wider">Our</span>
              <span className="text-yellow-400 ml-4 story-word"> Story</span>
            </h2>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-start mt-12">
              <div className="w-full max-w-sm mx-auto lg:justify-self-center lg:mt-8 mobile-photo-container">
                <PhotoStack images={[image1, image2, image3]} />
              </div>
              <div className="w-full text-left story-content">
                <p className="text-lg lg:text-xl text-white/90 font-inter mb-6 leading-relaxed gsap-text-reveal">
                  CLUSTER-VSET was founded in 2020 with a vision to create a vibrant community of data science enthusiasts and researchers.
                  Since then, we have grown to become one of the most active and influential student organizations on campus,
                  fostering a culture of innovation, collaboration, and academic excellence.
                </p>
                <p className="text-lg lg:text-xl text-white/90 font-inter leading-relaxed gsap-text-reveal">
                  Our journey began with a simple idea: to provide students with the resources, mentorship, and opportunities
                  to excel in data science and statistics. Today, we stand as a testament to the power of collective effort
                  and the transformative impact of a supportive community.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-16">
            <div className="relative w-full min-h-[50vh] p-8 rounded-[30px] shadow-[0_0_30px_rgba(108,99,255,0.15)] box-border bg-gradient-to-br from-card via-card to-card/90 border border-neon-primary/15">
              <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-purple-400 mb-4 text-center">
                Our Mission
              </h2>
              <p className="text-base text-white/90 font-inter mb-4 leading-relaxed text-center">
                To foster collaborative learning and innovative research in data science and statistics,
                empowering students to make meaningful contributions to academic knowledge and society.
              </p>
              <p className="text-base text-white/80 font-inter leading-relaxed text-center">
                We bridge the gap between theoretical knowledge and practical application through
                hands-on projects, peer collaboration, and cutting-edge research initiatives.
              </p>
            </div>

            <div className="relative w-full min-h-[50vh] p-8 rounded-[30px] shadow-[0_0_30px_rgba(0,207,255,0.15)] box-border bg-gradient-to-br from-card via-card to-card/90 border border-neon-cyan/15">
              <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-cyan-400 mb-4 text-center">
                Our Vision
              </h2>
              <p className="text-base text-white/90 font-inter mb-4 leading-relaxed text-center">
                To become the leading student organization in collaborative research, setting new
                standards for academic excellence and innovation in data science education.
              </p>
              <p className="text-base text-white/80 font-inter leading-relaxed text-center">
                We envision a future where every student has the tools, knowledge, and network
                to contribute meaningfully to research and drive positive change in their field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights - Expanding Cards */}
      <section className="py-20" ref={highlightsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16 highlights-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-purple-400 font-mono">What We</span> 
              <span className="text-foreground"> Offer</span>
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
              Discover the opportunities and resources available through CLUSTER-VSET
            </p>
          </motion.div>

          <div className="relative w-full">
            {/* Left Arrow (only visible on mobile) */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition md:hidden"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Arrow (only visible on mobile) */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition md:hidden"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <ul
              ref={sliderRef}
              id="expanding-cards"
              className="expanding-cards-grid"
            >
            {[{
              title: "Events & Workshops",
              desc: "Join our regular workshops, seminars, and research symposiums to expand your knowledge and network. Connect with experts, learn new skills, and build lasting relationships with fellow researchers.",
              active: true,
              link: "/events",
              icon: Calendar
            },
            {
              title: "Cutting-edge Projects",
              desc: "Collaborate on real-world data science projects that make a difference in academic research. Work on innovative solutions that address real challenges in various fields.",
              active: false,
              link: "/projects",
              icon: Zap
            },
            {
              title: "Learning Resources",
              desc: "Access our curated collection of guides, tools, and datasets for your research journey. From beginner tutorials to advanced methodologies, we have resources for every level.",
              active: false,
              link: "/resources",
              icon: BookOpen
            },
            {
              title: "Research Community",
              desc: "Connect with like-minded researchers and collaborate on groundbreaking academic projects. Build your network and contribute to meaningful research initiatives.",
              active: false,
              link: "/leadership",
              icon: Users
            },
            {
              title: "Innovation Hub",
              desc: "Explore cutting-edge technologies and methodologies in data science. Stay ahead of the curve with the latest trends and developments in the field.",
              active: false,
              link: "/projects",
              icon: Zap
            },
            {
              title: "Academic Excellence",
              desc: "Strive for academic excellence through rigorous research practices and collaborative learning. Develop skills that will set you apart in your academic and professional journey.",
              active: false,
              link: "/about",
              icon: BookOpen
            },
            {
              title: "Future Leaders",
              desc: "Develop leadership skills and prepare for future roles in academia and industry. Take on responsibilities that will shape the next generation of researchers.",
              active: false,
              link: "/leadership",
              icon: Users
            }].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <li
                  key={idx}
                  data-active={item.active}
                  className="expanding-card-item"
                >
                  <article>
                    <h3>{item.title}</h3>
                    <IconComponent />
                    <p>{item.desc}</p>
                  </article>
                </li>
              );
            })}
          </ul>
          </div>
        </div>
      </section>

      {/* Collaborations */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-purple-400 font-mono">Partnerships and Sponsorships</span>
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
              Explore our collaborative projects and partnerships
            </p>
          </div>
          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
          </div>
        </div>
      </section> */}


      {/* Call to Action */}
      <section className="py-20" ref={ctaRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-purple-400 font-mono">Ready to</span>
              <span className="text-foreground"> Join Us?</span>
            </h2>
            <p className="text-xl text-muted-foreground font-inter mb-8 leading-relaxed">
              Be part of a community that's shaping the future of collaborative research and data science education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="glow" size="xl" asChild className="btn-neon-primary">
                  <Link to="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="xl" asChild className="btn-neon-secondary border-secondary hover:border-secondary-glow hover:bg-secondary/10">
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </ClickSpark>
  );
};

export default Index;