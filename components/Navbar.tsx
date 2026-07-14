"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';
import { navLinks, navCTA, BRAND } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleAnchorClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    } else {
      setMobileOpen(false);
    }
  }

  function getLinkHref(href: string) {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D1A]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-extrabold tracking-tight">
              <span className="text-white">in</span>
              <span className="text-[#00C853]">Drive</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={getLinkHref(link.href)}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg transition-colors duration-200 hover:bg-white/5"
              >
                {t(`nav.${link.label.toLowerCase().replace(/\s+/g, "_")}`)}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={getLinkHref(navCTA.href)}
              onClick={(e) => handleAnchorClick(e, navCTA.href)}
              className="px-5 py-2.5 bg-[#00C853] hover:bg-[#00E060] text-black font-bold text-sm rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(0,200,83,0.35)] hover:shadow-[0_0_28px_rgba(0,200,83,0.55)]"
            >
              {t("nav.cta")}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-[#0D0D1A]/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={getLinkHref(link.href)}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="px-4 py-3 text-sm font-medium text-white/80 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  {t(`nav.${link.label.toLowerCase().replace(/\s+/g, "_")}`)}
                </Link>
              ))}
              <Link
                href={getLinkHref(navCTA.href)}
                onClick={(e) => handleAnchorClick(e, navCTA.href)}
                className="mt-2 px-5 py-3 bg-[#00C853] hover:bg-[#00E060] text-black font-bold text-sm rounded-full text-center transition-all duration-200"
              >
                {t("nav.cta")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}