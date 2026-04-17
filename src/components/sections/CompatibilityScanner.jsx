import React from 'react';
import SectionLabel from '../ui/SectionLabel';

const CompatibilityScanner = ({ compatibility }) => {
  const devices = [
    { label: "DESKTOP", index: 0 },
    { label: "TABLET", index: 1 },
    { label: "MOBILE", index: 2 },
  ];

  return (
    <div className="flex-1 bg-white border border-brand-dark/5 rounded-3xl p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group/scanner min-h-[220px]">
      
      {/* 背景扫描线 */}
      <div className="absolute top-0 w-[4px] h-full bg-gradient-to-b from-transparent via-brand-red/80 to-transparent animate-scanner shadow-[0_0_25px_rgba(255,0,0,0.6)] rounded-full z-20"></div>

      <div className="relative z-10 mb-6">
        {/* 复用刚才创建的基础 UI 组件 */}
        <SectionLabel text="System_Compatibility" />
      </div>

      <div className="flex flex-col justify-between flex-1 relative z-10">
        {devices.map((item) => {
          const isActive = compatibility?.[item.index];
          return (
            <div key={item.label} className="flex items-center justify-between group/item">
              <span className={`font-display font-black text-xl tracking-tighter transition-all duration-300 ${isActive ? "text-brand-dark opacity-100" : "text-brand-dark/20"}`}>
                {item.label}
              </span>

              <div className="relative flex items-center justify-center">
                {isActive && (
                  <div className="absolute w-3 h-3 bg-brand-red rounded-full animate-ripple z-0"></div>
                )}
                <div className={`relative z-10 w-3.5 h-3.5 rounded-full border-2 transition-all duration-500 ${isActive ? "bg-brand-red border-brand-red shadow-[0_0_10px_rgba(255,0,0,0.4)]" : "bg-transparent border-brand-dark/10"}`}>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompatibilityScanner;