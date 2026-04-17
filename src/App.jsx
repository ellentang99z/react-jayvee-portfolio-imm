import React, { useState, useEffect, useRef } from "react";
import SectionLabel from "./components/ui/SectionLabel";
import ActionLink from "./components/ui/ActionLink";
import ProjectCard from "./components/cards/ProjectCard";
import CompatibilityScanner from "./components/sections/CompatibilityScanner";
import VisualSystemShowcase from "./components/sections/VisualSystemShowcase";
import ContactForm from "./components/sections/ContactForm";
import AboutMeContent from "./components/sections/AboutMeContent";

function App() {
  const [activeCategory, setActiveCategory] = useState("about");
  const [activeSubPage, setActiveSubPage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const navItems = [
    {
      id: "about",
      label: "01 About Me",
      title: "Hello",
      defaultExpandedColor: "bg-brand-red text-brand-shell",
    },
    {
      id: "project",
      label: "02 Project",
      title: "Work",
      defaultExpandedColor: "bg-white text-brand-dark",
      subItems: [
        { id: "web-design", label: "Web Design" },
        { id: "app-design", label: "App Design" },
      ],
    },
    {
      id: "rive",
      label: "03 Rive Animation",
      title: "Animation",
      defaultExpandedColor: "bg-white text-brand-dark",
    },
    {
      id: "process",
      label: "04 In Process",
      title: "Process",
      defaultExpandedColor: "bg-white text-brand-dark",
    },
  ];

  const handleNavClick = (categoryId, subPageId = null) => {
    setActiveCategory(categoryId);
    setActiveSubPage(subPageId);
    setSelectedProject(null);
    setIsMenuOpen(false);
  };

  return (
    <div className="h-screen w-full flex flex-col md:flex-row tracking-tight bg-brand-shell overflow-hidden">
      {/* Mobile top status bar */}
      <div className="md:hidden flex items-center justify-between p-6 bg-[#F2EDE7] border-b border-brand-dark/10 z-30 shrink-0">
        <div className="font-display text-2xl font-black text-brand-red uppercase">
          LOGO
        </div>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="p-2 bg-brand-dark text-white rounded-lg"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Left navigation bar / Mobile app drawer */}
      <div
        className={`fixed md:relative top-0 left-0 h-full w-[300px] md:w-[340px] flex flex-col gap-4 shrink-0 p-8 border-r-2 border-brand-dark/10 bg-[#F2EDE7] shadow-2xl md:shadow-[10px_0_40px_-20px_rgba(0,0,0,0.1)] z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="md:hidden flex justify-end mb-2">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-brand-dark opacity-40"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex justify-between items-center mb-2 px-1 text-brand-dark">
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] opacity-40">
            Main Menu
          </span>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-brand-red rounded-full"></div>
            <div className="w-1 h-1 bg-brand-dark/20 rounded-full"></div>
          </div>
        </div>

        <div className="w-full h-24 shrink-0 bg-brand-red rounded-xl mb-4 flex flex-col items-center justify-center text-brand-shell shadow-xl text-center px-4">
          <span className="font-display text-4xl font-black tracking-tight leading-none uppercase">
            PORTFOLIO
          </span>
          <span className="font-mono text-[8px] tracking-[0.4em] opacity-70 uppercase mt-1">
            Interactive // 2026
          </span>
        </div>

        <div className="flex flex-col gap-3 flex-1 overflow-y-auto pr-1 pb-4 no-scrollbar">
          {navItems.map((item) => {
            const isActive = activeCategory === item.id;
            const labelParts = item.label.split(" ");

            if (isActive) {
              if (item.id === "about") {
                return (
                  <div
                    key={item.id}
                    className="w-full shrink-0 bg-brand-red text-brand-shell rounded-2xl p-6 min-h-[340px] flex flex-col shadow-2xl relative overflow-hidden bento-card"
                  >
                    <div className="flex items-center gap-2 text-[20px] font-black mb-8 uppercase font-display tracking-tight">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" />
                      </svg>
                      About Me
                    </div>
                    <div className="relative w-28 h-28 mx-auto mb-6 shrink-0">
                      <div className="absolute inset-[-10px] rounded-full border-[2px] border-brand-shell opacity-30"></div>
                      <img
                        src="/images/portrait02.jpg"
                        className="absolute inset-0 w-full h-full object-cover object-top rounded-full grayscale mix-blend-screen opacity-95"
                        alt="Profile"
                      />
                    </div>
                    <div className="mt-auto z-10">
                      <span className="font-serif italic text-2xl text-brand-dark leading-none opacity-80">
                        Hello, I'm
                      </span>
                      <br />
                      <div className="font-display text-3xl font-black uppercase tracking-tight leading-none mt-2">
                        Jayvee Tang
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={item.id}
                  className={`w-full shrink-0 ${item.defaultExpandedColor} border-2 border-brand-red rounded-2xl p-6 min-h-[220px] flex flex-col shadow-xl`}
                >
                  <div className="flex items-center gap-2 text-[20px] font-display font-black mb-4 text-brand-red uppercase">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" />
                    </svg>
                    {labelParts.slice(1).join(" ")}
                  </div>
                  <div className="flex flex-col gap-2">
                    {item.subItems?.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleNavClick(item.id, sub.id)}
                        className={`text-left px-5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest transition-all ${activeSubPage === sub.id ? "bg-brand-red text-brand-shell shadow-md" : "hover:bg-brand-dark/5 text-brand-dark"}`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.subItems?.[0]?.id)}
                className="w-full shrink-0 group flex items-center gap-4 py-4 px-8 text-left transition-all hover:bg-brand-red hover:text-brand-shell hover:shadow-lg rounded-2xl font-bold uppercase tracking-[0.2em] text-[11px] border border-brand-dark/5 bg-white/40 text-brand-dark"
              >
                <span className="font-serif italic text-lg opacity-30 group-hover:text-brand-shell group-hover:opacity-100 transition-all">
                  {labelParts[0]}
                </span>
                <span>{labelParts.slice(1).join(" ")}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 右侧主内容区 */}
      <div className="flex-1 overflow-y-auto relative flex flex-col no-scrollbar bg-brand-shell">
        {activeCategory === "about" && (
          <div className="p-8 md:p-14 lg:p-16">
            {/* 传入控制弹窗开启的函数 */}
            <AboutMeContent onContactClick={() => setIsContactOpen(true)} />
          </div>
        )}
        {activeCategory === "project" &&
          (selectedProject ? (
            <ProjectDetail
              project={selectedProject}
              onBack={() => setSelectedProject(null)}
            />
          ) : (
            <div className="p-8 md:p-14 lg:p-16">
              <ProjectContent
                subPage={activeSubPage}
                onSelectProject={setSelectedProject}
              />
            </div>
          ))}
        {activeCategory === "rive" && (
          <div className="p-8 md:p-14 lg:p-16">
            <RiveContent />
          </div>
        )}
      </div>
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-fade-in">
          <div
            className="absolute inset-0 bg-brand-dark/60 backdrop-blur-md"
            onClick={() => setIsContactOpen(false)}
          />
          <div className="relative bg-brand-shell w-full max-w-2xl rounded-[32px] p-10 md:p-16 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] border border-brand-dark/5 overflow-y-auto max-h-[90vh] no-scrollbar">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-8 right-8 text-brand-dark opacity-30 hover:opacity-100 transition-all"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="mb-12 text-brand-dark">
              <h2 className="text-5xl font-display font-black uppercase tracking-tight mb-4">
                LET'S <span className="editorial-outline">connect.</span>
              </h2>
              <p className="body-text">
                Currently open for interactive design roles and freelance
                collaborations.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectContent({ subPage, onSelectProject }) {
  const [dbProjects, setDbProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5001/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setDbProjects(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to retrieve database:", err);
        setIsLoading(false);
      });
  }, []);

  const expertiseDesc =
    subPage === "web-design"
      ? "Specializing in crafting high-conversion marketing sites and immersive digital experiences that prioritize visual narrative and performance."
      : "Focused on human-centric mobile interface systems, ensuring seamless user journeys through intuitive patterns and delightful touch interactions.";

  const categoryToMatch =
    subPage === "web-design" ? "WEB DESIGN" : "APP DESIGN";
  const displayProjects = dbProjects.filter((project) => {
    return project.category?.toUpperCase() === categoryToMatch;
  });

  return (
    <div className="h-full flex flex-col pt-4 animate-fade-in w-full max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-baseline justify-between gap-10 mb-12 border-b border-brand-dark/10 pb-8 text-brand-dark">
        <h2 className="text-6xl md:text-[76px] font-display font-black tracking-tight uppercase leading-[0.9]">
          SELECTED
          <br />
          <span className="editorial-outline">works.</span>
        </h2>
        <div className="max-w-md text-right lg:text-left">
          {/* 使用 SectionLabel 组件 */}
          <SectionLabel
            text="Focus_Expertise // 2026"
            className="mb-3 underline underline-offset-4 decoration-brand-red/30 block"
          />

          
          <p className="body-text">{expertiseDesc}</p>
        </div>
      </div>

      {isLoading ? (
        <div className="flex-1 flex items-center justify-center font-mono text-brand-red animate-pulse">
          [ FETCHING_DATA_FROM_CLOUD... ]
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
          {/* Directly call ProjectCard */}
          {displayProjects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
              onClick={onSelectProject}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectDetail({ project, onBack }) {
  const detailContainerRef = useRef(null);

  useEffect(() => {
    if (detailContainerRef.current) {
      detailContainerRef.current.scrollTo(0, 0);
    }
  }, [project]);

  return (
    <div
      ref={detailContainerRef}
      className="h-full overflow-y-auto no-scrollbar animate-fade-in text-brand-dark"
    >
      <div className="p-10 md:p-14 lg:p-20 max-w-6xl mx-auto w-full flex flex-col gap-24 pb-40">
        {/* 01. Top navigation and back button */}
        <div className="shrink-0 flex justify-between items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-3 border-[2.5px] border-brand-dark px-8 py-3.5 rounded-[16px] font-display font-bold text-[12px] uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all shadow-sm"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Gallery
          </button>
          <SectionLabel text="Project_Case_Study_2026" className="opacity-30" />
        </div>

        {/* 02. Project Hero Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 border-b border-brand-dark/10 pb-12">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-[2px] bg-brand-red"></span>
              <SectionLabel text={`Archive_Record // ${project.number}`} />
            </div>
            <h1 className="text-6xl md:text-[90px] lg:text-[110px] font-display font-black tracking-tighter leading-[0.8] uppercase">
              {project.title ? project.title.split(" ")[0] : "PROJECT"}
              <br />
              <span className="editorial-outline">
                {project.title
                  ? project.title.split(" ").slice(1).join(" ")
                  : "TITLE"}
              </span>
            </h1>
          </div>
          <div className="text-right">
            <p className="font-serif italic text-4xl mb-2 text-brand-red">
              © {project.year}
            </p>
            <SectionLabel text={project.category} className="opacity-40" />
          </div>
        </div>

        {/* Intro Module container*/}
        <div className="pt-2">
          <div className="w-full font-sans text-lg md:text-xl leading-relaxed text-gray-800 text-justify">
            <p>{project.description}</p>
          </div>
        </div>

        {/* 03. Core Metadata Grid: Dynamically Read Project Data */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/40 p-10 rounded-3xl border border-brand-dark/5 backdrop-blur-md shadow-inner">
          {[
            { label: "My Role", value: project.role || "Lead Designer" },
            {
              label: "Project Scope",
              value: project.scope || "2026 Production",
            },
            {
              label: "Stack",
              value: project.stack?.join(", ") || "Figma, React",
            },
          ].map((meta, index) => (
            <div key={index}>
              <SectionLabel text={meta.label} className="opacity-30 mb-4" />
              <p className="font-display font-bold text-sm uppercase leading-relaxed">
                {meta.value}
              </p>
            </div>
          ))}

          <div className="flex items-end">
            {project.liveSiteUrl ? (
              <a
                href={project.liveSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-dark text-white py-5 rounded-2xl font-display font-bold text-[10px] uppercase tracking-widest hover:bg-brand-red transition-all shadow-xl hover:-translate-y-1 text-center block"
              >
                {/* Display different text based on the isPresentation field. */}
                {project.isPresentation ? "View Presentation" : "Live Site"}
              </a>
            ) : (
            
              <div className="w-full bg-gray-300 text-gray-500 py-5 rounded-2xl font-display font-bold text-[10px] uppercase tracking-widest text-center">
                Coming Soon
              </div>
            )}
          </div>
        </div>

        {/* 04. Challenge Section */}
        <section className="flex flex-col lg:flex-row gap-20">
          <div className="w-full lg:w-1/3 shrink-0">
            <h3 className="font-display font-black text-4xl uppercase tracking-tighter mb-8 flex items-baseline gap-4">
              <span className="text-brand-red font-serif italic text-2xl">
                01/
              </span>
              CHALLENGE_
            </h3>
            <p className="body-text">
              {project.challenge ||
                "Crafting an intuitive emotional guidance and fortune-telling interface that feels empathetic rather than clinical. The difficulty lies in creating user flows that build trust during vulnerable digital interactions."}
            </p>
          </div>
          <div className="flex-1 bg-white rounded-3xl aspect-[16/10] border border-brand-dark/5 shadow-2xl flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-brand-red/5 mix-blend-multiply opacity-20 transition-opacity group-hover:opacity-0 z-10"></div>
            {project.challengeImage ? (
              <img
                src={project.challengeImage}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Challenge visualization"
              />
            ) : (
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f4bb.svg"
                className="w-32 opacity-10 group-hover:scale-110 transition-transform duration-700 relative z-0"
                alt="laptop"
              />
            )}
          </div>
        </section>

        {/* 05. Visual System Showcase */}
        <VisualSystemShowcase image={project.visualSystemImage} />

        {/* 06. Core Features Block */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-2 bg-white rounded-3xl border border-brand-dark/5 shadow-xl p-12 flex flex-col relative group overflow-hidden">
            <div className="flex justify-between items-start relative z-10 mb-12">
              <SectionLabel text={project.moduleTag || "CORE_ARCHITECTURE"} />
            </div>

            <div className="flex flex-col gap-6 relative z-10 flex-1">
              <h4 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight leading-[0.9]">
                {project.moduleTitle ? (
                  project.moduleTitle.split(" ").map((word, i) => (
                    <React.Fragment key={i}>
                      {word}
                      <br />
                    </React.Fragment>
                  ))
                ) : (
                  <>
                    Interactive
                    <br />
                    State Tracking_
                  </>
                )}
              </h4>
              <p className="body-text mb-8">
                {project.moduleDesc ||
                  "Implemented complex state machines via Rive to allow real-time feedback during data processing phases."}
              </p>

              <div className="mt-auto pt-4">
                <ActionLink
                  href={project.codeUrl || "#"}
                  icon={
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  }
                >
                  View Source Code
                </ActionLink>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 h-full">
            <div className="flex-1 bg-brand-red rounded-3xl p-10 flex flex-col justify-center text-brand-shell shadow-xl min-h-[220px]">
              <h4 className="text-2xl font-display font-black uppercase mb-4 tracking-tight">
                Optimization_
              </h4>
              <p className="font-serif italic text-lg leading-relaxed opacity-90">
                "
                {project.optimizationQuote ||
                  "Achieving 40% faster render speeds with optimized GLSL shaders."}
                "
              </p>
            </div>

            {/* Minimalist scanning animation components */}
            <CompatibilityScanner compatibility={project.compatibility} />
          </div>
        </section>

        {/* 08. Ending and Guide to the Next Project */}
        <footer className="pt-24 border-t border-brand-dark/10 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <SectionLabel text="End of Record // 2026" className="opacity-30" />
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-brand-dark rounded-full"></div>
              <div className="w-2 h-2 bg-brand-dark rounded-full opacity-20"></div>
              <div className="w-2 h-2 bg-brand-dark rounded-full opacity-20"></div>
            </div>
          </div>
          <button
            onClick={onBack}
            className="group flex flex-col items-center md:items-end gap-2"
          >
            <span className="font-mono text-[9px] font-bold opacity-30 uppercase tracking-widest group-hover:text-brand-red group-hover:opacity-100 transition-all">
              Previous Navigation
            </span>
            <span className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter group-hover:underline underline-offset-[12px] group-hover:text-brand-red transition-all">
              Back to Works →
            </span>
          </button>
        </footer>
      </div>
    </div>
  );
}

function RiveContent() {
  return (
    <div className="h-full flex flex-col pt-4 animate-fade-in w-full max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-baseline justify-between gap-10 mb-12 border-b border-brand-dark/10 pb-8 text-brand-dark">
        <h2 className="text-6xl md:text-[76px] font-display font-black tracking-tight uppercase leading-[0.9]">
          MOTION
          <br />
          <span className="editorial-outline">gallery.</span>
        </h2>
        <div className="max-w-md text-right lg:text-left">
          <SectionLabel
            text="Motion_Capability // RIVE"
            className="mb-3 underline underline-offset-4 decoration-brand-red/30 block"
          />
          <p className="body-text">
            Developing performant interactive state machines and organic
            character animations for cross-platform implementation.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 overflow-y-auto pr-4 pb-12 no-scrollbar">
        <div className="md:col-span-2 md:row-span-2 bg-white border border-brand-dark/5 rounded-2xl p-10 flex flex-col justify-between group cursor-pointer hover:bg-brand-red transition-all duration-500 shadow-xl hover:-translate-y-2 text-brand-dark">
          <div className="flex justify-between items-start">
            <span className="font-serif italic font-bold text-5xl group-hover:text-brand-shell transition-colors">
              01
            </span>
            <div className="bg-brand-dark text-white px-5 py-2 rounded-full font-mono text-[9px] font-bold uppercase tracking-[0.3em] group-hover:bg-brand-shell group-hover:text-brand-red transition-colors">
              FEATURED_MOTION
            </div>
          </div>
          <div>
            <h3 className="text-4xl md:text-6xl font-display font-black tracking-tight uppercase group-hover:text-brand-shell transition-colors leading-none">
              Hero Animation
            </h3>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] opacity-40 group-hover:text-brand-shell group-hover:opacity-100 mt-6 transition-all">
              Complex State Machine / 2026
            </p>
          </div>
        </div>

        <div className="bg-brand-red text-brand-shell rounded-2xl p-8 flex flex-col justify-between group cursor-pointer hover:bg-brand-dark transition-all duration-500 shadow-lg hover:-translate-y-2">
          <span className="font-serif italic font-bold text-4xl">02</span>
          <h3 className="text-2xl font-display font-black tracking-tight uppercase leading-tight text-white">
            Micro
            <br />
            Interaction
          </h3>
        </div>

        <div className="bg-white border border-brand-dark/5 rounded-2xl p-8 flex flex-col justify-between group cursor-pointer hover:bg-brand-red transition-all duration-500 shadow-lg hover:-translate-y-2 text-brand-dark">
          <span className="font-serif italic font-bold text-4xl group-hover:text-brand-shell transition-colors">
            03
          </span>
          <h3 className="text-2xl font-display font-black tracking-tight uppercase leading-tight group-hover:text-brand-shell transition-all duration-300">
            Asset Set
          </h3>
        </div>

        <div className="md:col-span-3 bg-[#EAC459] border border-brand-dark/5 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center group cursor-pointer hover:bg-brand-red transition-all duration-500 shadow-lg hover:-translate-y-2 text-brand-dark">
          <div className="flex items-center gap-8">
            <span className="font-serif italic font-bold text-4xl group-hover:text-brand-shell transition-colors">
              04
            </span>
            <h3 className="text-3xl font-display font-black tracking-tight uppercase group-hover:text-brand-shell transition-colors">
              Character Control Pro
            </h3>
          </div>
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
      </div>
    </div>
  );
}

export default App;
