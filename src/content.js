export const DEMO_VIDEO =
  '//player.bilibili.com/player.html?isOutside=true&aid=115342235932775&bvid=BV1xZxzzTE85&cid=32934002860&p=1';

export const profile = {
  name: 'Rang Xiao',
  nameZh: '肖壤',
  initials: 'RX',
  title: 'Always a gamer',
  titleZh: '永远做一个玩家',
  affiliation: 'Shanghai Jiao Tong University · School of Computer Science',
  affiliationZh: '上海交通大学 · 计算机学院',
  thesis: 'Welcome. I am a game developer who enjoys digging into technology and building the games I love.',
  thesisZh: '欢迎来到我的主页。我是一名游戏开发者，喜欢钻研技术，也在做自己热爱的游戏。',
  about:
    'CS undergraduate at SJTU (IEEE Pilot Class). I build games with Unity and C#/C++, and have worked on fairly complex core mechanics, editor tools for designers, and a few larger systems, leading small teams along the way. Graphics is a lasting interest, and I keep learning it to push the visuals a little further. Currently interning on the client tools team of Where Winds Meet at NetEase Games, while running a small student game studio with friends.',
  aboutZh:
    '上海交通大学计算机科学与技术（IEEE 试点班）本科在读。平时用 Unity 与 C#/C++ 做游戏，写过一些较复杂的核心玩法与策划侧工具，也参与过较大系统的开发，带过几人的小团队。对图形学一直有兴趣，希望能把画面做得更好一些。目前在网易互娱《燕云十六声》客户端工具组实习，同时和朋友一起经营一个学生游戏工作室。',
  interests: ['Unity', 'C++', 'C#'],
  interestsZh: ['Unity', 'C++', 'C#'],
  emails: ['grinner0215@gmail.com', 'grinner1729@sjtu.edu.cn'],
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
      'Gameplay and client systems built mainly with Unity and C#, plus editor tools that make life easier for designers.',
    bodyZh:
      '以 Unity 与 C# 为主的玩法与客户端系统开发，也会做一些方便策划的编辑器工具。'
  },
  {
    title: 'Computer graphics',
    titleZh: '图形学',
    body:
      'Learning rendering from the ground up: MVP transforms, software rasterization, Blinn-Phong shading, and ray tracing, while picking up Unity render pipeline knowledge.',
    bodyZh:
      '从底层理解渲染：MVP 变换、软光栅、Blinn-Phong 光照与光线追踪，同时在补 Unity 渲染管线的知识。'
  },
  {
    title: 'Computer networking',
    titleZh: '计算机网络',
    body:
      'The networking side of multiplayer games: architecture and state synchronization, something I am still working my way through.',
    bodyZh:
      '联机游戏所需的网络架构与状态同步，还在慢慢摸索。'
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
    name: 'Cast Syndrome',
    nameZh: '卡斯特症候群',
    role: 'Your role',
    roleZh: '你的角色',
    desc: 'Write a one-line pitch of the game.',
    descZh: '用一句话介绍这款游戏。',
    detail: 'Write the full description: gameplay, what you built, and highlights.',
    detailZh: '填写完整介绍：玩法、你负责的部分，以及亮点。',
    video: '/media/castsyndrome.mp4',
    tags: ['Tag']
  },
  {
    name: 'Unveiled Domain',
    nameZh: '不可知域',
    role: 'Your role',
    roleZh: '你的角色',
    desc: 'Write a one-line pitch of the game.',
    descZh: '用一句话介绍这款游戏。',
    detail: 'Write the full description: gameplay, what you built, and highlights.',
    detailZh: '填写完整介绍：玩法、你负责的部分，以及亮点。',
    video: '/media/unveiledomain.mp4',
    tags: ['Tag']
  },
  {
    name: 'Dusk Rush',
    nameZh: '暴走黄昏街',
    role: 'Your role',
    roleZh: '你的角色',
    desc: 'Write a one-line pitch of the game.',
    descZh: '用一句话介绍这款游戏。',
    detail: 'Write the full description: gameplay, what you built, and highlights.',
    detailZh: '填写完整介绍：玩法、你负责的部分，以及亮点。',
    video: '/media/duskrush.mp4',
    tags: ['Tag']
  },
  {
    name: 'Tale of a Bubble Boy',
    nameZh: '金鱼之梦',
    role: 'Your role',
    roleZh: '你的角色',
    desc: 'Write a one-line pitch of the game.',
    descZh: '用一句话介绍这款游戏。',
    detail: 'Write the full description: gameplay, what you built, and highlights.',
    detailZh: '填写完整介绍：玩法、你负责的部分，以及亮点。',
    video:
      '//player.bilibili.com/player.html?isOutside=true&aid=115559836425554&bvid=BV1AMCdBqEao&cid=34051131770&p=1',
    bilibili: 'https://www.bilibili.com/video/BV1AMCdBqEao',
    tags: ['Tag']
  },
  {
    name: 'Kitchen Chaos',
    nameZh: '大战厨房',
    role: 'Your role',
    roleZh: '你的角色',
    desc: 'Write a one-line pitch of the game.',
    descZh: '用一句话介绍这款游戏。',
    detail: 'Write the full description: gameplay, what you built, and highlights.',
    detailZh: '填写完整介绍：玩法、你负责的部分，以及亮点。',
    video: DEMO_VIDEO,
    bilibili: 'https://www.bilibili.com/video/BV1xZxzzTE85',
    tags: ['Tag']
  }
];

export const awards = [
  {
    title: 'NetEase Games Campus MINI-GAME Challenge',
    titleZh: '网易游戏高校 MINI-GAME 挑战赛',
    date: 'Jul 2026',
    dateZh: '2026.07',
    result: 'Finalist',
    resultZh: '入围决赛',
    blurb:
      'Over 500 teams from universities across China entered, and 32 made the finals. The final round was a 48-hour game jam, where our original entry placed third in the on-site vote.',
    blurbZh:
      '500 余支来自中国高校的队伍参与，32 支进入决赛。决赛采用 48h Game Jam 形式，我们的原创作品获得线下投票第三。',
    link: 'https://mp.weixin.qq.com/s/pkc3OEa6kh4l0k7KmvEmSg',
    linkLabel: 'Coverage',
    linkLabelZh: '相关报道',
    image: '/img/awards/neteaseminigame.JPG'
  },
  {
    title: 'Tencent LightSpeed Studios Game Competition (college track)',
    titleZh: '光子游戏大赛（高校赛道）',
    date: 'Jul 2026',
    dateZh: '2026.07',
    result: 'Gold award',
    resultZh: '金奖',
    blurb:
      'An open game-making competition hosted by Tencent Photon Studios. The 2026 edition ran for seven months and drew over 5,200 entries from studios, universities, and independent creators, with a prize pool of more than CNY 2 million. Taking gold in the college track was a real step forward for our team.',
    blurbZh:
      '光子面向全社会举办的游戏创作大赛。2026 届历时七个月，共有超过 5200 件作品参赛，总奖金池逾 200 万元。能在高校赛道拿到金奖，对我们团队来说是一次不小的成长。',
    link: 'https://mp.weixin.qq.com/s/17hjCvhiTDES9XSQpdGzvw',
    linkLabel: 'Coverage',
    linkLabelZh: '相关报道',
    image: '/img/awards/tencentlightspeed.jpg'
  },
  {
    title: 'SJTU Student Innovation × NetEase Thunder Fire Game Design Competition',
    titleZh: '交大学创 × 网易雷火高校游戏设计大赛',
    date: 'Dec 2025',
    dateZh: '2025.12',
    result: 'First prize & Best Creativity award',
    resultZh: '一等奖及最佳创意奖',
    blurb:
      'Eleven teams presented and playtested their own games at the SJTU Student Innovation Center. It was the first time our team worked together, and a lovely start to it.',
    blurbZh:
      '11 支交大队伍在学生创新中心带着各自的自研游戏参与。这也是我们团队第一次合作，算是一个很好的开始。',
    link: 'https://mp.weixin.qq.com/s/7Dsa782x0YqtVRijj-OC4Q',
    linkLabel: 'Coverage',
    linkLabelZh: '相关报道',
    image: '/img/awards/neteasethunderfire.jpg'
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
      'GPA 3.92, top 20% of the major. Main courses: mathematical analysis, C++ programming, Python programming, data structures and algorithms, operating systems.',
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
