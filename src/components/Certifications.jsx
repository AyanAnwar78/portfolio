export default function Certifications({ theme }) {
  const certifications = [
    {
      title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',
      issuer: 'Infosys',
      year: '2025',
      image: '/infosys.png',
    },
    {
      title: 'Cloud Computing',
      issuer: 'Neptl',
      year: '2025',
      image: '/neptl.png',
    },
    {
      title: 'Data Structures & Algorithms Using C++',
      issuer: 'Cipher Schools',
      year: '2024',
      image: '/cipher.png',
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24" id="certifications">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-24">

        {/* Left Side Header */}
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tighter text-black dark:text-text-light uppercase leading-tight relative inline-flex items-center gap-4 group">
            CERTIFICATES
            <span className="relative">
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-2xl rotate-45 group-hover:rotate-0 transition-transform">📜</span>
            </span>
          </h2>
        </div>

        {/* Right Side List */}
        <div className="md:w-2/3 flex flex-col gap-16">
          {certifications.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-4 border-l border-black/10 dark:border-white/10 pl-8 md:pl-12 relative group">
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-400 dark:bg-text-gray group-hover:bg-[#9cff00] transition-colors duration-300"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-bold text-black dark:text-text-light group-hover:text-[#9cff00] transition-colors duration-300">
                  {item.title}
                </h3>
                <span className="font-mono text-sm text-gray-500 dark:text-text-gray">{item.year}</span>
              </div>
              <h4 className="text-lg font-mono text-black/60 dark:text-text-light/60 uppercase tracking-widest">{item.issuer}</h4>

              {/* Certificate Image */}
              {item.image && (
                <div className="mt-2 overflow-hidden rounded-xl border border-black/5 dark:border-white/10 group-hover:border-[#9cff00]/30 transition-colors duration-300 max-w-md bg-black hidden lg:block">
                  <img
                    src={item.image}
                    alt={`${item.issuer} Certificate`}
                    className="w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 hover:scale-105 transition-transform"
                  />
                </div>
              )}
              <p className="max-w-2xl leading-relaxed text-sm md:text-base text-gray-500 dark:text-text-gray">
                Certificate issued by {item.issuer} in {item.year}.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
