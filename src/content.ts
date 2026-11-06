export type Lang = "zh" | "en";
export type Accent = "amber" | "green" | "blue";

// Site switches (the design's editable props)
export const config = {
  jobSeeking: true,
  accent: "amber" as Accent,
  defaultLang: "zh" as Lang,
  email: "fluxwang@gmail.com",
  github: "https://github.com/Fluxwang",
  // Put the files in public/ — avatar.jpg and resume.pdf
  avatar: "/avatar.jpg",
  resume: "/resume.pdf",
};

export function getContent(lang: Lang, job: boolean) {
  const zh = lang === "zh";

  const t = zh
    ? {
        banner:
          "正在找实习：全栈 / AI 应用 / Python 后端，更想去小一点的创业团队。",
        contact: "欢迎联系",
        navProjects: "项目",
        navBlog: "博客",
        resume: "简历",
        email: "发邮件给我",
        photo: "照片",
        hey: "嘿，你好，我是",
        tagline: "软件工程 · 2027 届 · @ 深圳",
        intro:
          "我做全栈和 AI 应用，习惯一个人把产品从界面写到上线：前端 React / Next.js + TypeScript，后端 Python，用 Docker 部署在自己的服务器上。软件工程 2027 届，课程已修完，人在深圳，可立即开始全职实习。技术博客从 2020 年写到现在。",
        interests: "感兴趣的方向",
        projects: job ? "精选项目" : "做过的项目",
        elsewhere: "博客与作品集",
      }
    : {
        banner:
          "Looking for internships in full-stack, AI applications or Python backend — small startup teams preferred.",
        contact: "Get in touch",
        navProjects: "projects",
        navBlog: "blog",
        resume: "resume",
        email: "Email me",
        photo: "Photo",
        hey: "Hey there, I’m",
        tagline: "Software Engineering · Class of 2027 · @ Singapore",
        intro:
          "Software engineering student, class of 2027, coursework complete, now in Singapore. I build full-stack and AI applications: Next.js (App Router) + React + TypeScript on the front end, Python on the back end, deployed with Docker on my own Linux server. I’ve been writing a tech blog since 2020.",
        interests: "interests",
        projects: job ? "selected projects" : "things I’ve built",
        elsewhere: "blog & portfolio",
      };

  const interests = (
    zh
      ? [
          ["AI Agent 与 RAG 应用", "LangGraph · 混合检索 + Rerank"],
          ["全栈 Web 开发", "Next.js · FastAPI"],
          ["Self-hosting 与 Homelab", "Docker · Linux"],
          ["浏览器插件与效率工具", "Chrome Extensions"],
          ["个人知识管理", "Obsidian"],
        ]
      : [
          ["AI agents & RAG", "LangGraph · hybrid retrieval + rerank"],
          ["Full-stack web", "Next.js · FastAPI"],
          ["Self-hosting & homelab", "Docker · Linux"],
          ["Browser extensions & productivity", "Chrome Extensions"],
          ["Personal knowledge management", "Obsidian"],
        ]
  ).map(([title, note], i) => ({
    n: String(i + 1).padStart(2, "0"),
    title,
    note,
  }));

  const projects = [
    {
      name: "EchoSage",
      where: "GitHub ↗",
      href: "https://github.com/Fluxwang/EchoSage",
      desc: zh
        ? "围绕用户观看外语直播、理解 TikTok 达人内容的需求，开发并持续迭代 Chrome 扩展，整合音频捕获、实时双语字幕、翻译与视频分析工作区，已有用户使用。"
        : "A Chrome extension built and iterated around users watching foreign-language livestreams and understanding TikTok creators. Combines audio capture, live bilingual captions, translation, and a video analysis workspace, with active users.",
      tags: ["Chrome MV3", "Streaming ASR", "Gemini Nano"],
    },
    {
      name: "LedgerSage",
      where: "GitHub ↗",
      href: "https://github.com/Fluxwang/LedgerSage",
      desc: zh
        ? "从对话界面到 Python 后端的记账应用，将自然语言转为 Beancount 复式账本，支持多轮追问、写入前确认、统计报表和基于 Git 的撤销。"
        : "A bookkeeping app spanning a conversational UI and Python backend. Turns natural language into Beancount entries, with follow-up questions, confirmation before saving, reports, and Git-based undo.",
      tags: ["Beancount", "FastAPI", "LangGraph", "React"],
    },
    {
      name: "UniTrack",
      where: "GitHub ↗",
      href: "https://github.com/Fluxwang/UniTrack",
      desc: zh
        ? "跟踪优衣库商品价格与库存，整合用户登录、商品抓取和管理面板，通过历史快照与差异检测记录商品变化。"
        : "A UNIQLO price and stock tracker with user accounts, product fetching, and a management dashboard. Records product changes through historical snapshots and diff detection.",
      tags: ["Next.js", "TypeScript", "Prisma"],
    },
    {
      name: "R2Drop",
      where: "GitHub ↗",
      href: "https://github.com/Fluxwang/R2Drop",
      desc: zh
        ? "基于 Cloudflare R2 的私有文件管理应用，整合登录鉴权、预签名直传、上传进度和批量操作，并在服务端校验用户文件访问权限。"
        : "A private file management app on Cloudflare R2, combining authentication, presigned direct uploads, upload progress, and batch operations with server-side checks on access to each user's files.",
      tags: ["Next.js", "PostgreSQL", "Cloudflare R2"],
    },
  ];

  const links = [
    {
      host: "wangzhr.top",
      href: "https://wangzhr.top",
      label: zh ? "技术博客" : "Tech blog",
      note: zh
        ? "自 2020 年开始写，记录踩坑和做东西的过程。"
        : "Writing since 2020 — notes from building things.",
    },
    {
      host: "bugworld.dev",
      href: "https://bugworld.dev",
      label: zh ? "作品集" : "Portfolio",
      note: zh
        ? "更完整的项目记录与截图。"
        : "Fuller write-ups and screenshots of projects.",
    },
  ];

  return {
    t,
    interests,
    projects,
    links,
    projectCount: projects.length + (zh ? " 个项目" : " items"),
  };
}
