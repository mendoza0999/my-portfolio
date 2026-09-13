import { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const socialLinks = [
  {
    label: 'Email',
    icon: FiMail,
    href: 'mailto:markjoeymendoza151@gmail.com',
    text: 'markjoeymendoza151@gmail.com',
  },
  {
    label: 'GitHub',
    icon: FiGithub,
    href: 'https://github.com/mendoza0999',
    text: 'github.com/mendoza0999',
  },

];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // TODO: Connect to email service (e.g., EmailJS, Formspree, or custom backend)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClasses = (field) =>
    `w-full px-4 py-3 text-sm bg-white dark:bg-dark-bg border rounded-lg focus:outline-none focus:ring-1 transition-all duration-200 ${
      errors[field]
        ? 'border-gray-600 dark:border-gray-400 focus:ring-gray-600 dark:focus:ring-gray-400'
        : 'border-light-border dark:border-dark-border focus:ring-black dark:focus:ring-white'
    }`;

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="animate-on-scroll mb-16 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
            07 — Contact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Let's Build Something
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            Have an idea, project, or opportunity? Let's talk about it.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="animate-on-scroll">
              <h3 className="font-display text-lg font-semibold mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl border border-light-border dark:border-dark-border hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-light-border dark:border-dark-border group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
                        <IconComponent size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          {link.label}
                        </p>
                        <p className="text-sm font-medium mt-0.5">
                          {link.text}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="animate-on-scroll space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClasses('name')}
                  />
                  {errors.name && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClasses('email')}
                  />
                  {errors.email && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={inputClasses('subject')}
                />
                {errors.subject && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{errors.subject}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  className={`${inputClasses('message')} resize-none`}
                />
                {errors.message && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg hover:opacity-90 transition-all duration-200"
              >
                Send Message
                <FiSend className="group-hover:translate-x-1 transition-transform" size={16} />
              </button>

              {submitted && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  Thank you! Your message has been received. I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
