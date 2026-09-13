import {
  FiCode, FiDatabase, FiLayout, FiCpu, FiMonitor, FiLayers,
} from 'react-icons/fi';

const services = [
  {
    icon: FiCode,
    title: 'Web Development',
    description: 'Building responsive websites and web applications using modern technologies and best practices.',
  },
  {
    icon: FiDatabase,
    title: 'PHP / MySQL Development',
    description: 'Creating database-driven systems and CRUD applications with reliable backend architecture.',
  },
  {
    icon: FiLayout,
    title: 'React Development',
    description: 'Building modern React interfaces and interactive web applications with component-based architecture.',
  },
  {
    icon: FiCpu,
    title: 'AI-Assisted Development',
    description: 'Using AI tools to accelerate development, debugging, research, and prototyping workflows.',
  },
  {
    icon: FiMonitor,
    title: 'School / Business Systems',
    description: 'Building customized management systems, reservation systems, dashboards, and record systems.',
  },
  {
    icon: FiLayers,
    title: 'UI Implementation',
    description: 'Turning designs or ideas into responsive, functional web interfaces.',
  },
];

const workProcess = [
  { step: '01', title: 'Understand', description: 'Understand the problem, requirements, and goals.' },
  { step: '02', title: 'Plan', description: 'Plan the system structure, interface, and technology.' },
  { step: '03', title: 'Build', description: 'Develop the application using modern tools and AI-assisted workflows.' },
  { step: '04', title: 'Improve', description: 'Test, debug, improve, and refine the project.' },
];

const whyWorkWithMe = [
  {
    title: 'AI-Assisted',
    description: 'I use AI tools to improve development speed, research, debugging, and problem solving.',
  },
  {
    title: 'Practical',
    description: 'I focus on building real working projects rather than only studying theory.',
  },
  {
    title: 'Continuously Learning',
    description: 'I continuously learn new technologies and improve existing skills.',
  },
  {
    title: 'Problem Solver',
    description: 'I enjoy turning problems and ideas into usable software.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-light-card dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="animate-on-scroll mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
            06 — Services
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            What I Can Offer
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl">
            Services I can provide as an emerging developer. I bring dedication,
            modern tools, and a practical approach to every project.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 stagger-children">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="animate-on-scroll p-6 rounded-xl border border-light-border dark:border-dark-border bg-white dark:bg-dark-bg hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-light-border dark:border-dark-border mb-4 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
                  <IconComponent size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* How I Work */}
        <div className="mb-20">
          <div className="animate-on-scroll mb-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              How I Work
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {workProcess.map((step) => (
              <div
                key={step.step}
                className="animate-on-scroll relative p-6 rounded-xl border border-light-border dark:border-dark-border bg-white dark:bg-dark-bg"
              >
                <span className="font-display text-4xl font-bold text-gray-100 dark:text-gray-800">
                  {step.step}
                </span>
                <h4 className="font-display text-lg font-semibold mt-2 mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Work With Me */}
        <div>
          <div className="animate-on-scroll mb-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              Why Work With Me
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {whyWorkWithMe.map((item) => (
              <div
                key={item.title}
                className="animate-on-scroll p-6 rounded-xl border border-light-border dark:border-dark-border bg-white dark:bg-dark-bg hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300"
              >
                <h4 className="font-display text-base font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
