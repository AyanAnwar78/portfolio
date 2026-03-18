import { useEffect, useState } from 'react';

export default function Header({ theme, setTheme }) {
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
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-5 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-black/5 dark:border-white/10 transition-colors duration-500 text-black dark:text-text-light">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest flex-wrap gap-4">

          {/* Logo/Name */}
          <div className="font-display font-black text-2xl lowercase tracking-tighter">
            A.A
          </div>

          {/* Time */}
          <div className="hidden md:block text-gray-400 dark:text-gray-500">
            <span className="text-black dark:text-text-light font-bold">IN - {time}</span>
          </div>

          {/* Theme Toggle */}
          <div className="hidden md:flex items-center gap-2 text-gray-400 dark:text-gray-500">
            {/* <span 
              onClick={() => setTheme('light')}
              className={`cursor-pointer transition-colors hover:text-black dark:hover:text-white ${theme === 'light' ? 'text-black dark:text-text-light font-bold' : ''}`}
            >
              LIGHT
            </span> */}
            {/* <span className="opacity-30">/</span> */}
            <span
              onClick={() => setTheme('dark')}
              className={`cursor-pointer transition-colors hover:text-black dark:hover:text-white ${theme === 'dark' ? 'text-black dark:text-text-light font-bold' : ''}`}
            >
              DARK
            </span>
          </div>

          {/* Email */}
          <div className="hidden lg:block text-black dark:text-text-light font-bold lowercase">
            ayanahmad0405@gmail.com
          </div>

          {/* Menu */}
          <div
            className="flex items-center gap-2 cursor-pointer group relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="font-bold shrink-0">{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
            <div className={`w-3 h-3 rounded-full border border-black dark:border-text-light transition-colors ${isMenuOpen ? 'bg-black dark:bg-text-light' : 'group-hover:bg-black dark:group-hover:bg-text-light'}`}></div>
          </div>

        </div>
      </header>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 w-full h-screen bg-black/20 dark:bg-black/60 backdrop-blur-md z-40 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 w-full md:w-[400px] h-screen bg-white dark:bg-[#050505] border-l border-black/5 dark:border-white/10 z-40 transform transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col justify-center`}
      >
        <div className="flex flex-col w-full px-12 md:px-20 gap-8">
          <span className="text-xs font-mono tracking-widest text-gray-400 dark:text-text-gray mb-4">NAVIGATION</span>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-5xl lg:text-6xl font-display font-black uppercase text-black dark:text-text-light hover:text-[#9cff00] hover:translate-x-4 transition-all duration-300">About</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-5xl lg:text-6xl font-display font-black uppercase text-black dark:text-text-light hover:text-[#9cff00] hover:translate-x-4 transition-all duration-300">Project</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-5xl lg:text-6xl font-display font-black uppercase text-black dark:text-text-light hover:text-[#9cff00] hover:translate-x-4 transition-all duration-300">Skill</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-5xl lg:text-6xl font-display font-black uppercase text-black dark:text-text-light hover:text-[#9cff00] hover:translate-x-4 transition-all duration-300">Contact</a>
          <a href="/ayananwarCV.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="text-5xl lg:text-6xl font-display font-black uppercase text-black dark:text-text-light hover:text-[#9cff00] hover:translate-x-4 transition-all duration-300">CV</a>
        </div>
      </div>
    </>
  );
}
