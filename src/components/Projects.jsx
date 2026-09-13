import { useState } from 'react';
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { projects, projectCategories } from '../data/projects';

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="animate-on-scroll group rounded-xl border border-light-border dark:border-dark-border bg-white dark:bg-dark-card hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 overflow-hidden">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-display text-lg font-semibold group-hover:underline underline-offset-4">
            {project.title}
          </h3>
          <span
            className={`flex-shrink-0 px-2.5 py-1 text-xs font-mono rounded-full border ${
              project.status === 'In Development'
                ? 'border-gray-400 dark:border-gray-500 text-gray-500 dark:text-gray-400'
                : 'border-black dark:border-white text-black dark:text-white'
            }`}
          >
            {project.status}
          </span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono bg-light-card dark:bg-dark-bg border border-light-border dark:border-dark-border rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Expandable details */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          expanded ? 'max-h-[400px]' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-4 space-y-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
              Problem Solved
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {project.problem}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
              Key Features
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.features.map((feature) => (
                <span
                  key={feature}
                  className="text-xs px-2 py-1 bg-light-card dark:bg-dark-bg border border-light-border dark:border-dark-border rounded"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-light-border dark:border-dark-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              aria-label={`GitHub repository for ${project.title}`}
              className="p-2 rounded-lg border border-light-border dark:border-dark-border hover:bg-light-hover dark:hover:bg-dark-hover transition-colors"
            >
              <FiGithub size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              aria-label={`Live demo for ${project.title}`}
              className="p-2 rounded-lg border border-light-border dark:border-dark-border hover:bg-light-hover dark:hover:bg-dark-hover transition-colors"
            >
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          {expanded ? 'Less' : 'Details'}
          {expanded ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-20 md:py-28 bg-light-card dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="animate-on-scroll mb-10">
          <p className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
            04 — Projects
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl">
            A collection of projects I've built — from full-stack web apps to
            AI-powered solutions.
          </p>
        </div>

        {/* Filter */}
        <div className="animate-on-scroll flex flex-wrap gap-2 mb-10">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white'
                  : 'border-light-border dark:border-dark-border text-gray-500 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 hover:text-black dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
