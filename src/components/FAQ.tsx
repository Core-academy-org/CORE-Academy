import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { cn } from "../lib/utils";

const FAQItem = ({ question, answer, isOpen, onClick, index }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
  index: number;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "group mb-4 rounded-[24px] border transition-all duration-500 overflow-hidden",
        isOpen 
          ? "mirror-panel border-white/20 shadow-2xl shadow-brand-blue/10" 
          : "bg-white/[0.02] border-white/5 hover:border-white/10"
      )}
    >
      <button
        onClick={onClick}
        className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors"
      >
        <span 
          style={{ 
            fontFamily: 'Arial, sans-serif',
            ...(index === 0 && { fontSize: '20px', lineHeight: '28px' })
          }}
          className={cn(
            "text-lg md:text-xl font-display font-black italic tracking-tighter uppercase transition-colors",
            isOpen ? "text-white" : "text-white/60 group-hover:text-white"
          )}
        >
          {question}
        </span>
        <div className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 border",
          isOpen ? "bg-white text-brand-navy rotate-180 border-white" : "bg-white/5 text-white/20 group-hover:bg-white/10 border-white/5 group-hover:border-white/20"
        )}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-8 pb-8">
              <div className="w-full h-px bg-white/10 mb-6" />
              <p className="text-white/50 leading-relaxed font-medium text-base md:text-lg">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t("faq_q1"), a: t("faq_a1") },
    { q: t("faq_q2"), a: t("faq_a2") },
    { q: t("faq_q3"), a: t("faq_a3") }
  ];

  return (
    <section id="faq" className="py-32 bg-brand-navy relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-black tracking-[0.3em] text-[10px] uppercase mb-8"
          >
            <HelpCircle className="w-3 h-3" />
            Knowledge Base
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-black italic tracking-tighter uppercase leading-[0.9] mb-6 text-mirror"
          >
            {t("faq_title")} <br />
            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] lowercase font-script pr-2">{t("faq_questions")}</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/30 font-medium max-w-md mx-auto"
          >
            Find rapid answers to the most critical questions regarding our elite training programs and admissions consulting.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <FAQItem 
              key={i}
              index={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/20 text-xs font-black uppercase tracking-[0.2em] mb-6 italic">Still have questions?</p>
          <a 
            href="https://t.me/core_academy_edu" 
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-black uppercase tracking-widest hover:bg-brand-cyan hover:text-brand-navy hover:scale-105 active:scale-95 transition-all group"
          >
            Contact Advisor
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
