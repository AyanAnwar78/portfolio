import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const itemsRef = useRef([]);

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

      // Skill items staggered animation
      gsap.from(itemsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: {
          each: 0.05,
          from: 'start',
          grid: 'auto',
        },
        ease: 'back.out(1.7)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tools = [
    { name: 'React', percentage: '72%', id: 1, icon: '/SVG/react.svg' },
    { name: 'Node.js', percentage: '78%', id: 2, icon: '/SVG/node.svg' },
    { name: 'Tailwind CSS', percentage: '81%', id: 3, icon: '/SVG/tailwind.svg' },
    { name: 'MongoDB', percentage: '75%', id: 4, icon: '/SVG/mongodb.svg' },
    { name: 'Express', percentage: '80%', id: 5, icon: '/SVG/express.png' },
    { name: 'GSAP', percentage: '75%', id: 6, icon: '/SVG/gsap.png' },
    { name: 'MySQL', percentage: '68%', id: 7, icon: '/SVG/mysql.svg' },
    { name: 'EJS', percentage: '65%', id: 8, icon: null },
    { name: 'Git', percentage: '70%', id: 9, icon: '/SVG/git.svg' },
    { name: 'JavaScript', percentage: '75%', id: 10, icon: '/SVG/javascript.svg' },
    { name: 'C++', percentage: '80%', id: 11, icon: null },
    { name: 'Java', percentage: '75%', id: 12, icon: null },
    { name: 'HTML', percentage: '90%', id: 13, icon: '/SVG/html.png' },
    { name: 'CSS', percentage: '83%', id: 14, icon: '/SVG/css.png' },
  ];


  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-24">

        {/* Left Side Header */}
        <div className="md:w-1/3">
          <h2 ref={headerRef} className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tighter text-text-light uppercase leading-tight relative inline-flex items-center gap-4">
            SKILLS
            <span className="relative">
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-2xl rotate-45 group-hover:rotate-0 transition-transform">✏️</span>
            </span>
          </h2>
        </div>

        {/* Right Side Grid */}
        <div className="md:w-2/3 bg-black p-4 md:p-8 rounded-[2rem] border border-white/5 relative z-10">
          {/* Subtle grid background container */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-white/10 relative">

            {tools.map((tool, idx) => (
              <div
                key={tool.id}
                ref={(el) => (itemsRef.current[idx] = el)}
                className="group aspect-square flex items-center justify-center p-6 bg-white/5 hover:bg-white/10 border-r border-b border-white/10 transition-colors duration-300 relative z-10 overflow-hidden"
              >
                <div className="flex flex-col items-center justify-center gap-2 relative z-20">
                  {tool.icon && (
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className={`w-14 h-14 object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}
                    />
                  )}
                  <span className="font-bold text-xs tracking-wider text-text-light/80 text-center group-hover:text-text-light transition-colors duration-300">
                    {tool.name}
                  </span>
                  <span className="text-sm font-mono text-[#9cff00]/70 tracking-widest h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                    {tool.percentage}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

