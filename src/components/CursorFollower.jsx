import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CursorFollower() {
  const circleRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // ... existing effect code
    const circle = circleRef.current;
    
    const xCircleSetter = gsap.quickTo(circle, "x", { duration: 0.5, ease: "power3" });
    const yCircleSetter = gsap.quickTo(circle, "y", { duration: 0.5, ease: "power3" });

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      xCircleSetter(clientX);
      yCircleSetter(clientY);
    };

    const onMouseDown = () => setIsHovering(true);
    const onMouseUp = () => setIsHovering(false);
    const onMouseEnterLink = () => setIsHovering(true);
    const onMouseLeaveLink = () => setIsHovering(false);

    const links = document.querySelectorAll('a, button, input, select, textarea, .group');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      {/* Background stays the same */}
      <div className="fixed inset-0 z-0 transition-colors duration-500 pointer-events-none bg-[#000000]" />

      {/* Custom Cursor Circle */}
      <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
        {/* The Following Circle */}
        <div
          ref={circleRef}
          className={`fixed top-0 left-0 w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] z-9999 transition-all duration-300 ease-out border-[#007fff] ${isHovering ? 'scale-[1.8] bg-[#007fff]/10 border-transparent' : 'scale-100'}`}
        />
      </div>
    </>
  );
}
