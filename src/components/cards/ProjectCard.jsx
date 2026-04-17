import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      // 【关键修复】：把之前丢失的圆角(rounded-2xl)、内边距(p-10)、上下排布(flex-col justify-between)全加回来了！
      className="bg-white border border-brand-dark/5 rounded-2xl p-10 h-72 flex flex-col justify-between group cursor-pointer hover:bg-brand-red transition-all duration-500 shadow-lg hover:-translate-y-2 text-brand-dark"
    >
      {/* 顶部：编号与图标 */}
      <div className="flex justify-between items-start">
        <span className="font-serif italic font-bold text-4xl group-hover:text-brand-shell transition-colors">
          {project.number}
        </span>
        <div className="w-14 h-14 rounded-full border-2 border-brand-dark flex items-center justify-center group-hover:border-brand-shell group-hover:text-brand-shell transition-all duration-300">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </div>
      </div>
      
      {/* 底部：标题与元数据 */}
      <div>
        <h3 className="text-2xl md:text-3xl font-display font-black tracking-tight uppercase group-hover:text-brand-shell transition-colors leading-none">
          {project.title}
        </h3>
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 group-hover:text-brand-shell group-hover:opacity-100 mt-4 transition-all">
          {project.category} / {project.year}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;