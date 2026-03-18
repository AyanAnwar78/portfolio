import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Loader() {
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const chars = textRef.current.querySelectorAll('.char');
    
    tl.fromTo(chars, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: 'power4.out' }
    )
    .to(chars, {
      opacity: 0,
      y: -50,
      stagger: 0.05,
      duration: 0.8,
      ease: 'power2.inOut',
      delay: 0.5
    })
    .to(loaderRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: 'power4.inOut',
    });

  }, []);

  const name = "Ayan Anwar";

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white font-display text-4xl md:text-7xl lg:text-9xl uppercase tracking-tighter"
    >
      <div ref={textRef} className="flex overflow-hidden">
        {name.split('').map((char, index) => (
          <span 
            key={index} 
            className="char inline-block" 
            style={{ width: char === ' ' ? '1rem' : 'auto', marginRight: char === ' ' ? '2rem' : '0' }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
