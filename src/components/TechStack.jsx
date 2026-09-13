import { techStack } from '../data/techStack';

const levelStyles = {
  Comfortable: 'bg-black dark:bg-white text-white dark:text-black',
  Familiar: 'bg-transparent border border-black dark:border-white text-black dark:text-white',
  Learning: 'bg-transparent border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400',
};

export default function TechStack() {
  return (
    <section id="techstack" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="animate-on-scroll mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
            03 — Tech Stack
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Technology Stack
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl">
            The technologies and tools I use to bring projects to life.
          </p>
        </div>

        {/* Legend */}
        <div className="animate-on-scroll flex flex-wrap gap-4 mb-10">
          {Object.entries(levelStyles).map(([level, style]) => (
            <div key={level} className="flex items-center gap-2">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${style}`}>
                {level}
              </span>
            </div>
          ))}
        </div>

        {/* Tech categories */}
        <div className="space-y-10">
          {techStack.map((category) => (
            <div key={category.category} className="animate-on-scroll">
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span
                    key={item.name}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${levelStyles[item.level]}`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
