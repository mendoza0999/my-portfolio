import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaMobileAlt, FaPhp,
  FaNodeJs, FaDatabase, FaGitAlt, FaGithub, FaBug, FaLinux,
  FaWindows, FaServer, FaPencilRuler, FaCogs, FaSearch,
  FaFileAlt, FaBrain, FaRobot, FaCode, FaDesktop, Fapython
} from 'react-icons/fa';
import { SiExpress, SiFastapi, SiTailwindcss, SiMysql } from 'react-icons/si';

export const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJsSquare },
      { name: 'React', icon: FaReact },
      { name: 'Responsive Design', icon: FaMobileAlt },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'PHP', icon: FaPhp },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST APIs', icon: FaServer },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Python', icon: FaPython },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'SQL', icon: FaDatabase },
      { name: 'Database Design', icon: FaDatabase },
    ],
  },
  {
    title: 'AI / Machine Learning',
    skills: [
      { name: 'AI-Assisted Dev', icon: FaRobot },
      { name: 'Prompt Engineering', icon: FaBrain },
      { name: 'NLP', icon: FaBrain },
      { name: 'Information Retrieval', icon: FaSearch },
      { name: 'Computer Vision', icon: FaDesktop },
      { name: 'Image Classification', icon: FaDesktop },
    ],
  },
  {
    title: 'Development Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Debugging', icon: FaBug },
      { name: 'API Integration', icon: FaCode },
      { name: 'Linux', icon: FaLinux },
      { name: 'Windows', icon: FaWindows },
    ],
  },
  {
    title: 'Other',
    skills: [
      { name: 'UI/UX Implementation', icon: FaPencilRuler },
      { name: 'Software Engineering', icon: FaCogs },
      { name: 'System Design', icon: FaCogs },
      { name: 'Research', icon: FaSearch },
      { name: 'Technical Docs', icon: FaFileAlt },
    ],
  },
];
