export default function Footer() {
  return (
    <footer className="relative bg-[#000000] text-text-light pt-24 pb-8 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5 transition-colors duration-500">
      <div className="flex flex-col md:flex-row justify-between flex-wrap items-start md:items-end mb-16 gap-12 lg:gap-32 w-full max-w-7xl mx-auto">

        {/* Social Links */}
        {/* Left Column Socials */}
        <div className="flex flex-col gap-4 font-mono text-xs tracking-[0.2em] uppercase text-text-gray">
          <a href="https://www.linkedin.com/in/ayananwar/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 w-fit">
            <img src="/logo/linkedin.png" alt="" className="w-4 h-4 object-contain opacity-70" />
            LinkedIn
          </a>
          <a href="https://www.facebook.com/profile.php?id=100075786314461" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 w-fit">
            <img src="/logo/facebook.png" alt="" className="w-4 h-4 object-contain opacity-70" />
            Facebook
          </a>
          <p className="flex items-center gap-1.5 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 w-fit cursor-default">
            <img src="/logo/phone.png" alt="" className="w-4 h-4 object-contain opacity-70" />
            +91 8416086839
          </p>
        </div>

        {/* Right Column Socials */}
        <div className="flex flex-col gap-4 font-mono text-xs tracking-[0.2em] uppercase text-text-gray md:items-end md:text-right">
          <p className="flex items-center gap-1.5 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 w-fit cursor-default">
            <img src="/logo/insta.png" alt="" className="w-4 h-4 object-contain opacity-70" />
            Instagram
          </p>
          <a href="https://github.com/AyanAnwar78" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 w-fit">
            <img src="/logo/github.png" alt="" className="w-4 h-4 object-contain opacity-70 dark:invert" />
            GitHub
          </a>
          <a href="mailto:ayanahmad0405@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 w-fit block normal-case tracking-normal font-sans text-sm">
            <img src="/logo/gmail.png" alt="" className="w-4 h-4 object-contain opacity-70" />
            ayanahmad0405@gmail.com
          </a>
        </div>

      </div>

      {/* Giant Name */}
      <h1 className="text-[12vw] font-display font-black leading-[0.8] tracking-tighter uppercase text-metallic text-center w-full mx-auto select-none relative z-10 bottom-[-10px]">
        AYAN ANWAR
      </h1>
    </footer>
  );
}
