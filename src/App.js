import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Mail, Linkedin, Github, ArrowUp, Download, ExternalLink,
  Database, BarChart3, Code2, Cpu, Wrench, GraduationCap, Briefcase,
  ShieldCheck, ChevronRight
} from 'lucide-react';
import {
  AreaChart, Area, ResponsiveContainer, XAxis, YAxis
} from 'recharts';

// ======================================================
// Dattatrya Gejage — Portfolio
// Concept: "Query Console" — a data analyst's world sits
// between the spreadsheet (light, ruled, ledger-like) and
// the terminal (dark, monospace, running queries). The
// site alternates between these two registers section by
// section. Backgrounds use soft, slow-drifting aurora
// gradients + fine grain instead of flat ruled squares,
// with a fresh indigo / coral / mint palette.
// ======================================================

const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');

    :root{
      --ink: #0A0A14;
      --console: #14121F;
      --console-line: #2A2740;
      --paper: #F6F3EE;
      --paper-line: #E7E0D3;
      --ledger: #201C33;
      --indigo: #6C6BFF;
      --coral: #FF7A59;
      --mint: #2FE0C0;
      --ink-text: #EDEAFB;
      --ink-muted: #9C98C4;
      --paper-text: #211F2E;
      --paper-muted: #625E72;
    }

    .pf-root{
      font-family: 'Inter', sans-serif;
      background: var(--paper);
      color: var(--paper-text);
    }
    .pf-display{ font-family: 'Space Grotesk', sans-serif; }
    .pf-mono{ font-family: 'JetBrains Mono', monospace; }

    /* --- Aurora backgrounds --- */
    .pf-section{ position: relative; overflow: hidden; }
    .pf-section-inner{ position: relative; z-index: 2; }
    .pf-aurora{ position: absolute; inset: 0; z-index: 0; overflow: hidden; }
    .pf-blob{
      position: absolute;
      border-radius: 50%;
      filter: blur(90px);
      opacity: 0.55;
      will-change: transform;
    }
    @keyframes pf-drift-a{
      0%{ transform: translate(0,0) scale(1); }
      50%{ transform: translate(40px,-30px) scale(1.08); }
      100%{ transform: translate(0,0) scale(1); }
    }
    @keyframes pf-drift-b{
      0%{ transform: translate(0,0) scale(1); }
      50%{ transform: translate(-35px,25px) scale(1.05); }
      100%{ transform: translate(0,0) scale(1); }
    }
    @keyframes pf-drift-c{
      0%{ transform: translate(0,0) scale(1); }
      50%{ transform: translate(25px,35px) scale(0.95); }
      100%{ transform: translate(0,0) scale(1); }
    }
    .pf-blob-a{ animation: pf-drift-a 22s ease-in-out infinite; }
    .pf-blob-b{ animation: pf-drift-b 26s ease-in-out infinite; }
    .pf-blob-c{ animation: pf-drift-c 19s ease-in-out infinite; }

    .pf-grain{
      position: absolute; inset: 0; z-index: 1;
      opacity: 0.05;
      mix-blend-mode: overlay;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    }
    .pf-dots{
      position: absolute; inset: 0; z-index: 1;
      background-image: radial-gradient(currentColor 1px, transparent 1px);
      background-size: 26px 26px;
    }

    .pf-eyebrow{
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.12em;
      font-size: 0.72rem;
      text-transform: uppercase;
    }

    .pf-reveal{
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.7s cubic-bezier(.2,.7,.2,1), transform 0.7s cubic-bezier(.2,.7,.2,1);
    }
    .pf-reveal.pf-in{ opacity: 1; transform: translateY(0); }

    @keyframes pf-blink{ 0%,49%{opacity:1;} 50%,100%{opacity:0;} }
    .pf-caret{ animation: pf-blink 1s step-start infinite; }

    @keyframes pf-float{
      0%,100%{ transform: translateY(0); }
      50%{ transform: translateY(-10px); }
    }
    .pf-float{ animation: pf-float 5s ease-in-out infinite; }

    .pf-scroll-track{
      position: fixed; top:0; left:0; right:0; height: 3px;
      background: transparent; z-index: 60;
    }
    .pf-scroll-bar{
      height: 100%; background: linear-gradient(90deg, var(--indigo), var(--coral));
      transition: width 0.1s linear;
    }

    .pf-tag{
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.78rem;
      border: 1px solid var(--paper-line);
      background: #fff;
    }
    .pf-tag-dark{
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.78rem;
      border: 1px solid var(--console-line);
      background: rgba(255,255,255,0.03);
      color: #D6D2EE;
    }

    .pf-card{
      background: rgba(255,255,255,0.72);
      backdrop-filter: blur(6px);
      border: 1px solid var(--paper-line);
      transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
    }
    .pf-card:hover{
      transform: translateY(-6px);
      box-shadow: 0 18px 40px -18px rgba(32,28,51,0.35);
      border-color: var(--indigo);
    }

    .pf-console-card{
      background: rgba(255,255,255,0.03);
      backdrop-filter: blur(6px);
      border: 1px solid var(--console-line);
      transition: transform 0.35s ease, border-color 0.35s ease, background 0.35s ease;
    }
    .pf-console-card:hover{
      transform: translateY(-6px);
      border-color: var(--coral);
      background: rgba(255,255,255,0.06);
    }

    .pf-terminal{
      background: rgba(20,18,31,0.92);
      backdrop-filter: blur(10px);
      border: 1px solid #322E4A;
      border-radius: 14px;
      box-shadow: 0 30px 70px -30px rgba(0,0,0,0.6);
    }

    .pf-underline-link{ position: relative; }
    .pf-underline-link::after{
      content:'';
      position:absolute; left:0; bottom:-3px; height:1px; width:0;
      background: currentColor;
      transition: width 0.3s ease;
    }
    .pf-underline-link:hover::after{ width:100%; }

    .pf-timeline-line{
      position:absolute; left:0; top:0; width:2px; background: var(--indigo);
      height: 0%; transition: height 1.4s cubic-bezier(.2,.7,.2,1);
    }
    .pf-timeline-line.pf-in{ height: 100%; }

    ::selection{ background: var(--coral); color: #201C33; }
  `}</style>
);

// ------------------------------------------------------
// Aurora background piece — used behind every section
// ------------------------------------------------------
const Aurora = ({ variant = 'light' }) => {
  const dark = variant === 'dark';
  return (
    <>
      <div className="pf-aurora">
        <div
          className="pf-blob pf-blob-a"
          style={{
            width: 460, height: 460, top: '-12%', left: '-8%',
            background: dark ? 'radial-gradient(circle, #6C6BFF, transparent 70%)' : 'radial-gradient(circle, #C9C7FF, transparent 70%)',
            opacity: dark ? 0.35 : 0.5
          }}
        />
        <div
          className="pf-blob pf-blob-b"
          style={{
            width: 420, height: 420, top: '30%', right: '-10%',
            background: dark ? 'radial-gradient(circle, #FF7A59, transparent 70%)' : 'radial-gradient(circle, #FFD3C2, transparent 70%)',
            opacity: dark ? 0.28 : 0.45
          }}
        />
        <div
          className="pf-blob pf-blob-c"
          style={{
            width: 380, height: 380, bottom: '-15%', left: '30%',
            background: dark ? 'radial-gradient(circle, #2FE0C0, transparent 70%)' : 'radial-gradient(circle, #BFF3E8, transparent 70%)',
            opacity: dark ? 0.3 : 0.4
          }}
        />
      </div>
      <div className="pf-dots" style={{ color: dark ? 'rgba(255,255,255,0.05)' : 'rgba(32,28,51,0.06)' }} />
      <div className="pf-grain" />
    </>
  );
};

// ------------------------------------------------------
// Hooks
// ------------------------------------------------------
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function useCountUp(target, active, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    let raf;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

function useTypewriter(text, active, speed = 32) {
  const [out, setOut] = useState('');
  useEffect(() => {
    if (!active) return;
    setOut('');
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [active, text, speed]);
  return out;
}

// ------------------------------------------------------
// Reveal wrapper
// ------------------------------------------------------
const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, inView] = useInView(0.15);
  return (
    <div
      ref={ref}
      className={`pf-reveal ${inView ? 'pf-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ------------------------------------------------------
// Chart data
// ------------------------------------------------------
const chartData = [
  { m: 'Jan', v: 8.2 }, { m: 'Feb', v: 9.1 }, { m: 'Mar', v: 8.7 },
  { m: 'Apr', v: 10.4 }, { m: 'May', v: 11.8 }, { m: 'Jun', v: 12.6 },
  { m: 'Jul', v: 13.1 }, { m: 'Aug', v: 12.4 }, { m: 'Sep', v: 14.2 },
  { m: 'Oct', v: 15.0 }, { m: 'Nov', v: 15.6 }, { m: 'Dec', v: 16.01 }
];

const App = () => {
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [pdfTitle, setPdfTitle] = useState('');
  const [showScroll, setShowScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrollTop = h.scrollTop || document.body.scrollTop;
      const scrollHeight = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
      setScrollPct(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
      setShowScroll(scrollTop > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const openPdfModal = (url, title) => {
    setPdfUrl(url);
    setPdfTitle(title || 'Document Preview');
    setShowPdfModal(true);
  };
  const closePdfModal = () => {
    setPdfUrl('');
    setShowPdfModal(false);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certificates' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Contact', href: '#contact' }
  ];

  const profile = {
    name: 'Dattatrya Gejage',
    title: 'Data Analyst · SQL Developer · Business Intelligence Analyst',
    photoUrl: '/img/datta.jpg',
    aboutMeImage: '/img/datta.jpg',
    resumeUrl: '/pdf/Dattatrya_Gejage_Data_Analyst_Resume.pdf',
    aboutMe:
      'I am a B.Tech graduate in Artificial Intelligence & Data Science with practical experience in SQL, MySQL, Power BI, Python, Microsoft Excel, and Business Intelligence. I enjoy transforming raw business data into meaningful insights through ETL, data cleaning, data modeling, Power Query, and DAX. My Retail Intelligence Dashboard analyzes over 99K customer orders and ₹16.01 million in revenue using an end-to-end analytics workflow. I continuously strengthen my expertise in Data Analytics, Machine Learning, Deep Learning, and Generative AI by building practical projects focused on solving real business problems.',
    contact: {
      email: 'dattatraygejage8@gmail.com',
      linkedin: 'linkedin.com/in/dattatryagejage',
      github: 'github.com/gejagedatta'
    }
  };

  const skillGroups = [
    { label: 'programming', icon: Code2, items: ['Python', 'SQL'] },
    { label: 'databases', icon: Database, items: ['MySQL', 'PostgreSQL'] },
    { label: 'business_intelligence', icon: BarChart3, items: ['Power BI', 'DAX', 'Power Query', 'Dashboard Dev'] },
    { label: 'data_analysis', icon: Cpu, items: ['Pandas', 'NumPy', 'EDA', 'Data Cleaning', 'Statistics', 'Data Modeling'] },
    { label: 'ai_ml', icon: Cpu, items: ['Machine Learning', 'Deep Learning', 'Generative AI', 'Scikit-Learn'] },
    { label: 'tools', icon: Wrench, items: ['Excel', 'Git', 'GitHub', 'Jupyter', 'Google Colab'] }
  ];

  const timelineEvents = [
    {
      title: 'B.Tech in Artificial Intelligence & Data Science',
      description: 'Dr. J. J. Magdum College of Engineering, Jaysingpur',
      date: '2022 – 2026',
      details: 'CGPA : 8.53 / 10',
      icon: GraduationCap
    },
    { title: 'Python Intern', description: 'TechnoHacks Solutions', date: 'Jun 2024 – Jul 2024', details: null, icon: Briefcase },
    { title: 'AI Virtual Intern', description: 'TechSaksham (Microsoft & SAP Initiative)', date: 'Feb 2025 – Mar 2025', details: null, icon: Briefcase },
    { title: 'AI & Data Science Intern', description: 'BetterCode Technologies Pvt. Ltd.', date: 'Jul 2025 – Aug 2025', details: null, icon: Briefcase }
  ];

  const projects = [
    {
      title: 'Retail Intelligence Dashboard',
      description:
        'End-to-end BI solution using MySQL, SQL, Power BI, Power Query and DAX. Analysed 99K+ orders, 99K+ customers and ₹16.01M revenue through interactive KPI dashboards, revenue trends, customer insights and product performance analysis.',
      stack: ['Power BI', 'MySQL', 'SQL', 'DAX', 'Power Query'],
      link: 'https://github.com/gejagedatta/Retail-Intelligence-Dashboard',
      spark: [4, 6, 5, 8, 7, 9, 12, 11, 14, 16]
    },
    {
      title: 'Customer Shopping Behavior Analysis',
      description:
        'Exploratory data analysis using Python, Pandas and SQL to identify purchasing patterns, segmentation and spending behaviour, with business recommendations visualised in Power BI.',
      stack: ['Python', 'Pandas', 'SQL', 'Power BI'],
      link: 'https://github.com/gejagedatta',
      spark: [10, 8, 9, 7, 11, 9, 13, 10, 12, 15]
    },
    {
      title: 'Sales Performance Analytics Dashboard',
      description:
        'Interactive sales analytics dashboard using Power BI, DAX and Power Query to monitor revenue trends, average order value, top categories and purchasing behaviour.',
      stack: ['Power BI', 'Excel', 'DAX', 'Power Query'],
      link: 'https://github.com/gejagedatta',
      spark: [6, 9, 8, 10, 9, 12, 11, 14, 13, 17]
    }
  ];

  const certificates = [
    { title: 'Database & SQL for Data Science with Python — IBM (Coursera)', pdfUrl: '/pdf/Databases and SQL for Data Science IBM.pdf' },
    { title: 'Data Analysis in Python using Pandas DataFrames', pdfUrl: '/pdf/Data Analysis in Python Coursera.pdf' },
    { title: 'Generative AI for Data Scientists — IBM', pdfUrl: '/pdf/Coursera Gen AI Data Scientists.pdf' },
    { title: 'AI for Everyone — DeepLearning.AI', pdfUrl: '/pdf/Coursera AI.pdf' },
    { title: 'Microsoft Excel Beginner to Advanced', pdfUrl: '/pdf/ExcelCertificate.pdf' },
    { title: 'Intermediate Python Programming', pdfUrl: '/pdf/Python NumPy.pdf' },
    { title: 'Deep Learning — IIT Ropar (NPTEL)', pdfUrl: '/pdf/Deep Learning.pdf' },
    { title: 'Cyber Security Awareness — NIELIT', pdfUrl: '/pdf/NIELIT.pdf' }
  ];

  const [heroRef, heroInView] = useInView(0.3);
  const sqlQuery = "SELECT SUM(revenue) AS total\nFROM orders\nWHERE year = 2025;";
  const typed = useTypewriter(sqlQuery, heroInView, 26);
  const queryDone = typed.length === sqlQuery.length;
  const revenueCount = useCountUp(16.01, queryDone, 1200);
  const ordersCount = useCountUp(99, queryDone, 1200);

  const [statsRef, statsInView] = useInView(0.3);
  const s1 = useCountUp(99, statsInView);
  const s2 = useCountUp(16.01, statsInView);
  const s3 = useCountUp(100, statsInView);
  const s4 = useCountUp(3, statsInView);

  const [timelineRef, timelineInView] = useInView(0.1);

  return (
    <div className="pf-root min-h-screen">
      <GlobalStyle />

      <div className="pf-scroll-track">
        <div className="pf-scroll-bar" style={{ width: `${scrollPct}%` }} />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-40" style={{ background: 'rgba(10,10,20,0.85)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #2A2740' }}>
        <div className="container mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="pf-display font-bold text-lg" style={{ color: 'var(--ink-text)' }}>
            {profile.name}
            <span className="pf-mono ml-1" style={{ color: 'var(--coral)' }}>_</span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link, i) => (
              <a key={i} href={link.href} className="pf-mono pf-underline-link text-sm" style={{ color: 'var(--ink-muted)' }}>
                {String(i + 1).padStart(2, '0')}.{link.label}
              </a>
            ))}
          </div>

          <button onClick={toggleMobileMenu} className="md:hidden" style={{ color: 'var(--ink-text)' }} aria-label="Toggle navigation menu">
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden px-6 py-4 flex flex-col gap-4" style={{ borderTop: '1px solid #2A2740' }}>
            {navLinks.map((link, i) => (
              <a key={i} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="pf-mono text-sm" style={{ color: 'var(--ink-muted)' }}>
                {String(i + 1).padStart(2, '0')}.{link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ============================ HERO ============================ */}
      <section id="hero" ref={heroRef} className="pf-section relative pt-32 pb-20 px-6" style={{ background: 'var(--ink)' }}>
        <Aurora variant="dark" />
        <div className="pf-section-inner container mx-auto max-w-6xl grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <p className="pf-eyebrow pf-float" style={{ color: 'var(--mint)' }}>// business_intelligence_analyst</p>
            <h1 className="pf-display font-bold mt-4" style={{ color: 'var(--ink-text)', fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', lineHeight: 1.05 }}>
              {profile.name}
            </h1>
            <p className="pf-mono mt-5 text-sm md:text-base" style={{ color: 'var(--ink-muted)' }}>
              {profile.title}
            </p>
            <p className="mt-6 max-w-lg" style={{ color: '#C6C2E4', lineHeight: 1.75 }}>
              I turn raw transactional data into dashboards decision-makers actually use —
              built on SQL, Power BI, DAX and Python.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <button
                onClick={() => openPdfModal(profile.resumeUrl, 'Resume Preview')}
                className="pf-mono inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium text-sm"
                style={{ background: 'var(--coral)', color: '#201C33' }}
              >
                view_resume.pdf <ChevronRight size={16} />
              </button>
              <a
                href={profile.resumeUrl}
                download
                className="pf-mono inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium text-sm"
                style={{ border: '1px solid #3A3557', color: 'var(--ink-text)' }}
              >
                <Download size={16} /> download
              </a>
            </div>

            <div className="flex items-center gap-5 mt-10">
              <a href={`mailto:${profile.contact.email}`} aria-label="Email" style={{ color: 'var(--ink-muted)' }}><Mail size={20} /></a>
              <a href={`https://${profile.contact.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--ink-muted)' }}><Linkedin size={20} /></a>
              <a href={`https://${profile.contact.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--ink-muted)' }}><Github size={20} /></a>
            </div>
          </div>

          <div className="pf-terminal overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid #322E4A' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF7A59', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#F2C94C', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#2FE0C0', display: 'inline-block' }} />
              <span className="pf-mono ml-3 text-xs" style={{ color: '#7D799E' }}>retail_dashboard.sql</span>
            </div>

            <div className="p-5">
              <pre className="pf-mono text-sm whitespace-pre-wrap" style={{ color: '#8FE9DC', minHeight: '3.2rem' }}>
{typed}<span className="pf-caret">▍</span>
              </pre>

              <div
                className="mt-4"
                style={{
                  height: queryDone ? 160 : 0,
                  opacity: queryDone ? 1 : 0,
                  transition: 'height 0.6s ease, opacity 0.6s ease'
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 5, right: 8, left: -18, bottom: 0 }}>
                    <defs>
                      <linearGradient id="pfRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FF7A59" stopOpacity={0.55} />
                        <stop offset="100%" stopColor="#FF7A59" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="m" tick={{ fontSize: 10, fill: '#7D799E' }} axisLine={false} tickLine={false} />
                    <YAxis hide domain={['dataMin - 2', 'dataMax + 2']} />
                    <Area type="monotone" dataKey="v" stroke="#FF7A59" strokeWidth={2} fill="url(#pfRev)" isAnimationActive={true} animationDuration={1200} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div
                className="grid grid-cols-2 gap-4 mt-4 pt-4"
                style={{ borderTop: '1px solid #322E4A', opacity: queryDone ? 1 : 0, transition: 'opacity 0.6s ease 0.3s' }}
              >
                <div>
                  <p className="pf-eyebrow" style={{ color: '#7D799E' }}>total_revenue</p>
                  <p className="pf-mono font-semibold text-xl" style={{ color: 'var(--ink-text)' }}>₹{revenueCount.toFixed(2)}M</p>
                </div>
                <div>
                  <p className="pf-eyebrow" style={{ color: '#7D799E' }}>orders_count</p>
                  <p className="pf-mono font-semibold text-xl" style={{ color: 'var(--ink-text)' }}>{ordersCount.toFixed(0)}K+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ ABOUT (paper) ============================ */}
      <section id="about" className="pf-section py-24 px-6" style={{ background: 'var(--paper)' }}>
        <Aurora variant="light" />
        <div className="pf-section-inner container mx-auto max-w-6xl grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
          <Reveal>
            <div className="relative mx-auto" style={{ width: 320, height: 320 }}>
              <div className="pf-float" style={{ width: '100%', height: '100%', borderRadius: '18px', overflow: 'hidden', border: '1px solid var(--paper-line)', background: '#fff', boxShadow: '0 30px 60px -30px rgba(32,28,51,0.35)' }}>
                
            <img
              src="/img/datta.jpg"
              alt="About Dattatrya"
              className="w-full h-full object-cover"
            />
 
              </div>
              <div className="pf-mono absolute -bottom-4 -right-4 px-3 py-2 rounded-md text-xs" style={{ background: 'var(--ledger)', color: 'var(--mint)' }}>
                row_1 / about_me
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="pf-eyebrow" style={{ color: 'var(--indigo)' }}>// 01_about</p>
            <h2 className="pf-display font-bold text-3xl md:text-4xl mt-3" style={{ color: 'var(--paper-text)' }}>
              Reading a business through its data
            </h2>
            <p className="mt-6 text-base md:text-lg" style={{ color: 'var(--paper-muted)', lineHeight: 1.8 }}>
              {profile.aboutMe}
            </p>

            <div ref={statsRef} className="grid grid-cols-2 gap-4 mt-10">
              {[
                { label: 'orders analysed', value: s1, suffix: 'K+' },
                { label: 'revenue analysed', value: s2, prefix: '₹', suffix: 'M' },
                { label: 'records processed', value: s3, suffix: 'K+' },
                { label: 'analytics projects', value: s4, suffix: '' }
              ].map((stat, i) => (
                <div key={i} className="pf-card rounded-lg p-5">
                  <p className="pf-mono font-bold text-2xl" style={{ color: 'var(--indigo)' }}>
                    {stat.prefix || ''}{stat.value < 10 ? stat.value.toFixed(2) : Math.round(stat.value)}{stat.suffix}
                  </p>
                  <p className="pf-eyebrow mt-2" style={{ color: 'var(--paper-muted)' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ SKILLS (console) ============================ */}
      <section id="skills" className="pf-section py-24 px-6" style={{ background: 'var(--console)' }}>
        <Aurora variant="dark" />
        <div className="pf-section-inner container mx-auto max-w-6xl">
          <Reveal>
            <p className="pf-eyebrow" style={{ color: 'var(--coral)' }}>// 02_skills</p>
            <h2 className="pf-display font-bold text-3xl md:text-4xl mt-3" style={{ color: 'var(--ink-text)' }}>
              Toolkit, tabulated
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {skillGroups.map((group, gi) => {
              const Icon = group.icon;
              return (
                <Reveal key={gi} delay={gi * 80}>
                  <div className="pf-console-card rounded-lg p-6 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon size={18} style={{ color: 'var(--coral)' }} />
                      <span className="pf-mono text-xs" style={{ color: 'var(--mint)' }}>{group.label}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, ii) => (
                        <span key={ii} className="pf-tag-dark px-3 py-1.5 rounded">{item}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ PROJECTS (paper) ============================ */}
      <section id="projects" className="pf-section py-24 px-6" style={{ background: 'var(--paper)' }}>
        <Aurora variant="light" />
        <div className="pf-section-inner container mx-auto max-w-6xl">
          <Reveal>
            <p className="pf-eyebrow" style={{ color: 'var(--indigo)' }}>// 03_projects</p>
            <h2 className="pf-display font-bold text-3xl md:text-4xl mt-3" style={{ color: 'var(--paper-text)' }}>
              Featured work
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="pf-card rounded-xl p-6 h-full flex flex-col">
                  <div style={{ height: 60 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={project.spark.map((v, idx) => ({ idx, v }))}>
                        <defs>
                          <linearGradient id={`spark-${i}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6C6BFF" stopOpacity={0.45} />
                            <stop offset="100%" stopColor="#6C6BFF" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="v" stroke="#6C6BFF" strokeWidth={2} fill={`url(#spark-${i})`} isAnimationActive={true} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  <h3 className="pf-display font-bold text-xl mt-4" style={{ color: 'var(--paper-text)' }}>{project.title}</h3>
                  <p className="mt-3 text-sm flex-grow" style={{ color: 'var(--paper-muted)', lineHeight: 1.7 }}>{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.stack.map((s, si) => (
                      <span key={si} className="pf-tag px-2.5 py-1 rounded" style={{ color: 'var(--ledger)' }}>{s}</span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pf-mono inline-flex items-center justify-center gap-2 mt-6 py-3 rounded-md text-sm font-medium"
                    style={{ background: 'var(--ledger)', color: 'var(--ink-text)' }}
                  >
                    view_on_github <ExternalLink size={14} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ CERTIFICATES (console) ============================ */}
      <section id="certificates" className="pf-section py-24 px-6" style={{ background: 'var(--console)' }}>
        <Aurora variant="dark" />
        <div className="pf-section-inner container mx-auto max-w-6xl">
          <Reveal>
            <p className="pf-eyebrow" style={{ color: 'var(--coral)' }}>// 04_certifications</p>
            <h2 className="pf-display font-bold text-3xl md:text-4xl mt-3" style={{ color: 'var(--ink-text)' }}>
              Verified & completed
            </h2>
            <p className="mt-4 max-w-2xl" style={{ color: 'var(--ink-muted)' }}>
              Coursework across Data Analytics, SQL, Python, Power BI, Artificial Intelligence,
              Machine Learning, Deep Learning, Excel, and Cyber Security.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {certificates.map((cert, i) => (
              <Reveal key={i} delay={(i % 4) * 80}>
                <div className="pf-console-card rounded-lg p-5 h-full flex flex-col justify-between">
                  <div>
                    <ShieldCheck size={20} style={{ color: 'var(--mint)' }} />
                    <h3 className="mt-3 text-sm font-medium" style={{ color: 'var(--ink-text)', lineHeight: 1.5 }}>{cert.title}</h3>
                  </div>
                  <button
                    onClick={() => openPdfModal(cert.pdfUrl, cert.title)}
                    className="pf-mono mt-5 text-xs text-left pf-underline-link"
                    style={{ color: 'var(--coral)' }}
                  >
                    view_certificate →
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ TIMELINE (paper) ============================ */}
      <section id="timeline" className="pf-section py-24 px-6" style={{ background: 'var(--paper)' }}>
        <Aurora variant="light" />
        <div className="pf-section-inner container mx-auto max-w-4xl">
          <Reveal>
            <p className="pf-eyebrow" style={{ color: 'var(--indigo)' }}>// 05_timeline</p>
            <h2 className="pf-display font-bold text-3xl md:text-4xl mt-3" style={{ color: 'var(--paper-text)' }}>
              Education & experience
            </h2>
          </Reveal>

          <div ref={timelineRef} className="relative pl-10 mt-12" style={{ borderLeft: '2px solid var(--paper-line)' }}>
            <div className={`pf-timeline-line ${timelineInView ? 'pf-in' : ''}`} />
            <div className="space-y-12">
              {timelineEvents.map((event, i) => {
                const Icon = event.icon;
                return (
                  <Reveal key={i} delay={i * 120}>
                    <div className="relative">
                      <div
                        className="absolute flex items-center justify-center"
                        style={{
                          left: -51, top: 0, width: 34, height: 34, borderRadius: '50%',
                          background: '#fff', border: '2px solid var(--indigo)'
                        }}
                      >
                        <Icon size={15} style={{ color: 'var(--ledger)' }} />
                      </div>
                      <p className="pf-mono text-xs" style={{ color: 'var(--paper-muted)' }}>{event.date}</p>
                      <h3 className="pf-display font-bold text-lg mt-1" style={{ color: 'var(--paper-text)' }}>{event.title}</h3>
                      <p className="mt-1" style={{ color: 'var(--paper-muted)' }}>{event.description}</p>
                      {event.details && (
                        <p className="pf-mono mt-2 text-sm font-medium" style={{ color: 'var(--indigo)' }}>{event.details}</p>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================ CONTACT (console) ============================ */}
      <section id="contact" className="pf-section py-24 px-6" style={{ background: 'var(--console)' }}>
        <Aurora variant="dark" />
        <div className="pf-section-inner container mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="pf-eyebrow" style={{ color: 'var(--coral)' }}>// 06_contact</p>
            <h2 className="pf-display font-bold text-3xl md:text-4xl mt-3" style={{ color: 'var(--ink-text)' }}>
              Let's connect
            </h2>
            <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'var(--ink-muted)', lineHeight: 1.8 }}>
              Actively seeking roles as a Data Analyst, SQL Developer, Business Intelligence
              Analyst, MIS Executive, or Power BI Developer — open to internships, full-time
              opportunities, and collaborations.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {[
              { icon: Mail, label: 'email', value: profile.contact.email, href: `mailto:${profile.contact.email}` },
              { icon: Linkedin, label: 'linkedin', value: 'view profile', href: `https://${profile.contact.linkedin}` },
              { icon: Github, label: 'github', value: 'view repository', href: `https://${profile.contact.github}` }
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={i} delay={i * 100}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="pf-console-card rounded-lg p-6 flex flex-col items-center gap-3 h-full">
                    <Icon size={22} style={{ color: 'var(--coral)' }} />
                    <span className="pf-mono text-xs" style={{ color: '#7D799E' }}>{c.label}</span>
                    <span className="text-sm break-all" style={{ color: 'var(--ink-text)' }}>{c.value}</span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center" style={{ background: 'var(--ink)', borderTop: '1px solid #2A2740' }}>
        <p className="pf-display font-bold text-lg" style={{ color: 'var(--ink-text)' }}>{profile.name}</p>
        <p className="pf-mono text-xs mt-2" style={{ color: '#7D799E' }}>
          data_analyst · sql_developer · bi_analyst
        </p>
        <p className="mt-6 text-xs" style={{ color: '#5A5578' }}>
          © {new Date().getFullYear()} Dattatrya Gejage. All rights reserved.
        </p>
      </footer>

      {/* PDF Modal */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center px-4" style={{ background: 'rgba(10,10,20,0.85)' }}>
          <div className="bg-white rounded-xl overflow-hidden w-full max-w-4xl" style={{ height: '85vh' }}>
            <div className="flex justify-between items-center px-6 py-4" style={{ borderBottom: '1px solid var(--paper-line)' }}>
              <h2 className="pf-mono font-semibold text-sm truncate pr-4">{pdfTitle}</h2>
              <button onClick={closePdfModal} className="text-2xl leading-none" aria-label="Close">×</button>
            </div>
            <iframe src={pdfUrl} title="Document Preview" className="w-full h-full" />
          </div>
        </div>
      )}

      {/* Back to top */}
      <button
        onClick={scrollTop}
        style={{
          opacity: showScroll ? 1 : 0,
          pointerEvents: showScroll ? 'auto' : 'none',
          position: 'fixed', bottom: 28, right: 28,
          background: 'var(--coral)', color: '#201C33',
          padding: 14, borderRadius: '50%', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
          transition: 'opacity 0.3s ease'
        }}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default App;
