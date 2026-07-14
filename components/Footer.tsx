"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { MessageCircle as Twitter, Briefcase as Linkedin, Globe as Facebook, Camera as Instagram } from 'lucide-react';
import { BRAND } from "@/lib/data";
import { useTranslations } from "next-intl";

const footerSections = [
  {
    titleKey: "footer.company_title",
    links: [
      { labelKey: "footer.about", href: "#" },
      { labelKey: "footer.careers", href: "#" },
      { labelKey: "footer.press", href: "#" },
      { labelKey: "footer.blog", href: "#" },
    ],
  },
  {
    titleKey: "footer.riders_title",
    links: [
      { labelKey: "footer.how_it_works", href: "#how-it-works" },
      { labelKey: "footer.safety", href: "#safety" },
      { labelKey: "footer.cities", href: "#cities" },
      { labelKey: "footer.download", href: "#download" },
    ],
  },
  {
    titleKey: "footer.drivers_title",
    links: [
      { labelKey: "footer.drive_with_us", href: "#drivers" },
      { labelKey: "footer.driver_benefits", href: "#drivers" },
      { labelKey: "footer.driver_support", href: "#" },
      { labelKey: "footer.driver_app", href: "#download" },
    ],
  },
  {
    titleKey: "footer.legal_title",
    links: [
      { labelKey: "footer.privacy", href: "#" },
      { labelKey: "footer.terms", href: "#" },
      { labelKey: "footer.cookies", href: "#" },
      { labelKey: "footer.accessibility", href: "#" },
    ],
  },
];

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();

  function getLinkHref(href: string) {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  }

  function handleAnchorClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <footer className="bg-[#080812] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-white">in</span>
                <span className="text-[#00C853]">Drive</span>
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-[200px]">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#00C853] hover:border-[#00C853]/40 transition-colors duration-200"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.titleKey}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                {t(section.titleKey)}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.labelKey}>
                    <Link
                      href={getLinkHref(link.href)}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            {t("footer.copyright", { year: new Date().getFullYear(), brand: BRAND.name })}
          </p>
          <p className="text-xs text-white/30">{t("footer.made_with")}</p>
        </div>
      </div>
    </footer>
  );
}