import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About({ theme }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll('.word');
    const isLight = theme === 'light';

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${words.length * 60}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      },
    });

    tl.to(words, {
      color: isLight ? '#000000' : '#f5f5f5',
      stagger: 0.08,
      ease: 'none',
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [theme]);

  const text = "I am ayan anwar, a full-stack web developer with hands-on experience building dynamic front-end and back-end applications.";

  return (
    <section id="about" ref={containerRef} className="min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-24 w-full text-black dark:text-text-light">

        {/* Left Column tag */}
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tighter uppercase leading-tight relative inline-flex items-center gap-4 group">
            ABOUT
            <span className="relative">
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-2xl rotate-45 group-hover:rotate-0 transition-transform">✨</span>
            </span>
          </h2>
        </div>

        {/* Right Column Content */}
        <div className="md:w-2/3">
          <h1
            ref={textRef}
            className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight tracking-tight flex flex-wrap gap-x-3 gap-y-2"
          >
            {text.split(' ').map((word, i) => (
              <span key={i} className="word text-gray-300 dark:text-[#444]">
                {word}
              </span>
            ))}
          </h1>
        </div>

      </div>
    </section>
  );
}
