export default function Footer() {
  return (
    <footer className="relative bg-[#000000] text-text-light pt-24 pb-8 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5 transition-colors duration-500">
      <div className="flex flex-col md:flex-row justify-between flex-wrap items-start md:items-end mb-16 gap-12 lg:gap-32 w-full max-w-7xl mx-auto">

        {/* Social Links */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-6 font-mono text-xs tracking-[0.2em] uppercase text-text-gray">
          <a href="https://www.linkedin.com/in/ayananwar/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 w-fit">LinkedIn</a>
          <p className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 w-fit">Instagram</p>
          <a href="https://www.facebook.com/profile.php?id=100075786314461" target="_blank" rel="noreferrer" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 w-fit">Facebook</a>
          <a href="https://github.com/AyanAnwar78" target="_blank" rel="noreferrer" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 w-fit">GitHub</a>
          <p className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 w-fit col-span-2 mt-4">+91 8416086839</p>
        </div>

      </div>

      {/* Giant Name */}
      <h1 className="text-[14.5vw] font-display font-black leading-[0.8] tracking-tighter uppercase text-metallic text-center w-full mx-auto select-none relative z-10 bottom-[-10px]">
        AYAN ANWAR
      </h1>
    </footer>
  );
}
