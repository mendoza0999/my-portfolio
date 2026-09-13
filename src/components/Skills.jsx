import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-light-card dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="animate-on-scroll mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
            02 — Skills
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl">
            Technologies and tools I've worked with across different project areas.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="animate-on-scroll p-6 rounded-xl border border-light-border dark:border-dark-border bg-white dark:bg-dark-bg hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 group"
            >
              <h3 className="font-display text-lg font-semibold mb-5 pb-3 border-b border-light-border dark:border-dark-border">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors"
                    >
                      <IconComponent className="w-4 h-4 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
