import React, { useState, useEffect } from "react";

const PROFILE_IMAGE_URL = "./profile.jpg";

const LINKS = {
  email: "empop214@gmail.com",
  phone: "+20 127 008 806 9",
  github: "https://github.com/empeo",
  linkedin: "https://www.linkedin.com/in/abanoub-emad-felix-41a734285/",
};

const PROJECTS = [
  {
    name: "GommlaBack (Plastic Factory App)",
    desc: "Laravel API powering a production-ready mobile app published on Google Play.",
    tags: ["Laravel", "REST API", "MySQL", "Production"],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.gomlaback.opacking&hl=en" },
      { label: "LinkedIn Video", href: "https://www.linkedin.com/posts/abanoub-emad-felix-41a734285_phpabrlaravel-php-mysql-activity-7273126520766767104-600U" },
    ],
  },
  {
    name: "Saint George Marketplace",
    desc: "Laravel backend for an e-commerce supermarket platform.",
    tags: ["Laravel", "API", "E-commerce"],
    links: [{ label: "Live Site", href: "https://saintgeorgemarketplace.com/" }],
  },
  {
    name: "Saint Hermina Monastery Products",
    desc: "Landing page built with HTML/CSS/JS and hosted on GitHub Pages.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "Live Demo", href: "https://empeo.github.io/Saint_Hermina/" }],
  },
  {
    name: "Restaurant System (PHP Native + MySQL)",
    desc: "Simple restaurant project using native PHP and MySQL.",
    tags: ["PHP", "MySQL", "CRUD"],
    links: [
      { label: "GitHub", href: "https://github.com/empeo/Resturant" },
      { label: "LinkedIn Post", href: "https://www.linkedin.com/posts/abanoub-emad-felix-41a734285_simple-restaurant-with-php-native-and-mysql-activity-7223497687269015552-BRLe" },
    ],
  },
  {
    name: "Learning Management System API",
    desc: "Backend REST API for an LMS built with Laravel.",
    tags: ["Laravel", "REST API", "Backend"],
    links: [
      { label: "GitHub", href: "https://github.com/empeo/Learning_Managment_System_API" },
      { label: "LinkedIn Post", href: "https://www.linkedin.com/posts/abanoub-emad-felix-41a734285_github-empeolearningmanagmentsystemapi-activity-7252776334307852291-yS0p" },
    ],
  },
];

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12 animate-fade-in-up">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative inline-block">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          {title}
        </span>
        <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-expand" />
      </h2>
      {subtitle && <p className="mt-4 text-base md:text-lg text-gray-400 max-w-2xl animate-fade-in-up animation-delay-200">{subtitle}</p>}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30 px-3 md:px-4 py-1.5 text-xs md:text-sm font-medium text-cyan-300 hover:scale-110 hover:border-cyan-400/50 transition-all duration-300">
      {children}
    </span>
  );
}

function ButtonLink({ href, children, variant = "primary" }) {
  const base = "group relative inline-flex items-center justify-center rounded-full px-5 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-semibold transition-all duration-500 overflow-hidden active:scale-95";

  if (variant === "primary") {
    return (
      <a className={`${base} bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-110`} href={href} target="_blank" rel="noreferrer">
        <span className="relative z-10 flex items-center gap-2">
          {children}
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </a>
    );
  }

  return (
    <a className={`${base} bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 hover:border-cyan-400/50 hover:scale-105 backdrop-blur-xl`} href={href} target="_blank" rel="noreferrer">
      <span className="flex items-center gap-2">
        {children}
      </span>
    </a>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm md:text-base text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group px-2 py-1"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full" />
    </a>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white relative overflow-x-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-4000" />
      </div>

      {/* Mouse Follower */}
      <div
        className="fixed w-8 h-8 rounded-full bg-cyan-400/20 blur-xl pointer-events-none z-50 transition-all duration-700 ease-out hidden lg:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-gray-950/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl' : 'bg-transparent'}`}>
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <a href="#top" className="text-xl md:text-2xl font-bold relative group">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Abanoub
            </span>
            <span className="text-gray-500">.</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-500" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden ml-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-gray-950/95 backdrop-blur-2xl border-t border-white/5 animate-fade-in">
            <nav className="flex flex-col gap-4 px-4 py-6">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <main id="top" className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <section className="min-h-screen flex items-center py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            <div className="lg:col-span-7 space-y-6 md:space-y-8 animate-fade-in-up">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 md:gap-3 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm text-emerald-400 backdrop-blur-xl animate-pulse-slow">
                <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-emerald-500"></span>
                </span>
                Available for freelance & backend projects
              </div>

              {/* Name */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient pb-2">
                  Abanoub Emad
                </span>
                <span className="block text-white mt-2">Felix</span>
              </h1>

              {/* Title */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center gap-2">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                  Laravel Backend Developer
                </span>
                <span className="text-gray-500">•</span>
                <span className="inline-flex items-center gap-2">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Cairo, Egypt
                </span>
              </p>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed">
                Junior Software Engineer specializing in backend development with PHP & Laravel, focused on building secure, scalable web applications and RESTful APIs.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 md:gap-4 pt-4">
                <ButtonLink href={LINKS.linkedin} variant="secondary">
                  LinkedIn
                </ButtonLink>
                <ButtonLink href={LINKS.github} variant="secondary">
                  GitHub
                </ButtonLink>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                <Pill>Laravel</Pill>
                <Pill>PHP</Pill>
                <Pill>REST APIs</Pill>
                <Pill>MySQL</Pill>
                <Pill>Auth</Pill>
                <Pill>Caching</Pill>
              </div>
            </div>

            {/* Profile Card */}
            <div className="lg:col-span-5 animate-fade-in-up animation-delay-400">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse-slow" />
                <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/10 p-6 md:p-8 shadow-2xl backdrop-blur-2xl hover:scale-105 transition-transform duration-500">
                  <div className="flex items-center gap-4 md:gap-5 mb-6">
                    <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-2xl overflow-hidden border-2 border-cyan-500/50 bg-gradient-to-br from-cyan-900 to-purple-900 flex items-center justify-center shadow-xl group-hover:rotate-6 transition-transform duration-500">
                      {PROFILE_IMAGE_URL === "PASTE_YOUR_IMAGE_URL_HERE" ? (
                        <svg className="w-10 h-10 md:w-12 md:h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      ) : (
                        <img src={PROFILE_IMAGE_URL} alt="Profile" className="h-full w-full object-cover" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/30 to-transparent" />
                    </div>
                    <div>
                      <p className="text-lg md:text-xl font-bold text-white">Abanoub Emad Felix</p>
                      <p className="text-xs md:text-sm text-cyan-400">Laravel Backend Developer</p>
                      <p className="text-xs md:text-sm text-gray-400">Cairo, Egypt</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-xl bg-white/5 border border-white/10 p-3 md:p-4 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 group/item">
                      <p className="text-xs text-gray-500 mb-1 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        Email
                      </p>
                      <a className="text-sm md:text-base font-medium text-gray-200 hover:text-cyan-400 transition-colors break-all" href={`mailto:${LINKS.email}`}>
                        {LINKS.email}
                      </a>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-3 md:p-4 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300">
                      <p className="text-xs text-gray-500 mb-1 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Phone
                      </p>
                      <a className="text-sm md:text-base font-medium text-gray-200 hover:text-cyan-400 transition-colors" href={`tel:${LINKS.phone}`}>
                        {LINKS.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-6">
                    <ButtonLink href={LINKS.github} variant="secondary">
                      GitHub
                    </ButtonLink>
                    <ButtonLink href={LINKS.linkedin} variant="secondary">
                      LinkedIn
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-20 scroll-mt-20">
          <SectionTitle
            title="About"
            subtitle="A quick snapshot of who I am and how I work."
          />
          <div className="relative group animate-fade-in-up">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />
            <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/10 p-6 md:p-8 backdrop-blur-xl hover:scale-[1.02] transition-transform duration-500">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                As a Junior Software Engineer with a knack for backend development,
                I thrive in creating scalable web applications using PHP and Laravel.
                Graduating with a degree in Information Technology,
                I have honed my skills in programming and database management.
                At MEC Academy, I led initiatives that improved team productivity by 25% through innovative backend solutions and secure RESTful APIs.
                I am eager to bring my expertise to ambitious teams committed to pushing the boundaries of web development.
                Feel free to explore my projects on GitHub: https://github.com/empeo.
                Let's connect to explore potential collaborations in crafting innovative web solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 md:py-20 scroll-mt-20">
          <SectionTitle
            title="Skills"
            subtitle="Grouped by what I use most in real projects."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              { title: "Frontend", content: "HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS, Materialize", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
              { title: "Backend", content: "PHP (Native), Laravel, RESTful API Development", icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" },
              { title: "Databases", content: "MySQL", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" },
              { title: "Tools & Testing", content: "Git, GitHub, Postman", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
            ].map((skill, i) => (
              <div key={i} className="group relative animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500" />
                <div className="relative rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/10 p-5 md:p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-xl h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={skill.icon} />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-cyan-400 mb-2 md:mb-3">{skill.title}</h3>
                      <p className="text-sm md:text-base text-gray-300 break-words">{skill.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-20 scroll-mt-20">
          <SectionTitle
            title="Services"
            subtitle="What I can deliver for your product or business."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              "Laravel RESTful API Development",
              "Authentication (Sanctum / Passport)",
              "Authorization (Gates & Middleware)",
              "Admin Dashboards",
              "Performance Optimization (Caching)",
              "Bug Fixing & Refactoring",
              "Deployment (Vercel / GitHub Pages / Shared Hosting)",
            ].map((s, i) => (
              <div key={i} className="group relative animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500" />
                <div className="relative rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/10 p-4 md:p-6 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-xl h-full">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mt-2 group-hover:scale-150 transition-transform duration-300" />
                    <p className="font-medium text-sm md:text-base text-gray-200 break-words">{s}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 md:py-20 scroll-mt-20">
          <SectionTitle
            title="Featured Projects"
            subtitle="A selection of projects demonstrating backend APIs, real deployments, and practical outcomes."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {PROJECTS.map((p, i) => (
              <div key={i} className="group relative animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-50 transition duration-700" />
                <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/10 p-6 md:p-8 hover:border-cyan-400/50 transition-all duration-500 h-full flex flex-col backdrop-blur-xl group-hover:scale-[1.02]">
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text break-words">
                        {p.name}
                      </h3>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center group-hover:rotate-180 transition-transform duration-700">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-300 mb-6 break-words">{p.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((t) => (
                        <Pill key={t}>{t}</Pill>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                    {p.links.map((l) => (
                      <ButtonLink key={l.href} href={l.href} variant="secondary">
                        {l.label}
                      </ButtonLink>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-16 md:py-20 scroll-mt-20">
          <SectionTitle title="Experience & Training" subtitle="Highlights from real work and focused learning." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="group relative animate-fade-in-up">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/10 p-6 md:p-8 backdrop-blur-xl hover:scale-[1.02] transition-transform duration-500 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-cyan-400">Experience</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "GommlaBack — Laravel API for a mobile app on Google Play",
                    "Saint George Marketplace — Laravel backend for e-commerce",
                    "Saint Hermina — Frontend landing page (HTML/CSS/JS)"
                  ].map((exp, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-300 hover:text-cyan-300 transition-colors duration-300 p-3 rounded-xl hover:bg-white/5">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mt-2" />
                      <p className="break-words">{exp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative animate-fade-in-up animation-delay-200">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/10 p-6 md:p-8 backdrop-blur-xl hover:scale-[1.02] transition-transform duration-500 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-400">Training</h3>
                </div>
                <p className="text-sm md:text-base text-gray-300 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300 break-words">
                  PHP Laravel Backend — MEC Academy (2023)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 md:py-20 pb-16 md:pb-32 scroll-mt-20">
          <div className="relative group animate-fade-in-up">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/10 p-8 md:p-10 backdrop-blur-2xl hover:scale-[1.01] transition-transform duration-500">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a className="text-base md:text-lg font-semibold text-cyan-400 hover:text-cyan-300 transition-colors break-all" href={`mailto:${LINKS.email}`}>
                        {LINKS.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a className="text-base md:text-lg font-semibold text-cyan-400 hover:text-cyan-300 transition-colors" href={`tel:${LINKS.phone}`}>
                        {LINKS.phone}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <ButtonLink href={LINKS.linkedin} variant="secondary">
                    LinkedIn
                  </ButtonLink>
                  <ButtonLink href={LINKS.github} variant="secondary">
                    GitHub
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>

          <footer className="py-10 md:py-12 text-center">
            <p className="text-sm md:text-base text-gray-500">
              © {new Date().getFullYear()} Abanoub Emad Felix • Built with React + Tailwind
            </p>
          </footer>
        </section>
      </main>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 80px;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-expand {
          animation: expand 0.6s ease-out forwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}