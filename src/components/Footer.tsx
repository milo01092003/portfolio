import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-sm">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-base">
                {personalInfo.shortName}
                <span className="text-blue-600 dark:text-blue-400">.dev</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {personalInfo.tagline}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socialLinks.email}
              aria-label="Email"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <span>Được xây dựng với</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-current inline" />
              <span>& React / Tailwind CSS</span>
            </span>

            <button
              onClick={scrollToTop}
              title="Về đầu trang"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all border border-slate-200/60 dark:border-slate-800"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
