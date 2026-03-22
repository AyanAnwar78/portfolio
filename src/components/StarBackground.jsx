import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const starCount = 200;
    const stars = [];
    const colors = ['#ffffff', '#eef2ff', '#fffdf2'];

    // Create stars
    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 1.3 + 0.5, // Realistic small sizes
            opacity: Math.random() * 0.7 + 0.3,
            twinkleSpeed: Math.random() * 0.008 + 0.003,
            twinkleDirection: Math.random() > 0.5 ? 1 : -1,
            color: colors[Math.floor(Math.random() * colors.length)],
            parallaxFactor: Math.random() * 0.5 + 0.1 // For parallax effect
        });
    }

    // Add a few "hero" stars with glow
    for (let i = 0; i < 20; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 1.0 + 1.8, // Slightly larger hero stars
            opacity: Math.random() * 0.5 + 0.5,
            twinkleSpeed: Math.random() * 0.01 + 0.005,
            twinkleDirection: Math.random() > 0.5 ? 1 : -1,
            color: '#ffffff',
            parallaxFactor: Math.random() * 0.8 + 0.2,
            hasGlow: true
        });
    }

    let scrollY = window.scrollY;

    const drawStars = () => {
        ctx.clearRect(0, 0, width, height);

        stars.forEach(star => {
            // Update opacity for twinkling
            star.opacity += star.twinkleSpeed * star.twinkleDirection;
            if (star.opacity >= 1 || star.opacity <= 0.2) {
                star.twinkleDirection *= -1;
            }

            // Calculate parallax position
            const yPos = (star.y - (scrollY * star.parallaxFactor)) % height;
            const finalY = yPos < 0 ? yPos + height : yPos;

            ctx.beginPath();
            ctx.arc(star.x, finalY, star.size, 0, Math.PI * 2);
            
            // Apply glow to hero stars
            if (star.hasGlow) {
                ctx.shadowBlur = 10;
                ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
            } else {
                ctx.shadowBlur = 0;
            }

            ctx.fillStyle = star.color.includes('rgba') 
                ? star.color.replace(/[\d.]+\)$/g, `${star.opacity})`)
                : `rgba(${parseInt(star.color.slice(1,3), 16)}, ${parseInt(star.color.slice(3,5), 16)}, ${parseInt(star.color.slice(5,7), 16)}, ${star.opacity})`;
            
            ctx.fill();
        });
    };

    // Use GSAP ticker for smooth animation
    const ticker = () => {
        drawStars();
    };
    
    gsap.ticker.add(ticker);

    // Fade in canvas after loader
    gsap.fromTo(canvas, 
        { opacity: 0 }, 
        { opacity: 1, duration: 2, delay: 3.5, ease: 'power2.out' }
    );

    const handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        
        stars.forEach(star => {
            star.x = Math.random() * width;
            star.y = Math.random() * height;
        });
    };

    const handleScroll = () => {
        scrollY = window.scrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
        gsap.ticker.remove(ticker);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-0"
      style={{ 
        zIndex: 1, 
        background: 'transparent',
      }}
    />
  );
};

export default StarBackground;
