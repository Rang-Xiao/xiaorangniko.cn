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
  thesis: 'Welcome. I am a game developer building the games I love and enjoying the technology behind them.',
  thesisZh: '欢迎来到我的主页。我是一名游戏开发者，在做自己热爱的游戏，也喜欢钻研技术。',
  about:
    'CS undergraduate at SJTU (IEEE Pilot Class). I work with Unity and C#/C++ on games, developing core gameplay and designer-facing tools, and have led multi-person game development teams as lead programmer. I am currently interning with the Where Winds Meet client tools team at NetEase Games while running a student game studio.',
  aboutZh:
    '上海交通大学计算机科学与技术（IEEE 试点班）本科在读。善于用 Unity 与 C#/C++ 做游戏，负责核心玩法与策划侧工具的开发，曾作为主程序带过多人的游戏开发团队。目前在网易互娱《燕云十六声》客户端工具组实习，同时经营着一个学生游戏工作室。',
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
  { value: '20k+', label: 'game downloads', labelZh: '游戏下载量' },
  { value: '300k+', label: 'studio funding (CNY)', labelZh: '工作室资金' }
];

export const researchDirections = [
  {
    title: 'Game development',
    titleZh: '游戏开发',
    body:
      'Client systems built mainly with Unity and C#, plus editor tools that make life easier for designers.',
    bodyZh:
      '以 Unity 与 C# 为主的客户端系统开发，也会做一些方便策划的编辑器工具。'
  },
  {
    title: 'Computer graphics',
    titleZh: '图形学',
    body:
      'Learning rendering from the ground up: MVP transforms, software rasterization, Blinn-Phong shading, and ray tracing, while learning Unity’s Universal Render Pipeline (URP).',
    bodyZh:
      '从底层理解渲染：MVP 变换、软光栅、Blinn-Phong 光照与光线追踪，同时在学习URP。'
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
    title: '基于多层次优化的无人机烟幕投放策略研究',
    authors: '<u>Rang Xiao</u>',
    venue: 'Sep 2025',
    venueZh: '2025.09',
    level: 'journal',
    levelLabel: 'Mathematical modeling',
    levelLabelZh: '数学建模',
    link: '/attaches/BombPaper.pdf',
    image: '/img/papers/bomb.png',
    intro: 'Based on Problem A of the 2025 China Undergraduate Mathematical Contest in Modeling, this study models an in-game combat scene and optimizes UAV smoke-screen deployment with geometric visibility analysis and particle-swarm optimization.',
    introZh: '源自 2025 年全国大学生数学建模竞赛 A 题，将对抗情境建模为游戏场景；结合几何可见性判定与粒子群优化，求解无人机烟幕的最优投放策略。',
    featured: true
  }
];

export const projects = [
  {
    name: 'Blinn-Phong Shading Model',
    url: 'https://github.com/Rang-Xiao/GAMES101-Solution-Niko',
    status: 'GAMES101 Assignment',
    statusZh: 'GAMES101 作业',
    image: '/img/projects/blingphong.png',
    desc: 'A software-rasterizer shader implementing ambient, diffuse, and specular Blinn-Phong lighting.',
    descZh: '在软光栅器中实现环境光、漫反射与高光项的 Blinn-Phong 着色模型。',
    detail: 'Built while studying GAMES101. The assignment also implements normal and texture shaders, bilinear texture sampling, and bump/displacement mapping.',
    detailZh: '学习 GAMES101 课程完成的作业；还实现了法线与纹理着色器、双线性纹理采样，以及凹凸/位移贴图。',
    role: 'Individual coursework implementation',
    roleZh: '个人课程作业实现',
    tags: ['C++', 'Eigen', 'Software Rasterization', 'Blinn-Phong'],
    featured: true
  },
  {
    name: 'Path Tracing Renderer',
    url: 'https://github.com/Rang-Xiao/GAMES101-Solution-Niko',
    status: 'GAMES101 Assignment',
    statusZh: 'GAMES101 作业',
    image: '/img/projects/pathTracing.png',
    desc: 'A Monte Carlo path tracer for global illumination, rendered with progressive multi-sample accumulation.',
    descZh: '使用蒙特卡洛路径追踪与渐进多重采样累积实现全局光照渲染。',
    detail: 'Built while studying GAMES101. It extends the earlier ray tracer and BVH acceleration work with indirect illumination, Russian roulette termination, and area-light sampling.',
    detailZh: '学习 GAMES101 课程完成的作业；在此前的光线追踪与 BVH 加速基础上，加入间接光照、俄罗斯轮盘赌终止与区域光采样。',
    role: 'Individual coursework implementation',
    roleZh: '个人课程作业实现',
    tags: ['C++', 'Monte Carlo', 'Path Tracing', 'BVH'],
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
      'Over 500 teams from universities across China entered, and 32 made the finals. The 48-hour game jam tested our team’s creativity and execution under intense time pressure; our original entry, Unveiled Domain, placed third in the on-site vote.',
    blurbZh:
      '500 余支来自中国高校的队伍参与，32 支进入决赛。决赛采用 48h Game Jam 形式，考研了我们团队短时间高强度下的创造力和执行力。我们的原创作品《不可知域》获得线下投票第三的好成绩。',
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
      'An open game-making competition hosted by Tencent Photon Studios. It ran for seven months, drew over 5,200 entries, and offered a prize pool of more than CNY 2 million. Fighting through to win gold in the college track was a meaningful step forward for our team.',
    blurbZh:
      '光子面向全社会举办的游戏创作大赛，历时七个月，共有超过 5200 件作品参赛，总奖金池逾 200 万元。能一路披荆斩棘在高校赛道拿到金奖，对我们团队来说是一次不小的成长。',
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
      'Co-hosted by the SJTU Student Innovation Center and NetEase Thunder Fire, the competition brought together 20 SJTU teams. It was our team’s first collaboration and a lovely start to it.',
    blurbZh:
      '由上海交通大学学生创新中心联合网易雷火举办，共有20支交大队伍参与。这是我们团队第一次合作，算是一个很好的开始。',
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
      'GPA 3.92, top 20% of the major.',
    descZh:
      'GPA 3.92，专业排名前 20%。'
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
