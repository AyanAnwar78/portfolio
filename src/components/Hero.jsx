import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero({ theme }) {
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
                className="text-6xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-display font-black uppercase tracking-tighter leading-[0.85] text-black dark:text-text-light"
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
              <p className="max-w-md text-gray-500 dark:text-text-gray font-sans text-sm md:text-base leading-relaxed">
                Crafting digital experiences through code and design. Specializing in modern web technologies and interactive interfaces.
              </p>
              <div>
                <a 
                  href="/ayananwarCV.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-3 border border-black/10 dark:border-white/20 rounded-full text-xs font-mono uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 text-black dark:text-text-light"
                >
                  View CV
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17l9.2-9.2M17 17V7H7"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2 text-xs font-mono uppercase tracking-widest text-black/50 dark:text-text-light/50">
              <span>Scroll to explore</span>
              <div className="w-px h-12 bg-black/20 dark:bg-white/30 animate-pulse mt-2"></div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div 
            ref={imgRef}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[450px] xl:w-[450px] xl:h-[500px]"
          >
            <div className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-3xl -rotate-6 scale-95 transition-transform group-hover:rotate-0 duration-500"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl">
              <img 
                src="/ayan.png" 
                alt="Ayan Anwar" 
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative dots behind image */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:12px_12px] -z-10"></div>
          </div>
        </div>

      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-black/[0.02] dark:bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}
