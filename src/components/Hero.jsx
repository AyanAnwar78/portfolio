import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const subRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3.2 }); // Wait for loader

    tl.fromTo(
      text1Ref.current,
      { y: 100, opacity: 0, skewY: 5 },
      { y: 0, opacity: 1, skewY: 0, duration: 1.2, ease: 'power4.out' }
    )
      .fromTo(
        text2Ref.current,
        { y: 100, opacity: 0, skewY: 5 },
        { y: 0, opacity: 1, skewY: 0, duration: 1.2, ease: 'power4.out' },
        '-=0.9'
      )
      .fromTo(
        imgRef.current,
        { x: 100, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 1.5, ease: 'power4.out' },
        '-=1.2'
      )
      .fromTo(
        subRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
        '-=0.5'
      );
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Content */}
        <div className="lg:col-span-8 flex flex-col">
          <div className="flex flex-col gap-2 md:gap-4 overflow-hidden">
            <div className="overflow-hidden">
              <h1
                ref={text1Ref}
                className="text-6xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-display font-black uppercase tracking-tighter leading-[0.85] text-text-light"
              >
                FULLSTACK
              </h1>
            </div>
            <div className="overflow-hidden ml-0 md:ml-32">
              <h1
                ref={text2Ref}
                className="text-6xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-display font-black uppercase tracking-tighter leading-[0.85] text-metallic"
              >
                DEVELOPER
              </h1>
            </div>
          </div>

          {/* Sub headline */}
          <div
            ref={subRef}
            className="mt-12 md:mt-16 xl:mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
          >
            <div className="flex flex-col gap-6">
              <p className="max-w-md text-text-gray font-sans text-sm md:text-base leading-relaxed">
                Crafting digital experiences through code and design. Specializing in modern web technologies and interactive interfaces.
              </p>
                <a 
                  href="/ayananwarCV.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 text-text-light"
                >
                  View CV
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17l9.2-9.2M17 17V7H7"/>
                  </svg>
                </a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 text-xs font-mono uppercase tracking-widest text-text-light/50">
            <span>Scroll to explore</span>
            <div className="w-px h-12 bg-white/30 mt-2"></div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end lg:items-start">
          <div 
            ref={imgRef}
            className="relative w-48 h-48 md:w-64 md:h-64 lg:w-[320px] lg:h-[380px] xl:w-[380px] xl:h-[420px] lg:-mt-20 xl:-mt-24"
          >
            <div className="absolute inset-0 bg-white/5 rounded-3xl -rotate-6 scale-95 transition-transform group-hover:rotate-0 duration-500"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/ayan.png" 
                alt="Ayan Anwar" 
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
