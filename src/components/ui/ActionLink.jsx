import React from 'react';

const ActionLink = ({ href, children, icon }) => {
  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-brand-dark text-white px-8 py-4 rounded-[16px] font-display font-bold text-[12px] uppercase tracking-[0.15em] hover:bg-brand-red transition-all duration-300 shadow-xl hover:-translate-y-1 group/btn"
    >
      {/* 如果传入了 icon，就渲染出来，并加上悬停旋转动效 */}
      {icon && (
        <span className="group-hover/btn:rotate-12 transition-transform">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </a>
  );
};

export default ActionLink;