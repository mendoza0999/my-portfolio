export default function About() {
  const stats = [
    { value: '3+', label: 'Project Areas' },
    { value: '3', label: 'Competition Achievements' },
    { value: 'Multiple', label: 'Technologies' },
    { value: '∞', label: 'Things Still Learning' },
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="animate-on-scroll mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
            01 — About
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Text content */}
          <div className="lg:col-span-3 space-y-6">
            <p className="animate-on-scroll text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a <strong className="text-black dark:text-white font-semibold">Computer Science student</strong> and{' '}
              <strong className="text-black dark:text-white font-semibold">emerging AI-assisted developer</strong> passionate
              about building practical software solutions. I focus on web development,
              backend systems, and exploring AI/ML applications.
            </p>
            <p className="animate-on-scroll text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I use AI tools to assist with development, debugging, learning,
              prototyping, and productivity — while still understanding and working
              with the underlying code. My approach combines modern AI-assisted
              workflows with fundamental programming knowledge.
            </p>
            <p className="animate-on-scroll text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I've built multiple projects ranging from full-stack web applications
              and management systems to AI-powered chatbots and computer vision
              applications. Each project has been an opportunity to learn new
              technologies and solve real problems.
            </p>

            {/* What I Do cards */}
            <div className="animate-on-scroll pt-6">
              <h3 className="font-display text-lg font-semibold mb-4">What I Do</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Web Development',
                  'AI-Assisted Development',
                  'Backend & Database Systems',
                  'Continuous Learning',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 rounded-lg border border-light-border dark:border-dark-border"
                  >
                    <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full flex-shrink-0"></span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="animate-on-scroll p-6 rounded-xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300"
                >
                  <p className="font-display text-3xl sm:text-4xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
