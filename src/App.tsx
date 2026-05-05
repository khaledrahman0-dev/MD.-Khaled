/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  Gamepad2, 
  Users, 
  ChevronRight,
  ExternalLink,
  Code,
  Layout,
  BarChart3,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

// Common Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowFloatingButton(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-brand-navy selection:bg-brand-gold/30">
      {/* Sticky Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tighter text-brand-navy">
            <span className="text-brand-gold">K</span>R
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium hover:text-brand-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#" 
              className="bg-brand-navy text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-navy/90 transition-all flex items-center gap-2"
            >
              <Download size={16} />
              CV
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-brand-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium hover:text-brand-gold"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#" 
                  className="block w-full text-center bg-brand-navy text-white py-3 rounded-xl font-semibold"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">Available for New Opportunities</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Md. Khaled <br />
              <span className="text-brand-gold">Rahman</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-lg leading-relaxed">
              BBA Marketing Graduate · Academic Researcher · Data Analyst
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="bg-brand-gold text-brand-navy px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2"
              >
                <Download size={20} />
                Download My CV
              </a>
              <a 
                href="#contact" 
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-brand-navy transition-all"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-gold/20 bg-gray-800">
               {/* Replace with real image later */}
               <div className="w-full h-full flex items-center justify-center bg-brand-navy/50">
                  <p className="text-white/40 italic">Professional Photo Placeholder</p>
               </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-gold text-brand-navy p-6 rounded-2xl shadow-xl">
               <p className="text-3xl font-black">2026</p>
               <p className="text-sm font-bold uppercase tracking-wider">EWU Graduate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto mb-10 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-justify md:text-center">
              I am a Marketing graduate from East West University with a CGPA of 2.95, currently completing my degree in 2026. 
              Over the past 3 years I have worked as an Academic Writer at Assignoholic Research and Consultancy, where I conduct research, 
              write structured reports, manage citations across APA, MLA, and Harvard formats, and handle multiple deadlines simultaneously. 
              I type at 80 words per minute in English and am proficient in tools like SPSS, NVIVO, Power BI, and the full Microsoft Office suite. 
              I am looking for a full-time entry-level role in Dhaka in marketing, banking, or supply chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Competencies & Skills</h2>
            <p className="text-gray-500">A blend of analytical depth and professional soft skills</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills - Badge style */}
            <motion.div {...fadeIn} className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2 border-b-2 border-brand-gold pb-2 w-fit">
                <Code className="text-brand-gold" />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Microsoft Excel", "Microsoft Word", "PowerPoint", "Power BI", 
                  "Microsoft Access", "SPSS", "NVIVO", "Data Entry Software", 
                  "80 wpm Typing (EN)", "50 wpm Typing (BN)"
                ].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium shadow-sm hover:border-brand-gold hover:text-brand-gold transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills - Icon cards */}
            <motion.div {...fadeIn} className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2 border-b-2 border-brand-gold pb-2 w-fit">
                <Users className="text-brand-gold" />
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Communication", "Time Management", "Attention to Detail", 
                  "Customer Service", "Teamwork", "Independent Work", "Organization"
                ].map((skill) => (
                  <div key={skill} className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 group hover:border-brand-gold transition-all">
                    <CheckCircle2 size={18} className="text-brand-gold opacity-50 group-hover:opacity-100" />
                    <span className="text-sm font-semibold">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            {...fadeIn}
            className="group relative bg-brand-light p-8 md:p-12 rounded-3xl overflow-hidden border border-gray-100"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-brand-navy">Academic Writer</h3>
                <p className="text-brand-gold font-semibold text-lg">Assignoholic Research and Consultancy</p>
              </div>
              <div className="bg-brand-navy text-white px-4 py-2 rounded-full text-sm font-bold">
                Jan 2024 — Present (3 Years)
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Conducting in-depth academic research and synthesizing information from diverse scholarly sources.",
                "Writing structured, high-quality technical reports for business and marketing domains.",
                "Managing complex citations perfectly across APA, MLA, and Harvard formats.",
                "Ensuring 100% adherence to strict deadlines while maintaining academic integrity.",
                "Reviewing and editing drafts to ensure professional standards and clear communication."
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600">
                  <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-brand-gold"></div>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Research & Writing", desc: "Handled 500+ research assignments with structured report delivery." },
                { title: "Project Management", desc: "Coordinating multiple deadlines simultaneously with 0% delay rate." },
                { title: "Data Analysis", desc: "Using SPSS and NVIVO to extract meaningful insights from research data." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold mb-2 text-brand-navy">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section - Timeline */}
      <section id="education" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Background</h2>
            <p className="text-gray-500">Foundational excellence in business and sciences</p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-gold/30 -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  degree: "BBA in Marketing",
                  school: "East West University",
                  meta: "Expected 2026 | CGPA: 2.95 / 4.00",
                  icon: <GraduationCap />,
                  side: 'left'
                },
                {
                  degree: "HSC in Business Studies",
                  school: "Dhaka College",
                  meta: "2019 | GPA: 4.00 / 5.00",
                  icon: <Layout />,
                  side: 'right'
                },
                {
                  degree: "SSC in Science",
                  school: "Motijheel Govt. Boys High School",
                  meta: "2017 | GPA: 5.00 / 5.00",
                  icon: <CheckCircle2 />,
                  side: 'left'
                }
              ].map((edu, idx) => (
                <motion.div 
                  key={idx} 
                  {...fadeIn}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${edu.side === 'right' ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-brand-gold rounded-full -translate-x-1/2 z-10 hidden md:block"></div>
                  
                  <div className="w-full md:w-1/2">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-gold transition-all group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-brand-light text-brand-gold rounded-xl group-hover:bg-brand-gold group-hover:text-white transition-colors">
                          {edu.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg leading-tight">{edu.degree}</h4>
                          <p className="text-brand-gold font-medium">{edu.school}</p>
                        </div>
                      </div>
                      <p className="text-sm font-bold text-gray-500 bg-brand-light px-3 py-1 rounded-full w-fit">
                        {edu.meta}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accomplishments & Extra Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Beyond Academics</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Trophy />, 
                title: "Champion", 
                desc: "Game-fest Tournament (Dota 2) — Dec 2018",
                extra: "Tactical leadership & team coordination skills."
              },
              { 
                icon: <Gamepad2 />, 
                title: "E-Sports Player", 
                desc: "Competitive gaming background with focused discipline.",
                extra: "Developing quick decision-making under pressure."
              },
              { 
                icon: <Users />, 
                title: "Volunteering", 
                desc: "Active participation in social service experiments.",
                extra: "Contributing to community-driven initiatives in Dhaka."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn}
                className="p-8 bg-brand-light rounded-3xl border border-gray-50 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white shadow-sm flex items-center justify-center rounded-2xl text-brand-gold mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-brand-navy/70 mb-4">{item.desc}</p>
                <p className="text-sm text-gray-400 italic">"{item.extra}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div 
              {...fadeIn}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-brand-navy">Send me a message</h3>
              <form 
                action="https://formspree.io/f/your-endpoint" 
                method="POST"
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-brand-navy text-sm font-bold mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full bg-brand-light border border-gray-100 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold text-brand-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-navy text-sm font-bold mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="Email@address.com"
                      className="w-full bg-brand-light border border-gray-100 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold text-brand-navy"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-brand-navy text-sm font-bold mb-2">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    placeholder="How can I help you?"
                    className="w-full bg-brand-light border border-gray-100 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold text-brand-navy"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-brand-gold text-white font-bold py-4 rounded-xl hover:bg-brand-gold/90 transition-all flex items-center justify-center gap-2"
                >
                  Send Message
                  <ChevronRight size={20} />
                </button>
              </form>
            </motion.div>

            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-bold mb-6">Get In <span className="text-brand-gold">Touch</span></h2>
              <p className="text-gray-400 text-lg mb-10">
                I am currently looking for my next professional challenge in marketing, sales, banking, or supply chain. 
                Whether you have a vacancy or just want to connect, I'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Call Me</p>
                    <p className="text-lg font-semibold">01308494283 / 01572912058</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Email Me</p>
                    <p className="text-lg font-semibold">khaledrahman0@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Location</p>
                    <p className="text-lg font-semibold">Shahjahanpur, Dhaka 1217</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                 <a 
                   href="#" 
                   className="inline-flex items-center gap-2 bg-white text-brand-navy px-8 py-4 rounded-full font-bold hover:bg-brand-gold hover:text-white transition-all shadow-lg text-sm md:text-base"
                 >
                   <Download size={20} />
                   Download Full Resume
                 </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100 text-center text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2026 Md. Khaled Rahman. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-brand-gold">LinkedIn</a>
            <a href="#" className="hover:text-brand-gold">Bdjobs</a>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <AnimatePresence>
        {showFloatingButton && (
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed bottom-8 right-8 z-40"
          >
            <a 
              href="#" 
              className="group flex items-center bg-brand-gold text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all"
            >
              <Download size={24} />
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 group-hover:ml-3 font-bold whitespace-nowrap">
                CV Download
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
