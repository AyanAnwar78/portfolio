export default function Education({ theme }) {
  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Lovely Professional University',
      year: '2023 - present',
      description: 'Focused on advanced algorithms, web technologies, and software engineering.',
      logo: '/lpulogo.png'
    },
    {
      degree: 'Intermediate',
      institution: "St. Mary's Convent School",
      year: '2020 - 2022',
      description: 'Science stream with a focus on Mathematics',
      logo: '/smclogo.jpg'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24" id="education">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-24">

        {/* Left Side Header */}
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tighter text-black dark:text-text-light uppercase leading-tight relative inline-flex items-center gap-4 group">
            EDUCATION
            <span className="relative">
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-2xl rotate-45 group-hover:rotate-0 transition-transform">🎓</span>
            </span>
          </h2>
        </div>

        {/* Right Side Timeline */}
        <div className="md:w-2/3 flex flex-col gap-16">
          {education.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-4 border-l border-black/10 dark:border-white/10 pl-8 md:pl-12 relative">
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-black dark:bg-text-light"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4 md:gap-6">
                  {item.logo && (
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-white shrink-0 shadow-lg border border-black/5 dark:border-white/20">
                      <img src={item.logo} alt={item.institution} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <h3 className="text-xl md:text-2xl font-bold text-black dark:text-text-light">{item.degree}</h3>
                </div>
                <span className="font-mono text-sm text-gray-500 dark:text-text-gray">{item.year}</span>
              </div>
              <h4 className="text-lg font-mono text-black/60 dark:text-text-light/60 uppercase tracking-widest">{item.institution}</h4>
              <p className="max-w-2xl leading-relaxed text-sm md:text-base text-gray-600 dark:text-text-gray">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
