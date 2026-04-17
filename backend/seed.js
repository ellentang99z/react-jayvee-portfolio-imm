const mongoose = require("mongoose");
require("dotenv").config();

// 1. 更新数据库模型，加上你需要的这些新字段
const projectSchema = new mongoose.Schema({
  title: String,
  category: String,
  year: String,
  number: String,
  role: String,
  scope: String,
  stack: [String],
  challenge: String,
  isPresentation: Boolean,
  liveSiteUrl: String,
  description: String,
  challengeImage: String,
  visualSystemImage: String,
  moduleTitle: String,
  moduleDesc: String,
  codeUrl: String,
  optimizationQuote: String,
  compatibility: [Boolean],
  visualSystem: {
    description: String,
    colors: [String],
  },
});
const Project = mongoose.model("Project", projectSchema);

// 2. 更新你的测试数据
const myProjects = [
  {
    title: "CIPHER",
    category: "APP DESIGN",
    year: "2026",
    number: "02",
    role: "Lead Interaction Designer / Researcher",
    scope: "Mobile & Wearable Ecosystem",
    stack: ["Figma"],
    description:
      "A cross-platform 'Modern Oracle' designed to transform daily anxiety into tranquility. Cipher leverages the synergy between mobile and smartwatch interfaces to deliver immediate emotional grounding through ritualistic micro-interactions and personalized 'Lucky Anchors'.",
    challenge:
      "Fortune-telling apps on the market often fall into the trap of ANXIETY-INDUCING PREDICTIONS. Therefore, the design challenge lies in bridging this ANXIETY GAP and transforming traditional fortune-telling into a beneficial emotional ritual. This requires researching and implementing a user experience framework that shifts the user's focus from fatalistic prophecies to LUCKY ANCHORS—providing psychological comfort and emotional resonance, rather than just abstract text and data.",
    isPresentation: true,
      liveSiteUrl: "https://html-cipher-presentation.vercel.app/",
    challengeImage:"/images/cipher-mobile-ui.png",
    visualSystemImage: "/images/cipher-design-system.png",
    moduleTitle: "Interactive State Tracking_",
    moduleDesc:
      "Engineered a seamless interaction architecture between mobile and watchOS, utilizing ZIM.js and motion sensors to synchronize digital rituals with tactile haptic feedback. The system implements state-driven animations and gesture-based triggers—such as the 'Shake-to-Cast' Fate Roll—to transform abstract astrological data into a tangible, sensory-driven experience.",
    codeUrl: "https://github.com/ellentang99z/html-cipher-presentation",
    optimizationQuote:
      "Bridging the 'Anxiety Gap': 72% of users seek emotional validation over factual foresight. We replaced fatalistic predictions with grounding rituals.",
    compatibility: [false, true, true],
  },
];

const myProjects03 = [
  {
    title: "Lash Customizer",
    category: "WEB DESIGN",
    year: "2026",
    number: "01",
    role: "Front-end Developer & UI Designer",
    scope: "1 Week (Sheridan IMM Project)",
    stack: ["Vue.js", "Pinia", "Tailwind CSS", "SVG Animation"],
    description:
      "An immersive e-commerce configuration tool designed for L'Artiste, bridging the gap between digital customization and physical luxury. This project focuses on a seamless, high-fidelity visual experience for personalized beauty products.",
    challenge:
      "Developing a highly responsive 2D lash configurator that manages multiple selection states (Silhouette, Dimension, Volume) while maintaining a high-end editorial aesthetic.",
    isPresentation: false,
    liveSiteUrl: "https://vue-lash-configurator.vercel.app/",
    challengeImage: "/images/lash-configurator-ui.png",
    visualSystemImage: "/images/lash-design-system.png",
    moduleTitle: "Reactive State Management_",
    moduleDesc:
      "Engineered a modular Vue architecture using Pinia for centralized state control, ensuring that quantity adjustments and style selections sync instantly with the dynamic pricing engine.",
    codeUrl: "https://github.com/ellentang99z/vue-lash-configurator",
    optimizationQuote:
      "Achieved a premium user experience through high-contrast visual hierarchy and zero-latency UI updates.",
    visualSystem: {
      description:
        "A bold, high-contrast aesthetic utilizing vivid red accents on a shell-white canvas, paired with impactful heavy-weight typography for a luxury digital feel.",
      colors: ["#FF0000", "#000000", "#F7F5F0"],
    },
    compatibility: [true, true, true],
  },
];

// 3. 连接数据库并注入数据
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ 数据库连接成功，准备清理旧数据...");
    await Project.deleteMany({}); // 先清理

    console.log("🌱 开始播种新数据...");

    // 将两个数组合并后一起插入
    const allProjects = [...myProjects, ...myProjects03];
    await Project.insertMany(allProjects);

    console.log(
      `🎉 播种大功告成！成功存入 ${allProjects.length} 个作品到云端！`,
    );
    process.exit();
  })
  .catch((err) => {
    console.log("❌ 播种失败:", err);
    process.exit(1);
  });
