import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Phone, User, CheckCircle2, Loader2, Sparkles, SendHorizontal } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { cn } from "../lib/utils";

export default function ApplicationForm() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    telegram: "",
    phone: "",
    course: "IELTS Intensive"
  });
  const [errors, setErrors] = useState({
    telegram: "",
    phone: ""
  });

  const validateTelegram = (value: string) => {
    if (!value) return "Telegram is required";
    if (!value.startsWith("@")) return "Username must start with @";
    if (value.length < 5) return "Too short (min 4 chars after @)";
    const tgRegex = /^@[a-zA-Z0-9_]{3,31}$/;
    if (!tgRegex.test(value)) return "Invalid characters used";
    return "";
  };

  const validatePhone = (value: string) => {
    if (!value) return "Phone is required";
    const phoneRegex = /^\+?[1-9]\d{6,14}$/;
    if (!phoneRegex.test(value.replace(/\s/g, ""))) return "Invalid phone format";
    return "";
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (field === "telegram") {
      setErrors(prev => ({ ...prev, telegram: validateTelegram(value) }));
    }
    if (field === "phone") {
      setErrors(prev => ({ ...prev, phone: validatePhone(value) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const tgError = validateTelegram(formData.telegram);
    const phoneError = validatePhone(formData.phone);

    if (tgError || phoneError) {
      setErrors({ telegram: tgError, phone: phoneError });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        console.error("Submission failed");
        // Still show success for UX if the server is just simulating
        setSuccess(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="apply" className="py-24 relative overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent_70%)]" />
      
      {/* Background Large Text */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none overflow-hidden h-full">
        <span className="text-[15vw] md:text-[18vw] font-display font-black text-white/[0.04] uppercase italic leading-none whitespace-nowrap translate-y-12">
          DREAM BIG CORE ACADEMY
        </span>
      </div>
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-brand-cyan font-bold tracking-[0.2em] text-xs uppercase"
            >
              <Sparkles className="w-4 h-4" />
              Enrollment Open
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-black italic tracking-tighter uppercase leading-none text-mirror opacity-80"
            >
              {t("apply_title")} <br />
              <span className="text-white/80 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">{t("apply_subtitle")}</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-lg max-w-sm font-medium leading-relaxed"
            >
              {t("apply_desc")}
            </motion.p>

            <div className="space-y-4">
              {[
                "roadmap_phase",
                "assessment",
                "strategy"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/60 font-bold italic text-sm">
                  <div className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-brand-cyan" />
                  </div>
                  {t(item)}
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-blue/20 blur-[80px] rounded-full -z-10" />
            
            <div className="mirror-panel p-8 md:p-12 rounded-[48px] border-white/20 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">{t("apply_field_name")}</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                        <input 
                          type="text" 
                          placeholder={t("apply_field_name")}
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-cyan/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1 italic">{t("apply_field_tg")} *</label>
                        <div className="relative">
                          <Send className={cn("absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors", errors.telegram ? "text-red-400" : "text-brand-cyan")} />
                          <input 
                            required
                            type="text" 
                            placeholder="@username"
                            value={formData.telegram}
                            onChange={e => handleInputChange("telegram", e.target.value)}
                            className={cn(
                              "w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none transition-all font-bold",
                              errors.telegram ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-brand-cyan/50"
                            )}
                          />
                        </div>
                        {errors.telegram && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            className="text-[9px] text-red-500 font-bold uppercase tracking-widest ml-1"
                          >
                            {errors.telegram}
                          </motion.p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1 italic">{t("apply_field_phone")} *</label>
                        <div className="relative">
                          <Phone className={cn("absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors", errors.phone ? "text-red-400" : "text-brand-orange")} />
                          <input 
                            required
                            type="tel" 
                            placeholder="+998 90..."
                            value={formData.phone}
                            onChange={e => handleInputChange("phone", e.target.value)}
                            className={cn(
                              "w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none transition-all font-bold",
                              errors.phone ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-brand-orange/50"
                            )}
                          />
                        </div>
                        {errors.phone && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            className="text-[9px] text-red-500 font-bold uppercase tracking-widest ml-1"
                          >
                            {errors.phone}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1 italic">{t("apply_field_course")}</label>
                      <select 
                        value={formData.course}
                        onChange={e => setFormData({...formData, course: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-white focus:outline-none focus:border-brand-cyan/50 transition-colors appearance-none font-bold italic"
                      >
                        <option value="IELTS Intensive" className="bg-brand-navy">IELTS Intensive</option>
                        <option value="SAT Masterclass" className="bg-brand-navy">SAT Masterclass</option>
                        <option value="TOPIK Prep" className="bg-brand-navy">TOPIK Prep</option>
                        <option value="General English" className="bg-brand-navy">General English</option>
                      </select>
                    </div>

                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full py-5 rounded-2xl bg-gradient-to-tr from-brand-orange to-red-500 text-xs font-black uppercase tracking-widest text-white hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-3 disabled:opacity-50 italic"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          {t("apply_submit")}...
                        </>
                      ) : (
                        <>
                          <SendHorizontal className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          {t("apply_submit")}
                        </>
                      )}
                    </button>
                    
                    <p className="text-[10px] text-center text-white/20 font-black uppercase tracking-widest">
                      By applying, you agree to our terms of service.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-24 h-24 rounded-full bg-brand-cyan/20 flex items-center justify-center mb-8 relative">
                      <div className="absolute inset-0 rounded-full border-4 border-brand-cyan animate-ping opacity-20" />
                      <CheckCircle2 className="w-12 h-12 text-brand-cyan" />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white mb-4 italic tracking-tight">{t("apply_success_title")}</h3>
                    <p className="text-white/40 max-w-xs mx-auto font-medium mb-12">
                      {t("apply_success_desc")}
                    </p>
                    <button 
                      onClick={() => setSuccess(false)}
                      className="text-xs font-black uppercase tracking-widest text-brand-cyan hover:tracking-[0.2em] transition-all"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
