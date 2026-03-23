import { useEffect, useState } from 'react';

export default function Header() {
  const [time, setTime] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-5 bg-[#000000]/80 backdrop-blur-md border-b border-white/10 transition-colors duration-500 text-text-light">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest flex-wrap gap-4">

          {/* Logo/Name */}
          <div className="font-display font-black text-2xl lowercase tracking-tighter">
            A.A
          </div>

          {/* Time */}
          <div className="hidden md:block text-gray-500">
            <span className="text-text-light font-bold">IN - {time}</span>
          </div>


          {/* Email */}
          <a 
            href="mailto:ayanahmad0405@gmail.com" 
            className="hidden lg:block text-text-light font-bold lowercase hover:text-[#9cff00] transition-colors duration-300"
          >
            ayanahmad0405@gmail.com
          </a>

          {/* Menu */}
          <div
            className="flex items-center gap-2 cursor-pointer group relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="font-bold shrink-0">{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
            <div className={`w-3 h-3 rounded-full border border-text-light transition-colors ${isMenuOpen ? 'bg-text-light' : 'group-hover:bg-text-light'}`}></div>
          </div>

        </div>
      </header>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 w-full h-screen bg-black/60 backdrop-blur-md z-40 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 w-full md:w-[400px] h-screen bg-[#000000] border-l border-white/10 z-40 transform transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col justify-center`}
      >
        <div className="flex flex-col w-full px-12 md:px-20 gap-8">
          <span className="text-xs font-mono tracking-widest text-text-gray mb-4">NAVIGATION</span>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-5xl lg:text-6xl font-display font-black uppercase text-text-light hover:text-[#9cff00] hover:translate-x-4 transition-all duration-300">About</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-5xl lg:text-6xl font-display font-black uppercase text-text-light hover:text-[#9cff00] hover:translate-x-4 transition-all duration-300">Project</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-5xl lg:text-6xl font-display font-black uppercase text-text-light hover:text-[#9cff00] hover:translate-x-4 transition-all duration-300">Skill</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-5xl lg:text-6xl font-display font-black uppercase text-text-light hover:text-[#9cff00] hover:translate-x-4 transition-all duration-300">Contact</a>
          <a href="/ayananwarCV.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="text-5xl lg:text-6xl font-display font-black uppercase text-text-light hover:text-[#9cff00] hover:translate-x-4 transition-all duration-300">CV</a>
        </div>
      </div>
    </>
  );
}
