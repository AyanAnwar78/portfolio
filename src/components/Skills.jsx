export default function Skills({ theme }) {
  const tools = [
    { name: 'React', percentage: '72%', id: 1, icon: '/SVG/react.svg' },
    { name: 'Node.js', percentage: '78%', id: 2, icon: '/SVG/node.svg' },
    { name: 'Tailwind CSS', percentage: '81%', id: 3, icon: '/SVG/tailwind.svg' },
    { name: 'MongoDB', percentage: '75%', id: 4, icon: '/SVG/mongodb.svg' },
    { name: 'Express', percentage: '80%', id: 5, icon: '/SVG/express.png' },
    { name: 'GSAP', percentage: '75%', id: 6, icon: '/SVG/gsap.png' },
    { name: 'MySQL', percentage: '68%', id: 7, icon: '/SVG/mysql.svg' },
    { name: 'EJS', percentage: '65%', id: 8, icon: null },
    { name: 'Git', percentage: '70%', id: 9, icon: '/SVG/git.svg' },
    { name: 'JavaScript', percentage: '75%', id: 10, icon: '/SVG/javascript.svg' },
    { name: 'C++', percentage: '80%', id: 11, icon: null },
    { name: 'Java', percentage: '75%', id: 12, icon: null },
    { name: 'HTML', percentage: '90%', id: 13, icon: '/SVG/html.png' },
    { name: 'CSS', percentage: '83%', id: 14, icon: '/SVG/css.png' },
  ];


  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-24">

        {/* Left Side Header */}
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tighter text-black dark:text-text-light uppercase leading-tight relative inline-flex items-center gap-4">
            SKILLS
            <span className="relative">
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-2xl rotate-45 group-hover:rotate-0 transition-transform">✏️</span>
            </span>
          </h2>
        </div>

        {/* Right Side Grid */}
        <div className="md:w-2/3">
          {/* Subtle grid background container */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-black/5 dark:border-white/10 relative">

            {/* Background decorative dots */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20 dark:opacity-20"></div>

            {tools.map((tool) => (
              <div
                key={tool.id}
                className="group aspect-square flex items-center justify-center p-6 bg-white dark:bg-bg-dark hover:bg-gray-50 dark:hover:bg-[#020202] border-r border-b border-black/5 dark:border-white/10 transition-colors duration-300 relative z-10 overflow-hidden"
              >
                {/* Hover Background Grid Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="flex flex-col items-center justify-center gap-2 relative z-20">
                  {tool.icon && (
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className={`w-14 h-14 object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ${theme === 'light' && (tool.name === 'Express' || tool.name === 'GSAP') ? 'invert' : ''}`}
                    />
                  )}
                  <span className="font-bold text-xs tracking-wider text-black/80 dark:text-text-light/80 text-center group-hover:text-black dark:group-hover:text-text-light transition-colors duration-300">
                    {tool.name}
                  </span>
                  <span className="text-sm font-mono text-[#9cff00]/70 tracking-widest h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                    {tool.percentage}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

