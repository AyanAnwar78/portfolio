import { ReactLenis } from 'lenis/react';
import Loader from './components/Loader';
import CursorFollower from './components/CursorFollower';
import StarBackground from './components/StarBackground';
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
  return (
    <ReactLenis root>
      <Loader />
      <div className="relative min-h-screen text-text-gray font-sans selection:bg-text-light selection:text-bg-dark transition-colors duration-500 bg-transparent">
        <StarBackground />
        <CursorFollower />
        <Header />
        <main className="relative z-10 w-full overflow-hidden">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
