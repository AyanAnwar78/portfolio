import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
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

      // Timeline items staggered animation
      gsap.from(itemsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        x: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Lovely Professional University',
      year: '2023 - present',
      description: 'Focused on advanced algorithms, web technologies, and software engineering.',
      logo: '/lpulogo.png'
    },
    {
      degree: 'Intermediate',
      institution: "St. Mary's Convent School",
      year: '2020 - 2022',
      description: 'Science stream with a focus on Mathematics',
      logo: '/smclogo.jpg'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-transparent" id="education" ref={sectionRef}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-24">

        {/* Left Side Header */}
        <div className="md:w-1/3">
          <h2 ref={headerRef} className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tighter text-text-light uppercase leading-tight relative inline-flex items-center gap-4 group">
            EDUCATION
            <span className="relative">
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-2xl rotate-45 group-hover:rotate-0 transition-transform">🎓</span>
            </span>
          </h2>
        </div>

        {/* Right Side Timeline */}
        <div className="md:w-2/3 flex flex-col gap-16 bg-black p-8 md:p-16 rounded-[2rem] border border-white/5 relative z-10">
          {education.map((item, idx) => (
            <div key={idx} ref={(el) => (itemsRef.current[idx] = el)} className="flex flex-col gap-4 border-l border-white/10 pl-8 md:pl-12 relative">
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-text-light"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4 md:gap-6">
                  {item.logo && (
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-white shrink-0 shadow-lg border border-white/20">
                      <img src={item.logo} alt={item.institution} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <h3 className="text-xl md:text-2xl font-bold text-text-light">{item.degree}</h3>
                </div>
                <span className="font-mono text-sm text-text-gray">{item.year}</span>
              </div>
              <h4 className="text-lg font-mono text-text-light/60 uppercase tracking-widest">{item.institution}</h4>
              <p className="max-w-2xl leading-relaxed text-sm md:text-base text-text-gray">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
