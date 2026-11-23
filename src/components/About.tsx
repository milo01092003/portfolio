import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2, Zap, Layout, Users, GraduationCap, Award, Compass } from 'lucide-react';

export const About: React.FC = () => {
  const { about, education } = portfolioData;

  const strengthIcons = [
    <Code2 className="w-6 h-6 text-blue-500" />,
    <Zap className="w-6 h-6 text-amber-500" />,
    <Layout className="w-6 h-6 text-cyan-500" />,
    <Users className="w-6 h-6 text-emerald-500" />
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Khám phá câu chuyện</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {about.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {about.subtitle}
          </p>
        </div>

        {/* Narrative & Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-blue-600"></span>
                <span>Đam mê tạo ra sản phẩm thực thụ</span>
              </h3>
              
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {p}
                </p>
              ))}

              {/* Education box */}
              {education && education.length > 0 && (
                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                        {education[0].degree}
                      </h4>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {education[0].school} • {education[0].period}
                      </p>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        {education[0].description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Core Strengths */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.keyStrengths.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                    {strengthIcons[idx % strengthIcons.length]}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Award className="w-3.5 h-3.5" />
                  <span>Tiêu chuẩn công việc</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
