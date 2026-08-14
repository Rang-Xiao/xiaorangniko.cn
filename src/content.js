export const DEMO_VIDEO =
  '//player.bilibili.com/player.html?isOutside=true&aid=115342235932775&bvid=BV1xZxzzTE85&cid=32934002860&p=1';

export const profile = {
  name: 'Rang Xiao',
  nameZh: '肖壤',
  initials: 'RX',
  title: 'Game Development & Computer Graphics',
  titleZh: '游戏开发 & 图形学',
  affiliation: 'Shanghai Jiao Tong University · School of Computer Science',
  affiliationZh: '上海交通大学 · 计算机学院',
  thesis: 'A game developer who loves digging into technology, building the games I care about.',
  thesisZh: '一个喜欢钻研技术的游戏开发者，在做自己热爱的游戏',
  about:
    'CS undergraduate at SJTU (IEEE Pilot Class). I work with Unity and C#/C++ across gameplay, save systems, and localization, and I keep sharpening my graphics fundamentals through rendering coursework. Currently a game client development intern at NetEase Games, on the client tools team of Where Winds Meet.',
  aboutZh:
    '上海交通大学计算机科学与技术（IEEE 试点班）本科在读。使用 Unity 与 C#/C++ 开发游戏，做过核心玩法、存档与本地化等系统，并通过图形学课程持续打磨渲染基础。目前在网易互娱《燕云十六声》客户端工具组做游戏客户端开发实习，同时运营一个自己的学生游戏工作室',
  interests: ['Unity', 'C++', 'C#'],
  interestsZh: ['Unity', 'C++', 'C#'],
  emails: ['grinner0215@gmail.com', 'grinner0215@163.com'],
  links: [
    { label: 'GitHub', labelZh: 'GitHub', url: 'https://github.com/Rang-Xiao' },
    { label: 'Blog', labelZh: '技术博客', url: 'https://xiaorangblog.cn' },
    { label: 'Resume', labelZh: '简历', url: '/attaches/XiaoRangResume.pdf' }
  ]
};

export const heroMetrics = [
  { value: '2w+', label: 'game downloads', labelZh: '游戏下载量' },
  { value: '30w+', label: 'studio funding (CNY)', labelZh: '工作室资金' }
];

export const highlight = {
  name: 'Highlight project name',
  nameZh: '代表项目名称',
  url: '#',
  docs: '#',
  website: '#',
  report: '#',
  demoVideo: DEMO_VIDEO,
  image: '/img/projects/infengine.png',
  headline: 'Write one line that explains why this project matters.',
  headlineZh: '用一句话说明这个项目的意义。',
  summary: 'Write a paragraph describing what this project is and what it does.',
  summaryZh: '用一段话描述这个项目是什么、能做什么。',
  proposition: 'Write a paragraph about the technical approach or the problem it solves.',
  propositionZh: '用一段话描述技术方案或它解决的问题。',
  layers: [
    {
      title: 'Module title',
      titleZh: '模块标题',
      body: 'Describe this module: what it contains and why it exists.',
      bodyZh: '描述该模块：包含什么、为什么需要它。'
    }
  ],
  capabilities: ['Capability item'],
  capabilitiesZh: ['能力条目']
};

export const researchDirections = [
  {
    title: 'Game development',
    titleZh: '游戏开发',
    body:
      'Unity gameplay and client systems in C#: portal-style core mechanics, save systems, and localization pipelines, shipped through jam and competition builds.',
    bodyZh:
      '以 Unity 与 C# 为主的玩法与客户端系统：类传送门核心机制、存档系统、本地化流程，并在比赛与实机版本中落地打磨。'
  },
  {
    title: 'Computer graphics',
    titleZh: '图形学',
    body:
      'Rendering fundamentals from the ground up: MVP transforms, software rasterization, the Blinn-Phong lighting model, and ray tracing, alongside Unity render pipeline knowledge.',
    bodyZh:
      '从底层理解渲染：MVP 变换、软光栅渲染、Blinn-Phong 光照模型与光线追踪，同时补充 Unity 渲染管线相关知识。'
  }
];

export const publications = [
  {
    title: 'Paper title goes here',
    authors: '<u>Author One</u>, Author Two, Author Three',
    venue: 'Venue, Year',
    venueZh: '发表刊物 / 会议, 年份',
    level: 'journal',
    levelLabel: 'Label',
    link: '#',
    image: '/img/papers/fema.png',
    intro: 'Write a short summary of the paper: the question, the approach, and the takeaway.',
    introZh: '用一小段话概括论文：问题、方法与结论。',
    featured: true
  }
];

export const projects = [
  {
    name: 'Project name',
    url: '#',
    status: 'Status',
    statusZh: '状态',
    image: '/img/projects/vultorch.png',
    desc: 'Write a one-line summary of the project.',
    descZh: '用一句话概括该项目。',
    detail: 'Write the full description: goals, tech stack, and what you built.',
    detailZh: '填写完整介绍：目标、技术栈，以及你完成的部分。',
    role: 'Your role in this project',
    roleZh: '你在该项目中的角色',
    tags: ['Tag'],
    featured: true
  }
];

export const games = [
  {
    name: 'Game name',
    nameZh: '游戏名称',
    role: 'Your role',
    roleZh: '你的角色',
    desc: 'Write a one-line pitch of the game.',
    descZh: '用一句话介绍这款游戏。',
    detail: 'Write the full description: gameplay, what you built, and highlights.',
    detailZh: '填写完整介绍：玩法、你负责的部分，以及亮点。',
    video: DEMO_VIDEO,
    bilibili: '#',
    awards: 'Award or recognition (optional)',
    awardsZh: '奖项或荣誉（可选）',
    tags: ['Tag']
  }
];

export const awards = [
  {
    title: 'Award or competition name',
    titleZh: '奖项或比赛名称',
    result: 'Result you achieved',
    resultZh: '获得的成绩',
    blurb: 'Write one or two sentences explaining the competition and your result.',
    blurbZh: '用一两句话说明比赛是什么，以及你取得的成绩。'
  }
];

export const education = [
  {
    place: 'Shanghai Jiao Tong University',
    placeZh: '上海交通大学',
    date: 'Sep 2024 — Present',
    dateZh: '2024.09 — 至今',
    role: 'B.Eng. in Computer Science and Technology (IEEE Pilot Class)',
    roleZh: '本科 · 计算机科学与技术（IEEE 试点班）',
    desc:
      'GPA 3.92, ranked top 20%. Main courses: mathematical analysis, C++ programming, data structures and algorithms, Python programming.',
    descZh:
      'GPA 3.92，专业排名前 20%。主修课程：数学分析、C++ 程序设计、Python 程序设计、数据结构与算法、操作系统。'
  }
];

export const workExperience = [
  {
    place: 'NetEase Games',
    placeZh: '网易互娱',
    date: 'Jun 2026 — Sep 2026',
    dateZh: '2026.06 — 2026.09',
    role: 'Game Client Development Intern · Where Winds Meet, Client Tools Team',
    roleZh: '游戏客户端开发实习 ·《燕云十六声》客户端工具组',
    desc:
      'Client-side development and tooling work for the Where Winds Meet client tools team.',
    descZh: '在《燕云十六声》客户端工具组参与游戏客户端开发与工具链相关工作。'
  }
];
