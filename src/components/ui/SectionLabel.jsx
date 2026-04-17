import React from 'react';

const SectionLabel = ({ text, className = "text-brand-red" }) => {
  return (
    <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.4em] ${className}`}>
      {text}
    </span>
  );
};

export default SectionLabel;