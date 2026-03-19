import { useEffect, useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Wanderlust',
    status: 'Available to Work',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D',
    github: 'https://github.com/AyanAnwar78/wanderlust',
    live: 'https://wanderlust-nine-opal.vercel.app'
  },
  {
    id: 2,
    title: 'LuxyCart',
    status: 'Available to Work',
    country: 'India',
    image: 'https://plus.unsplash.com/premium_photo-1722005865240-eecdbec17347?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGUlMjBjb21tZXJjZSUyMGNsb3RoJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D',
    github: 'https://github.com/AyanAnwar78/LuxyCart',
    live: 'https://luxycart-frontend.onrender.com/'
  },
  {
    id: 3,
    title: 'Eventflow',
    status: 'Available to Work',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/AyanAnwar78/Event_flow',
    live: 'https://event-flow-8jcu.onrender.com/'
  },
  {
    id: 4,
    title: 'Crop Protection',
    status: 'Available to Work',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/AyanAnwar78/crop-protection',
    live: '#'
  }
];

export default function Projects({ theme }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Cards staggered animation
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-24">
        
        {/* Left Side Header */}
        <div className="md:w-1/3">
          <h2 ref={headerRef} className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tighter text-black dark:text-text-light uppercase leading-tight relative inline-flex items-center gap-4 group">
            LATEST WORK
            <span className="relative">
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-2xl rotate-45 group-hover:rotate-0 transition-transform">🚀</span>
            </span>
          </h2>
        </div>

        {/* Right Side Grid */}
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={project.id} ref={(el) => (cardsRef.current[idx] = el)} className="group flex flex-col gap-4">

                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 hover:scale-105"
                  />
                </div>

                {/* Project Details */}
                <div className="flex items-center justify-between mt-2">
                  <h3 className="text-xl font-bold text-black dark:text-text-light uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black hover:text-white dark:hover:bg-white/20 transition-all duration-300 text-black dark:text-text-light"
                      target="_blank" rel="noreferrer"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black hover:text-white dark:hover:bg-white/20 transition-all duration-300 text-black dark:text-text-light"
                      target="_blank" rel="noreferrer"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
