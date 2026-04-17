import React from 'react';

const Tag = ({ children, variant = "dark", className = "" }) => {
  // 根据传入的 variant 决定背景颜色，默认是深色
  const bgClass = variant === "red" ? "bg-brand-red" : "bg-brand-dark";
  
  return (
    <span className={`${bgClass} text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md ${className}`}>
      {children}
    </span>
  );
};

export default Tag;