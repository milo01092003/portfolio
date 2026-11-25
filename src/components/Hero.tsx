import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, Download, Mail, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const { personalInfo } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = personalInfo.typewriterRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.typewriterRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, personalInfo.typewriterRoles]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/15 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Badge */}
            {personalInfo.availableForHire && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>BA & Quản Trị Web @ ipopen.vn - Trường Thành Media</span>
              </div>
            )}

            {/* Avatar & Main Greeting & Name */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-5">
              <div className="relative group shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden ring-4 ring-blue-500/20 dark:ring-blue-400/20 shadow-xl shadow-blue-500/10 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white dark:border-slate-900"></span>
                </span>
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <p className="text-base sm:text-lg font-semibold tracking-wide text-blue-600 dark:text-blue-400 uppercase">
                  Xin chào, tôi là
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {personalInfo.name}
                </h1>
                
                {/* Animated Role Text */}
                <div className="h-10 sm:h-12 flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
                    {displayText}
                  </span>
                  <span className="w-0.5 h-6 sm:h-8 bg-blue-600 dark:bg-blue-400 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Khám phá dự án IPOPEN</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-sm transition-all duration-200"
              >
                <Download className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Liên hệ / Nhận CV</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Kết nối:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socialLinks.email}
                  aria-label="Send email"
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Code Terminal Graphic Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl shadow-blue-500/10 overflow-hidden text-left font-mono text-xs sm:text-sm">
              
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>trinh_duc_profile.ts</span>
                </div>
                <div className="text-slate-600 text-[10px]">utf-8</div>
              </div>

              {/* Code Snippet Body */}
              <div className="p-5 space-y-2 text-slate-300 leading-relaxed overflow-x-auto">
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-300">profile</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">name</span>:{' '}
                  <span className="text-amber-300">"{personalInfo.name}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">education</span>:{' '}
                  <span className="text-amber-300">"Đại học FPT - CNTT"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">company</span>:{' '}
                  <span className="text-emerald-300">"Trường Thành Media"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">flagshipProject</span>:{' '}
                  <span className="text-cyan-300">"IPOPEN - ipopen.vn"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">roles</span>:{' '}
                  <span className="text-amber-300">"Business Analyst & Web Admin"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">skills</span>: [
                </p>
                <p className="pl-8 text-emerald-400">
                  "TSTT Analysis", "Web Admin", "Escrow", "AI Shield", "UAT"
                </p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span className="text-sky-300">readyToBuild</span>:{' '}
                  <span className="text-cyan-400">true</span>
                </p>
                <p>&#125;;</p>

                <div className="pt-3 border-t border-slate-800 text-slate-400 text-xs flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>// Sẵn sàng kết nối và hợp tác dự án!</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-10 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-sm hover:border-blue-500/40 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
