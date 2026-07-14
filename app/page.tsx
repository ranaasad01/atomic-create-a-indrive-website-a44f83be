"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { MapPin, Star, Shield, Clock, DollarSign, Smartphone, ChevronRight, CheckCircle, Users, Globe, ArrowRight, Car, Zap } from 'lucide-react';
import { BRAND, stats } from "@/lib/data";
import { fadeInUp, fadeIn, staggerContainer, scaleIn, slideInLeft, slideInRight } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";
import { useTranslations } from "next-intl";

// ─── Inline data ────────────────────────────────────────────────────────────

const howItWorksSteps = [
  {
    id: 1,
    icon: Smartphone,
    titleKey: "how.step1_title",
    descKey: "how.step1_desc",
  },
  {
    id: 2,
    icon: DollarSign,
    titleKey: "how.step2_title",
    descKey: "how.step2_desc",
  },
  {
    id: 3,
    icon: Car,
    titleKey: "how.step3_title",
    descKey: "how.step3_desc",
  },
  {
    id: 4,
    icon: Star,
    titleKey: "how.step4_title",
    descKey: "how.step4_desc",
  },
];

const driverBenefits = [
  { id: 1, key: "drivers.benefit1" },
  { id: 2, key: "drivers.benefit2" },
  { id: 3, key: "drivers.benefit3" },
  { id: 4, key: "drivers.benefit4" },
  { id: 5, key: "drivers.benefit5" },
  { id: 6, key: "drivers.benefit6" },
];

const safetyFeatures = [
  {
    id: 1,
    icon: Shield,
    titleKey: "safety.feat1_title",
    descKey: "safety.feat1_desc",
  },
  {
    id: 2,
    icon: Star,
    titleKey: "safety.feat2_title",
    descKey: "safety.feat2_desc",
  },
  {
    id: 3,
    icon: Clock,
    titleKey: "safety.feat3_title",
    descKey: "safety.feat3_desc",
  },
  {
    id: 4,
    icon: Users,
    titleKey: "safety.feat4_title",
    descKey: "safety.feat4_desc",
  },
];

const cities = [
  { id: 1, name: "São Paulo", country: "Brazil", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Marginal_Pinheiros_e_Jockey_Club.jpg/330px-Marginal_Pinheiros_e_Jockey_Club.jpg" },
  { id: 2, name: "Lagos", country: "Nigeria", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Marginal_Pinheiros_e_Jockey_Club.jpg/330px-Marginal_Pinheiros_e_Jockey_Club.jpg" },
  { id: 3, name: "Almaty", country: "Kazakhstan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Marginal_Pinheiros_e_Jockey_Club.jpg/330px-Marginal_Pinheiros_e_Jockey_Club.jpg" },
  { id: 4, name: "Cairo", country: "Egypt", image: "https://media.newyorker.com/photos/5909523dc14b3c606c103bac/16:9/w_1280,c_limit/Victoria-Island-580.jpg" },
  { id: 5, name: "Nairobi", country: "Kenya", image: "https://media.digitalnomads.world/wp-content/uploads/2021/11/20114724/almaty-digital-nomads-1024x683.jpg" },
  { id: 6, name: "Karachi", country: "Pakistan", image: "https://www.touristegypt.com/wp-content/uploads/2023/03/giza-pyramids-cairo-egypt-with-palm.jpg" },
];

const testimonials = [
  {
    id: 1,
    nameKey: "testimonials.t1_name",
    roleKey: "testimonials.t1_role",
    quoteKey: "testimonials.t1_quote",
    rating: 5,
    avatar: "https://picsum.photos/seed/d3a228b06402/800/600",
  },
  {
    id: 2,
    nameKey: "testimonials.t2_name",
    roleKey: "testimonials.t2_role",
    quoteKey: "testimonials.t2_quote",
    rating: 5,
    avatar: "https://i.ytimg.com/vi/6faV1E0V64w/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGFUgZChlMA8=&rs=AOn4CLDrjmpt0ZytcLRNjB9mE-6vyApK4w",
  },
  {
    id: 3,
    nameKey: "testimonials.t3_name",
    roleKey: "testimonials.t3_role",
    quoteKey: "testimonials.t3_quote",
    rating: 5,
    avatar: "https://i.ytimg.com/vi/Obu-IAJK5NE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAX4X__sI5epYmqPf3jFHObo2ishA",
  },
];

// ─── Animated counter variant ────────────────────────────────────────────────

const counterVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="bg-[#0D0D1A] text-white overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#00C853]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00C853]/5 rounded-full blur-[80px]" />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: copy */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              {/* Badge */}
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00C853]/10 border border-[#00C853]/25 text-[#00C853] text-xs font-semibold tracking-wide uppercase">
                  <Zap size={12} />
                  {t("hero.badge")}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeInUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-balance"
              >
                {t("hero.headline_1")}{" "}
                <span className="text-[#00C853]">{t("hero.headline_accent")}</span>
                <br />
                {t("hero.headline_2")}
              </motion.h1>

              {/* Subtext */}
              <motion.p
                variants={fadeInUp}
                className="text-lg text-white/60 leading-relaxed max-w-lg text-pretty"
              >
                {t("hero.subtext")}
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
                <motion.a
                  href={BRAND.appStoreUrl}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-6 py-3.5 bg-[#00C853] hover:bg-[#00E060] text-black font-bold rounded-full transition-colors duration-200 shadow-[0_0_28px_rgba(0,200,83,0.4)] hover:shadow-[0_0_40px_rgba(0,200,83,0.6)]"
                >
                  <Smartphone size={18} />
                  {t("hero.cta_appstore")}
                </motion.a>
                <motion.a
                  href={BRAND.googlePlayUrl}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold rounded-full transition-all duration-200"
                >
                  <Globe size={18} />
                  {t("hero.cta_googleplay")}
                </motion.a>
              </motion.div>

              {/* Trust row */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-6 pt-2 text-sm text-white/40"
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-[#00C853]" />
                  {t("hero.trust1")}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-[#00C853]" />
                  {t("hero.trust2")}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-[#00C853]" />
                  {t("hero.trust3")}
                </span>
              </motion.div>
            </motion.div>

            {/* Right: phone mockup */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-[300px] sm:w-[340px]">
                {/* Glow behind phone */}
                <div className="absolute inset-0 bg-[#00C853]/20 rounded-[48px] blur-[60px] scale-110" />
                {/* Phone frame */}
                <div className="relative bg-[#111122] border border-white/10 rounded-[40px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)]">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D22AQFqyic0MUiF8w/feedshare-shrink_800/B4DZ1ECb9zIYAc-/0/1774962983224?e=2147483647&v=beta&t=7ectiT8uqIbSPU67lLMKH6WgmW3dntTWAu6hcjgTAhA"
                    alt={t("hero.phone_alt")}
                    className="w-full h-auto block"
                  />
                  {/* Overlay UI chip */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
                    className="absolute bottom-8 left-4 right-4 bg-[#0D0D1A]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-white/50">{t("hero.chip_label")}</span>
                      <span className="text-xs text-[#00C853] font-semibold">{t("hero.chip_status")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#00C853]/20 flex items-center justify-center">
                        <Car size={14} className="text-[#00C853]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{t("hero.chip_driver")}</p>
                        <p className="text-xs text-white/40">{t("hero.chip_eta")}</p>
                      </div>
                      <div className="ml-auto text-right">
                        <p className="text-sm font-bold text-[#00C853]">{t("hero.chip_fare")}</p>
                        <p className="text-xs text-white/40">{t("hero.chip_negotiated")}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
                  className="absolute -left-10 top-16 bg-[#0D0D1A] border border-white/10 rounded-2xl px-4 py-3 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00C853]/60 to-[#00C853]/20 border border-[#0D0D1A]"
                        />
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{t("hero.float_drivers")}</p>
                      <p className="text-[10px] text-white/40">{t("hero.float_nearby")}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <Reveal>
        <section className="py-16 border-y border-white/5 bg-[#080812]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={counterVariant}
                  custom={i}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-extrabold text-[#00C853] tracking-tight">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-sm text-white/50">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-[#00C853]/10 border border-[#00C853]/20 text-[#00C853] text-xs font-semibold uppercase tracking-widest mb-4">
                {t("how.eyebrow")}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
                {t("how.title")}
              </h2>
              <p className="mt-4 text-white/50 max-w-xl mx-auto text-pretty">
                {t("how.subtitle")}
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#00C853]/30 to-transparent" />

            {howItWorksSteps.map((step, i) => (
              <Reveal key={step.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-[#00C853]/30 hover:bg-[#00C853]/[0.04] transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.2)]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#00C853]/10 border border-[#00C853]/20 flex items-center justify-center mb-5">
                    <step.icon size={24} className="text-[#00C853]" />
                  </div>
                  <span className="absolute top-4 right-4 text-xs font-bold text-white/15">
                    0{step.id}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR DRIVERS ──────────────────────────────────────────────────── */}
      <section id="drivers" className="py-24 md:py-32 bg-[#080812]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: image */}
            <Reveal>
              <div className="relative">
                <div className="absolute inset-0 bg-[#00C853]/10 rounded-3xl blur-[60px]" />
                <div className="relative rounded-3xl overflow-hidden border border-white/8 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
                  <img
                    src="https://www.shutterstock.com/image-photo/smiling-man-holding-steering-wheel-260nw-2673541411.jpg"
                    alt={t("drivers.image_alt")}
                    className="w-full h-[480px] object-cover"
                  />
                  {/* Earnings chip */}
                  <div className="absolute bottom-6 left-6 right-6 bg-[#0D0D1A]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-white/50 uppercase tracking-wide font-semibold">
                        {t("drivers.chip_label")}
                      </span>
                      <span className="text-xs text-[#00C853] font-bold">{t("drivers.chip_period")}</span>
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-extrabold text-white">{t("drivers.chip_amount")}</span>
                      <span className="text-sm text-[#00C853] mb-1 font-semibold">{t("drivers.chip_growth")}</span>
                    </div>
                    <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "72%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                        className="h-full bg-[#00C853] rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: copy */}
            <Reveal delay={0.15}>
              <div className="flex flex-col gap-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#00C853]/10 border border-[#00C853]/20 text-[#00C853] text-xs font-semibold uppercase tracking-widest w-fit">
                  {t("drivers.eyebrow")}
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
                  {t("drivers.title")}
                </h2>
                <p className="text-white/55 leading-relaxed text-pretty">
                  {t("drivers.subtitle")}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  {driverBenefits.map((b) => (
                    <li key={b.id} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#00C853] mt-0.5 shrink-0" />
                      <span className="text-sm text-white/70">{t(b.key)}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={BRAND.googlePlayUrl}
                  whileHover={{ scale: 1.04, x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 mt-2 text-[#00C853] font-semibold text-sm group w-fit"
                >
                  {t("drivers.cta")}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </motion.a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SAFETY ───────────────────────────────────────────────────────── */}
      <section id="safety" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <Reveal>
              <div className="flex flex-col gap-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#00C853]/10 border border-[#00C853]/20 text-[#00C853] text-xs font-semibold uppercase tracking-widest w-fit">
                  {t("safety.eyebrow")}
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
                  {t("safety.title")}
                </h2>
                <p className="text-white/55 leading-relaxed text-pretty">
                  {t("safety.subtitle")}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {safetyFeatures.map((feat, i) => (
                    <Reveal key={feat.id} delay={i * 0.08}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-[#00C853]/25 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#00C853]/10 flex items-center justify-center mb-3">
                          <feat.icon size={18} className="text-[#00C853]" />
                        </div>
                        <h4 className="text-sm font-bold text-white mb-1">{t(feat.titleKey)}</h4>
                        <p className="text-xs text-white/50 leading-relaxed">{t(feat.descKey)}</p>
                      </motion.div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right: image */}
            <Reveal delay={0.15}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#00C853]/8 rounded-3xl blur-[60px]" />
                <div className="relative rounded-3xl overflow-hidden border border-white/8 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
                  <img
                    src="https://www.alleganysaddlery.com/wp-content/uploads/2024/08/312562543_562837292508814_3193299627567099608_n.jpg"
                    alt={t("safety.image_alt")}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                {/* SOS badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
                  className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-[#00C853] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(0,200,83,0.5)]"
                >
                  <Shield size={22} className="text-black" />
                  <span className="text-[10px] font-extrabold text-black mt-0.5">{t("safety.sos_label")}</span>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CITIES ───────────────────────────────────────────────────────── */}
      <section id="cities" className="py-24 md:py-32 bg-[#080812]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-[#00C853]/10 border border-[#00C853]/20 text-[#00C853] text-xs font-semibold uppercase tracking-widest mb-4">
                {t("cities.eyebrow")}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
                {t("cities.title")}
              </h2>
              <p className="mt-4 text-white/50 max-w-xl mx-auto text-pretty">
                {t("cities.subtitle")}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {cities.map((city, i) => (
              <Reveal key={city.id} delay={i * 0.07}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative rounded-2xl overflow-hidden border border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] group cursor-pointer"
                >
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-[#00C853]" />
                      <span className="text-sm font-bold text-white">{city.name}</span>
                    </div>
                    <span className="text-xs text-white/50">{city.country}</span>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="text-center mt-10">
              <motion.a
                href="#download"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#00C853] text-sm font-semibold transition-colors duration-200 group"
              >
                {t("cities.view_all")}
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-[#00C853]/10 border border-[#00C853]/20 text-[#00C853] text-xs font-semibold uppercase tracking-widest mb-4">
                {t("testimonials.eyebrow")}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
                {t("testimonials.title")}
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col gap-5 p-7 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-[#00C853]/25 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.2)]"
                >
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: item.rating }).map((_, si) => (
                      <Star key={si} size={14} className="text-[#00C853] fill-[#00C853]" />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-sm text-white/70 leading-relaxed flex-1 italic">
                    &ldquo;{t(item.quoteKey)}&rdquo;
                  </p>
                  {/* Author */}
                  <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                    <img
                      src={item.avatar}
                      alt={t(item.nameKey)}
                      className="w-10 h-10 rounded-full object-cover border border-white/10"
                    />
                    <div>
                      <p className="text-sm font-bold text-white">{t(item.nameKey)}</p>
                      <p className="text-xs text-white/40">{t(item.roleKey)}</p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD CTA ─────────────────────────────────────────────────── */}
      <section id="download" className="py-24 md:py-32 bg-[#080812]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden border border-[#00C853]/20 bg-gradient-to-br from-[#00C853]/10 via-[#0D0D1A] to-[#080812] p-12 md:p-16 text-center shadow-[0_0_80px_rgba(0,200,83,0.12)]">
              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#00C853]/15 blur-[80px] pointer-events-none" />

              <div className="relative">
                <span className="inline-block px-3 py-1 rounded-full bg-[#00C853]/10 border border-[#00C853]/20 text-[#00C853] text-xs font-semibold uppercase tracking-widest mb-6">
                  {t("download.eyebrow")}
                </span>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-balance mb-5">
                  {t("download.title")}
                </h2>
                <p className="text-white/55 max-w-xl mx-auto leading-relaxed text-pretty mb-10">
                  {t("download.subtitle")}
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <motion.a
                    href={BRAND.appStoreUrl}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-3 px-8 py-4 bg-[#00C853] hover:bg-[#00E060] text-black font-bold rounded-full transition-colors duration-200 shadow-[0_0_32px_rgba(0,200,83,0.45)] hover:shadow-[0_0_48px_rgba(0,200,83,0.65)]"
                  >
                    <Smartphone size={20} />
                    {t("download.appstore_btn")}
                  </motion.a>
                  <motion.a
                    href={BRAND.googlePlayUrl}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold rounded-full transition-all duration-200"
                  >
                    <Globe size={20} />
                    {t("download.googleplay_btn")}
                  </motion.a>
                </div>

                <p className="mt-8 text-xs text-white/30">
                  {t("download.disclaimer")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}