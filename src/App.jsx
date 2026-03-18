import { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import Loader from './components/Loader';
import CursorFollower from './components/CursorFollower';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ReactLenis root>
      <Loader />
      <div className="relative min-h-screen text-text-gray font-sans selection:bg-text-light selection:text-bg-dark transition-colors duration-500 bg-white dark:bg-[#050505]">
        <CursorFollower theme={theme} />
        <Header theme={theme} setTheme={setTheme} />
        <main className="relative z-10 w-full overflow-hidden">
          <Hero theme={theme} />
          <About theme={theme} />
          <Projects theme={theme} />
          <Skills theme={theme} />
          <Education theme={theme} />
          <Certifications theme={theme} />
          <Contact theme={theme} />
        </main>
        <Footer theme={theme} />
      </div>
    </ReactLenis>
  );
}

export default App;
