import React, { useState, useEffect } from "react";

const PROFILE_IMAGE_URL = "./profile.jpg";

const LINKS = {
  email: "empop214@gmail.com",
  phone: "+20 127 008 806 9",
  github: "https://github.com/empeo",
  linkedin: "https://www.linkedin.com/in/abanoub-emad-felix-41a734285/",
};

const PENTEST_PROJECTS = [
  {
    name: "Web Application Security Testing",
    desc: "Comprehensive security assessment of web applications including OWASP Top 10 vulnerabilities testing.",
    tags: ["OWASP", "SQL Injection", "XSS", "CSRF"],
    icon: "🔐",
  },
  {
    name: "Network Penetration Testing",
    desc: "Internal and external network security assessments with vulnerability scanning and exploitation.",
    tags: ["Nmap", "Metasploit", "Wireshark", "Network Analysis"],
    icon: "🌐",
  },
  {
    name: "Wireless Security Auditing",
    desc: "WiFi security testing including WPA/WPA2 cracking and rogue access point detection.",
    tags: ["Aircrack-ng", "WiFi", "WPA2", "Evil Twin"],
    icon: "📡",
  },
  {
    name: "Social Engineering Campaigns",
    desc: "Phishing simulations and security awareness assessments for organizations.",
    tags: ["Phishing", "SET", "Security Awareness"],
    icon: "🎣",
  },
  {
    name: "Mobile Application Testing",
    desc: "Android and iOS app security testing including reverse engineering and API analysis.",
    tags: ["Android", "iOS", "Mobile Security", "API Testing"],
    icon: "📱",
  },
];

const EXPERIENCE = [
  {
    title: "DEPI Penetration Testing Program",
    organization: "Ministry of Communications and Information Technology - Egypt",
    period: "2024 - Present",
    type: "Training Program",
    description: "Intensive penetration testing training program organized by the Egyptian Ministry of Communications, focusing on practical security assessments and ethical hacking techniques.",
    highlights: [
      "Advanced penetration testing methodologies",
      "Real-world vulnerability assessment scenarios",
      "Network security and exploitation techniques",
      "Web application security testing"
    ],
    icon: "🎓",
    color: "from-red-500 to-orange-500"
  },
  {
    title: "CTF Challenges & Labs",
    organization: "TryHackMe Platform",
    period: "2023 - Present",
    type: "Practical Training",
    description: "Active participation in Capture The Flag challenges and hands-on cybersecurity labs, developing practical skills in penetration testing and security research.",
    highlights: [
      "Completed multiple CTF challenges",
      "Hands-on penetration testing labs",
      "Linux privilege escalation techniques",
      "Network scanning and enumeration"
    ],
    icon: "🚩",
    color: "from-orange-500 to-yellow-500"
  },
  {
    title: "Freelance Security Projects",
    organization: "Independent Security Researcher",
    period: "2024 - Present",
    type: "Freelance",
    description: "Providing security assessments and penetration testing services for small businesses and web applications, identifying vulnerabilities and recommending security improvements.",
    highlights: [
      "Web application vulnerability assessments",
      "Security audits and reporting",
      "Custom penetration testing scripts",
      "Security consultation services"
    ],
    icon: "💼",
    color: "from-yellow-500 to-red-500"
  }
];

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12 animate-fade-in-up">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative inline-block">
        <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
          {title}
        </span>
        <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full animate-expand" />
      </h2>
      {subtitle && <p className="mt-4 text-base md:text-lg text-gray-400 max-w-2xl animate-fade-in-up animation-delay-200">{subtitle}</p>}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 border border-red-500/30 px-3 md:px-4 py-1.5 text-xs md:text-sm font-medium text-red-300 hover:scale-110 hover:border-red-400/50 transition-all duration-300">
      {children}
    </span>
  );
}

function ButtonLink({ href, children, variant = "primary" }) {
  const base = "group relative inline-flex items-center justify-center rounded-full px-5 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-semibold transition-all duration-500 overflow-hidden active:scale-95";

  if (variant === "primary") {
    return (
      <a className={`${base} bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white hover:shadow-2xl hover:shadow-red-500/50 hover:scale-110`} href={href} target="_blank" rel="noreferrer">
        <span className="relative z-10 flex items-center gap-2">
          {children}
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </a>
    );
  }

  return (
    <a className={`${base} bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 hover:border-red-400/50 hover:scale-105 backdrop-blur-xl`} href={href} target="_blank" rel="noreferrer">
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
      className="text-sm md:text-base text-gray-300 hover:text-red-400 transition-all duration-300 relative group px-2 py-1"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-yellow-500 group-hover:w-full transition-all duration-300 rounded-full" />
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

    // Matrix Code Rain Animation
    const canvas = document.getElementById('matrix-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const fontSize = 14;
      const columns = canvas.width / fontSize;
      const drops = Array(Math.floor(columns)).fill(1);

      function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
          const colorChoices = ['rgba(239, 68, 68, 0.8)', 'rgba(249, 115, 22, 0.8)', 'rgba(234, 179, 8, 0.8)'];
          ctx.fillStyle = colorChoices[Math.floor(Math.random() * colorChoices.length)];

          const text = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }

      const matrixInterval = setInterval(draw, 50);

      // Binary Particles Animation
      const binaryCanvas = document.getElementById('binary-canvas');
      if (binaryCanvas) {
        const binaryCtx = binaryCanvas.getContext('2d');
        binaryCanvas.width = window.innerWidth;
        binaryCanvas.height = window.innerHeight;

        class BinaryParticle {
          constructor() {
            this.x = Math.random() * binaryCanvas.width;
            this.y = Math.random() * binaryCanvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.binary = Math.random() > 0.5 ? '0' : '1';
            this.opacity = Math.random() * 0.5 + 0.3;
          }

          update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > binaryCanvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > binaryCanvas.height) this.speedY *= -1;
          }

          draw() {
            binaryCtx.fillStyle = `rgba(239, 68, 68, ${this.opacity})`;
            binaryCtx.font = `${this.size * 8}px monospace`;
            binaryCtx.fillText(this.binary, this.x, this.y);
          }
        }

        const binaryParticles = Array(30).fill().map(() => new BinaryParticle());

        function animateBinary() {
          binaryCtx.clearRect(0, 0, binaryCanvas.width, binaryCanvas.height);
          binaryParticles.forEach(particle => {
            particle.update();
            particle.draw();
          });
        }

        const binaryInterval = setInterval(animateBinary, 50);

        // Lock Icons Floating Animation
        const iconsCanvas = document.getElementById('icons-canvas');
        if (iconsCanvas) {
          const iconsCtx = iconsCanvas.getContext('2d');
          iconsCanvas.width = window.innerWidth;
          iconsCanvas.height = window.innerHeight;

          class FloatingIcon {
            constructor() {
              this.x = Math.random() * iconsCanvas.width;
              this.y = Math.random() * iconsCanvas.height;
              this.size = Math.random() * 20 + 15;
              this.speedX = Math.random() * 0.3 - 0.15;
              this.speedY = Math.random() * 0.3 - 0.15;
              this.rotation = Math.random() * Math.PI * 2;
              this.rotationSpeed = (Math.random() - 0.5) * 0.02;
              this.icons = ['🔒', '🔐', '🛡️', '🔑', '⚠️', '🚨'];
              this.icon = this.icons[Math.floor(Math.random() * this.icons.length)];
            }

            update() {
              this.x += this.speedX;
              this.y += this.speedY;
              this.rotation += this.rotationSpeed;

              if (this.x < -50 || this.x > iconsCanvas.width + 50) this.speedX *= -1;
              if (this.y < -50 || this.y > iconsCanvas.height + 50) this.speedY *= -1;
            }

            draw() {
              iconsCtx.save();
              iconsCtx.translate(this.x, this.y);
              iconsCtx.rotate(this.rotation);
              iconsCtx.font = `${this.size}px Arial`;
              iconsCtx.fillText(this.icon, -this.size / 2, this.size / 2);
              iconsCtx.restore();
            }
          }

          const floatingIcons = Array(15).fill().map(() => new FloatingIcon());

          function animateIcons() {
            iconsCtx.clearRect(0, 0, iconsCanvas.width, iconsCanvas.height);
            floatingIcons.forEach(icon => {
              icon.update();
              icon.draw();
            });
          }

          const iconsInterval = setInterval(animateIcons, 50);

          const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            binaryCanvas.width = window.innerWidth;
            binaryCanvas.height = window.innerHeight;
            iconsCanvas.width = window.innerWidth;
            iconsCanvas.height = window.innerHeight;
          };
          window.addEventListener('resize', handleResize);

          return () => {
            clearInterval(matrixInterval);
            clearInterval(binaryInterval);
            clearInterval(iconsInterval);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener('resize', handleResize);
          };
        }
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white relative overflow-x-hidden">
      {/* Matrix Code Rain Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
        <canvas id="matrix-canvas" className="w-full h-full" />
      </div>

      {/* Scanning Lines Effect */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0 scan-line" />
      </div>

      {/* Binary Particles */}
      <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
        <canvas id="binary-canvas" className="w-full h-full" />
      </div>

      {/* Hacker & Security Images Floating */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 text-6xl animate-float-diagonal-1">🕵️</div>
        <div className="absolute top-40 right-20 w-32 h-32 text-6xl animate-float-diagonal-2">🛡️</div>
        <div className="absolute bottom-40 left-20 w-32 h-32 text-6xl animate-float-diagonal-3">🔐</div>
        <div className="absolute bottom-20 right-40 w-32 h-32 text-6xl animate-float-diagonal-4">🔒</div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 text-6xl animate-float-diagonal-5">💻</div>
        <div className="absolute top-2/3 right-1/3 w-32 h-32 text-6xl animate-float-diagonal-6">⚠️</div>
        <div className="absolute top-1/2 left-10 w-32 h-32 text-6xl animate-float-diagonal-7">🚨</div>
        <div className="absolute bottom-1/3 right-10 w-32 h-32 text-6xl animate-float-diagonal-8">🔑</div>
      </div>

      {/* Password Symbols Floating */}
      <div className="fixed inset-0 opacity-8 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-20 left-1/3 text-2xl text-red-500 animate-float-slow-1 font-mono">***********</div>
        <div className="absolute top-1/2 right-1/4 text-2xl text-orange-500 animate-float-slow-2 font-mono">••••••••</div>
        <div className="absolute bottom-1/4 left-1/5 text-2xl text-yellow-500 animate-float-slow-3 font-mono">####</div>
        <div className="absolute top-3/4 right-1/3 text-2xl text-red-400 animate-float-slow-4 font-mono">0x7F</div>
      </div>

      {/* Spotlights / Light Beams */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-red-500/30 via-red-500/5 to-transparent animate-spotlight-1" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-orange-500/30 via-orange-500/5 to-transparent animate-spotlight-2" />
        <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-yellow-500/30 via-yellow-500/5 to-transparent animate-spotlight-3" />
      </div>

      {/* Radial Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full filter blur-3xl animate-glow-pulse-1" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl animate-glow-pulse-2" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-yellow-500/20 rounded-full filter blur-3xl animate-glow-pulse-3" />
      </div>

      {/* Hexagonal Grid Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(30deg, transparent 48%, rgba(239, 68, 68, 0.1) 49%, rgba(239, 68, 68, 0.1) 51%, transparent 52%),
            linear-gradient(-30deg, transparent 48%, rgba(249, 115, 22, 0.1) 49%, rgba(249, 115, 22, 0.1) 51%, transparent 52%)
          `,
          backgroundSize: '50px 86px'
        }} />
      </div>

      {/* Animated Circuit Lines */}
      <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 0.8 }} />
              <stop offset="50%" style={{ stopColor: '#f97316', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#eab308', stopOpacity: 0.4 }} />
            </linearGradient>
          </defs>
          <path className="circuit-path-1" d="M 0 100 Q 150 50, 300 100 T 600 100" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
          <path className="circuit-path-2" d="M 600 200 Q 750 150, 900 200 T 1200 200" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
          <path className="circuit-path-3" d="M 0 300 Q 200 250, 400 300 T 800 300" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Glitch Effect Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0 glitch-overlay" />

      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-8 pointer-events-none z-0">
        <div className="absolute inset-0 grid-animation" style={{
          backgroundImage: 'linear-gradient(rgba(239, 68, 68, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.15) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Orbs with Pulse */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float-pulse animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float-pulse animation-delay-4000" />
      </div>

      {/* Lock Icons Floating */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
        <canvas id="icons-canvas" className="w-full h-full" />
      </div>

      {/* Mouse Follower with Glow */}
      <div
        className="fixed w-8 h-8 rounded-full bg-red-400/20 blur-xl pointer-events-none z-50 transition-all duration-700 ease-out hidden lg:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 50px 20px rgba(239, 68, 68, 0.3)'
        }}
      />

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-gray-950/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl' : 'bg-transparent'}`}>
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <a href="#top" className="text-xl md:text-2xl font-bold relative group">
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-gradient">
              Abanoub
            </span>
            <span className="text-gray-500">.</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-yellow-500 group-hover:w-full transition-all duration-500" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#pentest">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            aria-label="Toggle menu"
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
          <div className="lg:hidden border-t border-white/5 bg-gray-950/95 backdrop-blur-2xl">
            <nav className="flex flex-col px-4 py-4 space-y-2">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#pentest">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>
          </div>
        )}
      </header>

      <main className="relative mx-auto max-w-7xl px-4 md:px-6 pt-24 md:pt-32">
        {/* Hero Section */}
        <section id="about" className="min-h-[80vh] flex flex-col justify-center py-16 md:py-20 scroll-mt-20">
          <div className="flex flex-col items-center gap-8 lg:gap-12">
            {/* Profile Image First */}
            <div className="flex-shrink-0 animate-fade-in-up">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse-slow" />
                <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/10 group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={PROFILE_IMAGE_URL}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23111827' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='48' fill='%23ef4444'%3E🔒%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Content Below Image */}
            <div className="w-full max-w-5xl space-y-6 md:space-y-8 animate-fade-in-up animation-delay-200 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500/10 to-yellow-500/10 border border-red-500/20 px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-sm font-medium text-red-400">Available for Penetration Testing</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-gradient">
                  Penetration Tester
                </span>
                <br />
                <span className="text-gray-300">& Security Researcher</span>
              </h1>

              <div className="space-y-4 text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                <p className="font-semibold text-gray-200">
                  I didn't stumble into security by accident—I was pulled in by one burning question:
                </p>
                <p className="text-xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text italic">
                  "How can we break systems before the bad guys do?"
                </p>
                <p>
                  That curiosity evolved into a mission where I get to be both the attacker and the defender—finding vulnerabilities, exploiting weaknesses, and building stronger defenses.
                </p>
                <p>
                  From web applications to network infrastructure, from wireless attacks to custom USB payloads—I've learned to think like a hacker to protect like a professional.
                </p>
                <p className="font-semibold text-red-400">
                  Every exploit I find, every vulnerability I patch, makes the digital world a little bit safer.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 justify-center">
                <ButtonLink href="#pentest" variant="primary">
                  View Projects
                </ButtonLink>
                <ButtonLink href="#contact" variant="secondary">
                  Hire Me
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        {/* USP Section - Unique Selling Point */}
        <section id="usp" className="py-16 md:py-20 scroll-mt-20">
          <div className="relative group animate-fade-in-up">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-500 animate-pulse-slow" />
            <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 border border-red-500/30 p-12 md:p-16 lg:p-20 backdrop-blur-2xl text-center overflow-hidden">
              {/* Decorative Lines */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />

              <div className="max-w-4xl mx-auto space-y-8 relative">
                {/* Shield Icon with Glow */}
                <div className="relative inline-block">
                  <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 opacity-30 animate-pulse-slow" />
                  <div className="relative text-6xl md:text-7xl lg:text-8xl animate-float">🛡️</div>
                </div>

                {/* English Title */}
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                    <span className="inline-block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient">
                      No Blind Spots.
                    </span>
                  </h2>

                  {/* Divider */}
                  <div className="flex items-center justify-center gap-4 py-4">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-red-500" />
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-500" />
                  </div>

                  {/* Arabic Quote */}
                  <div className="relative inline-block">
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 rounded-2xl blur-xl" />
                    <blockquote className="relative px-8 py-6 rounded-xl border border-red-500/20 bg-black/20 backdrop-blur-sm">
                      <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        <span className="text-red-400" style={{ fontFamily: 'Arial, sans-serif' }}>
                          لا توجد نقاط عمياء
                        </span>
                      </div>
                      {/* Quote Marks */}
                      <div className="absolute -top-2 -left-2 text-4xl text-red-500/30">"</div>
                      <div className="absolute -bottom-2 -right-2 text-4xl text-yellow-500/30">"</div>
                    </blockquote>
                  </div>
                </div>

                {/* Description */}
                <div className="pt-4">
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
                    <span className="text-red-400">Vulnerabilities found.</span>
                    {" "}
                    <span className="text-orange-400">Risks reduced.</span>
                    {" "}
                    <span className="text-yellow-400">Security improved.</span>
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="flex items-center justify-center gap-2 pt-6">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse animation-delay-200" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse animation-delay-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 md:py-20 scroll-mt-20">
          <SectionTitle
            title="Education"
            subtitle="Academic foundation in information technology"
          />

          <div className="relative group animate-fade-in-up">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/10 p-8 md:p-10 backdrop-blur-xl hover:scale-[1.01] transition-transform duration-500">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                {/* University Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                </div>

                {/* Education Details */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Bachelor's Degree in Information Technology
                    </h3>
                    <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
                      Egyptian E-Learning University (EELU)
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-base md:text-lg text-gray-300">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>2020 - 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>IT Department</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 border border-red-500/30">
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-400">Grade</p>
                      <p className="text-lg md:text-xl font-bold text-white">Very Good with Honors</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-gray-400 leading-relaxed">
                      Comprehensive study in information technology covering software development, network security, database management, and system administration—building the technical foundation for my penetration testing career.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-20 scroll-mt-20">
          <SectionTitle
            title="Experience"
            subtitle="Hands-on training and practical security work"
          />

          <div className="space-y-6">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="group relative animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${exp.color} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500`} />
                <div className="relative rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/10 p-6 md:p-8 backdrop-blur-xl hover:scale-[1.01] transition-transform duration-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-500`}>
                        {exp.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                          <span className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-xs font-semibold text-red-400">
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-base md:text-lg font-semibold bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
                          {exp.organization}
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-2 pt-2">
                        <p className="text-sm font-semibold text-red-400">Key Highlights:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {exp.highlights.map((highlight, j) => (
                            <div key={j} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 mt-2 flex-shrink-0" />
                              <span className="text-sm text-gray-400">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-20 scroll-mt-20">
          <SectionTitle
            title="Skills"
            subtitle="Tools and technologies I use to identify and exploit vulnerabilities"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Web Security",
                skills: ["Burp Suite", "OWASP ZAP", "SQLMap", "XSStrike", "Nikto"],
                icon: "🔐",
                gradient: "from-red-500 to-orange-500"
              },
              {
                title: "Network Testing",
                skills: ["Nmap", "Metasploit", "Wireshark", "Netcat", "Nessus"],
                icon: "🌐",
                gradient: "from-orange-500 to-yellow-500"
              },
              {
                title: "Wireless Security",
                skills: ["Aircrack-ng", "Reaver", "Wifite", "WiFi Pineapple", "Kismet"],
                icon: "📡",
                gradient: "from-yellow-500 to-red-500"
              },
              {
                title: "Exploitation",
                skills: ["Metasploit Framework", "Empire", "Cobalt Strike", "Social Engineer Toolkit"],
                icon: "💥",
                gradient: "from-red-600 to-orange-600"
              },
              {
                title: "Scripting & Automation",
                skills: ["Python", "Bash", "PowerShell", "Ruby", "JavaScript"],
                icon: "⚙️",
                gradient: "from-orange-600 to-yellow-600"
              },
              {
                title: "USB & Hardware",
                skills: ["Rubber Ducky", "WiFi Pineapple", "LAN Turtle", "Arduino", "Raspberry Pi"],
                icon: "🔌",
                gradient: "from-yellow-600 to-red-600"
              }
            ].map((category, i) => (
              <div key={i} className="group relative animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500`} />
                <div className="relative rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/10 p-6 backdrop-blur-xl hover:scale-[1.02] transition-transform duration-500 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-2xl`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, j) => (
                      <Pill key={j}>{skill}</Pill>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Penetration Testing Projects */}
        <section id="pentest" className="py-16 md:py-20 scroll-mt-20">
          <SectionTitle
            title="Penetration Testing Projects"
            subtitle="Real-world security assessments and vulnerability research"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PENTEST_PROJECTS.map((project, i) => (
              <div key={i} className="group relative animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                <div className="relative rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/10 p-6 md:p-8 backdrop-blur-xl hover:scale-[1.02] transition-transform duration-500 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{project.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-red-400 mb-2">{project.name}</h3>
                      <p className="text-sm md:text-base text-gray-300 mb-4">{project.desc}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <Pill key={j}>{tag}</Pill>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 md:py-20 pb-16 md:pb-32 scroll-mt-20">
          <div className="relative group animate-fade-in-up">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/10 p-8 md:p-10 backdrop-blur-2xl hover:scale-[1.01] transition-transform duration-500">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a className="text-base md:text-lg font-semibold text-red-400 hover:text-red-300 transition-colors break-all" href={`mailto:${LINKS.email}`}>
                        {LINKS.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a className="text-base md:text-lg font-semibold text-red-400 hover:text-red-300 transition-colors" href={`tel:${LINKS.phone}`}>
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
              © {new Date().getFullYear()} Abanoub Emad Felix • Penetration Tester & Security Researcher
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

        @keyframes float-pulse {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.15;
          }
          50% {
            transform: translateY(-20px) scale(1.1);
            opacity: 0.25;
          }
        }

        @keyframes float-diagonal-1 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(30px, -30px) rotate(15deg);
          }
        }

        @keyframes float-diagonal-2 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-30px, 30px) rotate(-15deg);
          }
        }

        @keyframes float-diagonal-3 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(25px, 25px) rotate(10deg);
          }
        }

        @keyframes float-diagonal-4 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-25px, -25px) rotate(-10deg);
          }
        }

        @keyframes float-diagonal-5 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(40px, 20px) rotate(20deg);
          }
        }

        @keyframes float-diagonal-6 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-20px, 40px) rotate(-20deg);
          }
        }

        @keyframes float-diagonal-7 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(35px, -20px) rotate(12deg);
          }
        }

        @keyframes float-diagonal-8 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-35px, 20px) rotate(-12deg);
          }
        }

        @keyframes float-slow-1 {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-40px) translateX(20px);
            opacity: 0.6;
          }
        }

        @keyframes float-slow-2 {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(40px) translateX(-20px);
            opacity: 0.7;
          }
        }

        @keyframes float-slow-3 {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(-15px);
            opacity: 0.6;
          }
        }

        @keyframes float-slow-4 {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(35px) translateX(15px);
            opacity: 0.7;
          }
        }

        @keyframes spotlight-1 {
          0%, 100% {
            opacity: 0.2;
            transform: translateX(0);
          }
          50% {
            opacity: 0.4;
            transform: translateX(10px);
          }
        }

        @keyframes spotlight-2 {
          0%, 100% {
            opacity: 0.3;
            transform: translateX(0);
          }
          50% {
            opacity: 0.5;
            transform: translateX(-10px);
          }
        }

        @keyframes spotlight-3 {
          0%, 100% {
            opacity: 0.25;
            transform: translateX(0);
          }
          50% {
            opacity: 0.45;
            transform: translateX(5px);
          }
        }

        @keyframes glow-pulse-1 {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.2);
          }
        }

        @keyframes glow-pulse-2 {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.35;
            transform: scale(1.3);
          }
        }

        @keyframes glow-pulse-3 {
          0%, 100% {
            opacity: 0.12;
            transform: scale(1);
          }
          50% {
            opacity: 0.32;
            transform: scale(1.25);
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

        @keyframes scan-line {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        @keyframes grid-animation {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }

        @keyframes glitch {
          0% {
            clip-path: inset(40% 0 61% 0);
            transform: translate(0);
          }
          20% {
            clip-path: inset(92% 0 1% 0);
            transform: translate(-2px, 2px);
          }
          40% {
            clip-path: inset(43% 0 1% 0);
            transform: translate(2px, -2px);
          }
          60% {
            clip-path: inset(25% 0 58% 0);
            transform: translate(-2px, 2px);
          }
          80% {
            clip-path: inset(54% 0 7% 0);
            transform: translate(2px, -2px);
          }
          100% {
            clip-path: inset(58% 0 43% 0);
            transform: translate(0);
          }
        }

        @keyframes circuit-flow {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-pulse {
          animation: float-pulse 8s ease-in-out infinite;
        }

        .animate-float-diagonal-1 {
          animation: float-diagonal-1 12s ease-in-out infinite;
        }

        .animate-float-diagonal-2 {
          animation: float-diagonal-2 14s ease-in-out infinite;
        }

        .animate-float-diagonal-3 {
          animation: float-diagonal-3 16s ease-in-out infinite;
        }

        .animate-float-diagonal-4 {
          animation: float-diagonal-4 13s ease-in-out infinite;
        }

        .animate-float-diagonal-5 {
          animation: float-diagonal-5 15s ease-in-out infinite;
        }

        .animate-float-diagonal-6 {
          animation: float-diagonal-6 17s ease-in-out infinite;
        }

        .animate-float-diagonal-7 {
          animation: float-diagonal-7 14s ease-in-out infinite;
        }

        .animate-float-diagonal-8 {
          animation: float-diagonal-8 16s ease-in-out infinite;
        }

        .animate-float-slow-1 {
          animation: float-slow-1 18s ease-in-out infinite;
        }

        .animate-float-slow-2 {
          animation: float-slow-2 20s ease-in-out infinite;
        }

        .animate-float-slow-3 {
          animation: float-slow-3 22s ease-in-out infinite;
        }

        .animate-float-slow-4 {
          animation: float-slow-4 19s ease-in-out infinite;
        }

        .animate-spotlight-1 {
          animation: spotlight-1 8s ease-in-out infinite;
        }

        .animate-spotlight-2 {
          animation: spotlight-2 10s ease-in-out infinite;
        }

        .animate-spotlight-3 {
          animation: spotlight-3 9s ease-in-out infinite;
        }

        .animate-glow-pulse-1 {
          animation: glow-pulse-1 6s ease-in-out infinite;
        }

        .animate-glow-pulse-2 {
          animation: glow-pulse-2 7s ease-in-out infinite;
        }

        .animate-glow-pulse-3 {
          animation: glow-pulse-3 8s ease-in-out infinite;
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

        .scan-line {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(239, 68, 68, 0.1) 50%,
            transparent 100%
          );
          height: 100px;
          animation: scan-line 4s linear infinite;
        }

        .grid-animation {
          animation: grid-animation 20s linear infinite;
        }

        .glitch-overlay {
          background: linear-gradient(
            to right,
            rgba(239, 68, 68, 0.1),
            rgba(249, 115, 22, 0.1)
          );
          animation: glitch 5s infinite;
        }

        .circuit-path-1,
        .circuit-path-2,
        .circuit-path-3 {
          stroke-dasharray: 1000;
          animation: circuit-flow 15s linear infinite;
        }

        .circuit-path-2 {
          animation-delay: 5s;
        }

        .circuit-path-3 {
          animation-delay: 10s;
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