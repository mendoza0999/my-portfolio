import { FiArrowRight, FiDownload, FiGithub } from 'react-icons/fi';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 grid-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Status indicator */}
          <div className="animate-on-scroll flex items-center gap-2 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gray-500 dark:bg-gray-400"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Open to Opportunities
            </span>
          </div>

          {/* Main heading */}
          <h1 className="animate-on-scroll font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Hi, I'm{' '}
            <span className="relative">
              Markjoey
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-black dark:bg-white"></span>
            </span>
            <br />
            Mendoza.
          </h1>

          {/* Subtitle */}
          <p className="animate-on-scroll mt-4 font-display text-lg sm:text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400">
            AI-Assisted Developer &amp; Computer Science Student
          </p>

          {/* Description */}
          <p className="animate-on-scroll mt-6 text-base sm:text-lg text-gray-500 dark:text-gray-500 max-w-xl leading-relaxed">
            I build practical web applications, software projects, and AI-assisted
            solutions while continuously improving my development skills.
          </p>

          {/* Buttons */}
          <div className="animate-on-scroll mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg hover:opacity-90 transition-all duration-200"
            >
              View My Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-black dark:border-white text-sm font-medium rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-3 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              <FiDownload size={16} />
              Download Resume
            </a>
          </div>

          {/* Small stats bar */}
          <div className="animate-on-scroll mt-16 pt-8 border-t border-light-border dark:border-dark-border">
            <div className="flex flex-wrap gap-8 sm:gap-12">
              <div>
                <p className="font-display text-2xl font-bold">6+</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider">Projects Built</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold">3</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider">Achievements</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold">10+</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
