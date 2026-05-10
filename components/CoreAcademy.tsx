'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { Languages, Menu, X, ArrowRight, CheckCircle2, Send, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav_courses'), href: '#courses' },
    { name: t('nav_teachers'), href: '#teachers' },
    { name: t('nav_roadmap'), href: '#roadmap' },
    { name: t('nav_faq'), href: '#faq' },
  ];

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 rounded-2xl ${isScrolled ? 'glass py-3' : 'bg-white/5 py-5 border border-white/5'}`}>
      <div className="px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center font-bold text-white text-xl group-hover:rotate-12 transition-transform">C</div>
          <span className="text-xl font-black tracking-tighter font-heading text-white">CORE ACADEMY</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-medium hover:text-brand-cyan transition-colors uppercase tracking-widest font-mono">
              {item.name}
            </a>
          ))}
          <div className="flex items-center gap-2 border-l border-white/20 pl-6">
            {(['UZ', 'EN', 'RU'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`text-xs font-bold px-2 py-1 rounded transition-all ${language === lang ? 'bg-brand-blue text-white' : 'text-white/50 hover:text-white'}`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass p-6 md:hidden flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">
                {item.name}
              </a>
            ))}
            <div className="flex gap-4 mt-2">
              {(['UZ', 'EN', 'RU'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => { setLanguage(lang); setIsMenuOpen(false); }}
                  className={`text-sm font-bold px-4 py-2 rounded ${language === lang ? 'bg-brand-blue' : 'bg-white/10'}`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden grid-bg">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-blue/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-orange/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 glass rounded-full text-xs font-mono tracking-widest text-brand-cyan mb-6">
            {"// PREMIER PREPARATION CENTER"}
          </div>
          <h1 className="text-6xl md:text-9xl font-black leading-[0.85] mb-8 uppercase italic font-heading tracking-tighter">
            {t('hero_title_1')}<br />
            <span className="gradient block">
              GLOBAL
            </span>
            <span className="font-accent italic lowercase font-normal italic text-white block -mt-4">
              Education
            </span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-md mb-10 leading-relaxed">
            The most prestigious preparation center in Uzbekistan for those who aim for world-class results.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-blue hover:bg-white hover:text-brand-navy text-white px-8 py-4 rounded-none font-bold transition-all uppercase tracking-tighter flex items-center gap-2 group">
              {t('apply_now')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="glass hover:bg-white/10 text-white px-8 py-4 rounded-none font-bold transition-all uppercase tracking-tighter">
              {t('view_courses')}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square md:aspect-[4/5]"
        >
          <div className="absolute inset-0 border-2 border-white/10 m-6 z-20 pointer-events-none" />
          <div className="absolute -top-4 -right-4 glass p-6 z-30 hidden md:block">
            <div className="text-4xl font-black text-brand-orange leading-none">95%</div>
            <div className="text-[10px] font-mono tracking-widest mt-1 opacity-60">ADMISSION RATE</div>
          </div>
          <div className="absolute -bottom-4 -left-4 glass p-6 z-30 hidden md:block">
            <div className="text-4xl font-black text-brand-cyan leading-none">8.5</div>
            <div className="text-[10px] font-mono tracking-widest mt-1 opacity-60">AVG IELTS SCORE</div>
          </div>
          <div className="relative w-full h-full glass overflow-hidden">
            <Image
              src="https://picsum.photos/seed/core_hero/1200/1500"
              alt="Elite Education"
              fill
              referrerPolicy="no-referrer"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const partners = ['British Council', 'IDP IELTS', 'Cambridge ESOL', 'Oxford Press', 'SAT Board', 'Pearson PTE'];
  return (
    <div className="py-12 glass border-y border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
        <span className="text-[10px] font-mono tracking-[0.5em] text-white/30 uppercase">Authorized Partners & Accreditation</span>
      </div>
      <div className="flex overflow-hidden group">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 py-4 whitespace-nowrap"
        >
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <span key={i} className="text-2xl md:text-4xl font-black tracking-tighter text-white/20 grayscale opacity-50 hover:opacity-100 hover:text-white transition-all cursor-default uppercase font-heading">
              {partner}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Courses = () => {
  const { t } = useLanguage();
  const courses = [
    {
      title: 'International English',
      score: '8.5',
      desc: 'Elite IELTS preparation with certified examiners. Guaranteed band 7.5+ for dedicated students.',
      color: 'border-l-4 border-brand-blue',
      icon: '🎓'
    },
    {
      title: 'SAT Elite',
      score: '1580',
      tag: 'SAT ELITE',
      scoreColor: 'text-brand-orange',
      desc: 'Cracking the college board with advanced math & verbal strategies.',
      icon: '🇺🇸'
    },
    {
      title: 'TOPIK VI',
      score: 'Lvl 6',
      tag: 'TOPIK PRO',
      scoreColor: 'text-white',
      desc: 'Direct entry to top Korean universities.',
      icon: '🇰🇷'
    },
    {
      title: 'ADMISSIONS',
      score: 'FULL RIDE',
      desc: 'Strategic consultation for global scholarship hunting.',
      icon: '🌍'
    }
  ];

  return (
    <section id="courses" className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic font-heading">
          {t('courses_title')}
        </h2>
        <div className="w-32 h-2 bg-brand-blue" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.slice(0, 3).map((course, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className={`p-8 glass flex flex-col justify-between min-h-[320px] relative overflow-hidden group rounded-2xl ${course.color || ''}`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 scale-150 flex items-center justify-center text-8xl">
              {course.icon}
            </div>
            <div>
              <h3 className="text-xs font-mono tracking-widest mb-4 opacity-60 uppercase">
                {course.title}
              </h3>
              <div className={`text-5xl font-black tracking-tighter mb-4 font-heading ${course.scoreColor || 'text-brand-cyan'}`}>
                {course.score}
              </div>
              <p className="text-white/50 text-sm leading-relaxed max-w-[80%]">{course.desc}</p>
            </div>
            <div className="mt-8">
              <div className="h-10 bg-white/5 rounded-lg border border-white/5" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Roadmap = () => {
  const { t } = useLanguage();
  const steps = [
    { title: 'Assessment', phase: '01' },
    { title: 'Strategy', phase: '02' },
    { title: 'Execution', phase: '03' },
    { title: 'Admissions', phase: '04' }
  ];

  return (
    <section id="roadmap" className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
      <div className="glass p-10 rounded-3xl border border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
              <span className="font-mono text-[10px] text-brand-orange tracking-widest font-bold">PHASE {step.phase}</span>
              <span className="font-black uppercase text-xl font-heading">{step.title}</span>
            </div>
            {idx < steps.length - 1 && (
              <div className="hidden md:block flex-grow h-[1px] bg-white/10 mx-4" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

const Teachers = () => {
  const { t } = useLanguage();
  const teachers = [
    { name: 'Umidjon Davlatov', role: 'Head of IELTS Faculty', image: '/teacher_male_portrait_1.png' },
    { name: 'Elena Petrova', role: 'SAT Mathematics Expert', image: '/teacher_female_portrait_1.png' },
    { name: 'Azamat Karimov', role: 'TOPIK Lead Specialist', image: '/teacher_male_portrait_2.png' },
    { name: 'Sarah Wilson', role: 'Native Speaking Coach', image: '/teacher_female_portrait_2.png' },
  ];

  return (
    <section id="teachers" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter font-heading text-gradient">
          {t('teachers_title')}
        </h2>
      </div>

      <div className="flex gap-6 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 whitespace-nowrap"
        >
          {[...teachers, ...teachers].map((teacher, i) => (
            <div key={i} className="min-w-[350px] aspect-[4/5] glass relative group overflow-hidden">
              <Image
                src={`https://picsum.photos/seed/teacher_${i}/800/1000`}
                alt={teacher.name}
                fill
                referrerPolicy="no-referrer"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="text-xs font-mono tracking-widest text-brand-cyan mb-1">{teacher.role}</div>
                <div className="text-3xl font-black uppercase tracking-tighter whitespace-normal leading-none">{teacher.name}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const questions = [
    { q: 'How long are the courses?', a: 'Standard courses last 3 months, intensive tracks are 8 weeks long.' },
    { q: 'Do you provide online lessons?', a: 'Yes, we have a premium hybrid model with interactive digital platforms.' },
    { q: 'Are there scholarship opportunities?', a: 'Top performers (IELTS 8.0+) are eligible for internal grants and support.' },
    { q: 'What is the admission policy?', a: 'We conduct a preliminary assessment to place you in the most effective group.' }
  ];

  return (
    <section id="faq" className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="text-5xl md:text-7xl font-black uppercase text-center mb-16 italic font-heading">
        {t('faq_title')}
      </h2>

      <div className="space-y-4">
        {questions.map((item, idx) => (
          <div key={idx} className="glass overflow-hidden">
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full text-left p-6 flex justify-between items-center hover:bg-white/5 transition-colors"
            >
              <span className="text-xl font-bold uppercase tracking-tight">{item.q}</span>
              <div className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-brand-orange' : ''}`}>
                <ArrowRight className="rotate-90" />
              </div>
            </button>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="px-6 pb-6 text-white/60 leading-relaxed font-sans"
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

const ApplicationForm = () => {
  const { t } = useLanguage();
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section className="py-24 relative overflow-hidden flex justify-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr,400px] gap-12 items-end w-full">
        <div>
          <div className="text-[11px] font-mono mb-4 opacity-50 tracking-[0.2em] uppercase">Trusted by 2000+ students globally</div>
          <div className="flex gap-4 overflow-hidden">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="glass p-4 rounded-xl min-w-[200px]">
                <div className="font-bold text-sm mb-1 uppercase tracking-tight">Student Name {i}</div>
                <div className="text-[10px] opacity-40 font-mono">ADMITTED TO TOP TIER</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white text-brand-navy p-10 rounded-2xl shadow-2xl relative z-10 w-full">
          <div className="font-black text-2xl mb-8 tracking-tighter uppercase font-heading">
            SECURE YOUR SPOT
          </div>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input required type="text" className="w-full bg-black/5 border border-black/10 p-4 focus:border-brand-blue outline-none transition-all placeholder:text-black/30 text-sm font-bold" placeholder="FULL NAME" />
            <input required type="text" className="w-full bg-black/5 border border-black/10 p-4 focus:border-brand-blue outline-none transition-all placeholder:text-black/30 text-sm font-bold" placeholder="TELEGRAM USERNAME" />
            <input required type="tel" className="w-full bg-black/5 border border-black/10 p-4 focus:border-brand-blue outline-none transition-all placeholder:text-black/30 text-sm font-bold" placeholder="+998 90 ..." />
            
            <button className="w-full py-4 bg-brand-navy text-white hover:bg-brand-blue transition-all font-black uppercase text-sm tracking-widest flex items-center justify-center gap-2">
              {isSent ? 'TRANSMISSION SUCCESSFUL' : 'SEND APPLICATION'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-12 glass mt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center font-bold text-white">C</div>
            <span className="text-xl font-black tracking-tighter uppercase">CORE ACADEMY</span>
          </div>
          <p className="text-sm text-white/40 leading-relaxed font-mono">
            Crafting world-class educational experiences since 2020. Your gateway to top universities around the globe.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-mono tracking-[0.3em] font-bold mb-6 text-brand-cyan uppercase">Connect</h4>
          <div className="flex flex-col gap-4 text-white/60">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Telegram</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-mono tracking-[0.3em] font-bold mb-6 text-brand-orange uppercase">Location</h4>
          <p className="text-lg font-bold uppercase tracking-tight mb-2">
            {t('footer_address')}
          </p>
          <p className="text-sm text-white/40 font-mono">info@coreacademy.uz</p>
          <p className="text-sm text-white/40 font-mono">+998 71 200 44 44</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] font-mono tracking-widest text-white/20">
          © 2026 CORE ACADEMY ELITE EDUCATION. ALL RIGHTS RESERVED.
        </p>
      </div>

      <a
        href="https://t.me/coreacademy"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center shadow-2xl shadow-brand-blue/40 z-50 hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </footer>
  );
};

export default function CoreAcademy() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <SocialProof />
      <Courses />
      <Roadmap />
      <Teachers />
      <FAQ />
      <ApplicationForm />
      <div className="py-24 text-center px-6">
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-white/5 uppercase select-none italic font-heading">
          {useLanguage().t('cta_title')}
        </h2>
      </div>
      <Footer />
    </div>
  );
}
