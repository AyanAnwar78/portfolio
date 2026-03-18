import { useState } from 'react';

export default function Contact({ theme }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">

        {/* Left Column - Heading & Socials */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-display font-black uppercase tracking-tighter leading-[0.85] text-black dark:text-text-light mb-16">
              LET'S GET<br />
              <span className="text-gray-400 dark:text-gray-500 ml-12 md:ml-24">IN TOUCH</span>
            </h2>
          </div>

          {/* Social Grid */}
          <div className="w-fit">
            <div className="grid grid-cols-2 border-t border-l border-black/10 dark:border-white/20">
              <a href="https://www.facebook.com/profile.php?id=100075786314461" className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border-r border-b border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <img src="/logo/facebook.png" alt="Facebook" className="w-8 h-8 object-contain opacity-70 hover:opacity-100 transition-opacity dark:invert-0" />
              </a>
              <p className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border-r border-b border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <img src="/logo/whatsapp.png" alt="WhatsApp" className="w-8 h-8 object-contain opacity-70 hover:opacity-100 transition-opacity dark:invert-0" />
              </p>
              <p className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border-r border-b border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <img src="/logo/insta.png" alt="Instagram" className="w-8 h-8 object-contain opacity-70 hover:opacity-100 transition-opacity dark:invert-0" />
              </p>
              <a href="https://www.linkedin.com/in/ayananwar/" className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border-r border-b border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <img src="/logo/linkedin.png" alt="LinkedIn" className="w-8 h-8 object-contain opacity-70 hover:opacity-100 transition-opacity dark:invert-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Dynamic Form / Success State */}
        <div className="lg:w-1/2 flex items-center">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="w-full text-lg md:text-xl leading-loose text-black/80 dark:text-text-light/80 font-sans">
              <p className="mb-6 font-bold text-black dark:text-text-light">Hi ayan anwar,</p>

              <div className="leading-[2]">
                <span>I, </span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="{ Your name here }"
                  className="bg-transparent border-b border-black/20 dark:border-white/30 px-2 py-0 mx-2 text-black dark:text-text-light placeholder:text-gray-400 focus:outline-none focus:border-black dark:focus:border-text-light w-48 text-center transition-colors"
                  value={formData.name}
                  onChange={handleChange}
                />
                <span> want help with a project. You can reach me via </span>
                <select
                  name="contactType"
                  className="bg-transparent border-b border-black/20 dark:border-white/30 px-2 py-0 mx-2 text-black dark:text-text-light focus:outline-none cursor-pointer appearance-none text-center [color-scheme:light] dark:[color-scheme:dark]"
                  value={formData.contactType}
                  onChange={handleChange}
                >
                  <option value="Phone" className="bg-white dark:bg-[#222]">Phone ▾</option>
                  <option value="Email" className="bg-white dark:bg-[#222]">Email ▾</option>
                </select>
                <span> at </span>
                <input
                  type="text"
                  name="contactValue"
                  required
                  placeholder=""
                  className="bg-transparent border-b border-black/20 dark:border-white/30 px-2 py-0 mx-2 text-black dark:text-text-light placeholder:text-gray-400 focus:outline-none focus:border-black dark:focus:border-text-light w-48 text-center transition-colors"
                  value={formData.contactValue}
                  onChange={handleChange}
                />
                <span>.</span>

                <br /><br />

                <span>My business or project is called </span>
                <input
                  type="text"
                  name="businessName"
                  placeholder="{ Business/project name }"
                  className="bg-transparent border-b border-black/20 dark:border-white/30 px-2 py-0 mx-2 text-black dark:text-text-light placeholder:text-gray-400 focus:outline-none focus:border-black dark:focus:border-text-light w-64 text-center transition-colors"
                  value={formData.businessName}
                  onChange={handleChange}
                />
                <span>. I'm looking for </span>
                <select
                  name="serviceType"
                  className="bg-transparent border-b border-black/20 dark:border-white/30 px-2 py-0 mx-2 text-black dark:text-text-light focus:outline-none cursor-pointer appearance-none text-center [color-scheme:light] dark:[color-scheme:dark]"
                  value={formData.serviceType}
                  onChange={handleChange}
                >
                  <option value="Website" className="bg-white dark:bg-[#222]">{'{'} Website {'}'}</option>
                  <option value="App Development" className="bg-white dark:bg-[#222]">{'{'} App Dev {'}'}</option>
                  <option value="Backend System" className="bg-white dark:bg-[#222]">{'{'} Backend {'}'}</option>
                </select>
                <span> and I'm aiming to launch by </span>
                <select
                  name="timeline"
                  className="bg-transparent border-b border-black/20 dark:border-white/30 px-2 py-0 mx-2 text-black dark:text-text-light focus:outline-none cursor-pointer appearance-none text-center [color-scheme:light] dark:[color-scheme:dark]"
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value="3 weeks" className="bg-white dark:bg-[#222]">{'{'} 3 weeks {'}'}</option>
                  <option value="1 month" className="bg-white dark:bg-[#222]">{'{'} 1 month {'}'}</option>
                  <option value="3 months" className="bg-white dark:bg-[#222]">{'{'} 3 months {'}'}</option>
                </select>
                <span>.</span>

                <br /><br />

                <br />
                <p>Cheers,</p>
              </div>

              <div className="mt-12 flex justify-end">
                <button
                  type="submit"
                  className="bg-black dark:bg-[#555] hover:bg-gray-800 dark:hover:bg-text-light hover:text-white dark:hover:text-bg-dark text-white dark:text-text-light px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-4"
                >
                  SEND MESSAGE <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-black"></span>
                </button>
              </div>
            </form>
          ) : (
            // Success State (Matching 2nd Image)
            <div className="w-full text-lg md:text-xl leading-relaxed text-black dark:text-text-light border-l-2 border-black/10 dark:border-[#333] pl-8 py-4 animate-fade-in">
              <p className="font-bold mb-8">Hi {formData.name},</p>

              <p className="text-black/70 dark:text-text-light/80 mb-12">
                Thanks for reaching out! We'd love to help with your {formData.serviceType}. I will contact you shortly {formData.contactType === 'Phone' ? 'at' : 'via'} <span className="text-black dark:text-white font-mono bg-black/5 dark:bg-white/10 px-2 py-1 rounded">{formData.contactValue}</span>.
              </p>

              <div className="text-black/70 dark:text-text-light/80">
                <p>Best Wishes,</p>
                <p>Ayan</p>
                <p className="font-bold text-black dark:text-text-light mt-1">ayan.anwar</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

