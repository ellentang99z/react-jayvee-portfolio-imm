import React from "react";
import SectionLabel from "../ui/SectionLabel";
import Tag from "../ui/Tag";

function AboutMeContent({ onContactClick }) {
  return (
    <div className="h-full flex flex-col max-w-5xl mx-auto justify-center w-full relative z-10 animate-fade-in py-2">
      {/* 顶部标题区 */}
      <div className="mb-6 border-b border-brand-dark/5 pb-8 shrink-0 relative">
        <div className="flex items-center gap-4 mb-4">
          <SectionLabel text="TECH_STACK: TYPESCRIPT / RIVE / THREE.JS" />
        </div>
        <h1 className="text-6xl md:text-[80px] lg:text-[100px] font-display font-black tracking-tight leading-[0.85] uppercase text-brand-dark">
          INTERACTION
          <br />
          <span className="editorial-outline ml-0">architect.</span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start flex-1 overflow-visible">
        {/* 左侧装饰/头像区 */}
        <div className="w-full lg:w-[320px] flex items-center justify-center relative overflow-visible shrink-0 min-h-[300px]">
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f408.svg"
            alt="cat emoji"
            className="w-48 h-48 md:w-56 md:h-56 object-contain opacity-90"
          />
        </div>

        {/* 右侧文字介绍区 */}
        <div className="flex-1 pt-4 flex flex-col h-full">
          {/* 技能标签 */}
          <div className="flex flex-wrap gap-3 mb-8 font-mono">
            <Tag variant="red">Front-end Developer</Tag>
            <Tag>UIUX Designer</Tag>
            <Tag>Motion Designer</Tag>
          </div>

          {/* 核心 Slogan */}
          <p className="text-2xl md:text-[42px] font-serif italic leading-[1.1] text-brand-dark mb-10 max-w-2xl">
            "Merging{" "}
            <span className="font-display font-black not-italic text-brand-red uppercase tracking-tight">
              IMPACTFUL
            </span>{" "}
            visuals with performant{" "}
            <span className="editorial-outline text-4xl md:text-5xl">
              motion
            </span>{" "}
            design."
          </p>

          {/* 交互按钮 */}
          <div className="flex flex-wrap gap-5 mt-4">
            <button 
              onClick={onContactClick} // 触发弹窗开关
              className="bg-brand-dark text-white px-10 py-4 rounded-[16px] font-display font-bold text-[13px] uppercase tracking-widest hover:bg-brand-red transition-all shadow-md hover:-translate-y-0.5"
            >
              Contact Me
            </button>
            <button className="border-[2.5px] border-brand-dark text-brand-dark px-10 py-4 rounded-[16px] font-display font-bold text-[13px] uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all hover:-translate-y-0.5">
              VIEW RESUME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeContent;