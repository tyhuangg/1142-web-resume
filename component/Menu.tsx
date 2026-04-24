"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLang } from "./LanguageProvider"
import { translations } from "./languageData"
import {
  FaHome, 
  FaUserAstronaut, 
  FaBriefcase, 
  FaGithub, 
  FaLinkedin, 
  FaChartBar, 
  FaCode,
  FaInstagram, 
  FaEnvelope,
  FaRobot,
} from "react-icons/fa"

export default function Menu() {
  const pathname = usePathname();
  const { lang } = useLang();
  
  const t = translations[lang as keyof typeof translations].menu;

  const navItems = [
    { href: "/",              label: t.home,   icon: FaHome },
    { href: "/about",         label: t.about,  icon: FaUserAstronaut },
    { href: "/resume",        label: t.resume, icon: FaBriefcase },
    { href: "/projects/data", label: t.data,   icon: FaChartBar }, 
    { href: "/projects/web",  label: t.web,    icon: FaCode },
    { href: "/projects/ai",   label: t.ai,     icon: FaRobot, badge: true },
  ];

  const socialLinks = [
    { href: "https://github.com/tyhuangg/",                              icon: FaGithub },
    { href: "https://www.linkedin.com/in/tingyunclaudiahuang/",          icon: FaLinkedin },
    { href: "https://instagram.com/ty.huangg",                           icon: FaInstagram },
    { href: "mailto:claudia41.huang@gmail.com",                          icon: FaEnvelope },
  ];

  return (
    <div className="h-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 p-6 border-r border-slate-200 dark:border-slate-800 flex flex-col font-sans transition-colors duration-500">
      
      {/* 1. 個人品牌區 */}
      <div className="flex-shrink-0 text-center mb-8 mt-2">
        <div className="relative mb-4">
          <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-2 ring-blue-100 dark:ring-blue-900 shadow-sm">
            <Image
              src="/profile.png"
              alt="Claudia Huang"
              width={80}
              height={80}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">黃婷筠 Claudia</h2>
        <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mb-3 tracking-wide uppercase">Data Analyst Intern</p>
        <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-relaxed px-4">
          {lang === 'zh' ? '數據驅動的思考者' : 'Data-Driven Thinker'}<br />
          {lang === 'zh' ? '跨界創作者' : 'Cross-disciplinary Creator'}
        </p>
      </div>

      {/* 2. 導航選單區 */}
      <div className="flex-grow">
        <h3 className="text-[9px] font-bold text-slate-400 dark:text-slate-600 mb-4 uppercase tracking-[0.2em] border-t border-slate-100 dark:border-slate-800 pt-6">
          Navigation
        </h3>
        <nav className="space-y-1.5">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-md" 
                    : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                <item.icon className={`w-4 h-4 mr-4 flex-shrink-0 ${isActive ? "text-blue-300 dark:text-blue-600" : "text-slate-400 dark:text-slate-600"}`} />
                <span className="text-sm font-semibold tracking-wide flex-1">{item.label}</span>
                {/* NEW badge — 只有 AI 頁有，且非 active 時才顯示 */}
                {item.badge && !isActive && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 leading-none">
                    NEW
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 3. 底部社群區 */}
      <div className="flex-shrink-0 pt-6 border-t border-slate-100 dark:border-slate-800 mt-auto">
        <div className="flex justify-center space-x-4 mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-slate-400 dark:text-slate-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        <div className="text-[9px] text-slate-300 dark:text-slate-700 text-center tracking-tighter">
          {t.footer}
        </div>
      </div>
    </div>
  )
}
