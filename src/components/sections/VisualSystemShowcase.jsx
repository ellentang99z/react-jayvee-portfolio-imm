import React from 'react';

const VisualSystemShowcase = ({ image }) => {
  return (
    <section className="bg-brand-dark text-brand-shell rounded-[40px] p-12 md:p-16">
      {/* Title and description area */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
        <h3 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none">
          VISUAL<br />SYSTEM.
        </h3>
        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-red">
          Typography & Colors Overview
        </p>
      </div>

      {/* Visual asset image area: Adaptive height is used, abandoning the fixed aspect ratio. */}
      <div className="w-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden relative group">
        {image ? (
          <img
            src={image}
            className="w-full h-auto block transition-transform duration-[1.5s] group-hover:scale-[1.01]"
            alt="Visual System Specification"
          />
        ) : (
          <div className="h-[400px] flex items-center justify-center">
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-30 text-white">
              SYSTEM_IMAGE_PLACEHOLDER
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default VisualSystemShowcase;