import { FiAward } from 'react-icons/fi';

const achievements = [
  {
    number: '01',
    place: '1st Place',
    title: 'Web Development',
    description: 'Awarded first place in a web development competition, demonstrating proficiency in building functional and well-designed web applications.',
  },
  {
    number: '02',
    place: '2nd Place',
    title: 'AI Prompting',
    description: 'Secured second place in an AI prompting competition, showcasing skills in effective prompt engineering and AI-assisted problem solving.',
  },
  {
    number: '03',
    place: '3rd Place',
    title: 'Software Engineering Project',
    description: 'Achieved third place for a software engineering project, highlighting capabilities in system design, development, and project execution.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="animate-on-scroll mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
            05 — Achievements
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Achievements
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl">
            Recognition received in academic and development competitions.
          </p>
        </div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {achievements.map((achievement) => (
            <div
              key={achievement.number}
              className="animate-on-scroll relative p-8 rounded-xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 group"
            >
              {/* Large number */}
              <span className="font-display text-7xl font-bold text-gray-100 dark:text-gray-800 absolute top-4 right-6 select-none group-hover:text-gray-200 dark:group-hover:text-gray-700 transition-colors">
                {achievement.number}
              </span>

              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <FiAward className="w-5 h-5" />
                  <span className="text-sm font-mono font-semibold uppercase tracking-wider">
                    {achievement.place}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
