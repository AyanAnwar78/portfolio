import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const socialsRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Socials animation
      gsap.from(socialsRef.current, {
        scrollTrigger: {
          trigger: socialsRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out',
      });

      // Form animation
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const [isSubmitted, setIsSubmitted] = useState(false);
  // ... existing state and handlers
  const [formData, setFormData] = useState({
    name: '',
    contactType: 'Phone',
    contactValue: '',
    businessName: '',
    serviceType: 'Website',
    timeline: '3 weeks',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.contactValue) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">

        {/* Left Column - Heading & Socials */}
        <div className="lg:w-1/2 flex flex-col justify-start gap-12">
          <div ref={headerRef}>
            <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-display font-black uppercase tracking-tighter leading-[0.85] text-text-light mb-16">
              LET'S GET<br />
              <span className="text-metallic ml-12 md:ml-24">IN TOUCH</span>
            </h2>
          </div>

          {/* Social Grid */}
          <div ref={socialsRef} className="w-fit">
            <div className="grid grid-cols-2 md:grid-cols-3 border-t border-l border-white/20">
              <a href="https://www.facebook.com/profile.php?id=100075786314461" className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border-r border-b border-white/20 hover:bg-white/5 transition-colors">
                <img src="/logo/facebook.png" alt="Facebook" className="w-8 h-8 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </a>
              <p className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border-r border-b border-white/20 hover:bg-white/5 transition-colors">
                <img src="/logo/whatsapp.png" alt="WhatsApp" className="w-8 h-8 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </p>
              <p className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border-r border-b border-white/20 hover:bg-white/5 transition-colors">
                <img src="/logo/insta.png" alt="Instagram" className="w-8 h-8 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </p>
              <a href="https://www.linkedin.com/in/ayananwar/" className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border-r border-b border-white/20 hover:bg-white/5 transition-colors">
                <img src="/logo/linkedin.png" alt="LinkedIn" className="w-8 h-8 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://github.com/AyanAnwar78" className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border-r border-b border-white/20 hover:bg-white/5 transition-colors">
                <img src="/logo/github.png" alt="GitHub" className="w-10 h-10 object-contain opacity-70 hover:opacity-100 transition-opacity dark:invert-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Dynamic Form / Success State */}
        <div ref={formRef} className="lg:w-1/2 flex items-center bg-black p-8 md:p-16 rounded-[2rem] border border-white/5 relative z-10">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="w-full text-lg md:text-xl leading-loose text-text-light/80 font-sans">
              <p className="mb-6 font-bold text-text-light">Hi ayan anwar,</p>

              <div className="leading-[2]">
                <span>I, </span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="{ Your name here }"
                  className="bg-transparent border-b border-white/30 px-2 py-0 mx-2 text-text-light placeholder:text-gray-400 focus:outline-none focus:border-text-light w-48 text-center transition-colors"
                  value={formData.name}
                  onChange={handleChange}
                />
                <span> want help with a project. You can reach me via </span>
                <select
                  name="contactType"
                  className="bg-transparent border-b border-white/30 px-2 py-0 mx-2 text-text-light focus:outline-none cursor-pointer appearance-none text-center [color-scheme:dark]"
                  value={formData.contactType}
                  onChange={handleChange}
                >
                  <option value="Phone" className="bg-[#222]">Phone ▾</option>
                  <option value="Email" className="bg-[#222]">Email ▾</option>
                </select>
                <span> at </span>
                <input
                  type="text"
                  name="contactValue"
                  required
                  placeholder=""
                  className="bg-transparent border-b border-white/30 px-2 py-0 mx-2 text-text-light placeholder:text-gray-400 focus:outline-none focus:border-text-light w-48 text-center transition-colors"
                  value={formData.contactValue}
                  onChange={handleChange}
                />

                <span>. I'm looking for </span>
                <select
                  name="serviceType"
                  className="bg-transparent border-b border-white/30 px-2 py-0 mx-2 text-text-light focus:outline-none cursor-pointer appearance-none text-center [color-scheme:dark]"
                  value={formData.serviceType}
                  onChange={handleChange}
                >
                  <option value="Website" className="bg-[#222]">{'{'} Website {'}'}</option>
                  <option value="App Development" className="bg-[#222]">{'{'} App Dev {'}'}</option>
                  <option value="Backend System" className="bg-[#222]">{'{'} Backend {'}'}</option>
                </select>
                <span> and I'm aiming to launch by </span>
                <select
                  name="timeline"
                  className="bg-transparent border-b border-white/30 px-2 py-0 mx-2 text-text-light focus:outline-none cursor-pointer appearance-none text-center [color-scheme:dark]"
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value="3 weeks" className="bg-[#222]">{'{'} 3 weeks {'}'}</option>
                  <option value="1 month" className="bg-[#222]">{'{'} 1 month {'}'}</option>
                  <option value="3 months" className="bg-[#222]">{'{'} 3 months {'}'}</option>
                </select>
                <span>.</span>

                <br /><br />

                <br />
                <p>Cheers,</p>
              </div>

              <div className="mt-12 flex justify-end">
                <button
                  type="submit"
                  className="bg-[#555] hover:bg-text-light hover:text-bg-dark text-text-light px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-4"
                >
                  SEND MESSAGE <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                </button>
              </div>
            </form>
          ) : (
            // Success State (Matching 2nd Image)
            <div className="w-full text-lg md:text-xl leading-relaxed text-text-light border-l-2 border-[#333] pl-8 py-4 animate-fade-in">
              <p className="font-bold mb-8">Hi {formData.name},</p>

              <p className="text-text-light/80 mb-12">
                Thanks for reaching out! We'd love to help with your {formData.serviceType}. I will contact you shortly {formData.contactType === 'Phone' ? 'at' : 'via'} <span className="text-white font-mono bg-white/10 px-2 py-1 rounded">{formData.contactValue}</span>.
              </p>

              <div className="text-text-light/80">
                <p>Best Wishes,</p>
                <p>Ayan</p>
                <p className="font-bold text-text-light mt-1">ayan.anwar</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

