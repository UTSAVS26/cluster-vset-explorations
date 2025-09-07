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
    
    const currentScroll = sliderRef.current.scrollLeft;
    const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    
    if (direction === "left") {
      // Scroll to previous card or beginning
      const newPosition = Math.max(0, currentScroll - 300);
      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    } else {
      // Scroll to next card or end
      const newPosition = Math.min(maxScroll, currentScroll + 300);
      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
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
    
    /* Desktop and Tablet: Expanding cards layout */
    @media (min-width: 768px) {
      .expanding-cards-grid {
        grid-template-columns: 10fr 1fr 1fr 1fr 1fr 1fr 1fr;
        height: clamp(500px, 60dvh, 700px);
        width: 1000px;
      }
    }
    
    /* Small tablet: 2 columns minimum */
    @media (min-width: 640px) and (max-width: 767px) {
      .expanding-cards-grid {
        grid-template-columns: repeat(2, 1fr);
        height: auto;
        gap: 16px;
      }
    }
    
    /* Mobile: Stacked cards layout */
    @media (max-width: 639px) {
      .expanding-cards-grid {
        display: block !important;
        position: relative;
        padding: 0 16px;
        width: 100%;
        max-width: none;
        grid-template-columns: none !important;
        height: auto;
        overflow: visible !important;
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
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .card-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 16px;
      z-index: 0;
    }

    .expanding-card-item::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.15);
      border-radius: 16px;
      pointer-events: none;
      z-index: 1;
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
    
    /* Mobile: Stacked cards */
    @media (max-width: 639px) {
      .expanding-card-item {
        position: sticky;
        top: 20px;
        width: calc(100% - 32px);
        min-height: 280px;
        max-height: 320px;
        margin: 0 auto 20px auto;
        padding: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.3);
        transform: none !important;
        z-index: var(--stack-index, 1);
        overflow: hidden;
      }
      
      /* Reverse z-index order so new cards overlap older ones */
      .expanding-card-item:nth-child(1) { --stack-index: 1; }
      .expanding-card-item:nth-child(2) { --stack-index: 2; }
      .expanding-card-item:nth-child(3) { --stack-index: 3; }
      .expanding-card-item:nth-child(4) { --stack-index: 4; }
      .expanding-card-item:nth-child(5) { --stack-index: 5; }
      .expanding-card-item:nth-child(6) { --stack-index: 6; }
      .expanding-card-item:nth-child(7) { --stack-index: 7; }
      
      .expanding-card-item:hover {
        transform: none !important;
      }
      
      /* Mobile card text styling */
      .expanding-card-item article h3 {
        font-size: 1rem !important;
        font-weight: 600;
        margin-bottom: 8px !important;
        line-height: 1.2;
      }
      
      .expanding-card-item article p {
        font-size: 0.8rem !important;
        line-height: 1.3 !important;
        margin: 0 !important;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
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
      transform: translateY(-8px);
      box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.15),
        0 0 0 1px rgba(255, 255, 255, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
      border-color: rgba(255, 255, 255, 0.4);
      background-size: cover !important;
      background-position: center !important;
      background-attachment: scroll !important;
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
      z-index: 2;
    }


    [data-active='true'] article :is(a, p, h3, svg) {
      opacity: 1;
    }

    [data-active='true'] article :is(a, p) {
      transition-delay: 0.15s;
    }

    /* Small tablet only: Show all content without hover */
    @media (min-width: 640px) and (max-width: 767px) {
      .expanding-card-item {
        min-height: 250px;
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(15px);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 1rem;
        padding: 1.25rem;
        transition: none;
        transform: none !important;
      }
      
      .expanding-card-item:hover {
        transform: none !important;
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
        z-index: 2;
      }
      
      .expanding-card-item article h3 {
        font-size: 1.1rem;
        font-weight: 600;
        color:rgb(255, 255, 255);
        margin-bottom: 0.75rem;
        position: static;
        transform: none;
        rotate: 0deg;
      }
    }

    /* Mobile: Show all content with red headings */
    @media (max-width: 639px) {
      .expanding-card-item article {
        display: flex;
        flex-direction: column;
        height: 100%;
        text-align: center;
        opacity: 1;
        visibility: visible;
        position: static;
        transform: none;
        z-index: 2;
      }
      
      .expanding-card-item article h3 {
        font-size: 1.1rem;
        font-weight: 600;
        color:rgb(251, 249, 249);
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
    
    /* Desktop: Show content only when active */
    @media (min-width: 1024px) {
      .expanding-card-item article p {
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }
      
      .expanding-card-item[data-active='true'] article p {
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

    // Set initial scroll position for mobile to start at beginning
    const setInitialScroll = () => {
      if (window.innerWidth <= 639 && sliderRef.current) {
        // Start at the very beginning to show first card
        sliderRef.current.scrollLeft = 0;
      }
    };

    list.addEventListener("focus", setIndex, true);
    list.addEventListener("click", setIndex);
    list.addEventListener("pointermove", setIndex);
    window.addEventListener("resize", resync);

    resync();
    setTimeout(setInitialScroll, 100); // Delay to ensure DOM is ready

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
                CLUSTER-VSET is a student-led club at VSET, founded in 2025, with the mission to empower students in data science and related fields. Our goal is to help students build meaningful projects, find the right community, and gain guidance through mentorship, events, and knowledge-sharing sessions.
                </p>
                <p className="text-lg lg:text-xl text-white/90 font-inter leading-relaxed gsap-text-reveal">
                We believe in fostering a culture of collaboration, learning, and innovation, connecting students with peers, experts, and resources to help them grow academically and professionally. Whether you are exploring data science for the first time or looking to refine your skills, CLUSTER-VSET provides the platform to learn, create, and thrive.
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
              bgImage: "/expandingcards/bg_1.png"
            },
            {
              title: "Cutting-edge Projects",
              desc: "Collaborate on real-world data science projects that make a difference in academic research. Work on innovative solutions that address real challenges in various fields.",
              active: false,
              link: "/projects",
              bgImage: "/expandingcards/bg_2.png"
            },
            {
              title: "Learning Resources",
              desc: "Access our curated collection of guides, tools, and datasets for your research journey. From beginner tutorials to advanced methodologies, we have resources for every level.",
              active: false,
              link: "/resources",
              bgImage: "/expandingcards/bg_3.png"
            },
            {
              title: "Research Community",
              desc: "Connect with like-minded researchers and collaborate on groundbreaking academic projects. Build your network and contribute to meaningful research initiatives.",
              active: false,
              link: "/leadership",
              bgImage: "/expandingcards/bg_4.png"
            },
            {
              title: "Innovation Hub",
              desc: "Explore cutting-edge technologies and methodologies in data science. Stay ahead of the curve with the latest trends and developments in the field.",
              active: false,
              link: "/projects",
              bgImage: "/expandingcards/bg_5.png"
            },
            {
              title: "Academic Excellence",
              desc: "Strive for academic excellence through rigorous research practices and collaborative learning. Develop skills that will set you apart in your academic and professional journey.",
              active: false,
              link: "/about",
              bgImage: "/expandingcards/bg_6.png"
            },
            {
              title: "Future Leaders",
              desc: "Develop leadership skills and prepare for future roles in academia and industry. Take on responsibilities that will shape the next generation of researchers.",
              active: false,
              link: "/leadership",
              bgImage: "/expandingcards/bg_7.png"
            }].map((item, idx) => {
              return (
                <li
                  key={idx}
                  data-active={item.active}
                  className="expanding-card-item"
                >
                  <div 
                    className="card-background"
                    style={{ backgroundImage: `url(${item.bgImage})` }}
                  ></div>
                  <article>
                    <h3>{item.title}</h3>
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
                    href="https://github.com/CLUSTER-DS-Club/" 
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